/**
 * Server HTML must hydrate without mismatches (Inertia SSR): theme providers render
 * data-ms-color-mode="system" on both sides, and "today" is resolved only after mount.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { createSSRApp, h, type Component } from "vue";
import { renderToString } from "vue/server-renderer";
import { MsDatePicker, MsProvider, MsThemeScope, MsButton } from "../src/index.ts";

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
});
