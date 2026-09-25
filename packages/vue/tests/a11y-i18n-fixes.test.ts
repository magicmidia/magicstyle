import { afterEach, describe, expect, it, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { defineComponent, h, inject, nextTick, ref } from "vue";
import {
  MsAppShell,
  MsAppShellFooter,
  MsAppShellSidebar,
  MsAvatarGroup,
  MsBanner,
  MsBreadcrumbs,
  MsCard,
  MsCodeBlock,
  MsCol,
  MsDockItem,
  MsGlimpse,
  MsIconPicker,
  MsNavbar,
  MsSidebar,
  MsSidebarMenu,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTabs,
  MsTable,
  MsChatBubble,
  MsColorPicker,
  MsCommandPalette,
  MsField,
  MsIconButton,
  MsMaskedInput,
  MsPasswordInput,
  MsProgressRadial,
  MsProvider,
  MsRadio,
  MsRadioGroup,
  MsRating,
  MsSegmentedControl,
  MsSnippet,
  MsTableHeaderCell,
  MsTag,
  MsToast,
  MS_APP_SHELL_KEY,
} from "../src/index.ts";

const mounted: VueWrapper[] = [];
afterEach(() => {
  while (mounted.length) mounted.pop()?.unmount();
  document.body.innerHTML = "";
});

function track<T extends VueWrapper>(wrapper: T): T {
  mounted.push(wrapper);
  return wrapper;
}

describe("MsField optional hint", () => {
  it("reads the optional hint from the messages", () => {
    const pt = track(mount(MsField, { props: { label: "Apelido", optional: true } }));
    expect(pt.find(".ms-field-optional").text()).toBe("(opcional)");

    const en = track(
      mount(MsProvider, {
        props: { locale: "en-US" },
        slots: { default: () => h(MsField, { label: "Nickname", optional: true }) },
      }),
    );
    expect(en.find(".ms-field-optional").text()).toBe("(optional)");
  });
});

describe("MsRating", () => {
  it("localizes the star labels", () => {
    const en = track(
      mount(MsProvider, {
        props: { locale: "en-US" },
        slots: { default: () => h(MsRating, { modelValue: 2, max: 3 }) },
      }),
    );
    const stars = en.findAll(".ms-rating__item");
    expect(stars[0]!.attributes("aria-label")).toBe("1 of 3 stars");
    expect(en.find("[role='slider']").attributes("aria-valuetext")).toBe("2 of 3 stars");

    const pt = track(mount(MsRating, { props: { max: 5 } }));
    expect(pt.findAll(".ms-rating__item")[4]!.attributes("aria-label")).toBe("5 de 5 estrelas");
  });

  it("wires into MsField (id, label, description, error)", () => {
    const wrapper = track(
      mount(MsField, {
        props: { label: "Nota", description: "De 1 a 5", error: "Obrigatório" },
        slots: { default: () => h(MsRating) },
      }),
    );
    const slider = wrapper.find("[role='slider']");
    const label = wrapper.find("label");
    expect(label.attributes("for")).toBe(slider.attributes("id"));
    expect(slider.attributes("aria-labelledby")).toBe(label.attributes("id"));
    expect(slider.attributes("aria-invalid")).toBe("true");
    const describedBy = slider.attributes("aria-describedby")?.split(" ") ?? [];
    expect(describedBy).toHaveLength(2);
    for (const id of describedBy) expect(wrapper.find(`#${id}`).exists()).toBe(true);
  });
});

describe("MsSegmentedControl roving focus", () => {
  const options = [
    { label: "A", value: "a" },
    { label: "B", value: "b", disabled: true },
    { label: "C", value: "c" },
  ];

  const Host = defineComponent({
    setup() {
      const value = ref<string | number | undefined>(undefined);
      return () =>
        h(MsSegmentedControl, {
          options,
          name: "choice",
          modelValue: value.value,
          "onUpdate:modelValue": (v: string | number) => (value.value = v),
        });
    },
  });

  it("keeps the first enabled segment tabbable when nothing is selected", () => {
    const wrapper = track(mount(Host));
    const tabindexes = wrapper.findAll("[role='radio']").map((b) => b.attributes("tabindex"));
    expect(tabindexes).toEqual(["0", "-1", "-1"]);
  });

  it("moves focus with the selection on arrows, Home and End", async () => {
    const wrapper = track(mount(Host, { attachTo: document.body }));
    const radios = () => wrapper.findAll("[role='radio']");

    await radios()[0]!.trigger("keydown", { key: "ArrowRight" });
    await nextTick();
    expect(radios()[2]!.attributes("aria-checked")).toBe("true");
    expect(radios()[2]!.attributes("tabindex")).toBe("0");
    expect(document.activeElement).toBe(radios()[2]!.element);

    await radios()[2]!.trigger("keydown", { key: "Home" });
    await nextTick();
    expect(radios()[0]!.attributes("aria-checked")).toBe("true");
    expect(document.activeElement).toBe(radios()[0]!.element);

    await radios()[0]!.trigger("keydown", { key: "End" });
    await nextTick();
    expect(document.activeElement).toBe(radios()[2]!.element);
  });

  it("submits the value through a hidden input when `name` is set", async () => {
    const wrapper = track(mount(Host));
    const hidden = wrapper.find("input[type='hidden']");
    expect(hidden.attributes("name")).toBe("choice");
    expect((hidden.element as HTMLInputElement).value).toBe("");
    await wrapper.findAll("[role='radio']")[2]!.trigger("click");
    expect((wrapper.find("input[type='hidden']").element as HTMLInputElement).value).toBe("c");
  });
});

describe("MsProgressRadial ARIA values", () => {
  it("uses the raw value against the same min/max", () => {
    const wrapper = track(mount(MsProgressRadial, { props: { value: 3, max: 4 } }));
    expect(wrapper.attributes("aria-valuemin")).toBe("0");
    expect(wrapper.attributes("aria-valuemax")).toBe("4");
    expect(wrapper.attributes("aria-valuenow")).toBe("3");
    expect(wrapper.attributes("aria-valuetext")).toBe("75%");
    expect(wrapper.text()).toContain("75%");
  });

  it("clamps out-of-range values", () => {
    const wrapper = track(mount(MsProgressRadial, { props: { value: 12, max: 10 } }));
    expect(wrapper.attributes("aria-valuenow")).toBe("10");
  });
});

describe("MsCommandPalette item icons", () => {
  it("renders item.icon and falls back to the default glyph", () => {
    track(
      mount(MsCommandPalette, {
        props: {
          modelValue: true,
          items: [
            { id: "a", label: "Com ícone", icon: "★" },
            { id: "b", label: "Sem ícone" },
          ],
        },
        attachTo: document.body,
      }),
    );
    const icons = [...document.querySelectorAll(".ms-command-palette__item-icon")].map((el) =>
      el.textContent?.trim(),
    );
    expect(icons).toEqual(["★", "❖"]);
  });
});

describe("invalid state from MsField", () => {
  it("MsMaskedInput and MsPasswordInput show the field error state", () => {
    const masked = track(
      mount(MsField, {
        props: { label: "CPF", error: "Inválido" },
        slots: { default: () => h(MsMaskedInput, { mask: "cpf" }) },
      }),
    );
    expect(masked.find(".ms-masked-input").attributes("data-invalid")).toBe("");
    expect(masked.find(".ms-masked-input").classes()).toContain("ms-masked-input--invalid");

    const password = track(
      mount(MsField, {
        props: { label: "Senha", error: "Curta demais" },
        slots: { default: () => h(MsPasswordInput) },
      }),
    );
    expect(password.find(".ms-password-input").attributes("data-invalid")).toBe("");
    expect(password.find("input").attributes("aria-invalid")).toBe("true");
  });
});

describe("secondary/accent tones have default icons", () => {
  it("MsBanner and MsToast render an icon for every tone", () => {
    for (const tone of ["secondary", "accent"] as const) {
      const banner = track(mount(MsBanner, { props: { tone }, slots: { default: "Aviso" } }));
      expect(banner.find(".ms-banner__icon").text()).not.toBe("");

      const toast = track(
        mount(MsToast, {
          props: {
            toast: {
              id: "t",
              tone,
              message: "Oi",
              duration: 0,
              placement: "top-right",
              dismissible: true,
            },
          },
        }),
      );
      expect(toast.find(".ms-toast__icon").text()).not.toBe("");
    }
  });
});

describe("MsIconButton accessible name", () => {
  it("accepts `label`, `ariaLabel` and the kebab-case aria-label attribute", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const byLabel = track(mount(MsIconButton, { props: { label: "Fechar" } }));
    expect(byLabel.attributes("aria-label")).toBe("Fechar");

    const byProp = track(mount(MsIconButton, { props: { ariaLabel: "Abrir" } }));
    expect(byProp.attributes("aria-label")).toBe("Abrir");

    const byAttr = track(mount(() => h(MsIconButton, { "aria-label": "Salvar" })));
    expect(byAttr.find("button").attributes("aria-label")).toBe("Salvar");
    expect(warn).not.toHaveBeenCalled();

    track(mount(MsIconButton));
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
  });
});

