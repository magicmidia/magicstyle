<script setup lang="ts">
import { computed, provide, toRef } from "vue";
import type { MsStepperProps, MsStepperEmits } from "./types.ts";
import { MS_STEPPER_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsStepperProps>(), {
  modelValue: 0,
  direction: "horizontal",
  clickable: false,
});

const emit = defineEmits<MsStepperEmits>();

defineSlots<{
  default?(): unknown;
}>();

const goToStep = (index: number) => {
  if (props.clickable) {
    emit("update:modelValue", index);
    emit("change", index);
  }
};

provide(MS_STEPPER_KEY, {
  activeStep: toRef(props, "modelValue"),
  direction: toRef(props, "direction"),
  clickable: toRef(props, "clickable"),
  goToStep,
});

const stepperClasses = computed(() => [
  "ms-stepper",
  `ms-stepper--direction-${props.direction}`,
  props.clickable ? "ms-stepper--clickable" : "",
]);
</script>

<template>
  <nav aria-label="Passos do processo" data-ms-stepper>
    <ol :class="stepperClasses">
      <slot />
    </ol>
  </nav>
</template>
