<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsCol, MsInput, MsLabel, MsRow } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const company = ref("");
const website = ref("");
</script>

<template>
  <form style="width: 100%; max-width: 560px" @submit.prevent>
    <MsRow :gutter="[0, 16]" align="middle">
      <MsCol :span="12" :sm="4">
        <MsLabel for="grid-company">{{ t.companyName }}</MsLabel>
      </MsCol>
      <MsCol :span="12" :sm="8">
        <MsInput id="grid-company" v-model="company" :placeholder="t.companyPlaceholder" />
      </MsCol>
      <MsCol :span="12" :sm="4">
        <MsLabel for="grid-website">{{ t.website }}</MsLabel>
      </MsCol>
      <MsCol :span="12" :sm="8">
        <MsInput id="grid-website" v-model="website" type="url" :placeholder="t.urlPlaceholder" />
      </MsCol>
    </MsRow>
    <MsRow justify="end" style="margin-top: 16px">
      <MsCol :span="12" :sm="8">
        <MsButton type="submit">{{ t.save }}</MsButton>
      </MsCol>
    </MsRow>
  </form>
</template>
