<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { MsNavbarProps, MsNavbarEmits } from "./types";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

defineOptions({
  name: "MsNavbar",
});

const props = withDefaults(defineProps<MsNavbarProps>(), {
  position: "static",
  variant: "default",
  tone: "default",
  size: "md",
  shadow: undefined,
  container: undefined,
  floating: false,
  fixed: false,
  mobileMenuOpen: false,
});

const emit = defineEmits<MsNavbarEmits>();

const t = useMsMessages();

const internalMobileMenuOpen = ref(props.mobileMenuOpen);
watch(
  () => props.mobileMenuOpen,
  (val) => {
    internalMobileMenuOpen.value = val;
  },
);

function handleToggleMenu() {
  internalMobileMenuOpen.value = !internalMobileMenuOpen.value;
  emit("update:mobileMenuOpen", internalMobileMenuOpen.value);
  emit("toggle-menu");
}

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
  "ms-navbar",
  effectivePosition.value !== "static"
    ? `ms-navbar--position-${effectivePosition.value}`
    : undefined,
  props.variant !== "default" ? `ms-navbar--variant-${props.variant}` : undefined,
  props.tone !== "default" ? `ms-navbar--tone-${props.tone}` : undefined,
  `ms-navbar--size-${props.size}`,
  props.floating ? "ms-navbar--floating" : undefined,
  effectiveShadow.value ? `ms-navbar--shadow-${effectiveShadow.value}` : undefined,
]);

const containerClasses = computed(() => {
  if (!props.container) return undefined;
  const mod = typeof props.container === "string" ? props.container : "xl";
  return ["ms-navbar__container", `ms-navbar__container--${mod}`];
});
</script>

<template>
  <header
    :class="classes"
    :data-position="effectivePosition"
    :data-variant="variant"
    :data-tone="tone"
    :data-size="size"
    :data-shadow="effectiveShadow"
    :data-floating="floating ? 'true' : undefined"
  >
    <!-- Container wrapped layout -->
    <div v-if="container" :class="containerClasses">
      <div v-if="$slots.brand" class="ms-navbar__brand">
        <slot name="brand" />
      </div>

      <div v-if="$slots.default" class="ms-navbar__content">
        <slot />
      </div>

      <div v-if="$slots.actions" class="ms-navbar__actions">
        <slot name="actions" />
      </div>

      <button
        v-if="$slots['mobile-toggle'] || $slots['mobile-menu']"
        type="button"
        class="ms-navbar__mobile-toggle"
        :aria-expanded="internalMobileMenuOpen ? 'true' : 'false'"
        :aria-label="t.navbar.toggle"
        @click="handleToggleMenu"
      >
        <slot name="mobile-toggle">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </slot>
      </button>
    </div>

    <!-- Default unwrapped layout -->
    <template v-else>
      <div v-if="$slots.brand" class="ms-navbar__brand">
        <slot name="brand" />
      </div>

      <div v-if="$slots.default" class="ms-navbar__content">
        <slot />
      </div>

      <div v-if="$slots.actions" class="ms-navbar__actions">
        <slot name="actions" />
      </div>

      <button
        v-if="$slots['mobile-toggle'] || $slots['mobile-menu']"
        type="button"
        class="ms-navbar__mobile-toggle"
        :aria-expanded="internalMobileMenuOpen ? 'true' : 'false'"
        :aria-label="t.navbar.toggle"
        @click="handleToggleMenu"
      >
        <slot name="mobile-toggle">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </slot>
      </button>
    </template>

    <!-- Mobile Dropdown Menu -->
    <div v-if="$slots['mobile-menu'] && internalMobileMenuOpen" class="ms-navbar__mobile-menu">
      <slot name="mobile-menu" />
    </div>
  </header>
</template>
