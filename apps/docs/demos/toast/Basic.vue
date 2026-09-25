<script setup lang="ts">
import { MsButton, MsToastContainer, useToast } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const toast = useToast();

function save() {
  toast.success(t.savedMessage, { title: t.savedTitle });
}
</script>

<template>
  <MsButton @click="save">{{ t.saveChanges }}</MsButton>
  <!-- Mount the container once, usually in App.vue. -->
  <MsToastContainer />
</template>
