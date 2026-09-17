export interface MsIconItem {
  id: string;
  name: string;
  category?: string;
  svg?: string;
}

export interface MsIconPickerProps {
  modelValue?: string;
  icons?: MsIconItem[];
  placeholder?: string;
  disabled?: boolean;
}

export interface MsIconPickerEmits {
  (e: "update:modelValue", value: string): void;
  (e: "select", icon: MsIconItem): void;
}
