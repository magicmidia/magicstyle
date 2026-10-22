import { afterEach, describe, expect, it, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createSSRApp, defineComponent, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { MsBadge, MsButton, MsCard } from "../src/index.ts";

const mounted: VueWrapper[] = [];
afterEach(() => {
  while (mounted.length) mounted.pop()?.unmount();
  document.body.innerHTML = "";
});

function track<T extends VueWrapper>(wrapper: T): T {
  mounted.push(wrapper);
  return wrapper;
}

/** Minimal RouterLink-like stub: renders an anchor from a `to` prop and navigates on click. */
const navigate = vi.fn();
const RouterLinkStub = defineComponent({
  name: "RouterLinkStub",
  props: { to: { type: String, required: true } },
  setup(props, { slots }) {
    return () =>
      h(
        "a",
        {
          href: props.to,
          "data-router-link": "",
          onClick: (event: MouseEvent) => {
            if (!event.defaultPrevented) navigate(props.to);
            event.preventDefault();
          },
        },
        slots.default?.(),
      );
  },
});

describe("MsButton as/href", () => {
  it("renders a native button by default with type", () => {
    const wrapper = track(mount(MsButton, { slots: { default: "Save" } }));
    const el = wrapper.element as HTMLElement;
    expect(el.tagName).toBe("BUTTON");
    expect(el.getAttribute("type")).toBe("button");
    expect(el.hasAttribute("href")).toBe(false);
  });

  it("keeps the default SSR markup free of link attributes", async () => {
    const html = await renderToString(
      createSSRApp({ render: () => h(MsButton, null, { default: () => "Save" }) }),
    );
    expect(html.startsWith('<button class="ms-button" type="button" ')).toBe(true);
    expect(html).not.toMatch(/href|aria-disabled|tabindex/);
  });

  it("renders an anchor with href and keeps data attributes and slots", () => {
    const wrapper = track(
      mount(MsButton, {
        props: { href: "/docs", variant: "outline", tone: "success" },
        slots: { default: "Docs", "icon-end": () => h("i", { class: "icon" }) },
      }),
    );
    const el = wrapper.element as HTMLElement;
    expect(el.tagName).toBe("A");
    expect(el.getAttribute("href")).toBe("/docs");
    expect(el.hasAttribute("type")).toBe(false);
    expect(el.hasAttribute("disabled")).toBe(false);
    expect(el.getAttribute("data-variant")).toBe("outline");
    expect(el.getAttribute("data-tone")).toBe("success");
    expect(el.hasAttribute("data-ms-button")).toBe(true);
    expect(wrapper.find(".ms-button-label").text()).toBe("Docs");
    expect(wrapper.find("[data-ms-slot='icon-end'] .icon").exists()).toBe(true);
  });

  it("renders an arbitrary element via `as`", () => {
    const wrapper = track(mount(MsButton, { props: { as: "span" }, slots: { default: "Tag" } }));
    expect((wrapper.element as HTMLElement).tagName).toBe("SPAN");
    expect(wrapper.attributes("type")).toBeUndefined();
  });

  it("renders a RouterLink-like component and passes `to` through", async () => {
    navigate.mockClear();
    const wrapper = track(
      mount(MsButton, {
        props: { as: RouterLinkStub },
        attrs: { to: "/settings" },
        slots: { default: "Settings" },
      }),
    );
    const anchor = wrapper.find("a[data-router-link]");
    expect(anchor.attributes("href")).toBe("/settings");
    expect(anchor.classes()).toContain("ms-button");
    await anchor.trigger("click");
    expect(navigate).toHaveBeenCalledWith("/settings");
  });

  it("disables links: no href, aria-disabled, tabindex -1, click prevented", async () => {
    const onClick = vi.fn();
    const wrapper = track(
      mount(MsButton, {
        props: { href: "/docs", disabled: true },
        attrs: { onClick },
        slots: { default: "Docs" },
        attachTo: document.body,
      }),
    );
    const el = wrapper.element as HTMLAnchorElement;
    expect(el.tagName).toBe("A");
    expect(el.hasAttribute("href")).toBe(false);
    expect(el.getAttribute("aria-disabled")).toBe("true");
    expect(el.getAttribute("tabindex")).toBe("-1");
    expect(el.hasAttribute("disabled")).toBe(false);
    const event = new MouseEvent("click", { bubbles: true, cancelable: true });
    el.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("treats loading like disabled on a custom component", async () => {
    navigate.mockClear();
    const wrapper = track(
      mount(MsButton, {
        props: { as: RouterLinkStub, loading: true },
        attrs: { to: "/busy" },
        slots: { default: "Busy" },
        attachTo: document.body,
      }),
    );
    const anchor = wrapper.find("a");
    expect(anchor.attributes("aria-disabled")).toBe("true");
    expect(anchor.attributes("tabindex")).toBe("-1");
    anchor.element.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    expect(navigate).not.toHaveBeenCalled();
  });
});

describe("MsBadge as", () => {
  it("renders a span by default and a custom tag via `as`", () => {
    const span = track(mount(MsBadge, { slots: { default: "New" } }));
    expect((span.element as HTMLElement).tagName).toBe("SPAN");

    const link = track(
      mount(MsBadge, {
        props: { as: "a", tone: "info" },
        attrs: { href: "/new" },
        slots: { default: "New" },
      }),
    );
    expect((link.element as HTMLElement).tagName).toBe("A");
    expect(link.attributes("href")).toBe("/new");
    expect(link.attributes("data-tone")).toBe("info");
  });

  it("renders a RouterLink-like component", () => {
    const wrapper = track(
      mount(MsBadge, {
        props: { as: RouterLinkStub },
        attrs: { to: "/inbox" },
        slots: { default: "3" },
      }),
    );
    const anchor = wrapper.find("a[data-router-link]");
    expect(anchor.attributes("href")).toBe("/inbox");
    expect(anchor.classes()).toContain("ms-badge");
  });
});

describe("MsCard as/href", () => {
  it("renders a div by default and a custom tag via `as`", () => {
    const card = track(mount(MsCard, { props: { title: "A" } }));
    expect((card.element as HTMLElement).tagName).toBe("DIV");
    const article = track(mount(MsCard, { props: { title: "A", as: "article" } }));
    expect((article.element as HTMLElement).tagName).toBe("ARTICLE");
  });

  it("renders a link card without button semantics", async () => {
    const wrapper = track(
      mount(MsCard, { props: { href: "/post/1", interactive: true, title: "Post" } }),
    );
    const el = wrapper.element as HTMLElement;
    expect(el.tagName).toBe("A");
    expect(el.getAttribute("href")).toBe("/post/1");
    expect(el.hasAttribute("tabindex")).toBe(false);
    expect(el.hasAttribute("data-interactive")).toBe(false);
    expect(el.hasAttribute("data-link")).toBe(true);
    await wrapper.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("click")).toBeUndefined();
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("renders a RouterLink-like component via `as`", () => {
    const wrapper = track(
      mount(MsCard, { props: { as: RouterLinkStub, title: "Go" }, attrs: { to: "/go" } }),
    );
    expect(wrapper.find("a[data-router-link]").attributes("href")).toBe("/go");
  });

  it("accepts the soft variant so tone is visible", () => {
    const wrapper = track(mount(MsCard, { props: { variant: "soft", tone: "success" } }));
    expect(wrapper.attributes("data-variant")).toBe("soft");
    expect(wrapper.attributes("data-tone")).toBe("success");
  });
});
