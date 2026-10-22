export interface MsFileInputProps {
  /**
   * Bound file or array of files (v-model). Setting it to `null` or `[]` clears the list.
   */
  modelValue?: File | File[] | null;

  /**
   * Accepted file formats (e.g. '.pdf,image/*'). Also enforced for dropped files, which
   * are rejected with reason `"accept"`.
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
  /** New selection: a `File` (single), `File[]` (`multiple`) or `null` after removal. */
  (e: "update:modelValue", files: File | File[] | null): void;
  /** Fires with the current file list after files are added or removed. */
  (e: "change", files: File[]): void;
  /** A file was refused: it does not match `accept` or exceeds `maxSize`. */
  (e: "reject", file: File, reason: "maxSize" | "accept"): void;
}
