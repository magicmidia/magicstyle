<script setup lang="ts">
import { MsButton, useToast } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const toast = useToast();
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="toast.info(t.infoMessage)">
    {{ t.info }}
  </MsButton>
  <MsButton variant="outline" tone="neutral" @click="toast.success(t.successMessage)">
    {{ t.success }}
  </MsButton>
  <MsButton variant="outline" tone="neutral" @click="toast.warning(t.warningMessage)">
    {{ t.warning }}
  </MsButton>
  <MsButton variant="outline" tone="neutral" @click="toast.danger(t.dangerMessage)">
    {{ t.danger }}
  </MsButton>
</template>
