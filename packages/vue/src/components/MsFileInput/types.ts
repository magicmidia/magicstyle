export interface MsFileInputProps {
  /**
   * Bound file or array of files (v-model).
   */
  modelValue?: File | File[] | null;

  /**
   * Accepted file formats (e.g. '.pdf,image/*').
   */
  accept?: string;

  /**
   * Allow selecting multiple files.
   * @default false
   */
  multiple?: boolean;

  /**
   * Maximum single file size allowed in bytes.
   */
  maxSize?: number;

  /**
   * Dropzone headline prompt label.
   * @default messages `fileInput.prompt` ("Drag and drop files here, or click to select" in en-US)
   */
  label?: string;

  /**
   * Supporting hint text below label.
   */
  hint?: string;

  /**
   * Whether to display the selected files list preview.
   * @default true
   */
  showFileList?: boolean;

  /**
   * Whether the input is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface MsFileInputEmits {
  (e: "update:modelValue", files: File | File[] | null): void;
  (e: "change", files: File[]): void;
  (e: "reject", file: File, reason: "maxSize" | "accept"): void;
}
