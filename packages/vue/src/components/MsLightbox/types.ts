export interface MsLightboxItem {
  src: string;
  title?: string;
  caption?: string;
  alt?: string;
}

export interface MsLightboxProps {
  modelValue?: boolean;
  items?: MsLightboxItem[];
  index?: number;
}

export interface MsLightboxEmits {
  (e: "update:modelValue", open: boolean): void;
  (e: "update:index", index: number): void;
}
