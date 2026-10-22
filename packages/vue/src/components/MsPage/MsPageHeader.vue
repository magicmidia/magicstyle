<script setup lang="ts">
import type { MsPageHeaderProps } from "./types";

defineProps<MsPageHeaderProps>();

defineSlots<{
  /** Breadcrumbs above the title row. */
  breadcrumbs?(): unknown;
  /** Replaces the `<h1>` rendered from the `title` prop. */
  title?(): unknown;
  /** Replaces the paragraph rendered from the `description` prop. */
  description?(): unknown;
  /** Actions at the end of the title row. */
  actions?(): unknown;
}>();
</script>

<template>
  <div class="ms-page-header">
    <div v-if="$slots.breadcrumbs" class="ms-page-header__breadcrumbs">
      <slot name="breadcrumbs" />
    </div>

    <div class="ms-page-header__row">
      <div class="ms-page-header__title-group">
        <slot name="title">
          <h1 v-if="title" class="ms-page-header__title">{{ title }}</h1>
        </slot>
        <slot name="description">
          <p v-if="description" class="ms-page-header__description">{{ description }}</p>
        </slot>
      </div>

      <div v-if="$slots.actions" class="ms-page-header__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
