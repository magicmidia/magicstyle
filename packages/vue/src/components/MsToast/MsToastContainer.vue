<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { useToast } from "./useToast.ts";
import type { MsToastPlacement, MsToastItem } from "./types.ts";
import MsToast from "./MsToast.vue";

const props = withDefaults(
  defineProps<{
    /** Teleport target (CSS selector) the toast stacks render into. @default "body" */
    teleportTo?: string;
  }>(),
  {
    teleportTo: "body",
  },
);

const { toasts, remove } = useToast();

const placements: MsToastPlacement[] = [
  "top-right",
  "top-left",
  "top-center",
  "bottom-right",
  "bottom-left",
  "bottom-center",
];

/*
 * Live regions must exist before content changes for screen readers to announce it,
 * so they are always rendered here; danger toasts go to the assertive region.
 */
const politeMessage = ref("");
const assertiveMessage = ref("");
const announced = new Set<string>();

watch(
  () => toasts.value.map((toast) => toast.id),
  (ids) => {
    for (const toast of toasts.value) {
      if (announced.has(toast.id)) continue;
      announced.add(toast.id);
      const text = [toast.title, toast.message].filter(Boolean).join(": ");
      const target = toast.tone === "danger" ? assertiveMessage : politeMessage;
      // Clear first so a repeated message is announced again.
      target.value = "";
      void nextTick(() => (target.value = text));
    }
    for (const id of announced) if (!ids.includes(id)) announced.delete(id);
  },
  { immediate: true },
);

const toastsByPlacement = computed(() => {
  const map: Record<MsToastPlacement, MsToastItem[]> = {
    "top-right": [],
    "top-left": [],
    "top-center": [],
    "bottom-right": [],
    "bottom-left": [],
    "bottom-center": [],
  };

  for (const toast of toasts.value) {
    if (map[toast.placement]) {
      map[toast.placement].push(toast);
    } else {
      map["top-right"].push(toast);
    }
  }

  return map;
});
</script>

<template>
  <Teleport :to="props.teleportTo">
    <div class="ms-visually-hidden" role="status" aria-live="polite">{{ politeMessage }}</div>
    <div class="ms-visually-hidden" role="alert" aria-live="assertive">{{ assertiveMessage }}</div>
    <template v-for="placement in placements" :key="placement">
      <div
        v-if="toastsByPlacement[placement].length > 0"
        :class="['ms-toast-container', `ms-toast-container--placement-${placement}`]"
        data-ms-toast-container
      >
        <TransitionGroup name="ms-toast">
          <MsToast
            v-for="toast in toastsByPlacement[placement]"
            :key="toast.id"
            :toast="toast"
            :announce="false"
            @dismiss="remove"
          />
        </TransitionGroup>
      </div>
    </template>
  </Teleport>
</template>
