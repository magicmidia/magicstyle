<script setup lang="ts">
import { computed, inject, ref, watch } from "vue";
import { AVATAR_GROUP_CONTEXT_KEY, type MsAvatarProps } from "./types.ts";

defineOptions({
  name: "MsAvatar",
});

const props = withDefaults(defineProps<MsAvatarProps>(), {
  shape: "circle",
  tone: "neutral",
  statusPlacement: "bottom-right",
});

defineSlots<{
  default?(): unknown;
}>();

const groupContext = inject(AVATAR_GROUP_CONTEXT_KEY, undefined);

const effectiveSize = computed(() => props.size ?? groupContext?.size ?? "md");
const effectiveBordered = computed(() => props.bordered ?? groupContext?.bordered ?? false);

const hasError = ref(false);

watch(
  () => props.src,
  () => {
    hasError.value = false;
  },
);

const initials = computed(() => {
  if (!props.name) return "";
  const parts = props.name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0]!.substring(0, 2).toUpperCase();
  }
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
});
</script>

<template>
  <div
    class="ms-avatar"
    :data-size="effectiveSize"
    :data-shape="props.shape"
    :data-tone="props.tone"
    :data-bordered="effectiveBordered || undefined"
  >
    <img
      v-if="props.src && !hasError"
      class="ms-avatar-image"
      :src="props.src"
      :alt="props.name || 'Avatar'"
      @error="hasError = true"
    />
    <span v-else class="ms-avatar-fallback">
      <slot>{{ initials }}</slot>
    </span>

    <span
      v-if="props.status"
      class="ms-avatar-indicator"
      :data-status="props.status"
      :data-placement="props.statusPlacement"
      aria-hidden="true"
    />
  </div>
</template>
