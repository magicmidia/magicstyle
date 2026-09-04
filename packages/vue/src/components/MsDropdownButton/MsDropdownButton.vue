<script setup lang="ts">
import { ref } from "vue";
import MsButton from "../MsButton/MsButton.vue";
import MsMenu from "../MsMenu/MsMenu.vue";
import type { MsButtonVariant, MsSize, MsTone } from "../MsButton/types.ts";
import type { MsMenuItem } from "../MsMenu/types.ts";

const props = withDefaults(
  defineProps<{
    items: readonly MsMenuItem[];
    label?: string;
    variant?: MsButtonVariant;
    tone?: MsTone;
    size?: MsSize;
    pill?: boolean;
  }>(),
  { variant: "solid", tone: "primary", size: "md" },
);

const emit = defineEmits<{
  select: [item: MsMenuItem];
}>();

const open = ref(false);

function toggle(): void {
  open.value = !open.value;
}

function onSelect(item: MsMenuItem): void {
  open.value = false;
  emit("select", item);
}
</script>

<template>
  <div class="ms-dropdown">
    <MsButton
      :variant="props.variant"
      :tone="props.tone"
      :size="props.size"
      :pill="props.pill"
      :caret="true"
      :open="open"
      aria-haspopup="menu"
      @click="toggle"
    >
      {{ props.label }}
    </MsButton>
    <MsMenu
      v-if="open"
      :items="props.items"
      :open="open"
      @select="onSelect"
      @update:open="open = $event"
    />
  </div>
</template>
