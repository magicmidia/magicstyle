import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsRow from "../src/components/MsGrid/MsRow.vue";
import MsCol from "../src/components/MsGrid/MsCol.vue";

describe("MsRow and MsCol", () => {
  it("renders row with default and gutter props", () => {
    const wrapper = mount(MsRow, {
      props: { gutter: 16, justify: "center", align: "middle" },
      slots: { default: "<div>Col</div>" },
    });
    expect(wrapper.classes()).toContain("ms-row");
    expect(wrapper.classes()).toContain("ms-row--justify-center");
    expect(wrapper.classes()).toContain("ms-row--align-middle");
    expect(wrapper.attributes("style")).toContain("--ms-row-gap-x: 16px");
    expect(wrapper.attributes("style")).toContain("--ms-row-gap-y: 16px");
  });

  it("renders col with span, offset, and responsive breakpoints", () => {
    const wrapper = mount(MsCol, {
      props: { span: 6, offset: 2, sm: 12, md: 8, lg: 6, xl: 4 },
      slots: { default: "Content" },
    });
    expect(wrapper.classes()).toContain("ms-col");
    expect(wrapper.classes()).toContain("ms-col--span-6");
    expect(wrapper.classes()).toContain("ms-col--offset-2");
    expect(wrapper.classes()).toContain("ms-col--sm-12");
    expect(wrapper.classes()).toContain("ms-col--md-8");
    expect(wrapper.classes()).toContain("ms-col--lg-6");
    expect(wrapper.classes()).toContain("ms-col--xl-4");
  });
});
