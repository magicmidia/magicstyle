import type { ComputedRef, InjectionKey } from "vue";

export type MsBreadcrumbsVariant = "plain" | "pills" | "solid";
export type MsBreadcrumbsSize = "sm" | "md" | "lg";
export type MsBreadcrumbsSeparatorType = "chevron" | "slash" | "arrow" | "dot" | "custom";

export interface BreadcrumbItemData {
  label: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
  icon?: string;
}

export interface MsBreadcrumbsProps {
  /**
   * Optional array of items to render automatically.
   * If omitted, children items are rendered via default slot.
   */
  items?: BreadcrumbItemData[];

  /**
   * Visual variant:
   * - "plain": standard clean inline links.
   * - "pills": rounded capsule badges with active highlighted.
   * - "solid": enclosed card container.
   * Default: "plain".
   */
  variant?: MsBreadcrumbsVariant;

  /**
   * Scale size: "sm" | "md" | "lg".
   * Default: "md".
   */
  size?: MsBreadcrumbsSize;

  /**
   * Custom separator character or symbol (e.g. "/", "›", "•", "→").
   * Overridden by separatorType preset if specified.
   * Default: "›".
   */
  separator?: string;

  /**
   * Separator preset: "chevron" (›) | "slash" (/) | "arrow" (→) | "dot" (•).
   */
  separatorType?: MsBreadcrumbsSeparatorType;

  /**
   * Maximum visible items before collapsing middle items with an ellipsis (...).
   */
  maxItems?: number;

  /**
   * Number of items to show before the ellipsis when collapsed. Default: 1.
   */
  itemsBeforeCollapse?: number;

  /**
   * Number of items to show after the ellipsis when collapsed. Default: 1.
   */
  itemsAfterCollapse?: number;

  /**
   * Accessible navigation label for screen readers.
   * @default messages.breadcrumbs.label
   */
  ariaLabel?: string;
}

export interface MsBreadcrumbItemProps {
  /**
   * Target URL when the item is a navigable link.
   */
  href?: string | undefined;

  /**
   * Marks the item as the current page (applies aria-current="page").
   * Default: false.
   */
  current?: boolean | undefined;

  /**
   * Disables interaction with this breadcrumb item.
   * Default: false.
   */
  disabled?: boolean | undefined;

  /**
   * Optional leading icon SVG or text.
   */
  icon?: string | undefined;
}

export interface MsBreadcrumbSeparatorProps {
  as?: string;
}

export interface MsBreadcrumbsContext {
  separator: ComputedRef<string>;
  variant: ComputedRef<MsBreadcrumbsVariant>;
  size: ComputedRef<MsBreadcrumbsSize>;
}

export const BREADCRUMBS_CONTEXT_KEY: InjectionKey<MsBreadcrumbsContext> =
  Symbol("ms-breadcrumbs-context");
