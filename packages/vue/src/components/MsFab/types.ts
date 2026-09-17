export type MsFabPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export interface MsFabAction {
  id: string;
  label?: string;
  icon?: string;
}

export interface MsFabProps {
  position?: MsFabPosition;
  label?: string;
  icon?: string;
  actions?: MsFabAction[];
}

export interface MsFabEmits {
  (e: "click"): void;
  (e: "action-click", action: MsFabAction): void;
}
