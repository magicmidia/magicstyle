<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const username = ref("");
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.username" :description="t.usernameHint">
      <MsInput v-model="username" :placeholder="t.usernamePlaceholder" />
    </MsField>
  </div>
</template>
