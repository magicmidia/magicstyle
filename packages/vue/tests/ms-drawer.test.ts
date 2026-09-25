import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import MsDrawer from "../src/components/MsDrawer/MsDrawer.vue";

describe("MsDrawer", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("does not render when open is false", () => {
    mount(MsDrawer, {
      props: { open: false },
      slots: { default: () => "Drawer Content" },
    });

    expect(document.querySelector(".ms-drawer-backdrop")).toBeNull();
  });

  it("renders when open is true with dialog role and title", async () => {
    mount(MsDrawer, {
      props: {
        open: true,
        title: "Side menu",
        description: "Main navigation",
        placement: "left",
        size: "sm",
      },
      slots: { default: () => "Drawer Body" },
    });

    await nextTick();

    const backdrop = document.querySelector(".ms-drawer-backdrop");
    expect(backdrop).not.toBeNull();

    const drawer = document.querySelector(".ms-drawer");
    expect(drawer).not.toBeNull();
    expect(drawer?.classList.contains("ms-drawer--placement-left")).toBe(true);
    expect(drawer?.classList.contains("ms-drawer--size-sm")).toBe(true);

    const title = document.querySelector(".ms-drawer__title");
    expect(title?.textContent).toContain("Side menu");
  });

  it("emits update:open and close when close button is clicked", async () => {
    const wrapper = mount(MsDrawer, {
      props: {
        open: true,
        title: "Filters",
      },
      slots: { default: () => "Body" },
    });

    await nextTick();

    const closeBtn = document.querySelector(".ms-drawer__close") as HTMLButtonElement;
    expect(closeBtn).not.toBeNull();
    closeBtn.click();

    expect(wrapper.emitted("update:open")?.[0]).toEqual([false]);
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
