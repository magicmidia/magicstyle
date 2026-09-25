<script setup lang="ts">
import { ref, computed } from "vue";
import { useFieldControl } from "../../composables/use-field-context.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsRatingProps, MsRatingEmits } from "./types.ts";

const props = withDefaults(defineProps<MsRatingProps>(), {
  modelValue: 0,
  max: 5,
  size: "md",
  readonly: false,
  disabled: false,
});

const emit = defineEmits<MsRatingEmits>();

const t = useMsMessages();
const fieldControl = useFieldControl("ms-rating");

const hoverValue = ref<number | null>(null);

const activeValue = computed(() => {
  if (hoverValue.value !== null) return hoverValue.value;
  return props.modelValue;
});

const setRating = (val: number) => {
  if (props.readonly || props.disabled) return;
  emit("update:modelValue", val);
  emit("change", val);
};

const handleMouseEnter = (val: number) => {
  if (props.readonly || props.disabled) return;
  hoverValue.value = val;
};

const handleMouseLeave = () => {
  hoverValue.value = null;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (props.readonly || props.disabled) return;
  if (event.key === "ArrowRight" || event.key === "ArrowUp") {
    event.preventDefault();
    setRating(Math.min(props.modelValue + 1, props.max));
  } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
    event.preventDefault();
    setRating(Math.max(props.modelValue - 1, 0));
  }
};

const ratingClasses = computed(() => [
  "ms-rating",
  `ms-rating--size-${props.size}`,
  props.readonly ? "ms-rating--readonly" : "",
  props.disabled ? "ms-rating--disabled" : "",
]);
</script>

<template>
  <div
    :id="fieldControl.id"
    :class="ratingClasses"
    role="slider"
    tabindex="0"
    :aria-labelledby="fieldControl.labelledBy.value"
    :aria-describedby="fieldControl.describedBy.value"
    :aria-invalid="fieldControl.fieldInvalid.value || undefined"
    :aria-valuetext="t.rating.star(props.modelValue, props.max)"
    :aria-valuenow="props.modelValue"
    :aria-valuemin="0"
    :aria-valuemax="props.max"
    :aria-disabled="props.disabled"
    :aria-readonly="props.readonly"
    data-ms-rating
    @mouseleave="handleMouseLeave"
    @keydown="handleKeydown"
  >
    <button
      v-for="index in props.max"
      :key="index"
      type="button"
      tabindex="-1"
      class="ms-rating__item"
      :class="{ 'ms-rating__item--filled': index <= activeValue }"
      :aria-label="t.rating.star(index, props.max)"
      @click="setRating(index)"
      @mouseenter="handleMouseEnter(index)"
    >
      <svg
        class="ms-rating__icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        />
      </svg>
    </button>
  </div>
</template>
