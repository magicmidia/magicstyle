/** An image shown in the lightbox. */
export interface MsLightboxItem {
  /** Image URL. */
  src: string;
  /** Caption title (also the alt-text fallback). */
  title?: string;
  /** Caption text shown under the title. */
  caption?: string;
  /** Image alt text (falls back to `title`, then `messages.lightbox.image`). */
  alt?: string;
}

export interface MsLightboxProps {
  /** Open state (`v-model`). @default false */
  modelValue?: boolean;
  /** Images to browse. @default [] */
  items?: MsLightboxItem[];
  /** Zero-based index of the displayed image (`v-model:index`). @default 0 */
  index?: number;
}

export interface MsLightboxEmits {
  /** Fires with `false` when the lightbox is dismissed (close button, backdrop click, Escape). */
  (e: "update:modelValue", open: boolean): void;
  /** Fires when navigating to the previous/next image (buttons or arrow keys); payload is the new index. */
  (e: "update:index", index: number): void;
}
