<script setup lang="ts">
import { ref } from "vue";
import { MsCheckbox } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const remember = ref(true);
</script>

<template>
  <MsCheckbox v-model="remember" :label="t.remember" />
</template>
