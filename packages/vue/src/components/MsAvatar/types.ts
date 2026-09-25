import type { InjectionKey } from "vue";
import type { MsSize, MsTone } from "../MsButton/types.ts";

export type MsAvatarSize =
  Extract<MsSize, "xs" | "sm" | "md" | "lg" | "xl"> | "2xs" | "2xl" | "3xl";
export type MsAvatarShape = "circle" | "rounded" | "square";
export type MsAvatarStatus = "online" | "offline" | "busy" | "away";
export type MsAvatarStatusPlacement = "bottom-right" | "top-right";
export type MsAvatarTone = Extract<
  MsTone,
  "neutral" | "primary" | "accent" | "success" | "warning" | "danger"
>;

export interface MsAvatarProps {
  /** Image source URL. */
  src?: string | undefined;
  /** Name of the entity for alt text and initials fallback. */
  name?: string | undefined;
  /** Size scale. @default "md" */
  size?: MsAvatarSize;
  /** Shape geometry. @default "circle" */
  shape?: MsAvatarShape;
  /** Background tone for initials fallback. @default "neutral" */
  tone?: MsAvatarTone;
  /** Online status indicator dot. */
  status?: MsAvatarStatus;
  /** Placement for status indicator dot. @default "bottom-right" */
  statusPlacement?: MsAvatarStatusPlacement;
  /** Adds an outline ring around the avatar for separation against busy surfaces. */
  bordered?: boolean;
}

export type MsAvatarGroupSpacing = "tight" | "normal" | "loose";

export interface MsAvatarGroupProps {
  /** Maximum number of avatars displayed before collapsing into '+N'. */
  max?: number;
  /** Cascading size applied to avatars inside the group. @default "md" */
  size?: MsAvatarSize;
  /** Overlap spacing between avatars. @default "normal" */
  spacing?: MsAvatarGroupSpacing;
  /** Applies outline border ring to all child avatars. @default true */
  bordered?: boolean;
  /** Convenient array of avatar items. */
  items?: MsAvatarProps[];
}

export interface MsAvatarGroupContext {
  size?: MsAvatarSize;
  bordered?: boolean;
}

export const AVATAR_GROUP_CONTEXT_KEY: InjectionKey<MsAvatarGroupContext> =
  Symbol("ms-avatar-group-context");
