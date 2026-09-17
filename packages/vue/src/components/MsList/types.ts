import type { InjectionKey, Ref } from "vue";

export type MsListVariant = "default" | "bordered" | "divided";
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
   * Whether the item is interactive (hover and focus effects).
   * @default false
   */
  interactive?: boolean;

  /**
   * Whether this item represents the active or selected item.
   * @default false
   */
  active?: boolean;

  /**
   * Whether this item is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * HTML tag to render for the item.
   * @default 'li'
   */
  as?: string;
}

export interface MsListGroupProps {
  /**
   * Group header label.
   */
  title?: string;
}

export interface MsListContext {
  variant: Ref<MsListVariant>;
  size: Ref<MsListSize>;
}

export const MS_LIST_KEY: InjectionKey<MsListContext> = Symbol("MS_LIST_KEY");
