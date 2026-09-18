import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const baseSrc = join(pkgRoot, "src", "base.css");
const readBase = (): string => readFileSync(baseSrc, "utf8");

describe("Motion and Reduced Motion System (Architecture Baseline 1.2)", () => {
  it("defines default motion-scale token", () => {
    const base = readBase();
    expect(base).toContain("--ms-motion-scale: 1");
  });

  it("zeros motion durations in @media (prefers-reduced-motion: reduce)", () => {
    const base = readBase();
    expect(base).toContain("prefers-reduced-motion: reduce");
    expect(base).toContain("--ms-motion-duration-fast: 0ms");
    expect(base).toContain("--ms-motion-duration-base: 0ms");
    expect(base).toContain("--ms-motion-scale: 0");
  });

  it("zeros motion durations in [data-ms-motion='reduced'] user toggle selector", () => {
    const base = readBase();
    expect(base).toContain(':root[data-ms-motion="reduced"]');
    expect(base).toContain(':root[data-ms-reduced-motion="true"]');
  });

  it("contains no !important rules violating doc 09 §4", () => {
    const base = readBase();
    const stripped = base.replace(/\/\*[\s\S]*?\*\//g, "");
    expect(stripped).not.toContain("!important");
  });
});
