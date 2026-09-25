<script setup lang="ts">
import { reactive, ref } from "vue";
import { MsButton, MsDialog, MsField, MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const saving = ref(false);
const profile = reactive({ name: "Marina Costa", username: "marina.costa" });

async function save() {
  saving.value = true;
  await new Promise((resolve) => setTimeout(resolve, 800));
  saving.value = false;
  open.value = false;
}
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.editProfile }}</MsButton>
  <MsDialog v-model:open="open" :title="t.editTitle" :description="t.editDescription">
    <form id="profile-form" style="display: grid; gap: 16px" @submit.prevent="save">
      <MsField :label="t.nameLabel" required>
        <MsInput v-model="profile.name" name="name" autocomplete="name" />
      </MsField>
      <MsField :label="t.usernameLabel" :description="t.usernameHint">
        <MsInput v-model="profile.username" name="username" autocomplete="username" />
      </MsField>
    </form>
    <template #footer>
      <MsButton variant="outline" tone="neutral" @click="open = false">{{ t.cancel }}</MsButton>
      <MsButton type="submit" form="profile-form" :loading="saving">{{ t.saveChanges }}</MsButton>
    </template>
  </MsDialog>
</template>