describe("MsColorPicker swatches", () => {
  it("marks the active swatch with aria-pressed", () => {
    const wrapper = track(
      mount(MsColorPicker, { props: { modelValue: "#FF0000", swatches: ["#ff0000", "#00ff00"] } }),
    );
    const swatches = wrapper.findAll(".ms-color-picker__swatch");
    expect(swatches[0]!.attributes("aria-pressed")).toBe("true");
    expect(swatches[1]!.attributes("aria-pressed")).toBe("false");
  });
});

describe("MsRadioGroup inside MsField", () => {
  it("gives the group root the id the label points to", () => {
    const wrapper = track(
      mount(MsField, {
        props: { label: "Plano" },
        slots: {
          default: () =>
            h(MsRadioGroup, null, () => [
              h(MsRadio, { value: "a", label: "A" }),
              h(MsRadio, { value: "b", label: "B" }),
            ]),
        },
      }),
    );
    const group = wrapper.find("[role='radiogroup']");
    expect(group.attributes("id")).toBe(wrapper.find("label.ms-field-label").attributes("for"));
    const ids = wrapper.findAll("[id]").map((el) => el.attributes("id"));
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("MsTag keyboard and remove label", () => {
  it("lets the close button handle Enter/Space itself", async () => {
    const wrapper = track(
      mount(MsTag, {
        props: { clickable: true, closable: true },
        slots: { default: () => "Vue" },
      }),
    );
    const close = wrapper.find(".ms-tag__close");
    const event = new KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true });
    close.element.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
    expect(wrapper.emitted("click")).toBeUndefined();

    await wrapper.trigger("keydown", { key: " " });
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("names the remove button after the tag text", async () => {
    const pt = track(mount(MsTag, { props: { closable: true }, slots: { default: () => "Vue" } }));
    await nextTick();
    expect(pt.find(".ms-tag__close").attributes("aria-label")).toBe("Remover Vue");

    const en = track(
      mount(MsProvider, {
        props: { locale: "en-US" },
        slots: { default: () => h(MsTag, { closable: true }, () => "Design") },
      }),
    );
    await nextTick();
    expect(en.find(".ms-tag__close").attributes("aria-label")).toBe("Remove Design");
  });
});

describe("MsSnippet tabs", () => {
  it("moves focus to the tab selected with the arrow keys", async () => {
    const wrapper = track(
      mount(MsSnippet, {
        props: {
          tabs: [
            { label: "npm", code: "npm i" },
            { label: "pnpm", code: "pnpm add" },
            { label: "yarn", code: "yarn add" },
          ],
        },
        attachTo: document.body,
      }),
    );
    const tabs = () => wrapper.findAll("[role='tab']");
    await tabs()[0]!.trigger("keydown", { key: "ArrowRight" });
    await nextTick();
    expect(tabs()[1]!.attributes("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(tabs()[1]!.element);

    await tabs()[1]!.trigger("keydown", { key: "End" });
    await nextTick();
    expect(document.activeElement).toBe(tabs()[2]!.element);
  });
});

describe("MsTableHeaderCell sorting", () => {
  it("renders a keyboard-operable sort button and keeps aria-sort on the th", async () => {
    const wrapper = track(
      mount(MsTableHeaderCell, {
        props: { sortable: true, sortDirection: "desc" },
        slots: { default: () => "Nome" },
      }),
    );
    expect(wrapper.element.tagName).toBe("TH");
    expect(wrapper.attributes("aria-sort")).toBe("descending");
    const button = wrapper.find("button.ms-table__sort-button");
    expect(button.exists()).toBe(true);
    expect(button.attributes("type")).toBe("button");
    await button.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("does not render a button when not sortable", () => {
    const wrapper = track(mount(MsTableHeaderCell, { slots: { default: () => "Nome" } }));
    expect(wrapper.find("button").exists()).toBe(false);
    expect(wrapper.attributes("aria-sort")).toBeUndefined();
  });
});

describe("MsChatBubble status", () => {
  it("announces a localized status", () => {
    const pt = track(mount(MsChatBubble, { props: { status: "read" }, slots: { default: "Oi" } }));
    const status = pt.find(".ms-chat-bubble-status");
    expect(status.attributes("role")).toBe("img");
    expect(status.attributes("aria-label")).toBe("Lida");

    const en = track(
      mount(MsProvider, {
        props: { locale: "en-US" },
        slots: { default: () => h(MsChatBubble, { status: "sent" }, () => "Hi") },
      }),
    );
    expect(en.find(".ms-chat-bubble-status").attributes("aria-label")).toBe("Sent");
  });
});

describe("MsAvatarGroup excess counter", () => {
  it("labels the +N counter with the count", () => {
    const wrapper = track(
      mount(MsAvatarGroup, {
        props: { max: 1, items: [{ name: "Ana" }, { name: "Bia" }, { name: "Caio" }] },
      }),
    );
    const excess = wrapper.find(".ms-avatar--excess");
    expect(excess.text()).toBe("+2");
    expect(excess.attributes("role")).toBe("img");
    expect(excess.attributes("aria-label")).toBe("Mais 2 membros");
  });
});

describe("MsTabs aria-controls", () => {
  it("points at panels only when they exist", async () => {
    const wrapper = track(
      mount(() =>
        h(MsTabs, { modelValue: "a" }, () => [
          h(MsTabList, null, () => [
            h(MsTab, { value: "a" }, () => "A"),
            h(MsTab, { value: "b" }, () => "B"),
          ]),
          h(MsTabPanel, { value: "a" }, () => "Painel A"),
        ]),
      ),
    );
    await nextTick();
    const [tabA, tabB] = wrapper.findAll("[role='tab']");
    const controls = tabA!.attributes("aria-controls");
    expect(controls).toBeDefined();
    expect(wrapper.find(`#${controls}`).exists()).toBe(true);
    expect(tabB!.attributes("aria-controls")).toBeUndefined();
  });

  it("omits aria-controls when tabs are a pure switcher", async () => {
    const wrapper = track(
      mount(() =>
        h(MsTabs, { modelValue: "a" }, () => [
          h(MsTabList, null, () => [h(MsTab, { value: "a" }, () => "A")]),
        ]),
      ),
    );
    await nextTick();
    expect(wrapper.find("[role='tab']").attributes("aria-controls")).toBeUndefined();
  });
});

describe("scrollable regions", () => {
  it("MsCodeBlock body is a focusable, named region", () => {
    const plain = track(mount(MsCodeBlock, { props: { code: "const a = 1;" } }));
    const body = plain.find(".ms-code-block__body");
    expect(body.attributes("tabindex")).toBe("0");
    expect(body.attributes("role")).toBe("region");
    expect(body.attributes("aria-label")).toBe("Código");

    const named = track(mount(MsCodeBlock, { props: { code: "x", filename: "main.ts" } }));
    expect(named.find(".ms-code-block__body").attributes("aria-label")).toBe("main.ts");
  });

  it("MsTable container becomes a region only when it overflows", async () => {
    const plain = track(mount(MsTable, { props: { caption: "Vendas" } }));
    expect(plain.attributes("role")).toBeUndefined();
    expect(plain.attributes("tabindex")).toBeUndefined();

    const scrollWidth = vi
      .spyOn(HTMLElement.prototype, "scrollWidth", "get")
      .mockImplementation(() => 800);
    const clientWidth = vi
      .spyOn(HTMLElement.prototype, "clientWidth", "get")
      .mockImplementation(() => 300);
    const withCaption = track(mount(MsTable, { props: { caption: "Vendas" } }));
    const noCaption = track(mount(MsTable));
    await nextTick();
    scrollWidth.mockRestore();
    clientWidth.mockRestore();

    expect(withCaption.attributes("role")).toBe("region");
    expect(withCaption.attributes("tabindex")).toBe("0");
    expect(withCaption.attributes("aria-labelledby")).toBe(
      withCaption.find("caption").attributes("id"),
    );
    expect(noCaption.attributes("aria-label")).toBe("Tabela");
  });

  it("MsTable container is a region when it scrolls vertically (sticky header)", async () => {
    const scrollHeight = vi
      .spyOn(HTMLElement.prototype, "scrollHeight", "get")
      .mockImplementation(() => 900);
    const clientHeight = vi
      .spyOn(HTMLElement.prototype, "clientHeight", "get")
      .mockImplementation(() => 240);
    const table = track(mount(MsTable, { props: { stickyHeader: true } }));
    await nextTick();
    scrollHeight.mockRestore();
    clientHeight.mockRestore();

    expect(table.attributes("role")).toBe("region");
    expect(table.attributes("tabindex")).toBe("0");
  });
});

describe("MsAppShell", () => {
  it("uses namespaced classes that do not clash with MsSidebar/MsFooter", () => {
    const wrapper = track(
      mount(MsAppShell, {
        slots: {
          sidebar: () => h(MsAppShellSidebar, () => "Menu"),
          footer: () => h(MsAppShellFooter, () => "Rodapé"),
        },
      }),
    );
    expect(wrapper.find(".ms-app-shell__sidebar").exists()).toBe(true);
    expect(wrapper.find(".ms-app-shell__footer").exists()).toBe(true);
    expect(wrapper.find(".ms-sidebar").exists()).toBe(false);
    expect(wrapper.find(".ms-footer").exists()).toBe(false);
  });

  it("toggles the sidebar without v-model (uncontrolled)", async () => {
    let toggle: (() => void) | undefined;
    const Probe = defineComponent({
      setup() {
        const ctx = inject(MS_APP_SHELL_KEY);
        toggle = ctx?.toggleSidebarCollapse;
        return () => null;
      },
    });
    const wrapper = track(
      mount(MsAppShell, {
        slots: { sidebar: () => [h(MsAppShellSidebar, () => "Menu"), h(Probe)] },
      }),
    );
    const sidebar = () => wrapper.find(".ms-app-shell__sidebar");
    expect(sidebar().classes()).not.toContain("ms-app-shell__sidebar--collapsed");
    toggle?.();
    await nextTick();
    expect(sidebar().classes()).toContain("ms-app-shell__sidebar--collapsed");
    expect(wrapper.emitted("update:sidebarCollapsed")).toEqual([[true]]);
  });
});

describe("MsCol auto/flex spans", () => {
  it("emits classes that the grid CSS defines", () => {
    const auto = track(mount(MsCol, { props: { span: "auto" } }));
    expect(auto.classes()).toContain("ms-col--span-auto");
    const flex = track(mount(MsCol, { props: { span: "flex-1" } }));
    expect(flex.classes()).toContain("ms-col--span-flex-1");
  });
});

describe("MsNavbar tone", () => {
  it("omits data-tone for the default tone", () => {
    const plain = track(mount(MsNavbar));
    expect(plain.attributes("data-tone")).toBeUndefined();
    const toned = track(mount(MsNavbar, { props: { tone: "primary" } }));
    expect(toned.attributes("data-tone")).toBe("primary");
  });
});

describe("keyboard activation of role=button surfaces", () => {
  it("MsDockItem activates with Enter and Space", async () => {
    const onClick = vi.fn();
    const wrapper = track(mount(MsDockItem, { props: { label: "Início" }, attrs: { onClick } }));
    await wrapper.trigger("keydown", { key: "Enter" });
    await wrapper.trigger("keydown", { key: " " });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("interactive MsCard activates with Enter and Space", async () => {
    const card = track(mount(MsCard, { props: { interactive: true } }));
    await card.trigger("keydown", { key: "Enter" });
    await card.trigger("keydown", { key: " " });
    expect(card.emitted("click")).toHaveLength(2);

    const still = track(mount(MsCard));
    await still.trigger("keydown", { key: "Enter" });
    expect(still.emitted("click")).toBeUndefined();
  });
});

describe("MsSidebar toggle label", () => {
  it("follows the effective collapsed state (e.g. from MsAppShell)", () => {
    const wrapper = track(
      mount(MsAppShell, {
        props: { sidebarCollapsed: true },
        slots: { sidebar: () => h(MsSidebar, { showToggle: true }) },
      }),
    );
    expect(wrapper.find(".ms-sidebar__collapse-btn").attributes("aria-label")).toBe(
      "Expandir barra lateral",
    );
  });
});

describe("MsBreadcrumbs markup", () => {
  it("keeps separators inside <li> elements", () => {
    const wrapper = track(
      mount(MsBreadcrumbs, {
        props: { items: [{ label: "A", href: "/a" }, { label: "B", href: "/b" }, { label: "C" }] },
      }),
    );
    const list = wrapper.find("ol").element;
    for (const child of Array.from(list.children)) expect(child.tagName).toBe("LI");
    const separators = wrapper.findAll(".ms-breadcrumbs__separator");
    expect(separators).toHaveLength(2);
    for (const sep of separators) {
      expect(sep.element.parentElement?.tagName).toBe("LI");
      expect(sep.attributes("aria-hidden")).toBe("true");
    }
  });
});

describe("MsSidebarMenu submenus", () => {
  const items = [
    {
      items: [
        {
          id: "settings",
          label: "Configurações",
          children: [{ id: "profile", label: "Perfil", href: "/perfil" }],
        },
      ],
    },
  ];

  it("wraps sub items in a list and makes closed submenus inert", () => {
    const wrapper = track(mount(MsSidebarMenu, { props: { items } }));
    const sub = wrapper.find(".ms-sidebar-menu-sub");
    expect(sub.attributes("inert")).toBeDefined();
    expect(sub.attributes("aria-hidden")).toBeUndefined();
    const subList = sub.find("ul.ms-sidebar-menu-sub-list");
    expect(subList.exists()).toBe(true);
    expect(subList.find("li.ms-sidebar-menu-item").exists()).toBe(true);
  });

  it("keeps labels in the DOM in collapsed mode (visually hidden via CSS)", () => {
    const wrapper = track(mount(MsSidebarMenu, { props: { items, collapsed: true } }));
    expect(wrapper.find(".ms-sidebar-menu-label").text()).toBe("Configurações");
  });
});

describe("MsIconPicker custom SVG", () => {
  it("renders the fallback first and the sanitized SVG after mount", async () => {
    const wrapper = track(
      mount(MsIconPicker, {
        props: {
          icons: [{ id: "c", name: "Custom", category: "X", svg: '<path d="M1 1"/>' }],
          modelValue: "c",
        },
      }),
    );
    await nextTick();
    expect(wrapper.find(".ms-icon-picker__preview svg").exists()).toBe(true);
  });
});

describe("MsGlimpse phrasing content", () => {
  it("renders only spans so it can live inside a <p>", () => {
    const wrapper = track(
      mount(MsGlimpse, {
        props: { href: "https://example.com", title: "Exemplo", description: "Desc" },
      }),
    );
    expect(wrapper.element.tagName).toBe("SPAN");
    expect(wrapper.findAll("div, p, h1, h2, h3, h4, h5, h6")).toHaveLength(0);
  });
});
