import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsPage from "../src/components/MsPage/MsPage.vue";
import MsPageHeader from "../src/components/MsPage/MsPageHeader.vue";
import MsPageActions from "../src/components/MsPage/MsPageActions.vue";

describe("MsPage Suite", () => {
  it("renders page with default container classes", () => {
    const wrapper = mount(MsPage, {
      slots: {
        default: "Page content",
      },
    });

    expect(wrapper.classes()).toContain("ms-page");
    expect(wrapper.text()).toContain("Page content");
  });

  it("applies fluid and compact classes", () => {
    const fluidWrapper = mount(MsPage, { props: { fluid: true } });
    expect(fluidWrapper.classes()).toContain("ms-page--fluid");

    const compactWrapper = mount(MsPage, { props: { compact: true } });
    expect(compactWrapper.classes()).toContain("ms-page--compact");
  });

  it("renders header with title and description", () => {
    const wrapper = mount(MsPageHeader, {
      props: {
        title: "Overview",
        description: "Consolidated system metrics.",
      },
      slots: {
        actions: "<button>Action</button>",
      },
    });

    expect(wrapper.find("h1").text()).toBe("Overview");
    expect(wrapper.find("p").text()).toBe("Consolidated system metrics.");
    expect(wrapper.find(".ms-page-header__actions").exists()).toBe(true);
  });

  it("renders page actions with alignment", () => {
    const wrapper = mount(MsPageActions, {
      props: {
        align: "start",
      },
      slots: {
        default: "<button>Save</button>",
      },
    });

    expect(wrapper.classes()).toContain("ms-page-actions");
    expect(wrapper.classes()).toContain("ms-page-actions--start");
  });
});
