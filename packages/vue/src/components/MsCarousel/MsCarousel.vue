<script setup lang="ts">
import { ref, computed, watch, provide, onMounted, onBeforeUnmount } from "vue";
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

provide(MS_CAROUSEL_KEY, {
  activeSlide: current,
});

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
  if (!props.autoplay || props.totalSlides <= 1) return;
  stopAutoplay();
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

watch(
  () => props.autoplay,
  (val) => {
    if (val) startAutoplay();
    else stopAutoplay();
  },
);

onMounted(() => {
  if (props.autoplay) startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});

const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
}));
</script>

<template>
  <div
    class="ms-carousel"
    role="region"
    aria-roledescription="carousel"
    aria-label="Galeria de slides"
    data-ms-carousel
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Slides track -->
    <div class="ms-carousel__track" :style="trackStyle">
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
      role="tablist"
      aria-label="Seletores de slide"
    >
      <button
        v-for="index in props.totalSlides"
        :key="index"
        type="button"
        class="ms-carousel__indicator"
        :class="{ 'ms-carousel__indicator--active': current === index - 1 }"
        role="tab"
        :aria-selected="current === index - 1"
        :aria-label="`Slide ${index}`"
        @click="goTo(index - 1)"
      />
    </div>
  </div>
</template>
