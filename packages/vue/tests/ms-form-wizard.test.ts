import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsFormWizard } from "../src/index.ts";

describe("MsFormWizard component", () => {
  const steps = [
    { id: "step1", title: "Account", description: "Login details" },
    { id: "step2", title: "Profile", description: "Personal information" },
    { id: "step3", title: "Confirmation", description: "Review the details" },
  ];

  it("renders steps tracker and initial step content", () => {
    const wrapper = mount(MsFormWizard, {
      props: { steps, modelValue: 0 },
      slots: {
        step1: "Step 1 content",
        step2: "Step 2 content",
        step3: "Step 3 content",
      },
    });
    const stepEls = wrapper.findAll(".ms-form-wizard__step");
    expect(stepEls.length).toBe(3);
    expect(stepEls[0]?.classes()).toContain("ms-form-wizard__step--active");
    expect(wrapper.text()).toContain("Step 1 content");
  });

  it("navigates between steps when next button is clicked", async () => {
    const wrapper = mount(MsFormWizard, {
      props: { steps, modelValue: 0 },
      slots: {
        step1: "Step 1 Content",
        step2: "Step 2 Content",
      },
    });
    const nextBtn = wrapper.findAll("button").find((b) => b.text().includes("Next"));
    expect(nextBtn?.exists()).toBe(true);

    await nextBtn?.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([1]);
    expect(wrapper.emitted("step-change")?.[0]).toEqual([0, 1]);
  });
});
