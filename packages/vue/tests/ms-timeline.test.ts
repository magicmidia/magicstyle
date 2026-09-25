import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsTimeline from "../src/components/MsTimeline/MsTimeline.vue";
import MsTimelineItem from "../src/components/MsTimeline/MsTimelineItem.vue";

describe("MsTimeline & MsTimelineItem", () => {
  it("renders timeline in vertical direction with items", () => {
    const wrapper = mount({
      components: { MsTimeline, MsTimelineItem },
      template: `
        <MsTimeline direction="vertical">
          <MsTimelineItem title="Step 1" timestamp="10:00" tone="success">Home</MsTimelineItem>
          <MsTimelineItem title="Step 2" timestamp="11:00" tone="primary">Meio</MsTimelineItem>
        </MsTimeline>
      `,
    });

    expect(wrapper.classes()).toContain("ms-timeline");
    expect(wrapper.classes()).toContain("ms-timeline--direction-vertical");

    const items = wrapper.findAll(".ms-timeline-item");
    expect(items.length).toBe(2);
    expect(items[0]!.classes()).toContain("ms-timeline-item--tone-success");
    expect(items[0]!.text()).toContain("Step 1");
    expect(items[0]!.text()).toContain("10:00");
  });

  it("supports horizontal orientation", () => {
    const wrapper = mount({
      components: { MsTimeline, MsTimelineItem },
      template: `
        <MsTimeline direction="horizontal">
          <MsTimelineItem title="Milestone 1" />
        </MsTimeline>
      `,
    });

    expect(wrapper.classes()).toContain("ms-timeline--direction-horizontal");
  });
});
