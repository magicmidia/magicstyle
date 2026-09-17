import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import MsToast from "../src/components/MsToast/MsToast.vue";
import { useToast } from "../src/components/MsToast/useToast.ts";

describe("MsToast & useToast", () => {
  const { toasts, info, remove, clear } = useToast();

  beforeEach(() => {
    clear();
  });

  it("manages toast queue via useToast composable", () => {
    expect(toasts.value.length).toBe(0);

    const id = info("Operação realizada com sucesso!", { title: "Aviso" });
    expect(toasts.value.length).toBe(1);
    expect(toasts.value[0]!.title).toBe("Aviso");
    expect(toasts.value[0]!.tone).toBe("info");

    remove(id);
    expect(toasts.value.length).toBe(0);
  });

  it("renders toast card and handles dismiss emit", async () => {
    const toastItem = {
      id: "test-toast-1",
      title: "Salvo",
      message: "Seus dados foram atualizados",
      tone: "success" as const,
      placement: "top-right" as const,
      duration: 5000,
      dismissible: true,
    };

    const wrapper = mount(MsToast, {
      props: {
        toast: toastItem,
      },
    });

    expect(wrapper.classes()).toContain("ms-toast");
    expect(wrapper.classes()).toContain("ms-toast--tone-success");
    expect(wrapper.text()).toContain("Salvo");
    expect(wrapper.text()).toContain("Seus dados foram atualizados");

    const closeBtn = wrapper.find(".ms-toast__close");
    expect(closeBtn.exists()).toBe(true);

    await closeBtn.trigger("click");
    expect(wrapper.emitted("dismiss")?.[0]).toEqual(["test-toast-1"]);
  });
});
