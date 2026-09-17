import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import MsAppShell from "../src/components/MsAppShell/MsAppShell.vue";
import MsTopbar from "../src/components/MsAppShell/MsTopbar.vue";
import MsSidebar from "../src/components/MsAppShell/MsSidebar.vue";
import MsNavigationRail from "../src/components/MsAppShell/MsNavigationRail.vue";
import MsContent from "../src/components/MsAppShell/MsContent.vue";
import MsFooter from "../src/components/MsAppShell/MsFooter.vue";
import MsStatusBar from "../src/components/MsAppShell/MsStatusBar.vue";

describe("MsAppShell Suite", () => {
  it("renders complete app shell structure with slots", () => {
    const wrapper = mount(MsAppShell, {
      slots: {
        topbar: () => h(MsTopbar, () => "Topo"),
        sidebar: () => h(MsSidebar, () => "Menu"),
        default: () => h(MsContent, () => "Conteúdo Principal"),
        footer: () => h(MsFooter, () => "Rodapé"),
        statusbar: () => h(MsStatusBar, { tone: "success" }, () => "Online"),
      },
    });

    expect(wrapper.classes()).toContain("ms-app-shell");
    expect(wrapper.classes()).toContain("ms-app-shell--full-height");
    expect(wrapper.find(".ms-topbar").exists()).toBe(true);
    expect(wrapper.find(".ms-sidebar").exists()).toBe(true);
    expect(wrapper.find(".ms-content").exists()).toBe(true);
    expect(wrapper.find(".ms-footer").exists()).toBe(true);
    expect(wrapper.find(".ms-status-bar").exists()).toBe(true);
    expect(wrapper.find(".ms-status-bar").classes()).toContain("ms-status-bar--success");
  });

  it("manages sidebar collapse through shell context", async () => {
    const TestComponent = {
      components: { MsAppShell, MsSidebar },
      props: ["sidebarCollapsed"],
      template: `
        <MsAppShell :sidebar-collapsed="sidebarCollapsed">
          <template #sidebar>
            <MsSidebar>Menu</MsSidebar>
          </template>
        </MsAppShell>
      `,
    };

    const wrapper = mount(TestComponent, {
      props: {
        sidebarCollapsed: false,
      },
    });

    expect(wrapper.find(".ms-sidebar").classes()).not.toContain("ms-sidebar--collapsed");

    await wrapper.setProps({ sidebarCollapsed: true });
    expect(wrapper.find(".ms-sidebar").classes()).toContain("ms-sidebar--collapsed");
  });

  it("renders navigation rail with proper aria-label", () => {
    const wrapper = mount(MsNavigationRail, {
      slots: {
        default: () => "Icons",
      },
    });

    expect(wrapper.classes()).toContain("ms-navigation-rail");
    expect(wrapper.attributes("aria-label")).toBe("Navegação compacta");
  });
});
