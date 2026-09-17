import type { InjectionKey, Ref } from "vue";

export type MsAccordionVariant = "default" | "bordered" | "separated" | "flush";
export type MsAccordionSize = "sm" | "md" | "lg";
export type MsAccordionValue = string | number;

export interface MsAccordionProps {
  /**
   * Currently expanded item identifier or array of identifiers if multiple is enabled.
   */
  modelValue?: MsAccordionValue | MsAccordionValue[];

  /**
   * Whether multiple accordion items can be expanded concurrently.
   * @default false
   */
  multiple?: boolean;

  /**
   * Visual framing variant.
   * @default 'default'
   */
  variant?: MsAccordionVariant;

  /**
   * Sizing scale for padding and font sizes.
   * @default 'md'
   */
  size?: MsAccordionSize;
}

export interface MsAccordionEmits {
  (e: "update:modelValue", value: MsAccordionValue | MsAccordionValue[]): void;
  (e: "change", value: MsAccordionValue | MsAccordionValue[]): void;
}

export interface MsAccordionItemProps {
  /**
   * Unique identifier matching or checked against modelValue.
   */
  value: MsAccordionValue;

  /**
   * Primary title label for the accordion header.
   */
  title?: string;

  /**
   * Secondary description text below the title.
   */
  subtitle?: string;

  /**
   * Whether this item is disabled and cannot be toggled.
   * @default false
   */
  disabled?: boolean;
}

export interface MsAccordionContext {
  isExpanded(value: MsAccordionValue): boolean;
  toggle(value: MsAccordionValue): void;
  variant: Ref<MsAccordionVariant>;
  size: Ref<MsAccordionSize>;
}

export const MS_ACCORDION_KEY: InjectionKey<MsAccordionContext> = Symbol("MS_ACCORDION_KEY");
