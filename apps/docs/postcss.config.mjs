import { postcssIsolateStyles } from "vitepress";

/**
 * VitePress' default theme ships unlayered CSS, and unlayered rules always beat
 * layered ones. Wrapping it in `@layer vp` (declared before `ms`) lets
 * @magic-style/css component rules win inside docs pages.
 */
const THEME_CSS = /vitepress[\\/]dist[\\/]client[\\/]theme-default[\\/]/;
// icons.css stays unlayered: its per-icon `--icon` rules must beat the generated
// (unlayered) vp-icons.css default, and it cannot conflict with component styles.
const KEEP_UNLAYERED = /[\\/]styles[\\/]icons\.css$/;

/** @type {import("postcss").PluginCreator<void>} */
const layerVitepress = () => ({
  postcssPlugin: "layer-vitepress-theme",
  Once(root, { AtRule }) {
    const file = root.source?.input.file ?? "";
    if (!THEME_CSS.test(file) || KEEP_UNLAYERED.test(file)) return;
    const only = root.nodes.length === 1 ? root.first : undefined;
    if (only?.type === "atrule" && only.name === "layer" && only.params === "vp") return;
    // @import/@charset must stay at the top level; everything else moves into the layer.
    const keep = root.nodes.filter(
      (node) => node.type === "atrule" && (node.name === "import" || node.name === "charset"),
    );
    const layer = new AtRule({ name: "layer", params: "vp" });
    layer.append(root.nodes.filter((node) => !keep.includes(node)));
    root.removeAll();
    root.append(...keep, layer);
  },
});
layerVitepress.postcss = true;

// A custom PostCSS config replaces VitePress' own, so re-add style isolation:
// `.vp-doc` article styles (tables, paragraphs, lists) must not reach `.vp-raw` demos.
export default { plugins: [postcssIsolateStyles(), layerVitepress()] };
