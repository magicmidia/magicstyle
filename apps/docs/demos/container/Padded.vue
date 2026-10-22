<script setup lang="ts">
import { MsContainer } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%">
    <MsContainer as="section" max-width="sm" class="ms-u-border ms-u-rounded-md">
      <p style="margin: 12px 0">{{ t.padded }}</p>
    </MsContainer>
    <MsContainer as="section" max-width="sm" :padded="false" class="ms-u-border ms-u-rounded-md">
      <p style="margin: 12px 0">{{ t.flush }}</p>
    </MsContainer>
  </div>
</template>
