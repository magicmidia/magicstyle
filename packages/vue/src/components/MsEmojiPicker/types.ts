/** An emoji entry of the picker catalog. */
export interface MsEmojiItem {
  /** The emoji character. */
  emoji: string;
  /** Searchable display name. */
  name: string;
  /** Category id used by the category filter (e.g. `"smileys"`, `"food"`). */
  category: string;
}

export interface MsEmojiPickerProps {
  /** Selected emoji character (`v-model`), shown on the trigger. @default "" */
  modelValue?: string;
  /** Trigger content shown while no emoji is selected. @default "😀" */
  placeholder?: string;
  /** Disables the trigger so the picker cannot be opened. @default false */
  disabled?: boolean;
}

export interface MsEmojiPickerEmits {
  /** Fires when an emoji is picked; payload is the emoji character. */
  (e: "update:modelValue", emoji: string): void;
  /** Fires when an emoji is picked; payload is the full catalog item. */
  (e: "select", emoji: MsEmojiItem): void;
}
