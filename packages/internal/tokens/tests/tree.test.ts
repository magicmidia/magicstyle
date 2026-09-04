import { describe, expect, it } from "vitest";
import { flatten } from "../src/lib/dtcg.ts";
import { tokenTree } from "../src/sources.ts";

const flat = flatten(tokenTree);

describe("canonical token tree (doc 06)", () => {
  it("covers all normative categories (§4)", () => {
    for (const group of [
      "color",
      "space",
      "radius",
      "border",
      "typography",
      "elevation",
      "motion",
      "z-index",
      "breakpoint",
      "container",
      "layout",
    ]) {
      expect(
        [...flat.keys()].some((k) => k.startsWith(`${group}.`)),
        `missing group: ${group}`,
      ).toBe(true);
    }
  });

  it("spacing uses integer ids (§3)", () => {
    const spaceKeys = [...flat.keys()].filter((k) => k.startsWith("space."));
    expect(spaceKeys.length).toBeGreaterThan(5);
    for (const key of spaceKeys) {
      const id = key.split(".")[1];
      expect(id).toMatch(/^\d+$/);
    }
  });

  it("includes Application Layout tokens (§5)", () => {
    for (const name of [
      "sidebar-width",
      "sidebar-collapsed-width",
      "topbar-height",
      "page-gutter",
      "toolbar-gap",
      "touch-target-min",
    ]) {
      expect(flat.has(`layout.${name}`), `missing layout token: ${name}`).toBe(true);
    }
    expect(flat.get("layout.touch-target-min")?.$value).toBe("44px");
  });

  it("coexists viewport breakpoints and container sizes (§6)", () => {
    expect(flat.has("breakpoint.md")).toBe(true);
    expect(flat.has("container.md")).toBe(true);
  });

  it("defines semantic surface/text/interactive/feedback roles", () => {
    for (const path of [
      "color.surface.default",
      "color.text.primary",
      "color.border.focus",
      "color.interactive.accent",
      "color.feedback.danger-text",
      "focus-ring.color",
    ]) {
      expect(flat.has(path)).toBe(true);
    }
  });

  it("defines typography roles per doc 03 §5", () => {
    for (const role of [
      "display",
      "heading",
      "title",
      "body",
      "label",
      "caption",
      "code",
      "numeric",
    ]) {
      expect(flat.has(`role.${role}`)).toBe(true);
    }
  });
});
