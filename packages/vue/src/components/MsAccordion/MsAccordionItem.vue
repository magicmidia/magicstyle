<script setup lang="ts">
import { computed, inject } from "vue";
import type { MsAccordionItemProps } from "./types.ts";
import { MS_ACCORDION_KEY } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";

const props = withDefaults(defineProps<MsAccordionItemProps>(), {
  disabled: false,
});

defineSlots<{
  default?(): unknown;
  title?(): unknown;
  subtitle?(): unknown;
  icon?(): unknown;
  trailing?(): unknown;
}>();

const accordion = inject(MS_ACCORDION_KEY, null);

const triggerId = useMsId("ms-accordion-trig");
const panelId = useMsId("ms-accordion-panel");

const expanded = computed(() => {
  if (!accordion) return false;
  return accordion.isExpanded(props.value);
});

const handleToggle = () => {
  if (props.disabled || !accordion) return;
  accordion.toggle(props.value);
};

const itemClasses = computed(() => [
  "ms-accordion-item",
  expanded.value ? "ms-accordion-item--expanded" : "",
  props.disabled ? "ms-accordion-item--disabled" : "",
]);
</script>

<template>
  <div :class="itemClasses" data-ms-accordion-item>
    <button
      :id="triggerId"
      type="button"
      class="ms-accordion-item__trigger"
      :aria-expanded="expanded"
      :aria-controls="panelId"
      :disabled="props.disabled"
      @click="handleToggle"
    >
      <span class="ms-accordion-item__header-content">
        <span v-if="$slots.icon" class="ms-accordion-item__icon" aria-hidden="true">
          <slot name="icon" />
        </span>
        <span class="ms-accordion-item__title-group">
          <span class="ms-accordion-item__title">
            <slot name="title">{{ props.title }}</slot>
          </span>
          <span v-if="props.subtitle || $slots.subtitle" class="ms-accordion-item__subtitle">
            <slot name="subtitle">{{ props.subtitle }}</slot>
          </span>
        </span>
      </span>

      <span class="ms-accordion-item__trailing">
        <slot name="trailing" />
        <span class="ms-accordion-item__chevron" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </span>
      </span>
    </button>

    <div
      v-show="expanded"
      :id="panelId"
      class="ms-accordion-item__content"
      role="region"
      :aria-labelledby="triggerId"
    >
      <slot />
    </div>
  </div>
</template>
