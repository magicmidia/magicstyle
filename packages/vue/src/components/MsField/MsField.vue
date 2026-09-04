<script setup lang="ts">
import { computed } from "vue";
import { provideFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsFieldProps } from "./types.ts";

const props = defineProps<MsFieldProps>();

defineSlots<{
  default?(): unknown;
}>();

const controlId = useMsId("ms-field");
const descriptionId = useMsId("ms-field-desc");
const errorId = useMsId("ms-field-error");

provideFieldContext({
  controlId,
  describedBy: () => {
    const ids = [
      props.description !== undefined ? descriptionId : undefined,
      props.error !== undefined ? errorId : undefined,
    ].filter((id): id is string => id !== undefined);
    return ids.length > 0 ? ids.join(" ") : undefined;
  },
  invalid: () => props.error !== undefined,
});
</script>

<template>
  <div class="ms-field" :data-required="props.required || undefined">
    <label v-if="props.label" class="ms-field-label" :for="controlId">{{ props.label }}</label>
    <slot />
    <p v-if="props.description" class="ms-field-description" :id="descriptionId">
      {{ props.description }}
    </p>
    <p v-if="props.error" class="ms-field-error" :id="errorId" aria-live="polite">
      {{ props.error }}
    </p>
  </div>
</template>
