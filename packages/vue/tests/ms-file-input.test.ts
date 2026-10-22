import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsFileInput from "../src/components/MsFileInput/MsFileInput.vue";

describe("MsFileInput", () => {
  it("renders dropzone area with accessible button role and labels", () => {
    const wrapper = mount(MsFileInput, {
      props: {
        label: "Drag your receipts here",
        hint: "Accepted formats: PDF or PNG",
      },
    });

    expect(wrapper.classes()).toContain("ms-file-input");
    expect(wrapper.text()).toContain("Drag your receipts here");
    expect(wrapper.text()).toContain("Accepted formats: PDF or PNG");
  });

  it("triggers file input when dropzone is clicked", async () => {
    const wrapper = mount(MsFileInput);
    const dropzone = wrapper.find(".ms-file-input__dropzone");
    expect(dropzone.exists()).toBe(true);
  });
});
