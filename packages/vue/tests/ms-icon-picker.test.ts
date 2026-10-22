import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { MsIconPicker } from "../src/index.ts";

describe("MsIconPicker component", () => {
  it("renders trigger and opens icon grid on click", async () => {
    const wrapper = mount(MsIconPicker, {
      props: { placeholder: "Pick an icon" },
    });
    const trigger = wrapper.find("button.ms-icon-picker__trigger");
    expect(trigger.text()).toContain("Pick an icon");

    await trigger.trigger("click");
    const dropdown = wrapper.find(".ms-icon-picker__dropdown");
    expect(dropdown.exists()).toBe(true);
    const icons = wrapper.findAll(".ms-icon-picker__item");
    expect(icons.length).toBeGreaterThan(0);
  });

  it("selects an icon and emits update:modelValue", async () => {
    const wrapper = mount(MsIconPicker);
    await wrapper.find("button.ms-icon-picker__trigger").trigger("click");

    const firstIcon = wrapper.find(".ms-icon-picker__item");
    await firstIcon.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("select")).toBeTruthy();
  });

  it("renders vector SVGs for icons", () => {
    const wrapper = mount(MsIconPicker, {
      props: { modelValue: "home" },
    });
    const previewSvg = wrapper.find(".ms-icon-picker__preview svg");
    expect(previewSvg.exists()).toBe(true);
  });

  it("sanitizes malicious script and onload/onerror attributes in custom icons", async () => {
    const maliciousIcons = [
      {
        id: "xss-icon",
        name: "XSS Test",
        category: "Test",
        svg: '<script>alert("xss")</script><path d="M10 10" onload="alert(1)" onerror="alert(2)" />',
      },
    ];
    const wrapper = mount(MsIconPicker, {
      props: {
        icons: maliciousIcons,
        modelValue: "xss-icon",
      },
    });
    await nextTick(); // custom SVGs render after mount (SSR-safe)
    const html = wrapper.html();
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("alert(");
    expect(html).not.toContain("onload=");
    expect(html).not.toContain("onerror=");
    expect(html).toContain('<path d="M10 10"');
  });

  it("does not render executable payloads from custom icon markup", async () => {
    const wrapper = mount(MsIconPicker, {
      props: {
        icons: [
          {
            id: "evil",
            name: "Evil",
            category: "Test",
            svg: '<a href=javascript:alert(1)><path d="M1 1"/></a><foreignObject><iframe srcdoc="x"></iframe></foreignObject>',
          },
        ],
        modelValue: "evil",
      },
    });
    await nextTick();
    const html = wrapper.find(".ms-icon-picker__preview").html();
    expect(html).not.toContain("javascript:");
    expect(html).not.toContain("foreignObject");
    expect(html).not.toContain("iframe");
  });
});
