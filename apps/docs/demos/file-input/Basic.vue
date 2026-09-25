<script setup lang="ts">
import { ref } from "vue";
import { MsFileInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const file = ref<File | File[] | null>(null);
</script>

<template>
  <div style="width: 100%; max-width: 440px">
    <MsFileInput v-model="file" :max-size="10 * 1024 * 1024" :hint="t.basicHint" />
  </div>
</template>
