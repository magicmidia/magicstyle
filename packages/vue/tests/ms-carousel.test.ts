import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsCarousel from "../src/components/MsCarousel/MsCarousel.vue";
import MsCarouselSlide from "../src/components/MsCarousel/MsCarouselSlide.vue";

describe("MsCarousel & MsCarouselSlide", () => {
  it("renders slides, navigation arrows and indicator dots", async () => {
    const wrapper = mount({
      components: { MsCarousel, MsCarouselSlide },
      template: `
        <MsCarousel :total-slides="3" :model-value="0">
          <MsCarouselSlide>Slide 1</MsCarouselSlide>
          <MsCarouselSlide>Slide 2</MsCarouselSlide>
          <MsCarouselSlide>Slide 3</MsCarouselSlide>
        </MsCarousel>
      `,
    });

    const carousel = wrapper.find(".ms-carousel");
    expect(carousel.exists()).toBe(true);

    const indicators = wrapper.findAll(".ms-carousel__indicator");
    expect(indicators.length).toBe(3);
    expect(indicators[0]!.classes()).toContain("ms-carousel__indicator--active");

    const nextBtn = wrapper.find(".ms-carousel__arrow--next");
    expect(nextBtn.exists()).toBe(true);

    await nextBtn.trigger("click");
    const carouselComp = wrapper.findComponent(MsCarousel);
    expect(carouselComp.emitted("update:modelValue")?.[0]).toEqual([1]);
  });
});
