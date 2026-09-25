// @vitest-environment node
/**
 * SSR smoke test (doc 08 §12): every exported component renders on the server
 * without touching window/document, as in Inertia/Nuxt SSR.
 */
import { describe, expect, it, vi } from "vitest";
import { createSSRApp, h, type Component } from "vue";
import { renderToString } from "vue/server-renderer";
import * as library from "../src/index.ts";

const isComponent = (value: unknown): value is Component =>
  typeof value === "object" &&
  value !== null &&
  ("setup" in value || "render" in value || "__name" in value);

const components: Array<[string, Component]> = Object.entries(
  library as Record<string, unknown>,
).flatMap(([name, value]) => (name.startsWith("Ms") && isComponent(value) ? [[name, value]] : []));

/** Minimal props for components whose required props would otherwise throw. */
const fixtures: Record<string, Record<string, unknown>> = {
  MsMenu: { items: [{ label: "One", value: 1 }], open: true },
  MsDropdownButton: { label: "Actions", items: [{ label: "One", value: 1 }] },
  MsToast: { toast: { id: "t", message: "Hello", tone: "info", duration: 0, dismissible: true } },
  MsTreeNode: { node: { key: "a", label: "A" } },
  MsAnimatedNumber: { value: 42 },
  MsScrollSpy: { items: [{ id: "intro", label: "Intro" }] },
  MsFormWizard: { steps: [{ id: "one", title: "One" }] },
};

describe("server-side rendering", () => {
  it("found the exported components", () => {
    expect(components.length).toBeGreaterThan(90);
  });

  it.each(components)("%s renders to string", async (name, component) => {
    expect(typeof window).toBe("undefined");
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const app = createSSRApp({
      render: () => h(component as Parameters<typeof h>[0], fixtures[name] ?? {}),
    });
    app.config.warnHandler = () => undefined;
    const html = await renderToString(app);
    warn.mockRestore();
    expect(typeof html).toBe("string");
  });
});
