export interface MsCommandItem {
  id: string;
  label: string;
  group?: string;
  icon?: string;
  shortcut?: string;
  disabled?: boolean;
}

export interface MsCommandPaletteProps {
  modelValue?: boolean;
  items?: MsCommandItem[];
  placeholder?: string;
  emptyText?: string;
}

export interface MsCommandPaletteEmits {
  (e: "update:modelValue", open: boolean): void;
  (e: "select", item: MsCommandItem): void;
}
