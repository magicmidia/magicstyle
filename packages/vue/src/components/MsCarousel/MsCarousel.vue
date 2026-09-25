<script setup lang="ts">
import { ref, computed, toRef, watch, provide, onMounted, onBeforeUnmount } from "vue";
import type { MsCarouselProps, MsCarouselEmits } from "./types.ts";
import { MS_CAROUSEL_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsCarouselProps>(), {
  modelValue: 0,
  totalSlides: 1,
  autoplay: false,
  interval: 4000,
  loop: true,
  showArrows: true,
  showIndicators: true,
});

const emit = defineEmits<MsCarouselEmits>();

defineSlots<{
  default?(): unknown;
}>();

const current = ref(props.modelValue);
let timer: ReturnType<typeof setInterval> | null = null;

watch(
  () => props.modelValue,
  (val) => {
    current.value = val;
  },
);

let slideCount = 0;
provide(MS_CAROUSEL_KEY, {
  activeSlide: current,
  registerSlide: () => slideCount++,
  totalSlides: toRef(props, "totalSlides"),
});

// WCAG 2.2.2: autoplay pauses on hover/focus, has a visible control, and never starts
// for users who prefer reduced motion.
const userPaused = ref(false);
const interacting = ref(false);
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const isRotating = computed(() => props.autoplay && !userPaused.value && !interacting.value);

const goTo = (index: number) => {
  let target = index;
  if (target < 0) {
    target = props.loop ? props.totalSlides - 1 : 0;
  } else if (target >= props.totalSlides) {
    target = props.loop ? 0 : props.totalSlides - 1;
  }

  current.value = target;
  emit("update:modelValue", target);
  emit("change", target);
};

const next = () => goTo(current.value + 1);
const prev = () => goTo(current.value - 1);

const startAutoplay = () => {
  stopAutoplay();
  if (!isRotating.value || props.totalSlides <= 1 || prefersReducedMotion()) return;
  timer = setInterval(() => {
    next();
  }, props.interval);
};

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

watch(isRotating, (rotating) => (rotating ? startAutoplay() : stopAutoplay()));

const pauseForInteraction = () => {
  interacting.value = true;
};
const resumeAfterInteraction = (event?: FocusEvent) => {
  const root = event?.currentTarget as HTMLElement | undefined;
  if (event && root?.contains(event.relatedTarget as Node | null)) return;
  interacting.value = false;
};

const toggleRotation = () => {
  userPaused.value = !userPaused.value;
};

onMounted(() => {
  if (props.autoplay && prefersReducedMotion()) userPaused.value = true;
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});

/** The CSS turns the index into a translate, flipping the sign in RTL. */
const trackStyle = computed(() => ({
  "--ms-carousel-index": current.value,
}));
</script>

<template>
  <div
    class="ms-carousel"
    role="region"
    aria-roledescription="carousel"
    aria-label="Galeria de slides"
    data-ms-carousel
    @mouseenter="pauseForInteraction"
    @mouseleave="resumeAfterInteraction()"
    @focusin="pauseForInteraction"
    @focusout="resumeAfterInteraction"
  >
    <button
      v-if="props.autoplay && props.totalSlides > 1"
      type="button"
      class="ms-carousel__rotation"
      :aria-label="userPaused ? 'Iniciar rotação automática' : 'Pausar rotação automática'"
      @click="toggleRotation"
    >
      <span aria-hidden="true">{{ userPaused ? "▶" : "❚❚" }}</span>
    </button>
    <!-- Slides track -->
    <!-- Announce slide changes only when the user drives them (off during autoplay). -->
    <div class="ms-carousel__track" :style="trackStyle" :aria-live="isRotating ? 'off' : 'polite'">
      <slot />
    </div>

    <!-- Navigation arrows -->
    <template v-if="props.showArrows && props.totalSlides > 1">
      <button
        type="button"
        class="ms-carousel__arrow ms-carousel__arrow--prev"
        aria-label="Slide anterior"
        @click="prev"
      >
        ❮
      </button>
      <button
        type="button"
        class="ms-carousel__arrow ms-carousel__arrow--next"
        aria-label="Próximo slide"
        @click="next"
      >
        ❯
      </button>
    </template>

    <!-- Indicators -->
    <div
      v-if="props.showIndicators && props.totalSlides > 1"
      class="ms-carousel__indicators"
      aria-label="Seletores de slide"
    >
      <button
        v-for="index in props.totalSlides"
        :key="index"
        type="button"
        class="ms-carousel__indicator"
        :class="{ 'ms-carousel__indicator--active': current === index - 1 }"
        :aria-current="current === index - 1 ? 'true' : undefined"
        :aria-label="`Ir para o slide ${index}`"
        @click="goTo(index - 1)"
      />
    </div>
  </div>
</template>
