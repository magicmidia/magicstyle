import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const components = join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "components");
const stripComments = (css: string): string => css.replace(/\/\*[\s\S]*?\*\//g, "");

/**
 * Files that stay physical on purpose: code reads LTR, the pointer and the
 * carousel/lightbox chrome follow transforms, and placement-driven overlays
 * (tooltip, glimpse, fab) expose physical "left"/"right" APIs.
 */
const PHYSICAL_FILES = new Set([
  "code-block.css",
  "glimpse.css",
  "tooltip.css",
  "pointer.css",
  "lightbox.css",
  "fab.css",
]);
/** Rules named after a physical side, and JS-positioned panels, keep physical offsets. */
const PHYSICAL_SELECTOR =
  /(--|-)(left|right)\b|data-placement|data-align|toast-container|ms-select__dropdown|ms-carousel__indicators/;
const PHYSICAL_DECL =
  /^\s*((?:margin|padding|border)-(?:left|right)(?:-[a-z]+)?|border-(?:top|bottom)-(?:left|right)-radius|left|right|text-align:\s*(?:left|right))\s*:?/m;

describe("RTL: components use logical properties", () => {
  it("no physical inline-axis declarations outside the documented exceptions", () => {
    const offenders: string[] = [];
    for (const file of readdirSync(components).filter((f) => f.endsWith(".css"))) {
      if (PHYSICAL_FILES.has(file)) continue;
      const css = stripComments(readFileSync(join(components, file), "utf8"));
      for (const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
        const selector = rule[1]!.trim();
        if (PHYSICAL_SELECTOR.test(selector)) continue;
        for (const line of rule[2]!.split(";")) {
          // Centering (`left: 50%` + translateX) is direction-neutral.
          if (/^\s*left:\s*50%/.test(line)) continue;
          if (PHYSICAL_DECL.test(line)) offenders.push(`${file} ${selector} → ${line.trim()}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });

  it("direction-dependent motion flips under :dir(rtl)", () => {
    const read = (f: string) => readFileSync(join(components, f), "utf8");
    expect(read("carousel.css")).toMatch(
      /\.ms-carousel:dir\(rtl\)\s*\{\s*--_ms-carousel-direction: -1;/,
    );
    expect(read("marquee.css")).toMatch(
      /\.ms-marquee:dir\(rtl\)\s*\{\s*--_ms-marquee-direction: -1;/,
    );
  });
});
