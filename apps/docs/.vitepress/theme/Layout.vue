<script setup lang="ts">
import DefaultTheme from "vitepress/theme-without-fonts";
import { useData } from "vitepress";
import { MsProvider } from "@magic-style/vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import { useSitePrefs } from "./composables/useSitePrefs.ts";

const { isDark, lang } = useData();
const prefs = useSitePrefs();
</script>

<template>
  <!-- target="root": attributes go on <html> after mount, so stored preferences never
       cause hydration mismatches; the head script applies them before first paint. -->
  <MsProvider
    target="root"
    :theme="prefs.theme"
    :color-mode="isDark ? 'dark' : 'light'"
    :density="prefs.density"
    :radius="prefs.radius"
    :contrast="prefs.contrast"
    :locale="lang"
  >
    <DefaultTheme.Layout>
      <template #nav-bar-content-after>
        <ThemeSwitcher />
      </template>
      <template #nav-screen-content-after>
        <div class="docs-nav-screen-switcher"><ThemeSwitcher /></div>
      </template>
    </DefaultTheme.Layout>
  </MsProvider>
</template>
