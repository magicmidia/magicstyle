import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, nextTick, ref } from "vue";
import { MsCheckbox, MsSwitch } from "../src/index.ts";

describe.each([
  ["MsCheckbox", MsCheckbox],
  ["MsSwitch", MsSwitch],
] as const)("%s two-way binding", (name, Component) => {
  it("works with plain v-model (Inertia useForm style)", async () => {
    const Host = defineComponent({
      components: { Component },
      setup: () => ({ remember: ref(false) }),
      template: `<Component v-model="remember" label="Lembrar" />`,
    });
    const wrapper = mount(Host);
    const input = wrapper.find("input");
    expect((input.element as HTMLInputElement).checked).toBe(false);
    await input.setValue(true);
    expect((wrapper.vm as unknown as { remember: boolean }).remember).toBe(true);
    (wrapper.vm as unknown as { remember: boolean }).remember = false;
    await nextTick();
    expect((input.element as HTMLInputElement).checked, name).toBe(false);
  });

  it("keeps v-model:checked working", async () => {
    const wrapper = mount(Component, { props: { checked: true } });
    const input = wrapper.find("input");
    expect((input.element as HTMLInputElement).checked).toBe(true);
    await input.setValue(false);
    expect(wrapper.emitted("update:checked")?.[0]).toEqual([false]);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([false]);
  });

  it("modelValue wins when both are bound", () => {
    const wrapper = mount(Component, { props: { modelValue: true, checked: false } });
    expect((wrapper.find("input").element as HTMLInputElement).checked).toBe(true);
  });
});
