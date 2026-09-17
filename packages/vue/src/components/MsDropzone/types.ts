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

export interface MsDropzoneEmits {
  (e: "files-dropped", files: File[]): void;
  (e: "file-removed", file: MsDropzoneFile): void;
}
