import { afterEach, describe, expect, it, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { defineComponent, nextTick, ref } from "vue";
import {
  MsCarousel,
  MsCarouselSlide,
  MsCollapse,
  MsContextMenu,
  MsHoverCard,
} from "../src/index.ts";

const Host = defineComponent({
  components: { MsCarousel, MsCarouselSlide },
  props: { autoplay: { type: Boolean, default: true } },
  setup: () => ({ index: ref(0) }),
  template: `
    <MsCarousel v-model="index" :total-slides="3" :autoplay="autoplay" :interval="1000">
      <MsCarouselSlide>Um</MsCarouselSlide>
      <MsCarouselSlide>Dois</MsCarouselSlide>
      <MsCarouselSlide>Três</MsCarouselSlide>
    </MsCarousel>`,
});

const indexOf = (wrapper: VueWrapper) => (wrapper.vm as unknown as { index: number }).index;

function mockReducedMotion(reduce: boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: reduce && query.includes("reduce"),
    media: query,
    addEventListener() {},
    removeEventListener() {},
  }));
}

describe("MsCarousel rotation (WCAG 2.2.2)", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("rotates, and the pause control stops it and switches its label", async () => {
    mockReducedMotion(false);
    vi.useFakeTimers();
    const wrapper = mount(Host);
    const track = wrapper.find(".ms-carousel__track");
    expect(track.attributes("aria-live")).toBe("off");
    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(indexOf(wrapper)).toBe(1);

    const toggle = wrapper.find(".ms-carousel__rotation");
    expect(toggle.attributes("aria-label")).toBe("Pausar rotação automática");
    await toggle.trigger("click");
    expect(toggle.attributes("aria-label")).toBe("Iniciar rotação automática");
    expect(track.attributes("aria-live")).toBe("polite");
    vi.advanceTimersByTime(2000);
    await nextTick();
    expect(indexOf(wrapper)).toBe(1);
  });

  it("pauses while hovered or focused and resumes when focus leaves", async () => {
    mockReducedMotion(false);
    vi.useFakeTimers();
    const wrapper = mount(Host, { attachTo: document.body });
    const root = wrapper.find(".ms-carousel");
    // Two intervals (not a multiple of the 3 slides, which would wrap back to the same index).
    await root.trigger("focusin");
    vi.advanceTimersByTime(2000);
    await nextTick();
    expect(indexOf(wrapper)).toBe(0);

    await root.trigger("focusout", { relatedTarget: document.body });
    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(indexOf(wrapper)).toBe(1);

    await root.trigger("mouseenter");
    vi.advanceTimersByTime(2000);
    await nextTick();
    expect(indexOf(wrapper)).toBe(1);
    wrapper.unmount();
  });

  it("never starts under prefers-reduced-motion", async () => {
    mockReducedMotion(true);
    vi.useFakeTimers();
    const wrapper = mount(Host);
    await nextTick();
    vi.advanceTimersByTime(2000);
    await nextTick();
    expect(indexOf(wrapper)).toBe(0);
    expect(wrapper.find(".ms-carousel__rotation").attributes("aria-label")).toBe(
      "Iniciar rotação automática",
    );
  });

  it("labels slides, hides inactive ones and marks the current indicator", async () => {
    mockReducedMotion(false);
    const wrapper = mount(Host, { props: { autoplay: false } });
    await nextTick();
    const slides = wrapper.findAll(".ms-carousel-slide");
    expect(slides.map((s) => s.attributes("aria-label"))).toEqual(["1 de 3", "2 de 3", "3 de 3"]);
    expect(slides[0]!.attributes("inert")).toBeUndefined();
    expect(slides[1]!.attributes("inert")).toBeDefined();
    const indicators = wrapper.findAll(".ms-carousel__indicator");
    expect(indicators[0]!.attributes("aria-current")).toBe("true");
    expect(indicators[1]!.attributes("aria-current")).toBeUndefined();
    expect(wrapper.find(".ms-carousel__rotation").exists()).toBe(false);
  });
});

describe("MsCollapse disclosure", () => {
  it("points the header at the content and keeps closed content out of the tab order", async () => {
    const wrapper = mount(MsCollapse, {
      props: { title: "Detalhes", modelValue: false },
      slots: { default: '<a href="#x">Link interno</a>' },
    });
    const header = wrapper.find("button.ms-collapse__header");
    const controls = header.attributes("aria-controls");
    expect(controls).toBeTruthy();
    const content = wrapper.find(`#${controls}`);
    expect(content.exists()).toBe(true);
    const inertHost = wrapper.find("[inert]");
    expect(inertHost.exists()).toBe(true);
    expect(inertHost.element.contains(content.element)).toBe(true);

    await wrapper.setProps({ modelValue: true });
    expect(wrapper.find("[inert]").exists()).toBe(false);
  });
});

describe("MsHoverCard", () => {
  it("is not announced as a tooltip and closes with Escape", async () => {
    vi.useFakeTimers();
    const wrapper = mount(MsHoverCard, {
      props: { openDelay: 0, closeDelay: 0 },
      slots: { default: '<a href="#">@perfil</a>', content: "<button>Seguir</button>" },
    });
    await wrapper.trigger("mouseenter");
    vi.advanceTimersByTime(10);
    await nextTick();
    const content = wrapper.find(".ms-hover-card__content");
    expect(content.exists()).toBe(true);
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false);

    await wrapper.trigger("keydown", { key: "Escape" });
    vi.advanceTimersByTime(10);
    await nextTick();
    expect(wrapper.find(".ms-hover-card__content").exists()).toBe(false);
    vi.useRealTimers();
  });
});

describe("MsContextMenu keyboard", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("opens with Shift+F10, skips dividers with arrows and closes with Escape", async () => {
    const wrapper = mount(MsContextMenu, {
      attachTo: document.body,
      props: {
        items: [
          { id: "edit", label: "Editar" },
          { divider: true },
          { id: "delete", label: "Excluir" },
        ],
      },
      slots: { default: () => "Área" },
    });
    const trigger = wrapper.find("[data-ms-context-menu-trigger]");
    (trigger.element as HTMLElement).focus();
    await trigger.trigger("keydown", { key: "F10", shiftKey: true });
    await nextTick();
    await nextTick();

    const menu = document.querySelector<HTMLElement>('[role="menu"]');
    expect(menu).not.toBeNull();
    const items = [...menu!.querySelectorAll<HTMLElement>('[role="menuitem"]')];
    expect(items.map((i) => i.textContent?.trim())).toEqual(["Editar", "Excluir"]);
    expect(document.activeElement).toBe(items[0]);

    items[0]!.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    await nextTick();
    expect(document.activeElement).toBe(items[1]);

    document.activeElement!.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    await nextTick();
    await nextTick();
    expect(document.querySelector('[role="menu"]')).toBeNull();
    wrapper.unmount();
  });
});
