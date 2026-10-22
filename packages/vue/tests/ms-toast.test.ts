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

    const id = info("Operation completed successfully!", { title: "Notice" });
    expect(toasts.value.length).toBe(1);
    expect(toasts.value[0]!.title).toBe("Notice");
    expect(toasts.value[0]!.tone).toBe("info");

    remove(id);
    expect(toasts.value.length).toBe(0);
  });

  it("renders toast card and handles dismiss emit", async () => {
    const toastItem = {
      id: "test-toast-1",
      title: "Saved",
      message: "Your data was updated",
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
    expect(wrapper.text()).toContain("Saved");
    expect(wrapper.text()).toContain("Your data was updated");

    const closeBtn = wrapper.find(".ms-toast__close");
    expect(closeBtn.exists()).toBe(true);

    await closeBtn.trigger("click");
    expect(wrapper.emitted("dismiss")?.[0]).toEqual(["test-toast-1"]);
  });
});
