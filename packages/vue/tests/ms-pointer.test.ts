import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsPointer } from "../src/index.ts";

describe("MsPointer component", () => {
  it("renders custom pointer indicator in document body", () => {
    const wrapper = mount(MsPointer, {
      props: { variant: "ring" },
      attachTo: document.body,
    });
    const pointer = document.querySelector(".ms-pointer");
    expect(pointer).not.toBeNull();
    expect(pointer?.classList.contains("ms-pointer--ring")).toBe(true);
    wrapper.unmount();
  });
});
