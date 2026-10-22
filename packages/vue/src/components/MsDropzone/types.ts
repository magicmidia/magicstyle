/** A file accepted by the dropzone, as listed below it. */
export interface MsDropzoneFile {
  /** Generated unique id. */
  id: string;
  /** File name. */
  name: string;
  /** Size in bytes. */
  size: number;
  /** Human-readable size (e.g. "1.2 MB"). */
  formattedSize: string;
  /** The underlying `File`. */
  file: File;
}

export interface MsDropzoneProps {
  /**
   * Accepted types, like the native `accept` attribute (".pdf", "image/*"…); enforced for
   * dropped files too (rejection reason "type"). Accepts any type by default.
   */
  accept?: string;
  /** Accepts several files; otherwise extra files are rejected with reason "multiple". @default true */
  multiple?: boolean;
  /** Maximum file size in bytes; larger files are rejected with reason "size". */
  maxSize?: number; // in bytes
  /** Disables dropping and browsing. @default false */
  disabled?: boolean;
}

export interface MsDropzoneRejection {
  file: File;
  /** type: fails `accept`; size: exceeds `maxSize`; multiple: extra file when `multiple` is false. */
  reason: "type" | "size" | "multiple";
}

export interface MsDropzoneEmits {
  /** Accepted files from a drop or the file picker. */
  (e: "files-dropped", files: File[]): void;
  /** Files refused by `accept`, `maxSize` or `multiple`, with the reason. */
  (e: "files-rejected", rejections: MsDropzoneRejection[]): void;
  /** A file was removed from the list. */
  (e: "file-removed", file: MsDropzoneFile): void;
}
