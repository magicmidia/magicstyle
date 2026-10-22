<script setup lang="ts">
import { ref } from "vue";
import { MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const airplane = ref(false);
</script>

<template>
  <MsSwitch v-model="airplane" :label="t.airplane" />
</template>
