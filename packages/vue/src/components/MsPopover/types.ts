export type MsPopoverPlacement =
  "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end";

export type MsPopoverTrigger = "click" | "hover";
export type MsPopoverWidth = "auto" | "sm" | "md" | "lg";

export interface MsPopoverProps {
  /**
   * Controlled open state (supports v-model:open).
   */
  open?: boolean | undefined;

  /**
   * Placement relative to the anchor trigger.
   * @default 'bottom'
   */
  placement?: MsPopoverPlacement;

  /**
   * Interaction trigger mode.
   * @default 'click'
   */
  trigger?: MsPopoverTrigger;

  /**
   * Optional title string displayed in the popover header.
   */
  title?: string;

  /**
   * Preset width for the popover panel.
   * @default 'auto'
   */
  width?: MsPopoverWidth;

  /**
   * Whether the popover trigger is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether clicking outside the popover closes it.
   * @default true
   */
  closeOnClickOutside?: boolean;

  /**
   * Whether pressing Escape key closes the popover.
   * @default true
   */
  closeOnEscape?: boolean;
}

export interface MsPopoverEmits {
  (e: "update:open", value: boolean): void;
  (e: "open"): void;
  (e: "close"): void;
}
