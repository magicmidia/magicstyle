<script setup lang="ts">
/** Stroke icons (lucide geometry, ISC license) for the feature grid. */
const ICONS = {
  a11y: [
    "M16 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    "m18 19 1-7-6 1",
    "m5 8 3-3 5.5 3-2.36 3.5",
    "M4.24 14.5a5 5 0 0 0 6.88 6",
    "M13.76 17.5a5 5 0 0 0-6.88-6",
  ],
  themes: [
    "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
    "M13.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    "M17.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    "M6.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    "M8.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
  ],
  ssr: [
    "M4 2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z",
    "M4 14h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z",
    "M6 6h.01",
    "M6 18h.01",
  ],
  languages: ["m5 8 6 6", "m4 14 6-6 2-3", "M2 5h12", "M7 2h1", "m22 22-5-10-5 10", "M14 18h6"],
  rtl: ["M8 3 4 7l4 4", "M4 7h16", "m16 21 4-4-4-4", "M20 17H4"],
  tokens: [
    "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
    "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
  ],
  css: [
    "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
    "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
    "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
  ],
  typescript: ["m16 18 6-6-6-6", "m8 6-6 6 6 6"],
} as const;

defineProps<{ name: keyof typeof ICONS }>();
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="d in ICONS[name]" :key="d" :d="d" />
  </svg>
</template>
