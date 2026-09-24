export type MsHoverCardPlacement = "bottom" | "top" | "left" | "right";

export interface MsHoverCardProps {
  /** Tempo de espera em ms antes de abrir */
  openDelay?: number;
  /** Tempo de espera em ms antes de fechar após saída do cursor */
  closeDelay?: number;
  /** Posicionamento do cartão flutuante em relação ao gatilho */
  placement?: MsHoverCardPlacement;
  /** Largura customizada do cartão (ex: "320px") */
  width?: string | number;
}
