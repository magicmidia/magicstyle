<script setup lang="ts">
import { computed, ref } from "vue";
import { MsToast, type MsToastItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const visible = ref(true);

const preview = computed<MsToastItem>(() => ({
  id: "invoice-sent",
  title: t.invoiceTitle,
  message: t.invoiceMessage,
  tone: "success",
  placement: "top-right",
  duration: 0,
  dismissible: true,
}));
</script>

<template>
  <MsToast v-if="visible" :toast="preview" :announce="false" @dismiss="visible = false" />
</template>
