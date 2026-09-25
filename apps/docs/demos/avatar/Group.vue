<script setup lang="ts">
import { MsAvatar, MsAvatarGroup, type MsAvatarProps } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const team: MsAvatarProps[] = [
  { name: "Ana Ribeiro", src: "/demo/avatar-ana-ribeiro.svg" },
  { name: "Bruno Tavares", tone: "primary" },
  { name: "Clara Mendes", src: "/demo/avatar-clara-mendes.svg" },
  { name: "Diego Martins", tone: "success" },
  { name: "Elisa Prado", tone: "accent" },
  { name: "Fábio Moura", tone: "warning" },
  { name: "Gabriela Reis", tone: "danger" },
];
</script>

<template>
  <div style="display: grid; gap: 24px">
    <div style="display: grid; gap: 8px">
      <small>{{ t.projectTeam }}</small>
      <MsAvatarGroup :items="team" :max="4" />
    </div>
    <div style="display: grid; gap: 8px">
      <small>{{ t.reviewers }}</small>
      <MsAvatarGroup size="sm" spacing="tight">
        <MsAvatar name="Ana Ribeiro" src="/demo/avatar-ana-ribeiro.svg" />
        <MsAvatar name="Bruno Tavares" tone="primary" />
        <MsAvatar name="Clara Mendes" tone="accent" />
      </MsAvatarGroup>
    </div>
    <div style="display: grid; gap: 8px">
      <small>{{ t.attendees }}</small>
      <MsAvatarGroup :items="team" :max="5" size="lg" spacing="loose" />
    </div>
  </div>
</template>
