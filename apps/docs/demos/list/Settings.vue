<script setup lang="ts">
import { ref } from "vue";
import { MsBadge, MsList, MsListGroup, MsListItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const current = ref("profile");
</script>

<template>
  <nav :aria-label="t.settingsNav" style="display: grid; gap: 16px; width: 100%; max-width: 320px">
    <MsListGroup :title="t.accountGroup">
      <MsList size="sm">
        <MsListItem interactive :active="current === 'profile'">
          <template #title>
            <a
              href="#profile"
              :aria-current="current === 'profile' ? 'page' : undefined"
              @click.prevent="current = 'profile'"
            >
              {{ t.profile }}
            </a>
          </template>
        </MsListItem>
        <MsListItem interactive :active="current === 'security'">
          <template #title>
            <a
              href="#security"
              :aria-current="current === 'security' ? 'page' : undefined"
              @click.prevent="current = 'security'"
            >
              {{ t.security }}
            </a>
          </template>
        </MsListItem>
      </MsList>
    </MsListGroup>
    <MsListGroup :title="t.workspaceGroup">
      <MsList size="sm">
        <MsListItem interactive :active="current === 'members'">
          <template #title>
            <a
              href="#members"
              :aria-current="current === 'members' ? 'page' : undefined"
              @click.prevent="current = 'members'"
            >
              {{ t.members }}
            </a>
          </template>
          <template #trailing>
            <MsBadge variant="soft" size="xs" pill>12</MsBadge>
          </template>
        </MsListItem>
        <MsListItem :title="t.auditLog" disabled>
          <template #trailing>
            <MsBadge variant="outline" tone="neutral" size="xs">{{ t.enterprise }}</MsBadge>
          </template>
        </MsListItem>
      </MsList>
    </MsListGroup>
  </nav>
</template>
