import { describe, expect, it } from "vitest";
import { cssVarName } from "../src/lib/css-vars.ts";

describe("cssVarName (doc 06 §3)", () => {
  it("converts dot paths to kebab CSS custom properties", () => {
    expect(cssVarName("color.surface.default")).toBe("--ms-color-surface-default");
  });

  it("supports spacing integer ids", () => {
    expect(cssVarName("space.4")).toBe("--ms-space-4");
    expect(cssVarName("space.0")).toBe("--ms-space-0");
  });

  it("lowercases and handles hyphenated segments", () => {
    expect(cssVarName("focus-ring.width")).toBe("--ms-focus-ring-width");
    expect(cssVarName("z-index.modal")).toBe("--ms-z-index-modal");
  });
});
