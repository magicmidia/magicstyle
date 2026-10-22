import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { h, type Component } from "vue";
import {
  MsNavbar,
  MsPagination,
  MsPasswordInput,
  MsProgress,
  MsProvider,
  msMessagesEn,
  type MsMessagesOverride,
} from "../src/index.ts";

function mountIn(
  providerProps: { locale?: string; messages?: MsMessagesOverride },
  component: Component,
  props: Record<string, unknown> = {},
) {
  return mount(MsProvider, {
    props: providerProps,
    slots: { default: () => h(component, props) },
  });
}

describe("group C components read strings from messages", () => {
  it("MsPagination renders English labels under locale en-US", () => {
    const wrapper = mountIn({ locale: "en-US" }, MsPagination, {
      total: 100,
      currentPage: 2,
      showJumper: true,
    });
    expect(wrapper.find("nav").attributes("aria-label")).toBe("Pagination");
    expect(wrapper.find(".ms-pagination__first").attributes("aria-label")).toBe("First page");
    expect(wrapper.find(".ms-pagination__prev").attributes("aria-label")).toBe("Previous page");
    expect(wrapper.find(".ms-pagination__next").attributes("title")).toBe("Next page");
    expect(wrapper.find(".ms-pagination__last").attributes("aria-label")).toBe("Last page");
    expect(wrapper.find(".ms-pagination__jumper").text()).toContain("Go to");
  });

  it("MsPasswordInput renders English placeholder, toggle, strength and default criteria", () => {
    const wrapper = mountIn({ locale: "en-US" }, MsPasswordInput, {
      modelValue: "abc",
      showStrengthMeter: true,
      showCriteria: true,
    });
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe("Enter your password...");
    expect(wrapper.find(".ms-password-input__toggle").attributes("aria-label")).toBe(
      "Show password",
    );
    const strength = wrapper.find(".ms-password-input__strength-label").text();
    expect(strength).toContain("Password strength:");
    expect(strength).toContain("Weak");
    const criteria = wrapper.findAll(".ms-password-input__criterion").map((li) => li.text());
    expect(criteria).toEqual(Object.values(msMessagesEn.passwordInput.criteria));
  });

  it("MsPasswordInput props and custom criteria still win over messages", () => {
    const wrapper = mountIn({ locale: "en-US" }, MsPasswordInput, {
      placeholder: "Custom",
      showCriteria: true,
      criteria: [{ id: "length", label: "Twelve chars", validator: (p: string) => p.length >= 12 }],
    });
    expect(wrapper.find("input").attributes("placeholder")).toBe("Custom");
    expect(wrapper.findAll(".ms-password-input__criterion").map((li) => li.text())).toEqual([
      "Twelve chars",
    ]);
  });

  it("MsNavbar and MsProgress use English accessible text", () => {
    const navbar = mount(MsProvider, {
      props: { locale: "en-US" },
      slots: { default: () => h(MsNavbar, null, { "mobile-menu": () => "Links" }) },
    });
    expect(navbar.find(".ms-navbar__mobile-toggle").attributes("aria-label")).toBe(
      "Toggle navigation menu",
    );
    const progress = mountIn({ locale: "en-US" }, MsProgress, { indeterminate: true });
    expect(progress.find('[role="progressbar"]').attributes("aria-valuetext")).toBe("Loading...");
  });

  it("applies partial :messages overrides on top of the default locale", () => {
    const wrapper = mountIn(
      {
        messages: { pagination: { next: "Forward" } },
      },
      MsPagination,
      { total: 50 },
    );
    expect(wrapper.find(".ms-pagination__next").attributes("aria-label")).toBe("Forward");
    // Untouched keys keep the English defaults.
    expect(wrapper.find(".ms-pagination__prev").attributes("aria-label")).toBe("Previous page");

    const password = mountIn(
      { messages: { passwordInput: { strength: "Strength:", criteria: { length: "8+" } } } },
      MsPasswordInput,
      { modelValue: "", showStrengthMeter: true, showCriteria: true },
    );
    expect(password.find(".ms-password-input__strength-label").text()).toContain("Strength:");
    const criteria = password.findAll(".ms-password-input__criterion").map((li) => li.text());
    expect(criteria[0]).toBe("8+");
    expect(criteria[1]).toBe("At least 1 lowercase letter");
  });
});
