/** A step of the form wizard. */
export interface MsWizardStep {
  /** Unique step id (used as the render key). */
  id: string;
  /** Step title shown in the progress header. */
  title: string;
  /** Secondary text shown under the step title. */
  description?: string;
  /** Step icon identifier; currently not rendered by the component. */
  icon?: string;
  /** Prevents navigating to this step. */
  disabled?: boolean;
}

export interface MsFormWizardProps {
  /** Ordered list of wizard steps. */
  steps: MsWizardStep[];
  /** Zero-based index of the active step (`v-model`). @default 0 */
  modelValue?: number;
  /** Prevents skipping ahead more than one step at a time. @default true */
  linear?: boolean;
  /** Label of the previous button. @default messages.formWizard.previous */
  prevText?: string;
  /** Label of the next button. @default messages.formWizard.next */
  nextText?: string;
  /** Label of the next button on the last step. @default messages.formWizard.finish */
  finishText?: string;
  /** Guard called before changing steps (and before `finish`, with equal indexes); resolve `false` to cancel. */
  beforeChange?: (fromIndex: number, toIndex: number) => boolean | Promise<boolean>;
}

export interface MsFormWizardEmits {
  /** Fires after the active step changes; payload is the new step index. */
  (e: "update:modelValue", index: number): void;
  /** Fires after the active step changes, with the previous and new step indexes. */
  (e: "step-change", fromIndex: number, toIndex: number): void;
  /** Fires when "next" is activated on the last step and `beforeChange` allows it. */
  (e: "finish"): void;
}
