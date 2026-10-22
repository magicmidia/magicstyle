import type { InjectionKey } from "vue";

export type MsTreeKey = string | number;

export interface MsTreeNodeData {
  key: MsTreeKey;
  label: string;
  icon?: string;
  disabled?: boolean;
  children?: MsTreeNodeData[];
}

export interface MsTreeProps {
  /**
   * Tree hierarchical nodes data.
   */
  items?: MsTreeNodeData[];

  /**
   * Currently selected node key.
   */
  selectedKey?: MsTreeKey;

  /**
   * Set of expanded node keys.
   */
  expandedKeys?: MsTreeKey[];
}

export interface MsTreeEmits {
  /** Fires when a node is selected (click or keyboard); payload is its key. */
  (e: "update:selectedKey", key: MsTreeKey): void;
  /** Fires when a node is expanded or collapsed; payload is the new list of expanded keys. */
  (e: "update:expandedKeys", keys: MsTreeKey[]): void;
  /** Fires alongside `update:selectedKey`; payload is the selected node. */
  (e: "select", node: MsTreeNodeData): void;
  /** Fires alongside `update:expandedKeys`; payload is the node and whether it is now expanded. */
  (e: "toggle", node: MsTreeNodeData, expanded: boolean): void;
}

export interface MsTreeContext {
  isSelected(key: MsTreeKey): boolean;
  isExpanded(key: MsTreeKey): boolean;
  selectNode(node: MsTreeNodeData): void;
  toggleExpand(node: MsTreeNodeData): void;
  /** Roving tabindex: only the focused treeitem is in the tab order. */
  isFocused(key: MsTreeKey): boolean;
  setFocused(key: MsTreeKey): void;
}

export const MS_TREE_KEY: InjectionKey<MsTreeContext> = Symbol("MS_TREE_KEY");
