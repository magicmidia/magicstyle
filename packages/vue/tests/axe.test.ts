/**
 * Automated accessibility audit (axe-core) of components in their interactive
 * states. Layout-dependent rules (color-contrast, target-size) need a real browser
 * and are covered by the theme contrast tests instead.
 */
import { afterEach, describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h, nextTick } from "vue";
import axe from "axe-core";
import {
  MsAccordion,
  MsAlert,
  MsBreadcrumbs,
  MsButton,
  MsCheckbox,
  MsCommandPalette,
  MsDialog,
  MsDropdownButton,
  MsField,
  MsInput,
  MsPagination,
  MsRadio,
  MsRadioGroup,
  MsSelect,
  MsSwitch,
  MsTabs,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTextarea,
  MsTree,
} from "../src/index.ts";

const RULES_NEEDING_LAYOUT = ["color-contrast", "target-size", "scrollable-region-focusable"];
/** Page-level rules that do not apply to isolated component fragments. */
const PAGE_LEVEL_RULES = ["region", "landmark-one-main", "page-has-heading-one"];

async function audit(root: Element = document.body): Promise<string[]> {
  const result = await axe.run(root, {
    rules: Object.fromEntries(
      [...RULES_NEEDING_LAYOUT, ...PAGE_LEVEL_RULES].map((id) => [id, { enabled: false }]),
    ),
    resultTypes: ["violations"],
  });
  return result.violations.map(
    (violation) =>
      `${violation.id}: ${violation.help} -> ${violation.nodes.map((n) => n.target.join(" ")).join(", ")}`,
  );
}

afterEach(() => {
  document.body.innerHTML = "";
});

const cases: Array<[string, () => ReturnType<typeof h>]> = [
  [
    "form controls inside MsField",
    () =>
      h("main", [
        h(MsField, { label: "Nome", description: "Obrigatório", error: "Campo inválido" }, () =>
          h(MsInput, { modelValue: "" }),
        ),
        h(MsField, { label: "Bio" }, () => h(MsTextarea, { modelValue: "" })),
        h(MsField, { label: "Plano" }, () =>
          h(MsSelect, {
            options: [
              { label: "Básico", value: "b" },
              { label: "Pro", value: "p" },
            ],
          }),
        ),
        h(MsCheckbox, { label: "Aceito os termos" }),
        h(MsSwitch, { label: "Notificações" }),
        h(MsField, { label: "Tamanho" }, () =>
          h(MsRadioGroup, { modelValue: "m" }, () => [
            h(MsRadio, { value: "p", label: "P" }),
            h(MsRadio, { value: "m", label: "M" }),
          ]),
        ),
      ]),
  ],
  [
    "open select listbox",
    () =>
      h("main", [
        h(MsSelect, {
          "aria-label": "Plano",
          open: true,
          options: [
            { label: "Básico", value: "b" },
            { label: "Pro", value: "p" },
          ],
        }),
      ]),
  ],
  [
    "open dialog",
    () => h(MsDialog, { open: true, title: "Título", description: "Texto" }, () => "Corpo"),
  ],
  [
    "open command palette",
    () =>
      h(MsCommandPalette, {
        modelValue: true,
        items: [
          { id: "docs", label: "Documentação", group: "Navegação" },
          { id: "theme", label: "Alternar tema", group: "Ações" },
          { id: "off", label: "Indisponível", disabled: true },
        ],
      }),
  ],
  ["empty command palette", () => h(MsCommandPalette, { modelValue: true })],
  [
    "navigation and disclosure",
    () =>
      h("main", [
        h(MsButton, null, () => "Salvar"),
        h(MsAlert, { title: "Atenção" }, () => "Mensagem"),
        h(MsBreadcrumbs, {
          items: [{ label: "Início", href: "/" }, { label: "Atual" }],
        }),
        h(MsPagination, { total: 50, pageSize: 10, modelValue: 1 }),
        h(MsTree, {
          items: [{ key: "a", label: "A", children: [{ key: "a1", label: "A1" }] }],
          expandedKeys: ["a"],
        }),
        h(MsAccordion, {
          items: [{ id: "one", title: "Pergunta", content: "Resposta" }],
        }),
        h(MsTabs, { modelValue: "a" }, () => [
          h(MsTabList, null, () => [
            h(MsTab, { value: "a" }, () => "A"),
            h(MsTab, { value: "b" }, () => "B"),
          ]),
          h(MsTabPanel, { value: "a" }, () => "Painel A"),
          h(MsTabPanel, { value: "b" }, () => "Painel B"),
        ]),
      ]),
  ],
];

describe("axe-core audit", () => {
  it.each(cases)("%s has no violations", async (_, render) => {
    mount(defineComponent({ render }), { attachTo: document.body });
    await nextTick();
    await nextTick();
    expect(await audit()).toEqual([]);
  });

  it("open dropdown menu has no violations", async () => {
    const wrapper = mount(MsDropdownButton, {
      props: { label: "Ações", items: [{ label: "Editar", value: "e" }] },
      attachTo: document.body,
    });
    await wrapper.find("button").trigger("click");
    await nextTick();
    expect(await audit()).toEqual([]);
  });
});
