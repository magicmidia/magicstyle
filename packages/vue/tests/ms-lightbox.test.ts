import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsLightbox } from "../src/index.ts";

describe("MsLightbox component", () => {
  const items = [
    { src: "/img1.jpg", title: "Photo 1", caption: "Caption 1" },
    { src: "/img2.jpg", title: "Photo 2", caption: "Caption 2" },
  ];

  it("renders modal when modelValue is true", () => {
    const wrapper = mount(MsLightbox, {
      props: { modelValue: true, items, index: 0 },
      attachTo: document.body,
    });
    const backdrop = document.querySelector(".ms-lightbox-backdrop");
    expect(backdrop).not.toBeNull();
    const img = document.querySelector(".ms-lightbox__img") as HTMLImageElement;
    expect(img.src).toContain("/img1.jpg");
    wrapper.unmount();
  });

  it("navigates to next image on click", async () => {
    const wrapper = mount(MsLightbox, {
      props: { modelValue: true, items, index: 0 },
      attachTo: document.body,
    });
    const nextBtn = document.querySelector(".ms-lightbox__next") as HTMLButtonElement;
    expect(nextBtn).not.toBeNull();
    nextBtn.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:index")?.[0]).toEqual([1]);
    wrapper.unmount();
  });

  it("closes when close button is clicked", async () => {
    const wrapper = mount(MsLightbox, {
      props: { modelValue: true, items, index: 0 },
      attachTo: document.body,
    });
    const closeBtn = document.querySelector(".ms-lightbox__close") as HTMLButtonElement;
    expect(closeBtn).not.toBeNull();
    closeBtn.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([false]);
    wrapper.unmount();
  });
});
