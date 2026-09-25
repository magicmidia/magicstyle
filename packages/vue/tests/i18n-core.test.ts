import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import {
  MsProvider,
  createMsI18n,
  mergeMsMessages,
  msMessagesEn,
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
  it("English covers exactly the Portuguese keys", () => {
    expect(shape(msMessagesEn)).toEqual(shape(msMessagesPtBR));
    expect(msMessagesEn.passwordInput.levels).toHaveLength(
      msMessagesPtBR.passwordInput.levels.length,
    );
  });

  it("picks a dictionary by language and keeps the requested tag for Intl", () => {
    expect(msMessagesForLocale("en-GB").select.empty).toBe(msMessagesEn.select.empty);
    expect(msMessagesForLocale("en-GB").locale).toBe("en-GB");
    expect(msMessagesForLocale("pt-PT").locale).toBe("pt-PT");
    // Unknown languages fall back to Portuguese strings but still format with their tag.
    expect(msMessagesForLocale("fr-FR").select.empty).toBe(msMessagesPtBR.select.empty);
  });

  it("merges partial overrides without dropping sibling keys", () => {
    const merged = mergeMsMessages(msMessagesPtBR, { select: { empty: "Nada aqui" } });
    expect(merged.select.empty).toBe("Nada aqui");
    expect(merged.select.clear).toBe(msMessagesPtBR.select.clear);
    expect(merged.dialog).toBe(msMessagesPtBR.dialog);
    expect(msMessagesPtBR.select.empty).toBe("Nenhuma opção encontrada");
  });
});

describe("providing messages", () => {
  it("defaults to Portuguese without any provider", () => {
    expect(mount(Probe).text()).toBe(msMessagesPtBR.select.empty);
  });

  it("MsProvider sets the locale and nested providers inherit it", () => {
    const wrapper = mount(MsProvider, {
      props: { locale: "en-US" },
      slots: {
        default: () =>
          h(MsProvider, { messages: { select: { empty: "Nothing here" } } }, () => h(Probe)),
      },
    });
    const span = wrapper.find("span");
    expect(span.attributes("data-locale")).toBe("en-US");
    expect(span.text()).toBe("Nothing here");
  });

  it("createMsI18n configures the whole app", () => {
    const wrapper = mount(Probe, { global: { plugins: [createMsI18n({ locale: "en-US" })] } });
    expect(wrapper.text()).toBe(msMessagesEn.select.empty);
  });
});
