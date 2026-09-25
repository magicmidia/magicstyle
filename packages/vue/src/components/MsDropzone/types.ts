export interface MsDropzoneFile {
  id: string;
  name: string;
  size: number;
  formattedSize: string;
  file: File;
}

export interface MsDropzoneProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  disabled?: boolean;
}

export interface MsDropzoneRejection {
  file: File;
  /** type: fails `accept`; size: exceeds `maxSize`; multiple: extra file when `multiple` is false. */
  reason: "type" | "size" | "multiple";
}

export interface MsDropzoneEmits {
  (e: "files-dropped", files: File[]): void;
  (e: "files-rejected", rejections: MsDropzoneRejection[]): void;
  (e: "file-removed", file: MsDropzoneFile): void;
}
