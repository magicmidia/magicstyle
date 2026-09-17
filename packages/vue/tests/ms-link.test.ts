import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { MsLink } from "../src/index.ts";

describe("MsLink component", () => {
  it("renders anchor with default attributes", () => {
    const wrapper = mount(MsLink, {
      props: { href: "/docs" },
      slots: { default: "Documentação" },
    });
    const a = wrapper.find("a.ms-link");
    expect(a.exists()).toBe(true);
    expect(a.text()).toBe("Documentação");
    expect(a.attributes("href")).toBe("/docs");
    expect(a.attributes("data-variant")).toBe("primary");
    expect(a.attributes("data-underline")).toBe("hover");
  });

  it("detects external link and sets target and rel automatically", () => {
    const wrapper = mount(MsLink, {
      props: { href: "https://example.com" },
      slots: { default: "External" },
    });
    const a = wrapper.find("a");
    expect(a.attributes("target")).toBe("_blank");
    expect(a.attributes("rel")).toBe("noopener noreferrer");
    expect(wrapper.find(".ms-link__external-icon").exists()).toBe(true);
  });

  it("handles disabled state blocking click events", async () => {
    const onClick = vi.fn();
    const wrapper = mount(MsLink, {
      props: { href: "/dashboard", disabled: true, onClick },
      slots: { default: "Dashboard" },
    });
    const a = wrapper.find("a");
    expect(a.attributes("aria-disabled")).toBe("true");
    expect(a.attributes("href")).toBeUndefined();
    await a.trigger("click");
    expect(onClick).not.toHaveBeenCalled();
  });
});
