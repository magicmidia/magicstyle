<script setup lang="ts">
import { computed } from "vue";
import type { MsAspectRatioProps } from "./types.ts";

const props = withDefaults(defineProps<MsAspectRatioProps>(), {
  ratio: "16/9",
});

const style = computed(() => {
  if (typeof props.ratio === "number") {
    return { "--ms-aspect-ratio": `${props.ratio}` };
  }
  if (typeof props.ratio === "string") {
    const delimiter = props.ratio.includes("/") ? "/" : props.ratio.includes(":") ? ":" : null;
    if (delimiter) {
      const [w, h] = props.ratio.split(delimiter).map((n) => parseFloat(n.trim()));
      if (w && h) {
        return { "--ms-aspect-ratio": `${w} / ${h}` };
      }
    }
    return { "--ms-aspect-ratio": props.ratio };
  }
  return { "--ms-aspect-ratio": "16 / 9" };
});
</script>

<template>
  <div class="ms-aspect-ratio" :style="style">
    <slot />
  </div>
</template>
