<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSearchField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const query = ref("");

const people = [
  { name: "Ana Ribeiro", email: "ana.ribeiro@acme.com" },
  { name: "Bruno Carvalho", email: "bruno.c@acme.com" },
  { name: "Camila Duarte", email: "camila.duarte@acme.com" },
  { name: "Diego Martins", email: "diego@acme.com" },
  { name: "Elisa Nogueira", email: "elisa.n@acme.com" },
];

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return people;
  return people.filter((p) => p.name.toLowerCase().includes(q) || p.email.includes(q));
});
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsSearchField v-model="query" :placeholder="t.peoplePlaceholder" />
    <ul style="display: grid; gap: 8px; margin: 0; padding: 0; list-style: none">
      <li v-for="person in results" :key="person.email" style="display: grid">
        <strong>{{ person.name }}</strong>
        <small>{{ person.email }}</small>
      </li>
      <li v-if="results.length === 0">{{ t.noResults }}</li>
    </ul>
  </div>
</template>
