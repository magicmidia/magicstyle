import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick } from "vue";
import MsProvider from "../src/components/MsProvider/MsProvider.vue";
import MsThemeScope from "../src/components/MsThemeScope/MsThemeScope.vue";
import { useThemeContext } from "../src/composables/use-theme-context.ts";

describe("MsProvider & MsThemeScope (doc 07 §2-5)", () => {
  it("renders MsProvider with default wrapper attributes", () => {
    const wrapper = mount(MsProvider, {
      slots: {
        default: () => h("span", "Content inside provider"),
      },
    });

    expect(wrapper.classes()).toContain("ms-provider");
    expect(wrapper.attributes("data-ms-theme")).toBe("magic");
    expect(wrapper.attributes("data-ms-density")).toBe("comfortable");
    expect(wrapper.attributes("data-ms-contrast")).toBe("normal");
    expect(wrapper.attributes("data-ms-radius")).toBe("medium");
    expect(wrapper.attributes("dir")).toBe("ltr");
    expect(wrapper.text()).toContain("Content inside provider");
  });

  it("applies attributes to documentElement when target is root", async () => {
    const wrapper = mount(MsProvider, {
      props: {
        target: "root",
        theme: "graphite",
        density: "compact",
        contrast: "high",
        radius: "sharp",
      },
    });

    await nextTick();

    const rootEl = document.documentElement;
    expect(rootEl.getAttribute("data-ms-theme")).toBe("graphite");
    expect(rootEl.getAttribute("data-ms-density")).toBe("compact");
    expect(rootEl.getAttribute("data-ms-contrast")).toBe("high");
    expect(rootEl.getAttribute("data-ms-radius")).toBe("sharp");
    wrapper.unmount();
  });

  it("allows MsThemeScope to inherit parent context and override specific dials", () => {
    const ConsumerChild = defineComponent({
      setup() {
        const themeCtx = useThemeContext();
        return () =>
          h("div", { class: "theme-consumer" }, [
            h("span", { class: "theme-val" }, themeCtx?.theme.value),
            h("span", { class: "density-val" }, themeCtx?.density.value),
            h("span", { class: "contrast-val" }, themeCtx?.contrast.value),
          ]);
      },
    });

    const wrapper = mount({
      setup() {
        return () =>
          h(MsProvider, { theme: "magic", density: "comfortable", contrast: "normal" }, () => [
            h(MsThemeScope, { theme: "graphite", density: "compact" }, () => h(ConsumerChild)),
          ]);
      },
    });

    const scope = wrapper.findComponent(MsThemeScope);
    expect(scope.classes()).toContain("ms-theme-scope");
    expect(scope.attributes("data-ms-theme")).toBe("graphite");
    expect(scope.attributes("data-ms-density")).toBe("compact");
    // Inherited contrast from parent provider:
    expect(scope.attributes("data-ms-contrast")).toBe("normal");

    const consumer = wrapper.find(".theme-consumer");
    expect(consumer.find(".theme-val").text()).toBe("graphite");
    expect(consumer.find(".density-val").text()).toBe("compact");
    expect(consumer.find(".contrast-val").text()).toBe("normal");
  });

  it("updates attributes reactively via context setter methods", async () => {
    let capturedContext: ReturnType<typeof useThemeContext>;

    const Consumer = defineComponent({
      setup() {
        capturedContext = useThemeContext();
        return () => h("div", "Consumer");
      },
    });

    const wrapper = mount(MsProvider, {
      props: {
        theme: "magic",
        colorMode: "light",
      },
      slots: {
        default: () => h(Consumer),
      },
    });

    expect(wrapper.attributes("data-ms-theme")).toBe("magic");
    expect(wrapper.attributes("data-ms-color-mode")).toBe("light");

    capturedContext?.setTheme("graphite");
    capturedContext?.setColorMode("dark");

    await nextTick();

    expect(wrapper.attributes("data-ms-theme")).toBe("graphite");
    expect(wrapper.attributes("data-ms-color-mode")).toBe("dark");
  });
});
