<script setup lang="ts">
/** An anchor styled as MsButton (MsButton always renders a <button>). */
withDefaults(
  defineProps<{
    href: string;
    variant?: "solid" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    external?: boolean;
  }>(),
  { variant: "solid", size: "md", external: false },
);
</script>

<template>
  <a
    class="ms-button landing-link-button"
    :href="href"
    :data-variant="variant"
    :data-tone="variant === 'solid' ? 'primary' : 'neutral'"
    :data-size="size"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <span class="ms-button-label"><slot /></span>
  </a>
</template>
