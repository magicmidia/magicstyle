import { describe, expect, it } from "vitest";
import type { TokenTree } from "../src/lib/dtcg.ts";
import { MAX_ALIAS_DEPTH, resolveAliases } from "../src/lib/resolve.ts";

function treeOf(node: unknown): TokenTree {
  return node as TokenTree;
}

describe("resolveAliases (doc 06 §9)", () => {
  it("inlines one-level aliases", () => {
    const tree = treeOf({
      base: { $type: "dimension", $value: "4px" },
      gap: { $type: "dimension", $value: "{base}" },
    });
    const { tokens, diagnostics } = resolveAliases(tree);
    expect(diagnostics).toHaveLength(0);
    expect(tokens.get("gap")?.$value).toBe("4px");
  });

  it("resolves chained aliases within depth", () => {
    const tree = treeOf({
      a: { $type: "dimension", $value: "2px" },
      b: { $type: "dimension", $value: "{a}" },
      c: { $type: "dimension", $value: "{b}" },
    });
    const { tokens, diagnostics } = resolveAliases(tree);
    expect(diagnostics).toHaveLength(0);
    expect(tokens.get("c")?.$value).toBe("2px");
  });

  it("flags alias cycles as diagnostics", () => {
    const tree = treeOf({
      a: { $type: "dimension", $value: "{b}" },
      b: { $type: "dimension", $value: "{a}" },
    });
    const { diagnostics } = resolveAliases(tree);
    expect(diagnostics.some((d) => d.message.includes("cycle"))).toBe(true);
  });

  it("enforces max alias depth", () => {
    const segments = Object.fromEntries(
      Array.from({ length: MAX_ALIAS_DEPTH + 1 }, (_, i) => [
        `t${i}`,
        i === 0
          ? { $type: "dimension", $value: "1px" }
          : { $type: "dimension", $value: `{t${i - 1}}` },
      ]),
    );
    const { diagnostics } = resolveAliases(treeOf(segments));
    expect(diagnostics.some((d) => d.message.includes("depth"))).toBe(true);
  });

  it("reports unresolved aliases", () => {
    const tree = treeOf({ x: { $type: "color", $value: "{missing.token}" } });
    const { diagnostics } = resolveAliases(tree);
    expect(diagnostics.some((d) => d.message.includes("unresolved"))).toBe(true);
  });

  it("resolves aliases inside composite values", () => {
    const tree = treeOf({
      ring: { $type: "color", $value: "oklch(0.5 0.1 250)" },
      shadow: {
        $type: "shadow",
        $value: [{ offsetX: "0px", offsetY: "1px", blur: "2px", spread: "0px", color: "{ring}" }],
      },
    }) as never;
    const { tokens, diagnostics } = resolveAliases(tree as TokenTree);
    expect(diagnostics).toHaveLength(0);
    const value = tokens.get("shadow")?.$value;
    expect(Array.isArray(value) && value[0]?.color).toBe("oklch(0.5 0.1 250)");
  });
});
