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

/** Element used for a timeline item title. */
export type MsTimelineTitleTag = "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

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
   * Element for the title; pick the heading level that fits the page outline, or
   * "p"/"span" when milestones should not be headings.
   * @default 'h4'
   */
  titleTag?: MsTimelineTitleTag;

  /**
   * Optional timestamp or date label.
   */
  timestamp?: string;

  /**
   * Description content text.
   */
  description?: string;

  /**
   * Fills the indicator node with the tone color (e.g. for completed milestones).
   * @default false
   */
  solid?: boolean;

  /**
   * Marks the current milestone: a pulsing halo on the node and `aria-current="step"`.
   * @default false
   */
  active?: boolean;
}

export interface MsTimelineContext {
  direction: Ref<MsTimelineDirection>;
}

export const MS_TIMELINE_KEY: InjectionKey<MsTimelineContext> = Symbol("MS_TIMELINE_KEY");
