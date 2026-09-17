export interface MsEmojiItem {
  emoji: string;
  name: string;
  category: string;
}

export interface MsEmojiPickerProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface MsEmojiPickerEmits {
  (e: "update:modelValue", emoji: string): void;
  (e: "select", emoji: MsEmojiItem): void;
}
