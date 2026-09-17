export interface MsWizardStep {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

export interface MsFormWizardProps {
  steps: MsWizardStep[];
  modelValue?: number;
  linear?: boolean;
  prevText?: string;
  nextText?: string;
  finishText?: string;
  beforeChange?: (fromIndex: number, toIndex: number) => boolean | Promise<boolean>;
}

export interface MsFormWizardEmits {
  (e: "update:modelValue", index: number): void;
  (e: "step-change", fromIndex: number, toIndex: number): void;
  (e: "finish"): void;
}
