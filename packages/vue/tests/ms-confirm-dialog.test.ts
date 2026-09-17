import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import MsConfirmDialog from "../src/components/MsConfirmDialog/MsConfirmDialog.vue";

describe("MsConfirmDialog", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("does not render when open is false", () => {
    mount(MsConfirmDialog, {
      props: { open: false },
    });

    expect(document.querySelector(".ms-confirm-dialog-backdrop")).toBeNull();
  });

  it("renders when open is true with alertdialog role, title and message", async () => {
    mount(MsConfirmDialog, {
      props: {
        open: true,
        tone: "danger",
        title: "Excluir Registro",
        message: "Esta ação não pode ser desfeita.",
        confirmLabel: "Sim, excluir",
        cancelLabel: "Voltar",
      },
    });

    await nextTick();

    const backdrop = document.querySelector(".ms-confirm-dialog-backdrop");
    expect(backdrop).not.toBeNull();

    const dialog = document.querySelector('[role="alertdialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog?.classList.contains("ms-confirm-dialog--tone-danger")).toBe(true);

    const title = document.querySelector(".ms-confirm-dialog__title");
    expect(title?.textContent).toContain("Excluir Registro");

    const message = document.querySelector(".ms-confirm-dialog__message");
    expect(message?.textContent).toContain("Esta ação não pode ser desfeita.");
  });

  it("emits cancel and update:open when cancel button is clicked", async () => {
    const wrapper = mount(MsConfirmDialog, {
      props: {
        open: true,
        cancelLabel: "Cancelar",
      },
    });

    await nextTick();

    const buttons = document.querySelectorAll(".ms-confirm-dialog__footer button");
    const cancelBtn = buttons[0] as HTMLButtonElement;
    cancelBtn.click();

    expect(wrapper.emitted("update:open")?.[0]).toEqual([false]);
    expect(wrapper.emitted("cancel")).toBeTruthy();
  });

  it("emits confirm when confirm button is clicked", async () => {
    const wrapper = mount(MsConfirmDialog, {
      props: {
        open: true,
        confirmLabel: "Confirmar",
      },
    });

    await nextTick();

    const buttons = document.querySelectorAll(".ms-confirm-dialog__footer button");
    const confirmBtn = buttons[1] as HTMLButtonElement;
    confirmBtn.click();

    expect(wrapper.emitted("confirm")).toBeTruthy();
  });
});
