import type { InjectionKey, Ref } from "vue";

export type MsTimelineDirection = "vertical" | "horizontal";
export type MsTimelineTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "danger" | "info";

export interface MsTimelineProps {
  /**
   * Layout direction of milestones.
   * @default 'vertical'
   */
  direction?: MsTimelineDirection;
}

export interface MsTimelineItemProps {
  /**
   * Semantic color tone for the milestone indicator bullet.
   * @default 'primary'
   */
  tone?: MsTimelineTone;

  /**
   * Title text of the milestone.
   */
  title?: string;

  /**
   * Optional timestamp or date label.
   */
  timestamp?: string;

  /**
   * Description content text.
   */
  description?: string;
}

export interface MsTimelineContext {
  direction: Ref<MsTimelineDirection>;
}

export const MS_TIMELINE_KEY: InjectionKey<MsTimelineContext> = Symbol("MS_TIMELINE_KEY");
