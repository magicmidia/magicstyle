const SVG_NS = "http://www.w3.org/2000/svg";

const ALLOWED_ELEMENTS = new Set([
  "svg",
  "g",
  "path",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",
  "rect",
]);

const ALLOWED_ATTRIBUTES = new Set([
  "d",
  "points",
  "x",
  "y",
  "x1",
  "y1",
  "x2",
  "y2",
  "cx",
  "cy",
  "r",
  "rx",
  "ry",
  "width",
  "height",
  "viewbox",
  "class",
  "transform",
  "fill",
  "fill-rule",
  "fill-opacity",
  "clip-rule",
  "stroke",
  "stroke-width",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-opacity",
  "opacity",
  "vector-effect",
  "shape-rendering",
]);

// No url() references: ids are stripped (DOM clobbering) so fragments cannot resolve.
const URL_REFERENCE = /url\s*\(/i;

function cleanElement(source: Element, doc: Document): Element | null {
  const name = source.localName.toLowerCase();
  if (source.namespaceURI !== SVG_NS || !ALLOWED_ELEMENTS.has(name)) return null;

  const clean = doc.createElementNS(SVG_NS, source.localName);
  for (const attr of Array.from(source.attributes)) {
    const attrName = attr.name.toLowerCase();
    if (attr.namespaceURI !== null || !ALLOWED_ATTRIBUTES.has(attrName)) continue;
    if (URL_REFERENCE.test(attr.value)) continue;
    clean.setAttribute(attr.name, attr.value);
  }
  for (const child of Array.from(source.children)) {
    const cleanChild = cleanElement(child, doc);
    if (cleanChild) clean.appendChild(cleanChild);
  }
  return clean;
}

/**
 * Allowlist SVG sanitizer for icon markup rendered with v-html.
 * Parses as XML, rebuilds only shape elements and presentation attributes
 * (no href, id, url(), event handlers, style, text, foreignObject or animation),
 * and returns the inner markup of the root <svg>. Returns "" when the input is
 * not well-formed SVG or when no DOM is available (SSR).
 */
export function sanitizeSvg(raw: string): string {
  if (!raw || typeof DOMParser === "undefined" || typeof XMLSerializer === "undefined") {
    return "";
  }
  const markup = /^\s*<svg[\s>]/i.test(raw)
    ? raw.replace(/^\s*<svg\b(?![^>]*\sxmlns\s*=)/i, `<svg xmlns="${SVG_NS}"`)
    : `<svg xmlns="${SVG_NS}">${raw}</svg>`;
  const parsed = new DOMParser().parseFromString(markup, "image/svg+xml");
  const root = parsed.documentElement;
  if (!root || root.getElementsByTagName("parsererror").length > 0) return "";

  const clean = cleanElement(root, parsed);
  if (!clean) return "";
  const serializer = new XMLSerializer();
  return Array.from(clean.childNodes)
    .map((node) => serializer.serializeToString(node))
    .join("")
    .replace(/ xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, "");
}
