<script setup lang="ts">
import { computed, inject, useSlots } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import { MS_LIST_KEY, type MsListGroupProps } from "./types.ts";

defineOptions({ name: "MsListGroup" });

const props = defineProps<MsListGroupProps>();

defineSlots<{
  /** `MsListItem` children of the group. */
  default?(): unknown;
  /** Rich group header; replaces `title` and labels the group. */
  header?(): unknown;
}>();

const slots = useSlots();
const list = inject(MS_LIST_KEY, null);
const headerId = useMsId("ms-list-group");
const hasHeader = computed(() => Boolean(props.title) || slots.header !== undefined);
</script>

<!--
  A list may only contain <li> children, so the group is an <li role="none"> wrapping a
  labelled nested <ul role="group"> (valid for both role="list" and role="listbox").
-->
<template>
  <li class="ms-list-group" role="none" data-ms-list-group>
    <div
      v-if="hasHeader"
      :id="headerId"
      class="ms-list-group__header"
      :role="list?.selectable.value ? 'presentation' : undefined"
    >
      <slot name="header">{{ props.title }}</slot>
    </div>
    <ul
      class="ms-list-group__list"
      role="group"
      :aria-labelledby="hasHeader ? headerId : undefined"
    >
      <slot />
    </ul>
  </li>
</template>
