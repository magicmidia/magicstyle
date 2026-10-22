<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const initial = ["Vue", "TypeScript", "Vite", "Pinia", "Vitest"];
const skills = ref([...initial]);

function remove(skill: string) {
  skills.value = skills.value.filter((item) => item !== skill);
}
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsTag
        v-for="skill in skills"
        :key="skill"
        tone="primary"
        shape="pill"
        closable
        @close="remove(skill)"
      >
        {{ skill }}
      </MsTag>
      <MsTag tone="neutral" shape="pill" closable disabled>Nuxt</MsTag>
    </div>
    <MsButton
      v-if="skills.length < initial.length"
      variant="link"
      size="sm"
      @click="skills = [...initial]"
    >
      {{ t.restore }}
    </MsButton>
  </div>
</template>
