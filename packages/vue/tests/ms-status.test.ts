import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsStatus from "../src/components/MsStatus/MsStatus.vue";

describe("MsStatus", () => {
  it("renders status indicator dot with label", () => {
    const wrapper = mount(MsStatus, {
      props: {
        tone: "success",
        label: "Online",
      },
    });

    expect(wrapper.classes()).toContain("ms-status");
    expect(wrapper.classes()).toContain("ms-status--tone-success");
    expect(wrapper.text()).toContain("Online");
  });

  it("renders pulse animation when pulse prop is true", () => {
    const wrapper = mount(MsStatus, {
      props: {
        tone: "danger",
        pulse: true,
        label: "On alert",
      },
    });

    expect(wrapper.find(".ms-status__pulse").exists()).toBe(true);
    expect(wrapper.classes()).toContain("ms-status--tone-danger");
  });
});
