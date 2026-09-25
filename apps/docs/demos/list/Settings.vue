<script setup lang="ts">
import { ref } from "vue";
import { MsBadge, MsList, MsListGroup, MsListItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const current = ref("profile");
</script>

<template>
  <nav :aria-label="t.settingsNav" style="width: 100%; max-width: 320px">
    <MsList size="sm">
      <MsListGroup :title="t.accountGroup">
        <MsListItem
          interactive
          :title="t.profile"
          :active="current === 'profile'"
          @click="current = 'profile'"
        />
        <MsListItem
          interactive
          :title="t.security"
          :active="current === 'security'"
          @click="current = 'security'"
        />
      </MsListGroup>
      <MsListGroup :title="t.workspaceGroup">
        <MsListItem
          interactive
          :title="t.members"
          :active="current === 'members'"
          @click="current = 'members'"
        >
          <template #trailing>
            <MsBadge variant="soft" size="xs" pill>12</MsBadge>
          </template>
        </MsListItem>
        <MsListItem :title="t.auditLog" disabled>
          <template #trailing>
            <MsBadge variant="outline" tone="neutral" size="xs">{{ t.enterprise }}</MsBadge>
          </template>
        </MsListItem>
      </MsListGroup>
    </MsList>
  </nav>
</template>
