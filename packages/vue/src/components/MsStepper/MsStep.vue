<script setup lang="ts">
import { computed, inject } from "vue";
import type { MsStepProps, MsStepStatus } from "./types.ts";
import { MS_STEPPER_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsStepProps>(), {
  disabled: false,
});

defineSlots<{
  default?(): unknown;
  indicator?(): unknown;
  title?(): unknown;
  subtitle?(): unknown;
}>();

const stepper = inject(MS_STEPPER_KEY, null);

const computedStatus = computed<MsStepStatus>(() => {
  if (props.status) return props.status;
  if (!stepper) return "upcoming";

  const active = stepper.activeStep.value;
  if (props.index < active) return "complete";
  if (props.index === active) return "current";
  return "upcoming";
});

const handleClick = () => {
  if (props.disabled || !stepper) return;
  stepper.goToStep(props.index);
};

const stepClasses = computed(() => [
  "ms-step",
  `ms-step--${computedStatus.value}`,
  props.disabled ? "ms-step--disabled" : "",
]);
</script>

<template>
  <li
    :class="stepClasses"
    :aria-current="computedStatus === 'current' ? 'step' : undefined"
    data-ms-step
  >
    <div class="ms-step__connector" aria-hidden="true" />

    <button
      type="button"
      class="ms-step__trigger"
      :disabled="props.disabled || !stepper?.clickable.value"
      @click="handleClick"
    >
      <div class="ms-step__indicator" aria-hidden="true">
        <slot name="indicator">
          <span v-if="computedStatus === 'complete'">✓</span>
          <span v-else>{{ props.index + 1 }}</span>
        </slot>
      </div>

      <div class="ms-step__text">
        <span v-if="props.title || $slots.title" class="ms-step__title">
          <slot name="title">{{ props.title }}</slot>
        </span>
        <span v-if="props.subtitle || $slots.subtitle" class="ms-step__subtitle">
          <slot name="subtitle">{{ props.subtitle }}</slot>
        </span>
      </div>
    </button>
  </li>
</template>
