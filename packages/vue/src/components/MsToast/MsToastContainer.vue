<script setup lang="ts">
import { computed } from "vue";
import { useToast } from "./useToast.ts";
import type { MsToastPlacement, MsToastItem } from "./types.ts";
import MsToast from "./MsToast.vue";

const props = withDefaults(
  defineProps<{
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
            @dismiss="remove"
          />
        </TransitionGroup>
      </div>
    </template>
  </Teleport>
</template>
