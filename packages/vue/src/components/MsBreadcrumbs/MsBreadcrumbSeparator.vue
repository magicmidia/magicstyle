<template>
  <span class="ms-breadcrumbs__separator" aria-hidden="true">
    <slot>{{ context?.separator.value ?? "›" }}</slot>
  </span>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { BREADCRUMBS_CONTEXT_KEY, type MsBreadcrumbSeparatorProps } from "./types.ts";

defineOptions({
  name: "MsBreadcrumbSeparator",
});

withDefaults(defineProps<MsBreadcrumbSeparatorProps>(), {
  as: "span",
});

const context = inject(BREADCRUMBS_CONTEXT_KEY, undefined);
</script>
