import type { InjectionKey, Ref } from "vue";

export interface MsCarouselProps {
  /**
   * Current active slide index (v-model:modelValue).
   * @default 0
   */
  modelValue?: number;

  /**
   * Total number of slides (used for navigation and indicators).
   * @default 1
   */
  totalSlides?: number;

  /**
   * Whether to automatically rotate slides.
   * @default false
   */
  autoplay?: boolean;

  /**
   * Autoplay delay interval in milliseconds.
   * @default 4000
   */
  interval?: number;

  /**
   * Whether cycling loops indefinitely.
   * @default true
   */
  loop?: boolean;

  /**
   * Whether to show navigation arrow buttons.
   * @default true
   */
  showArrows?: boolean;

  /**
   * Whether to show bottom dot indicators.
   * @default true
   */
  showIndicators?: boolean;
}

export interface MsCarouselEmits {
  (e: "update:modelValue", index: number): void;
  (e: "change", index: number): void;
}

export interface MsCarouselContext {
  activeSlide: Ref<number>;
}

export const MS_CAROUSEL_KEY: InjectionKey<MsCarouselContext> = Symbol("MS_CAROUSEL_KEY");
