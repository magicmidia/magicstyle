import type { InjectionKey, Ref } from "vue";

export type MsStepperDirection = "horizontal" | "vertical";
export type MsStepStatus = "complete" | "current" | "upcoming" | "error";

export interface MsStepperProps {
  /**
   * Active step index (0-indexed).
   * @default 0
   */
  modelValue?: number;

  /**
   * Layout direction.
   * @default 'horizontal'
   */
  direction?: MsStepperDirection;

  /**
   * Whether steps can be clicked to navigate.
   * @default false
   */
  clickable?: boolean;
}

export interface MsStepperEmits {
  (e: "update:modelValue", index: number): void;
  (e: "change", index: number): void;
}

export interface MsStepProps {
  /**
   * Step index (0-indexed).
   */
  index: number;

  /**
   * Primary title of the step.
   */
  title?: string;

  /**
   * Secondary supporting text.
   */
  subtitle?: string;

  /**
   * Explicit status override.
   */
  status?: MsStepStatus;

  /**
   * Whether this step is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface MsStepperContext {
  activeStep: Ref<number>;
  direction: Ref<MsStepperDirection>;
  clickable: Ref<boolean>;
  goToStep(index: number): void;
}

export const MS_STEPPER_KEY: InjectionKey<MsStepperContext> = Symbol("MS_STEPPER_KEY");
