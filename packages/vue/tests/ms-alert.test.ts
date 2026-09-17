import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import MsAlert from "../src/components/MsAlert/MsAlert.vue";

describe("MsAlert", () => {
  it("renders with default props and slot content", () => {
    const wrapper = mount(MsAlert, {
      slots: {
        default: () => "Mensagem informativa",
      },
    });

    expect(wrapper.classes()).toContain("ms-alert");
    expect(wrapper.attributes("role")).toBe("alert");
    expect(wrapper.attributes("data-tone")).toBe("info");
    expect(wrapper.attributes("data-variant")).toBe("soft");
    expect(wrapper.text()).toContain("Mensagem informativa");
  });

  it("renders title and description via props", () => {
    const wrapper = mount(MsAlert, {
      props: {
        title: "Atenção necessária",
        description: "Os dados serão sincronizados em instantes.",
        tone: "warning",
      },
    });

    expect(wrapper.find(".ms-alert-title").text()).toBe("Atenção necessária");
    expect(wrapper.find(".ms-alert-description").text()).toBe(
      "Os dados serão sincronizados em instantes.",
    );
    expect(wrapper.attributes("data-tone")).toBe("warning");
  });

  it("renders variants correctly", () => {
    const wrapper = mount(MsAlert, {
      props: {
        variant: "solid",
        tone: "danger",
      },
    });

    expect(wrapper.attributes("data-variant")).toBe("solid");
    expect(wrapper.attributes("data-tone")).toBe("danger");
  });

  it("handles dismissible state and emits close events", async () => {
    const wrapper = mount(MsAlert, {
      props: {
        dismissible: true,
        title: "Alerta Fechável",
      },
    });

    const closeBtn = wrapper.find(".ms-alert-close");
    expect(closeBtn.exists()).toBe(true);

    await closeBtn.trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
    expect(wrapper.emitted("update:open")).toBeTruthy();
    expect(wrapper.emitted("update:open")![0]).toEqual([false]);
    expect(wrapper.find(".ms-alert").exists()).toBe(false);
  });

  it("renders custom actions slot", () => {
    const wrapper = mount(MsAlert, {
      slots: {
        actions: () => h("button", { class: "action-btn" }, "Desfazer"),
      },
    });

    expect(wrapper.find(".ms-alert-actions").exists()).toBe(true);
    expect(wrapper.find(".action-btn").exists()).toBe(true);
  });

  it("supports size, align, and featured iconStyle", () => {
    const wrapper = mount(MsAlert, {
      props: {
        size: "lg",
        align: "start",
        iconStyle: "featured",
        tone: "success",
      },
    });

    expect(wrapper.classes()).toContain("ms-alert--lg");
    expect(wrapper.attributes("data-align")).toBe("start");
    expect(wrapper.find(".ms-alert-icon").classes()).toContain("ms-alert-icon--featured");
  });
});
