import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsProgressRadial from "../src/components/MsProgressRadial/MsProgressRadial.vue";

describe("MsProgressRadial", () => {
  it("renders with percentage value and accessible progressbar role", () => {
    const wrapper = mount(MsProgressRadial, {
      props: {
        value: 75,
        max: 100,
        tone: "success",
      },
    });

    expect(wrapper.classes()).toContain("ms-progress-radial");
    expect(wrapper.classes()).toContain("ms-progress-radial--tone-success");
    expect(wrapper.attributes("role")).toBe("progressbar");
    expect(wrapper.attributes("aria-valuenow")).toBe("75");
    expect(wrapper.text()).toContain("75%");
  });

  it("handles indeterminate mode correctly", () => {
    const wrapper = mount(MsProgressRadial, {
      props: {
        indeterminate: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-progress-radial--indeterminate");
    expect(wrapper.attributes("aria-valuenow")).toBeUndefined();
  });
});
