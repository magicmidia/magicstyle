import type { InjectionKey, Ref } from "vue";

export type MsListVariant = "default" | "bordered" | "divided" | "separated";
export type MsListSize = "sm" | "md" | "lg";

export interface MsListProps {
  /**
   * Visual framing variant.
   * @default 'default'
   */
  variant?: MsListVariant;

  /**
   * Sizing scale for padding and typography.
   * @default 'md'
   */
  size?: MsListSize;

  /**
   * Turns the list into a single-select `role="listbox"`: items become options with
   * `aria-selected` (from `active`), arrow-key navigation and Enter/Space activation.
   * Without it the list is a plain `role="list"` and `active` maps to `aria-current`.
   * @default false
   */
  selectable?: boolean;
}

export interface MsListItemProps {
  /**
   * Primary title or text label.
   */
  title?: string;

  /**
   * Supporting description line.
   */
  description?: string;

  /**
   * Whether the item is interactive: hover styling, focusable (tabindex 0) and activated
   * by Enter/Space, which dispatch a click. Listen with `@click`.
   * @default false
   */
  interactive?: boolean;

  /**
   * Whether this item is the active/selected one: `aria-selected` in a `selectable` list,
   * `aria-current="true"` otherwise.
   * @default false
   */
  active?: boolean;

  /**
   * Whether this item is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * HTML tag to render for the item (keep `li` inside `MsList` for a valid list).
   * @default 'li'
   */
  as?: string;
}

export interface MsListGroupProps {
  /**
   * Group header label; also the accessible name of the nested `role="group"` list.
   */
  title?: string;
}

export interface MsListContext {
  variant: Ref<MsListVariant>;
  size: Ref<MsListSize>;
  /** true when the list is a `role="listbox"`. */
  selectable: Readonly<Ref<boolean>>;
  /** Whether any registered item is active. */
  hasActive?: Readonly<Ref<boolean>>;
  /** Registers an item's `active` getter; returns the unregister function. */
  registerActive?: (isActive: () => boolean) => () => void;
}

export const MS_LIST_KEY: InjectionKey<MsListContext> = Symbol("MS_LIST_KEY");
