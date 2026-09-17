<script setup lang="ts">
import { ref } from "vue";
import MsButton from "../MsButton/MsButton.vue";
import MsMenu from "../MsMenu/MsMenu.vue";
import type { MsMenuItem } from "../MsMenu/types.ts";
import type { MsDropdownButtonProps } from "./types.ts";

const props = withDefaults(defineProps<MsDropdownButtonProps>(), {
  variant: "solid",
  tone: "primary",
  size: "md",
  align: "left",
  fullWidth: false,
});

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
      :full-width="props.fullWidth"
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
      :class="{ 'ms-menu--right': props.align === 'right' }"
      @select="onSelect"
      @update:open="open = $event"
    />
  </div>
</template>
