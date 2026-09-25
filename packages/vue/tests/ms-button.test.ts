import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import { MsButton, useMsId } from "../src/index.ts";

describe("MsButton rendering", () => {
  it("renders label slot as a native button with defaults", () => {
    const wrapper = mount(MsButton, { slots: { default: "Save" } });
    const btn = wrapper.find("button.ms-button");
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toBe("Save");
    expect(btn.attributes("type")).toBe("button");
    expect(btn.attributes("data-variant")).toBe("solid");
    expect(btn.attributes("data-tone")).toBe("primary");
    expect(btn.attributes("data-size")).toBe("md");
  });

  it("exposes variant/tone/size/width via data attributes (doc 09 §8)", () => {
    const wrapper = mount(MsButton, {
      props: { variant: "outline", tone: "warning", size: "lg", fullWidth: true },
      slots: { default: "Delete" },
    });
    const attrs = wrapper.find("button").attributes();
    expect(attrs["data-variant"]).toBe("outline");
    expect(attrs["data-tone"]).toBe("warning");
    expect(attrs["data-size"]).toBe("lg");
    expect(attrs["data-full-width"]).toBeDefined();
  });

  it("supports gradient variant and pill shape as opt-ins", () => {
    const gradient = mount(MsButton, { props: { variant: "gradient" }, slots: { default: "Go" } });
    expect(gradient.find("button").attributes("data-variant")).toBe("gradient");
    const pill = mount(MsButton, { props: { pill: true }, slots: { default: "Go" } });
    expect(pill.find("button").attributes("data-pill")).toBeDefined();
  });

  it("supports squared variant (0 radius)", () => {
    const squared = mount(MsButton, { props: { variant: "squared" }, slots: { default: "Go" } });
    expect(squared.find("button").attributes("data-variant")).toBe("squared");
  });

  it("supports text and glass variants", () => {
    const textBtn = mount(MsButton, { props: { variant: "text" }, slots: { default: "Text" } });
    expect(textBtn.find("button").attributes("data-variant")).toBe("text");
    const glassBtn = mount(MsButton, { props: { variant: "glass" }, slots: { default: "Glass" } });
    expect(glassBtn.find("button").attributes("data-variant")).toBe("glass");
  });

  it("supports shape, wide, block, responsive and wave props", () => {
    const wrapper = mount(MsButton, {
      props: {
        shape: "rounded-lg",
        wide: true,
        block: true,
        responsive: true,
        wave: true,
      },
      slots: { default: "Action" },
    });
    const attrs = wrapper.find("button").attributes();
    expect(attrs["data-shape"]).toBe("rounded-lg");
    expect(attrs["data-wide"]).toBeDefined();
    expect(attrs["data-block"]).toBeDefined();
    expect(attrs["data-responsive"]).toBeDefined();
    expect(attrs["data-wave"]).toBeDefined();
    expect(attrs["data-full-width"]).toBeDefined();
  });

  it("renders icon slots with documented data-ms-slot hooks", () => {
    const Icon = defineComponent({ render: () => h("svg") });
    const wrapper = mount(MsButton, {
      slots: { default: "Add", "icon-start": () => h(Icon), "icon-end": () => h(Icon) },
    });
    expect(wrapper.find('[data-ms-slot="icon-start"]').exists()).toBe(true);
    expect(wrapper.find('[data-ms-slot="icon-end"]').exists()).toBe(true);
  });
});

describe("MsButton states", () => {
  it("disabled blocks interaction", async () => {
    const onClick = vi.fn();
    const wrapper = mount(MsButton, {
      props: { disabled: true, onClick },
      slots: { default: "x" },
    });
    await wrapper.trigger("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("loading sets aria-busy, spinner and prevents clicks", async () => {
    const onClick = vi.fn();
    const wrapper = mount(MsButton, {
      props: { loading: true, onClick },
      slots: { default: "Sending" },
    });
    const btn = wrapper.find("button");
    expect(btn.attributes("aria-busy")).toBe("true");
    expect(btn.attributes("data-loading")).toBeDefined();
    expect(btn.find(".ms-button-spinner").exists()).toBe(true);
    await btn.trigger("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("emits native click when enabled", async () => {
    const onClick = vi.fn();
    const wrapper = mount(MsButton, { props: { onClick }, slots: { default: "Ok" } });
    await wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("useMsId (doc 08 §12)", () => {
  it("namespaces ids and stays unique per component instance", () => {
    let captured: { a: string; b: string } | undefined;
    const probe = defineComponent({
      setup() {
        const a = useMsId();
        const b = useMsId("field");
        captured = { a, b };
        return () => h("span", [a, b].join("|"));
      },
    });
    mount(probe);
    expect(captured).toBeDefined();
    const { a, b } = captured!;
    expect(a.startsWith("ms-")).toBe(true);
    expect(b.startsWith("field-")).toBe(true);
    expect(a).not.toBe(b);
  });
});
