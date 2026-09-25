import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const components = join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "components");
const read = (file: string): string =>
  readFileSync(join(components, file), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");

describe("component CSS fixes", () => {
  it("field description and error <p> have no UA margins", () => {
    const css = read("field.css");
    expect(css).toMatch(/\.ms-field-description\s*\{[^}]*margin: 0;/);
    expect(css).toMatch(/\.ms-field-error\s*\{[^}]*margin: 0;/);
  });

  it("neutral avatar fallback keeps an inset hairline", () => {
    expect(read("avatar.css")).toMatch(
      /\.ms-avatar-fallback\s*\{[^}]*box-shadow: inset 0 0 0 var\(--ms-border-hairline\) var\(--ms-color-border-subtle\);/,
    );
  });

  it("slotted icon-button SVGs follow the button size", () => {
    const css = read("icon-button.css");
    expect(css).toMatch(
      /\.ms-icon-button > svg\s*\{[^}]*inline-size: var\(--_ms-icon-button-icon, 16px\);/,
    );
    expect(css).toMatch(/\.ms-icon-button--lg\s*\{[^}]*--_ms-icon-button-icon: 20px;/);
  });

  it("link-rendered buttons style aria-disabled like :disabled", () => {
    expect(read("button.css")).toMatch(
      /\.ms-button\[aria-disabled="true"\]\s*\{[^}]*cursor: not-allowed;/,
    );
  });

  it("marquee can be paused and honors reduced motion", () => {
    const css = read("marquee.css");
    expect(css).toMatch(
      /\.ms-marquee--paused \.ms-marquee__track\s*\{[^}]*animation-play-state: paused;/,
    );
    expect(css).toMatch(
      /prefers-reduced-motion: reduce\)\s*\{\s*\.ms-marquee:not\(\.ms-marquee--playing\) \.ms-marquee__track/,
    );
  });

  it("app-shell footer border is opt-out via [data-bordered]", () => {
    expect(read("app-shell.css")).toMatch(
      /\.ms-app-shell__footer\[data-bordered\]\s*\{[^}]*border-block-start:/,
    );
  });
});
