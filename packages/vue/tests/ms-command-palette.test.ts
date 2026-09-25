import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsCommandPalette } from "../src/index.ts";

const items = [
  { id: "docs", label: "Ir para Documentação", group: "Navegação" },
  { id: "tokens", label: "Inspecionar Design Tokens", group: "Navegação" },
  { id: "theme", label: "Alternar tema", group: "Ações Rápidas" },
];

describe("MsCommandPalette component", () => {
  it("renders when modelValue is true", () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true, items },
      attachTo: document.body,
    });
    const palette = document.querySelector(".ms-command-palette");
    expect(palette).not.toBeNull();
    expect(palette?.getAttribute("aria-label")).toBe("Paleta de comandos");
    expect(document.querySelectorAll(".ms-command-palette__item")).toHaveLength(3);
    const footer = document.querySelector(".ms-command-palette__footer");
    expect(footer?.textContent).toContain("Navegar com ↑ ↓");
    expect(footer?.textContent).toContain("Executar com ↵");
    wrapper.unmount();
  });

  it("filters items according to query", async () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true, items },
      attachTo: document.body,
    });
    const input = document.querySelector(
      "input.ms-command-palette__search-input",
    ) as HTMLInputElement;
    expect(input).not.toBeNull();

    input.value = "Tokens";
    input.dispatchEvent(new Event("input"));

    await wrapper.vm.$nextTick();
    const found = document.querySelectorAll(".ms-command-palette__item");
    expect(found.length).toBe(1);
    expect(found[0]?.textContent).toContain("Tokens");

    wrapper.unmount();
  });

  it("ships no demo commands: without items it shows the empty state", () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    expect(document.querySelectorAll(".ms-command-palette__item")).toHaveLength(0);
    expect(document.querySelector(".ms-command-palette__results")).toBeNull();
    expect(document.querySelector(".ms-command-palette__empty")?.textContent?.trim()).toBe(
      "Nenhum comando encontrado.",
    );
    const input = document.querySelector<HTMLInputElement>(".ms-command-palette__search-input");
    expect(input?.placeholder).toBe("Digite um comando ou pesquise...");
    wrapper.unmount();
  });

  it("placeholder and emptyText props win over the messages", () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true, placeholder: "Buscar ação", emptyText: "Nada aqui" },
      attachTo: document.body,
    });
    const input = document.querySelector<HTMLInputElement>(".ms-command-palette__search-input");
    expect(input?.placeholder).toBe("Buscar ação");
    expect(input?.getAttribute("aria-label")).toBe("Buscar ação");
    expect(document.querySelector(".ms-command-palette__empty")?.textContent?.trim()).toBe(
      "Nada aqui",
    );
    wrapper.unmount();
  });
});
