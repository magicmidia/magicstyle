import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import MsContextMenu from "../src/components/MsContextMenu/MsContextMenu.vue";
import type { MsContextMenuItem } from "../src/components/MsContextMenu/types.ts";

describe("MsContextMenu", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  const menuItems: MsContextMenuItem[] = [
    { id: "edit", label: "Editar", icon: "✏️", shortcut: "Ctrl+E" },
    { divider: true },
    { id: "delete", label: "Excluir", danger: true },
  ];

  it("opens context menu on right-click", async () => {
    const wrapper = mount(MsContextMenu, {
      props: {
        items: menuItems,
      },
      slots: {
        default: () => `<div class="target-area">Clique com o botão direito aqui</div>`,
      },
    });

    const trigger = wrapper.find("[data-ms-context-menu-trigger]");
    expect(trigger.exists()).toBe(true);

    await trigger.trigger("contextmenu", {
      clientX: 120,
      clientY: 240,
    });

    await nextTick();

    const panel = document.querySelector(".ms-context-menu-panel");
    expect(panel).not.toBeNull();
    expect(panel?.textContent).toContain("Editar");
    expect(panel?.textContent).toContain("Excluir");
  });
});
