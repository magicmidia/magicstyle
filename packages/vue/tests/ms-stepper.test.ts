import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsStepper from "../src/components/MsStepper/MsStepper.vue";
import MsStep from "../src/components/MsStepper/MsStep.vue";

describe("MsStepper & MsStep", () => {
  it("renders steps with status based on modelValue", async () => {
    const wrapper = mount({
      components: { MsStepper, MsStep },
      template: `
        <MsStepper :model-value="1" clickable>
          <MsStep :index="0" title="Identificação" />
          <MsStep :index="1" title="Endereço" />
          <MsStep :index="2" title="Pagamento" />
        </MsStepper>
      `,
    });

    const steps = wrapper.findAll(".ms-step");
    expect(steps.length).toBe(3);

    expect(steps[0]!.classes()).toContain("ms-step--complete");
    expect(steps[1]!.classes()).toContain("ms-step--current");
    expect(steps[2]!.classes()).toContain("ms-step--upcoming");

    // Click step 2
    const trigger2 = steps[2]!.find(".ms-step__trigger");
    await trigger2.trigger("click");

    const stepper = wrapper.findComponent(MsStepper);
    expect(stepper.emitted("update:modelValue")?.[0]).toEqual([2]);
  });
});
