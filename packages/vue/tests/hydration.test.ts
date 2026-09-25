/**
 * Server HTML must hydrate without mismatches (Inertia SSR): theme providers render
 * data-ms-color-mode="system" on both sides, and "today" is resolved only after mount.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { createSSRApp, h, type Component } from "vue";
import { renderToString } from "vue/server-renderer";
import {
  MsDatePicker,
  MsGlimpse,
  MsIconPicker,
  MsProvider,
  MsSidebarMenu,
  MsThemeScope,
  MsButton,
} from "../src/index.ts";

afterEach(() => {
  document.body.innerHTML = "";
});

async function hydrate(
  component: Component,
  props: Record<string, unknown> = {},
  beforeClient: () => void = () => undefined,
) {
  const render = () => h(component, props, () => h(MsButton, null, () => "ok"));
  const html = await renderToString(createSSRApp({ render }));
  beforeClient();
  const container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  const warnings: string[] = [];
  const spy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
  const app = createSSRApp({ render });
  app.config.warnHandler = (message) => warnings.push(message);
  app.mount(container);
  spy.mockRestore();
  return { html, container, warnings };
}

describe("hydration", () => {
  it.each([
    ["MsProvider", MsProvider],
    ["MsThemeScope", MsThemeScope],
  ] as const)(
    "%s in system mode renders data-ms-color-mode=system and hydrates cleanly",
    async (_, c) => {
      // The server has no matchMedia; the client OS prefers dark.
      const original = window.matchMedia;
      (window as { matchMedia?: unknown }).matchMedia = undefined;
      const { html, warnings } = await hydrate(c, { colorMode: "system" }, () => {
        window.matchMedia = ((query: string) => ({
          matches: query.includes("dark"),
          media: query,
          addEventListener: () => undefined,
          removeEventListener: () => undefined,
        })) as unknown as typeof window.matchMedia;
      });
      window.matchMedia = original;
      expect(html).toContain('data-ms-color-mode="system"');
      expect(warnings.filter((w) => /hydrat/i.test(w))).toEqual([]);
    },
  );

  it("MsDatePicker hydrates without mismatch", async () => {
    const { warnings } = await hydrate(MsDatePicker, { modelValue: "2024-03-01" });
    expect(warnings.filter((w) => /hydrat/i.test(w))).toEqual([]);
  });

  it("MsIconPicker with a custom SVG hydrates without mismatch (server has no DOMParser)", async () => {
    const render = () =>
      h(MsIconPicker, {
        icons: [{ id: "c", name: "Custom", category: "X", svg: '<path d="M1 1"/>' }],
        modelValue: "c",
      });
    const original = globalThis.DOMParser;
    (globalThis as { DOMParser?: unknown }).DOMParser = undefined;
    const html = await renderToString(createSSRApp({ render }));
    globalThis.DOMParser = original;
    const { warnings } = mountHydrated(html, render);
    expect(warnings.filter((w) => /hydrat|mismatch/i.test(w))).toEqual([]);
  });

  it("MsSidebarMenu with submenus hydrates without mismatch", async () => {
    const render = () =>
      h(MsSidebarMenu, {
        items: [
          {
            items: [
              {
                id: "settings",
                label: "Settings",
                open: true,
                children: [{ id: "profile", label: "Profile", href: "/profile" }],
              },
            ],
          },
        ],
      });
    const html = await renderToString(createSSRApp({ render }));
    const { warnings } = mountHydrated(html, render);
    expect(warnings.filter((w) => /hydrat|mismatch/i.test(w))).toEqual([]);
  });

  it("MsGlimpse inside a <p> hydrates without mismatch", async () => {
    const render = () =>
      h("p", null, [
        "See ",
        h(MsGlimpse, { href: "https://example.com", title: "Example", description: "Desc" }),
      ]);
    const html = await renderToString(createSSRApp({ render }));
    const { warnings } = mountHydrated(html, render);
    expect(warnings.filter((w) => /hydrat|mismatch/i.test(w))).toEqual([]);
  });
});

function mountHydrated(html: string, render: () => ReturnType<typeof h>) {
  const container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);
  const warnings: string[] = [];
  const spy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
  const errors = vi.spyOn(console, "error").mockImplementation(() => undefined);
  const app = createSSRApp({ render });
  app.config.warnHandler = (message) => warnings.push(message);
  app.mount(container);
  for (const call of errors.mock.calls) warnings.push(String(call[0]));
  spy.mockRestore();
  errors.mockRestore();
  return { container, warnings };
}
