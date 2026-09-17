export interface MsAnimatedNumberProps {
  /**
   * Target numeric value to animate towards.
   */
  value: number;

  /**
   * Transition duration in milliseconds.
   * @default 800
   */
  duration?: number;

  /**
   * Number of fractional decimal places.
   * @default 0
   */
  decimals?: number;

  /**
   * String prepend (e.g., '$', 'R$').
   */
  prefix?: string;

  /**
   * String append (e.g., '%', ' kg').
   */
  suffix?: string;

  /**
   * Custom formatting function.
   */
  format?: (val: number) => string;
}
