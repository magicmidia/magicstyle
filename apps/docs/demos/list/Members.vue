<script setup lang="ts">
import { computed } from "vue";
import { MsAvatar, MsBadge, MsList, MsListItem, type MsBadgeProps } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

type Tone = NonNullable<MsBadgeProps["tone"]>;

const members = computed<{ name: string; email: string; role: string; tone: Tone }[]>(() => [
  { name: "Mariana Alves", email: "mariana@acme.com", role: t.owner, tone: "primary" },
  { name: "Rodrigo Pires", email: "rodrigo@acme.com", role: t.admin, tone: "accent" },
  { name: "Sofia Teixeira", email: "sofia@acme.com", role: t.editor, tone: "neutral" },
  { name: "Caio Moreira", email: "caio@acme.com", role: t.viewer, tone: "neutral" },
]);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsList variant="bordered">
      <MsListItem
        v-for="member in members"
        :key="member.email"
        :title="member.name"
        :description="member.email"
      >
        <template #leading>
          <MsAvatar :name="member.name" size="sm" />
        </template>
        <template #trailing>
          <MsBadge variant="soft" :tone="member.tone" size="sm">{{ member.role }}</MsBadge>
        </template>
      </MsListItem>
    </MsList>
  </div>
</template>
