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
  (e: "update:selectedKey", key: MsTreeKey): void;
  (e: "update:expandedKeys", keys: MsTreeKey[]): void;
  (e: "select", node: MsTreeNodeData): void;
  (e: "toggle", node: MsTreeNodeData, expanded: boolean): void;
}

export interface MsTreeContext {
  isSelected(key: MsTreeKey): boolean;
  isExpanded(key: MsTreeKey): boolean;
  selectNode(node: MsTreeNodeData): void;
  toggleExpand(node: MsTreeNodeData): void;
}

export const MS_TREE_KEY: InjectionKey<MsTreeContext> = Symbol("MS_TREE_KEY");
