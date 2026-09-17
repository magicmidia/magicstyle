export interface MsScrollSpyItem {
  id: string;
  label: string;
}

export interface MsScrollSpyProps {
  /**
   * List of observed section IDs and navigation labels.
   */
  items: MsScrollSpyItem[];

  /**
   * Pixel threshold offset from top of viewport.
   * @default 80
   */
  offset?: number;
}

export interface MsScrollSpyEmits {
  (e: "activeChange", id: string): void;
}
