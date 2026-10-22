import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import {
  MsProvider,
  createMsI18n,
  mergeMsMessages,
  msMessagesEn,
  msMessagesEs,
  msMessagesForLocale,
  msMessagesPtBR,
  useMsMessages,
} from "../src/index.ts";

/** Paths of every leaf (functions and tuples count as leaves). */
function shape(value: unknown, prefix = ""): string[] {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return [prefix];
  return Object.entries(value).flatMap(([key, v]) => shape(v, prefix ? `${prefix}.${key}` : key));
}

const Probe = defineComponent({
  setup() {
    const t = useMsMessages();
    return () => h("span", { "data-locale": t.value.locale }, t.value.select.empty);
  },
});

describe("built-in messages", () => {
  it("Portuguese covers exactly the English keys", () => {
    expect(shape(msMessagesPtBR)).toEqual(shape(msMessagesEn));
    expect(msMessagesPtBR.passwordInput.levels).toHaveLength(
      msMessagesEn.passwordInput.levels.length,
    );
  });

  it("Spanish covers exactly the English keys and resolves by language", () => {
    expect(shape(msMessagesEs)).toEqual(shape(msMessagesEn));
    expect(msMessagesEs.passwordInput.levels).toHaveLength(
      msMessagesEn.passwordInput.levels.length,
    );
    expect(msMessagesForLocale("es-MX").select.empty).toBe(msMessagesEs.select.empty);
    expect(msMessagesForLocale("es-MX").locale).toBe("es-MX");
  });

  it("picks a dictionary by language and keeps the requested tag for Intl", () => {
    expect(msMessagesForLocale("en-GB").select.empty).toBe(msMessagesEn.select.empty);
    expect(msMessagesForLocale("en-GB").locale).toBe("en-GB");
    expect(msMessagesForLocale("pt-PT").select.empty).toBe(msMessagesPtBR.select.empty);
    expect(msMessagesForLocale("pt-PT").locale).toBe("pt-PT");
    // Unknown languages fall back to English strings but still format with their tag.
    expect(msMessagesForLocale("fr-FR").select.empty).toBe(msMessagesEn.select.empty);
    expect(msMessagesForLocale("de-DE")).toEqual({ ...msMessagesEn, locale: "de-DE" });
  });

  it("merges partial overrides without dropping sibling keys", () => {
    const merged = mergeMsMessages(msMessagesEn, { select: { empty: "Nothing here" } });
    expect(merged.select.empty).toBe("Nothing here");
    expect(merged.select.clear).toBe(msMessagesEn.select.clear);
    expect(merged.dialog).toBe(msMessagesEn.dialog);
    expect(msMessagesEn.select.empty).toBe("No options found");
    expect(msMessagesPtBR.select.empty).toBe("Nenhuma opção encontrada");
  });
});

describe("providing messages", () => {
  it("defaults to English without any provider", () => {
    const span = mount(Probe).find("span");
    expect(span.text()).toBe(msMessagesEn.select.empty);
    expect(span.attributes("data-locale")).toBe("en-US");
  });

  it("createMsI18n() without options defaults to English", () => {
    const wrapper = mount(Probe, { global: { plugins: [createMsI18n()] } });
    expect(wrapper.text()).toBe(msMessagesEn.select.empty);
    expect(wrapper.find("span").attributes("data-locale")).toBe("en-US");
  });

  it("an unknown locale falls back to English strings and keeps its tag", () => {
    const wrapper = mount(Probe, { global: { plugins: [createMsI18n({ locale: "de-DE" })] } });
    expect(wrapper.text()).toBe(msMessagesEn.select.empty);
    expect(wrapper.find("span").attributes("data-locale")).toBe("de-DE");
  });

  it("MsProvider sets the locale and nested providers inherit it", () => {
    const wrapper = mount(MsProvider, {
      props: { locale: "pt-BR" },
      slots: {
        default: () =>
          h(MsProvider, { messages: { select: { empty: "Nada aqui" } } }, () => h(Probe)),
      },
    });
    const span = wrapper.find("span");
    expect(span.attributes("data-locale")).toBe("pt-BR");
    expect(span.text()).toBe("Nada aqui");
  });

  it("createMsI18n configures the whole app", () => {
    const wrapper = mount(Probe, { global: { plugins: [createMsI18n({ locale: "pt-BR" })] } });
    expect(wrapper.text()).toBe(msMessagesPtBR.select.empty);
  });
});
