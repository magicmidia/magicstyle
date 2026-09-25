<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { MsAnimatedNumber } from "@magic-style/vue";

const props = defineProps<{ value: number; suffix?: string | undefined }>();

// SSR and no-JS readers get the final number; the count-up only starts once visible.
const root = ref<HTMLElement | null>(null);
const visible = ref(false);
let observer: IntersectionObserver | undefined;

onMounted(() => {
  if (!root.value || typeof IntersectionObserver === "undefined") return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      visible.value = true;
      observer?.disconnect();
    }
  });
  observer.observe(root.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <span ref="root">
    <MsAnimatedNumber
      v-if="visible"
      :value="props.value"
      :suffix="props.suffix ?? ''"
      :duration="1200"
    />
    <template v-else>{{ props.value }}{{ props.suffix ?? "" }}</template>
  </span>
</template>
