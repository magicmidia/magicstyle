<script setup lang="ts">
import { MsFooter, MsStatus } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div class="ms-u-w-full ms-u-border ms-u-rounded-lg" style="overflow: hidden">
    <MsFooter layout="compact" :copyright="t.copyright">
      <template #social>
        <MsStatus tone="success" size="sm" pulse :label="t.allSystems" />
      </template>
    </MsFooter>
  </div>
</template>
