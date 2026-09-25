import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import MsDialog from "../src/components/MsDialog/MsDialog.vue";

describe("MsDialog", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("does not render when open is false", () => {
    mount(MsDialog, {
      props: { open: false },
      slots: { default: () => "Content" },
    });

    expect(document.querySelector(".ms-dialog-overlay")).toBeNull();
  });

  it("renders when open is true with accessible dialog role and title", async () => {
    mount(MsDialog, {
      props: {
        open: true,
        title: "Confirm action",
        description: "Are you sure you want to continue?",
      },
      slots: { default: () => "Dialog body" },
    });

    await nextTick();

    const overlay = document.querySelector(".ms-dialog-overlay");
    expect(overlay).not.toBeNull();

    const dialog = document.querySelector('[role="dialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog?.getAttribute("aria-modal")).toBe("true");

    const title = document.querySelector(".ms-dialog-title");
    expect(title?.textContent?.trim()).toBe("Confirm action");

    const desc = document.querySelector(".ms-dialog-description");
    expect(desc?.textContent?.trim()).toBe("Are you sure you want to continue?");

    const titleId = title?.getAttribute("id");
    const descId = desc?.getAttribute("id");
    expect(dialog?.getAttribute("aria-labelledby")).toBe(titleId);
    expect(dialog?.getAttribute("aria-describedby")).toBe(descId);
  });

  it("emits update:open and close when clicking close button", async () => {
    const wrapper = mount(MsDialog, {
      props: {
        open: true,
        title: "Modal",
      },
      slots: { default: () => "Body" },
    });

    await nextTick();

    const closeBtn = document.querySelector(".ms-dialog-close") as HTMLButtonElement | null;
    expect(closeBtn).not.toBeNull();

    closeBtn?.click();
    await nextTick();
    expect(wrapper.emitted("update:open")).toBeTruthy();
    expect(wrapper.emitted("update:open")![0]).toEqual([false]);
    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("closes on Escape key press when closeOnEscape is true", async () => {
    const wrapper = mount(MsDialog, {
      props: {
        open: true,
        title: "Modal",
        closeOnEscape: true,
      },
    });

    await nextTick();

    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await nextTick();

    expect(wrapper.emitted("update:open")).toBeTruthy();
    expect(wrapper.emitted("update:open")![0]).toEqual([false]);
  });

  it("does not close on Escape key press when closeOnEscape is false", async () => {
    const wrapper = mount(MsDialog, {
      props: {
        open: true,
        title: "Modal",
        closeOnEscape: false,
      },
    });

    await nextTick();

    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await nextTick();

    expect(wrapper.emitted("update:open")).toBeFalsy();
  });

  it("closes on clicking the backdrop overlay", async () => {
    const wrapper = mount(MsDialog, {
      props: {
        open: true,
        closeOnOutsideClick: true,
      },
    });

    await nextTick();

    const overlay = document.querySelector(".ms-dialog-overlay") as HTMLElement | null;
    expect(overlay).not.toBeNull();
    overlay?.click();
    await nextTick();

    expect(wrapper.emitted("update:open")).toBeTruthy();
    expect(wrapper.emitted("update:open")![0]).toEqual([false]);
  });

  it("applies data-size attribute correctly", async () => {
    mount(MsDialog, {
      props: {
        open: true,
        size: "lg",
      },
    });

    await nextTick();

    const dialog = document.querySelector(".ms-dialog-content");
    expect(dialog?.getAttribute("data-size")).toBe("lg");
  });

  it("supports placement, tone and role customizations", async () => {
    mount(MsDialog, {
      props: {
        open: true,
        placement: "bottom",
        tone: "danger",
        role: "alertdialog",
      },
    });

    await nextTick();

    const overlay = document.querySelector(".ms-dialog-overlay");
    expect(overlay?.classList.contains("ms-dialog-overlay--bottom")).toBe(true);

    const dialog = document.querySelector(".ms-dialog-content");
    expect(dialog?.getAttribute("data-tone")).toBe("danger");
    expect(dialog?.getAttribute("role")).toBe("alertdialog");
  });
});
