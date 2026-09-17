import type { InjectionKey, Ref } from "vue";

export type MsDockPosition = "bottom" | "top" | "left" | "right";
export type MsDockSize = "sm" | "md" | "lg";

export interface MsDockProps {
  /**
   * Screen anchor position.
   * @default 'bottom'
   */
  position?: MsDockPosition;

  /**
   * Dock icon dimension scale.
   * @default 'md'
   */
  size?: MsDockSize;
}

export interface MsDockItemProps {
  /**
   * Label for accessibility title and tooltip.
   */
  label?: string;

  /**
   * Whether an active indicator dot is shown under this icon.
   * @default false
   */
  active?: boolean;
}

export interface MsDockContext {
  size: Ref<MsDockSize>;
}

export const MS_DOCK_KEY: InjectionKey<MsDockContext> = Symbol("MS_DOCK_KEY");
