<script setup lang="ts">
import { MsCard } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 720px;
    "
  >
    <MsCard href="#installation" :title="t.linkInstallTitle" :description="t.linkInstallDesc" />
    <MsCard href="#theming" :title="t.linkThemingTitle" :description="t.linkThemingDesc" />
    <MsCard
      href="https://vuejs.org/guide/introduction.html"
      target="_blank"
      rel="noopener noreferrer"
      :title="t.linkVueTitle"
      :description="t.linkVueDesc"
    />
  </div>
</template>
