<script setup lang="ts">
import { MsFooter, MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div class="ms-u-w-full ms-u-rounded-lg" style="overflow: hidden">
    <MsFooter layout="centered" variant="inverse" :copyright="t.copyright">
      <template #brand>
        <strong>{{ t.brand }}</strong>
      </template>
      <nav :aria-label="t.legal" class="ms-u-flex ms-u-flex-wrap ms-u-justify-center ms-u-gap-4">
        <MsLink href="#" variant="subtle">{{ t.docs }}</MsLink>
        <MsLink href="#" variant="subtle">{{ t.pricing }}</MsLink>
        <MsLink href="#" variant="subtle">{{ t.privacy }}</MsLink>
        <MsLink href="#" variant="subtle">{{ t.terms }}</MsLink>
      </nav>
    </MsFooter>
  </div>
</template>
