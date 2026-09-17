import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsFormWizard } from "../src/index.ts";

describe("MsFormWizard component", () => {
  const steps = [
    { id: "step1", title: "Conta", description: "Dados de acesso" },
    { id: "step2", title: "Perfil", description: "Informações pessoais" },
    { id: "step3", title: "Confirmação", description: "Revise os dados" },
  ];

  it("renders steps tracker and initial step content", () => {
    const wrapper = mount(MsFormWizard, {
      props: { steps, modelValue: 0 },
      slots: {
        step1: "Conteúdo do Passo 1",
        step2: "Conteúdo do Passo 2",
        step3: "Conteúdo do Passo 3",
      },
    });
    const stepEls = wrapper.findAll(".ms-form-wizard__step");
    expect(stepEls.length).toBe(3);
    expect(stepEls[0]?.classes()).toContain("ms-form-wizard__step--active");
    expect(wrapper.text()).toContain("Conteúdo do Passo 1");
  });

  it("navigates between steps when next button is clicked", async () => {
    const wrapper = mount(MsFormWizard, {
      props: { steps, modelValue: 0 },
      slots: {
        step1: "Step 1 Content",
        step2: "Step 2 Content",
      },
    });
    const nextBtn = wrapper.findAll("button").find((b) => b.text().includes("Avançar"));
    expect(nextBtn?.exists()).toBe(true);

    await nextBtn?.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([1]);
    expect(wrapper.emitted("step-change")?.[0]).toEqual([0, 1]);
  });
});
