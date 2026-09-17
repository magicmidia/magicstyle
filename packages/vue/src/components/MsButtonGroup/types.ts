export type MsButtonGroupOrientation = "horizontal" | "vertical";

export interface MsButtonGroupProps {
  /**
   * Layout orientation of the button group.
   * Default: "horizontal".
   */
  orientation?: MsButtonGroupOrientation;

  /**
   * Whether child buttons are joined together at borders.
   * If false, adds spacing between buttons.
   * Default: true.
   */
  attached?: boolean;

  /**
   * Whether the button group expands to 100% width with equal distribution.
   * Default: false.
   */
  fullWidth?: boolean;
}
