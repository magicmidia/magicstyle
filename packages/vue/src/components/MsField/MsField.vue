<script setup lang="ts">
import { computed } from "vue";
import { provideFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsFieldProps } from "./types.ts";

const props = withDefaults(defineProps<MsFieldProps>(), {
  orientation: "vertical",
  size: "md",
});

defineSlots<{
  default?(): unknown;
}>();

const t = useMsMessages();

const controlId = useMsId("ms-field");
const labelId = useMsId("ms-field-label");
const descriptionId = useMsId("ms-field-desc");
const errorId = useMsId("ms-field-error");

let controlIdClaimed = false;

provideFieldContext({
  controlId,
  get labelId() {
    return props.label ? labelId : undefined;
  },
  claimControlId: () => {
    if (controlIdClaimed) return false;
    controlIdClaimed = true;
    return true;
  },
  releaseControlId: () => {
    controlIdClaimed = false;
  },
  describedBy: () => {
    const hasDesc = Boolean(props.description);
    const hasError = Boolean(props.error);
    const ids = [hasDesc ? descriptionId : undefined, hasError ? errorId : undefined].filter(
      (id): id is string => id !== undefined,
    );
    return ids.length > 0 ? ids.join(" ") : undefined;
  },
  invalid: () => Boolean(props.error),
});

const fieldClasses = computed(() => [
  "ms-field",
  `ms-field--${props.orientation}`,
  props.size !== "md" ? `ms-field--${props.size}` : "",
]);
</script>

<template>
  <div :class="fieldClasses" :data-required="props.required || undefined">
    <label v-if="props.label" :id="labelId" class="ms-field-label" :for="controlId">
      {{ props.label }}
      <span v-if="props.optional && !props.required" class="ms-field-optional">{{
        t.label.optional
      }}</span>
    </label>

    <div v-if="props.orientation === 'horizontal'" class="ms-field-content">
      <slot />
      <p v-if="props.description" :id="descriptionId" class="ms-field-description">
        {{ props.description }}
      </p>
      <p v-if="props.error" :id="errorId" class="ms-field-error" aria-live="polite">
        {{ props.error }}
      </p>
    </div>

    <template v-else>
      <slot />
      <p v-if="props.description" :id="descriptionId" class="ms-field-description">
        {{ props.description }}
      </p>
      <p v-if="props.error" :id="errorId" class="ms-field-error" aria-live="polite">
        {{ props.error }}
      </p>
    </template>
  </div>
</template>
