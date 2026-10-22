<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsMenu, type MsMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const wrapper = ref<HTMLElement | null>(null);
const sort = ref("created-desc");

const items = computed<MsMenuItem[]>(() => [
  { label: t.newest, value: "created-desc" },
  { label: t.oldest, value: "created-asc" },
  { label: t.nameAz, value: "name-asc" },
  { label: t.mostViewed, value: "views-desc" },
]);

const sortLabel = computed(() => items.value.find((item) => item.value === sort.value)?.label);

function onDismiss(reason: string) {
  open.value = false;
  // Return focus to the trigger after Escape or a selection.
  if (reason === "escape" || reason === "select") wrapper.value?.querySelector("button")?.focus();
}
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center">
    <div ref="wrapper" class="ms-dropdown">
      <MsButton caret :open="open" aria-haspopup="menu" @click="open = !open">{{
        t.sortBy
      }}</MsButton>
      <MsMenu
        v-if="open"
        :items="items"
        :open="open"
        :anchor="wrapper"
        @select="sort = $event.value as string"
        @dismiss="onDismiss"
      />
    </div>
    <p style="margin: 0; font-size: 14px">
      {{ t.currentSort }} <strong>{{ sortLabel }}</strong>
    </p>
  </div>
</template>
