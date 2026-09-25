<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsField, MsRating, MsTextarea } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const stars = ref(0);
const comment = ref("");
const error = ref("");
const sent = ref(false);

function onSubmit(): void {
  error.value = stars.value > 0 ? "" : t.ratingError;
  sent.value = !error.value;
}
</script>

<template>
  <form style="display: grid; gap: 16px; width: 100%; max-width: 400px" @submit.prevent="onSubmit">
    <MsField :label="t.howWasIt" :error="error">
      <MsRating v-model="stars" size="lg" :aria-label="t.howWasIt" />
    </MsField>
    <MsField :label="t.comment" optional>
      <MsTextarea v-model="comment" :placeholder="t.commentPlaceholder" />
    </MsField>
    <MsButton type="submit">{{ t.send }}</MsButton>
    <p v-if="sent" role="status">{{ t.thanks }}</p>
  </form>
</template>
