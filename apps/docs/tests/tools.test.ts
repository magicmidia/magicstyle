import { describe, expect, it } from "vitest";
import { playgroundFiles } from "../.vitepress/theme/playground.ts";
import {
  toDtcg,
  toTokensStudio,
  type ResolvedTheme,
} from "../.vitepress/theme/pages/theme-export.ts";

describe("StackBlitz project", () => {
  const files = playgroundFiles({
    code: "<template><MsButton>Save</MsButton></template>",
    locale: "pt-BR",
    version: "0.2.0",
    title: 'Button <"demo">',
  });

  it("is a Vite + Vue project with the demo as App.vue", () => {
    expect(Object.keys(files).sort()).toEqual([
      "index.html",
      "package.json",
      "src/App.vue",
      "src/env.d.ts",
      "src/main.ts",
      "src/style.css",
      "vite.config.ts",
    ]);
    expect(files["src/App.vue"]).toBe("<template><MsButton>Save</MsButton></template>\n");
  });

  it("installs the current version and uses the page locale", () => {
    const pkg = JSON.parse(files["package.json"]!) as { dependencies: Record<string, string> };
    expect(pkg.dependencies["@magic-style/vue"]).toBe("^0.2.0");
    expect(pkg.dependencies["@magic-style/css"]).toBe("^0.2.0");
    expect(files["src/main.ts"]).toContain('createMsI18n({ locale: "pt-BR" })');
    expect(files["src/main.ts"]).toContain('import "@magic-style/css";');
    expect(files["index.html"]).toContain('<html lang="pt-BR"');
  });

  it("escapes the title in index.html", () => {
    expect(files["index.html"]).toContain("<title>Button &#60;&#34;demo&#34;&#62;</title>");
  });
});

describe("theme export", () => {
  const theme: ResolvedTheme = {
    name: "acme",
    shared: { "radius-field": "6px", depth: "1", "font-sans": "Inter, system-ui" },
    light: { "color-primary": "#2563eb" },
    dark: { "color-primary": "#60a5fa" },
  };

  it("emits DTCG tokens with $type and $value per mode", () => {
    const dtcg = toDtcg(theme) as Record<string, Record<string, Record<string, unknown>>>;
    expect(dtcg.acme!.light!["color-primary"]).toEqual({ $type: "color", $value: "#2563eb" });
    expect(dtcg.acme!.shared!["radius-field"]).toEqual({ $type: "dimension", $value: "6px" });
    expect(dtcg.acme!.shared!.depth).toEqual({ $type: "number", $value: 1 });
    expect(dtcg.acme!.shared!["font-sans"]).toEqual({
      $type: "fontFamily",
      $value: ["Inter", "system-ui"],
    });
  });

  it("emits Tokens Studio sets, themes and set order", () => {
    const studio = toTokensStudio(theme) as {
      global: Record<string, unknown>;
      dark: Record<string, unknown>;
      $themes: { name: string; selectedTokenSets: Record<string, string> }[];
      $metadata: { tokenSetOrder: string[] };
    };
    expect(studio.dark["color-primary"]).toEqual({ $type: "color", $value: "#60a5fa" });
    expect(studio.global["font-sans"]).toEqual({
      $type: "fontFamilies",
      $value: "Inter, system-ui",
    });
    expect(studio.$metadata.tokenSetOrder).toEqual(["global", "light", "dark"]);
    expect(studio.$themes.map((t) => t.name)).toEqual(["acme / light", "acme / dark"]);
    expect(studio.$themes[1]!.selectedTokenSets).toEqual({ global: "enabled", dark: "enabled" });
  });
});
