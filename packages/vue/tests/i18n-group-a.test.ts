import { afterEach, describe, expect, it } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { h, nextTick } from "vue";
import {
  MsAlert,
  MsBreadcrumbs,
  MsCarousel,
  MsCarouselSlide,
  MsCommandPalette,
  MsProvider,
} from "../src/index.ts";

const mounted: VueWrapper[] = [];
afterEach(() => {
  while (mounted.length) mounted.pop()?.unmount();
});

const carousel = () =>
  h(MsCarousel, { totalSlides: 2, modelValue: 0 }, () => [
    h(MsCarouselSlide, null, () => "Um"),
    h(MsCarouselSlide, null, () => "Dois"),
  ]);

describe("group A components read their strings from the messages", () => {
  it("default (pt-BR) strings render without a provider", () => {
    const wrapper = mount(() => [
      h(MsAlert, { dismissible: true, title: "Atenção" }),
      h(MsBreadcrumbs, {
        items: [{ label: "A", href: "/a" }, { label: "B", href: "/b" }, { label: "C" }],
        maxItems: 2,
      }),
      carousel(),
    ]);
    mounted.push(wrapper);
    expect(wrapper.find(".ms-alert-close").attributes("aria-label")).toBe("Fechar alerta");
    expect(wrapper.find("nav").attributes("aria-label")).toBe("Navegação estrutural");
    expect(wrapper.find(".ms-breadcrumbs__ellipsis").attributes("aria-label")).toBe(
      "Mostrar todos os níveis",
    );
    expect(wrapper.find(".ms-carousel").attributes("aria-label")).toBe("Galeria de slides");
    expect(wrapper.findAll(".ms-carousel-slide")[1]?.attributes("aria-label")).toBe("2 de 2");
  });

  it('renders English strings inside <MsProvider locale="en-US">', async () => {
    const wrapper = mount(MsProvider, {
      props: { locale: "en-US" },
      slots: {
        default: () => [
          h(MsAlert, { dismissible: true, title: "Heads up" }),
          h(MsBreadcrumbs, {
            items: [{ label: "A", href: "/a" }, { label: "B", href: "/b" }, { label: "C" }],
            maxItems: 2,
          }),
          carousel(),
          h(MsCommandPalette, { modelValue: true, hotkey: false }),
        ],
      },
      attachTo: document.body,
    });
    mounted.push(wrapper);
    await nextTick();

    expect(wrapper.find(".ms-alert-close").attributes("aria-label")).toBe("Dismiss alert");
    expect(wrapper.find("nav").attributes("aria-label")).toBe("Breadcrumb");
    expect(wrapper.find(".ms-breadcrumbs__ellipsis").attributes("aria-label")).toBe(
      "Show all breadcrumb items",
    );
    expect(wrapper.find(".ms-carousel").attributes("aria-label")).toBe("Slides");
    expect(wrapper.find(".ms-carousel__arrow--next").attributes("aria-label")).toBe("Next slide");
    expect(wrapper.findAll(".ms-carousel-slide")[0]?.attributes("aria-label")).toBe("1 of 2");

    const palette = document.querySelector(".ms-command-palette");
    expect(palette?.getAttribute("aria-label")).toBe("Command palette");
    expect(document.querySelector(".ms-command-palette__empty")?.textContent?.trim()).toBe(
      "No commands found.",
    );
    expect(
      document.querySelector<HTMLInputElement>(".ms-command-palette__search-input")?.placeholder,
    ).toBe("Type a command or search...");
  });

  it("applies partial :messages overrides, and explicit props still win", async () => {
    const wrapper = mount(MsProvider, {
      props: {
        messages: {
          alert: { dismiss: "Dispensar" },
          breadcrumbs: { label: "Trilha" },
          carousel: { slide: (index: number, total: number) => `Slide ${index}/${total}` },
          commandPalette: { empty: "Sem resultados" },
        },
      },
      slots: {
        default: () => [
          h(MsAlert, { dismissible: true, title: "Atenção" }),
          h(MsBreadcrumbs, { items: [{ label: "A" }] }),
          h(MsBreadcrumbs, { items: [{ label: "B" }], ariaLabel: "Prop vence" }),
          carousel(),
          h(MsCommandPalette, { modelValue: true, hotkey: false }),
        ],
      },
      attachTo: document.body,
    });
    mounted.push(wrapper);
    await nextTick();

    expect(wrapper.find(".ms-alert-close").attributes("aria-label")).toBe("Dispensar");
    const navs = wrapper.findAll("nav");
    expect(navs[0]?.attributes("aria-label")).toBe("Trilha");
    expect(navs[1]?.attributes("aria-label")).toBe("Prop vence");
    expect(wrapper.findAll(".ms-carousel-slide")[1]?.attributes("aria-label")).toBe("Slide 2/2");
    // Non-overridden keys keep the Portuguese defaults.
    expect(wrapper.find(".ms-carousel").attributes("aria-label")).toBe("Galeria de slides");
    expect(document.querySelector(".ms-command-palette__empty")?.textContent?.trim()).toBe(
      "Sem resultados",
    );
    expect(document.querySelector(".ms-command-palette")?.getAttribute("aria-label")).toBe(
      "Paleta de comandos",
    );
  });
});
