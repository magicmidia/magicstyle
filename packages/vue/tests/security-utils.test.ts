import { describe, expect, it } from "vitest";
import { safeHref, safeRel } from "../src/composables/safe-url.ts";
import { sanitizeSvg } from "../src/composables/sanitize-svg.ts";

describe("safeHref", () => {
  it.each([
    "https://example.com",
    "http://example.com/a?b=c",
    "mailto:a@b.c",
    "tel:+5511999999999",
    "/relative/path",
    "./file",
    "#anchor",
    "?q=1",
    "//cdn.example.com/x",
  ])("keeps safe href %s", (href) => {
    expect(safeHref(href)).toBe(href);
  });

  it.each([
    "javascript:alert(1)",
    "JavaScript:alert(1)",
    " javascript:alert(1)",
    "java\tscript:alert(1)",
    "java\nscript:alert(1)",
    "\u0001javascript:alert(1)",
    "data:text/html,<script>alert(1)</script>",
    "vbscript:msgbox(1)",
  ])("blocks dangerous href %j", (href) => {
    expect(safeHref(href)).toBeUndefined();
  });

  it("returns undefined for empty values", () => {
    expect(safeHref("")).toBeUndefined();
    expect(safeHref(undefined)).toBeUndefined();
  });
});

describe("safeRel", () => {
  it("adds noopener noreferrer for _blank and merges custom tokens", () => {
    expect(safeRel(undefined, "_blank")).toBe("noopener noreferrer");
    expect(safeRel("nofollow", "_blank")).toBe("nofollow noopener noreferrer");
    expect(safeRel("nofollow", undefined)).toBe("nofollow");
    expect(safeRel(undefined, undefined)).toBeUndefined();
  });
});

describe("sanitizeSvg", () => {
  it("keeps plain shape markup", () => {
    const out = sanitizeSvg('<path d="M10 10" stroke-width="2"/><circle cx="1" cy="2" r="3"/>');
    expect(out).toContain('<path d="M10 10" stroke-width="2"/>');
    expect(out).toContain("<circle");
  });

  it("unwraps a full <svg> root, with or without xmlns", () => {
    expect(sanitizeSvg('<svg viewBox="0 0 24 24"><path d="M1 1"/></svg>')).toBe('<path d="M1 1"/>');
    expect(
      sanitizeSvg('<svg xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1"/></svg>'),
    ).toBe('<rect width="1" height="1"/>');
  });

  it.each([
    '<script>alert("xss")</script><path d="M10 10" onload="alert(1)" onerror="alert(2)" />',
    "<a href=javascript:alert(1)><path d='M1 1'/></a>",
    '<a href=" javascript:alert(1)"><path d="M1 1"/></a>',
    '<a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="java&#115;cript:alert(1)"><path d="M1 1"/></a>',
    '<animate attributeName="href" to="javascript:alert(1)"/>',
    '<set attributeName="onmouseover" to="alert(1)"/>',
    '<foreignObject><iframe xmlns="http://www.w3.org/1999/xhtml" srcdoc="&lt;script&gt;alert(1)&lt;/script&gt;"></iframe></foreignObject>',
    "<style>*{background:url(javascript:alert(1))}</style>",
    '<use href="https://evil.example/sprite.svg#x"/>',
    '<path d="M1 1" style="background:url(https://evil.example)" fill="url(https://evil.example/#a)"/>',
    '<image href="https://evil.example/track.png"/>',
    '<path id="location" d="M1 1"/>',
  ])("strips dangerous content %#", (payload) => {
    const out = sanitizeSvg(payload);
    expect(out).not.toMatch(
      /script|alert|href|on\w+=|foreignObject|iframe|animate|<set|style|url\(|<use|<image|id=/i,
    );
  });

  it("returns empty string for malformed markup", () => {
    expect(sanitizeSvg("<path d='M1 1'")).toBe("");
    expect(sanitizeSvg("")).toBe("");
  });
});

describe("link components drop unsafe hrefs", async () => {
  const { mount } = await import("@vue/test-utils");
  const { MsLink, MsGlimpse, MsFooter } = await import("../src/index.ts");

  it("MsLink renders no href for javascript: and keeps noopener on _blank", () => {
    const evil = mount(MsLink, { props: { href: "javascript:alert(1)" }, slots: { default: "x" } });
    expect(evil.find("a").attributes("href")).toBeUndefined();

    const blank = mount(MsLink, {
      props: { href: "/docs", target: "_blank", rel: "nofollow" },
      slots: { default: "x" },
    });
    expect(blank.find("a").attributes("rel")).toBe("nofollow noopener noreferrer");
  });

  it("MsGlimpse merges custom rel with noopener", () => {
    const wrapper = mount(MsGlimpse, {
      props: { href: "https://example.com", rel: "nofollow", target: "_blank" },
    });
    const a = wrapper.find("a");
    expect(a.attributes("rel")).toBe("nofollow noopener noreferrer");
  });

  it("MsFooter falls back to # for unsafe links", () => {
    const wrapper = mount(MsFooter, {
      props: { columns: [{ title: "T", links: [{ label: "L", href: "javascript:alert(1)" }] }] },
    });
    expect(wrapper.find(".ms-footer__link").attributes("href")).toBe("#");
  });
});
