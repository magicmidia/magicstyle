<script setup lang="ts">
import { computed } from "vue";
import type { MsFooterProps } from "./types";

defineOptions({
  name: "MsFooter",
});

const props = withDefaults(defineProps<MsFooterProps>(), {
  layout: "simple",
  variant: "default",
  tone: "default",
  shadow: undefined,
  position: "static",
  fixed: false,
  container: undefined,
  columns: undefined,
  copyright: undefined,
});

const effectivePosition = computed(() => {
  if (props.fixed) return "fixed";
  return props.position;
});

const effectiveShadow = computed(() => {
  if (props.shadow === true) return "md";
  if (typeof props.shadow === "string" && props.shadow !== "none") return props.shadow;
  return undefined;
});

const classes = computed(() => [
  "ms-footer",
  `ms-footer--layout-${props.layout}`,
  effectivePosition.value !== "static"
    ? `ms-footer--position-${effectivePosition.value}`
    : undefined,
  effectiveShadow.value ? `ms-footer--shadow-${effectiveShadow.value}` : undefined,
  props.variant !== "default" ? `ms-footer--variant-${props.variant}` : undefined,
  props.tone !== "default" ? `ms-footer--tone-${props.tone}` : undefined,
]);

const containerClasses = computed(() => {
  if (!props.container) return undefined;
  const mod = typeof props.container === "string" ? props.container : "xl";
  return ["ms-footer__container", `ms-footer__container--${mod}`];
});
</script>

<template>
  <footer
    :class="classes"
    :data-layout="layout"
    :data-position="effectivePosition"
    :data-shadow="effectiveShadow"
    :data-variant="variant"
    :data-tone="tone"
  >
    <!-- Container wrapped layout -->
    <div v-if="container" :class="containerClasses">
      <div v-if="$slots.brand" class="ms-footer__brand">
        <slot name="brand" />
      </div>

      <!-- Multi-column grid -->
      <div v-if="$slots.columns || (columns && columns.length > 0)" class="ms-footer__grid">
        <slot name="columns">
          <div v-for="(col, colIndex) in columns" :key="colIndex" class="ms-footer__column">
            <div class="ms-footer__column-title">{{ col.title }}</div>
            <a
              v-for="(link, linkIndex) in col.links"
              :key="linkIndex"
              :href="link.href || '#'"
              class="ms-footer__link"
            >
              {{ link.label }}
            </a>
          </div>
        </slot>
      </div>

      <!-- Default slot content for custom or simple layouts -->
      <slot />

      <!-- Bottom area (copyright and social) -->
      <div
        v-if="$slots.bottom || $slots.copyright || $slots.social || copyright"
        class="ms-footer__bottom"
      >
        <slot name="bottom">
          <div class="ms-footer__copyright">
            <slot name="copyright">
              {{ copyright }}
            </slot>
          </div>
          <div v-if="$slots.social" class="ms-footer__social">
            <slot name="social" />
          </div>
        </slot>
      </div>
    </div>

    <!-- Direct un-wrapped layout -->
    <template v-else>
      <div v-if="$slots.brand" class="ms-footer__brand">
        <slot name="brand" />
      </div>

      <!-- Multi-column grid -->
      <div v-if="$slots.columns || (columns && columns.length > 0)" class="ms-footer__grid">
        <slot name="columns">
          <div v-for="(col, colIndex) in columns" :key="colIndex" class="ms-footer__column">
            <div class="ms-footer__column-title">{{ col.title }}</div>
            <a
              v-for="(link, linkIndex) in col.links"
              :key="linkIndex"
              :href="link.href || '#'"
              class="ms-footer__link"
            >
              {{ link.label }}
            </a>
          </div>
        </slot>
      </div>

      <!-- Default slot content for custom or simple layouts -->
      <slot />

      <!-- Bottom area (copyright and social) -->
      <div
        v-if="$slots.bottom || $slots.copyright || $slots.social || copyright"
        class="ms-footer__bottom"
      >
        <slot name="bottom">
          <div class="ms-footer__copyright">
            <slot name="copyright">
              {{ copyright }}
            </slot>
          </div>
          <div v-if="$slots.social" class="ms-footer__social">
            <slot name="social" />
          </div>
        </slot>
      </div>
    </template>
  </footer>
</template>
