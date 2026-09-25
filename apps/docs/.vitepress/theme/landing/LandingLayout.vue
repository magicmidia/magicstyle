<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useData, withBase } from "vitepress";
import {
  MsBadge,
  MsCodeBlock,
  MsProvider,
  MsSegmentedControl,
  MsSnippet,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTabPanels,
  MsTabs,
} from "@magic-style/vue";
import AppPreview from "./AppPreview.vue";
import FeatureIcon from "./FeatureIcon.vue";
import LinkButton from "./LinkButton.vue";
import StatNumber from "./StatNumber.vue";
import { LANDING } from "./copy.ts";
import { INSTALL_SNIPPETS, SETUP_CODE } from "./snippets.ts";
import { data as stats } from "./stats.data.ts";
import { THEMES, type ThemeName } from "../composables/themes.ts";
import type { SitePrefs } from "../composables/useSitePrefs.ts";
import { siteLang } from "../i18n/ui.ts";
import { useUi } from "../composables/useUi.ts";
import { REPO_URL } from "../site.ts";

const { lang, isDark } = useData();
const ui = useUi();
const locale = computed(() => siteLang(lang.value));
const copy = computed(() => LANDING[locale.value]);
const prefix = computed(() => ({ "en-US": "", "pt-BR": "/pt", "es-ES": "/es" })[locale.value]);
const link = (path: string) => withBase(`${prefix.value}${path}`);

// Theme lab: local to the stage (MsProvider target="wrapper"), independent from the site prefs.
const labTheme = ref<ThemeName>("magic");
const labMode = ref<"light" | "dark">("light");
const labRadius = ref<SitePrefs["radius"]>("medium");
const labDensity = ref<SitePrefs["density"]>("comfortable");
onMounted(() => {
  labMode.value = isDark.value ? "dark" : "light";
});

const modeOptions = computed(() => [
  { label: copy.value.lab.light, value: "light" as const },
  { label: copy.value.lab.dark, value: "dark" as const },
]);
const radiusOptions = computed(() =>
  (["sharp", "subtle", "medium", "rounded"] as const).map((value) => ({
    label: ui.value.radii[value],
    value,
  })),
);
const densityOptions = computed(() =>
  (["compact", "comfortable", "spacious"] as const).map((value) => ({
    label: ui.value.densities[value],
    value,
  })),
);

const statItems = computed(() => [
  { value: stats.components, label: copy.value.stats.components },
  { value: stats.themes, label: copy.value.stats.themes },
  { value: stats.tokens, label: copy.value.stats.tokens },
  { value: stats.tests, label: copy.value.stats.tests, suffix: "+" },
  { value: stats.languages, label: copy.value.stats.languages },
]);

const FEATURE_ICONS = [
  "a11y",
  "themes",
  "ssr",
  "languages",
  "rtl",
  "tokens",
  "css",
  "typescript",
] as const;
</script>

<template>
  <div class="landing">
    <!-- Hero -->
    <section class="landing-hero">
      <div class="landing-hero__backdrop" aria-hidden="true" />
      <div class="landing-container landing-hero__inner">
        <a class="landing-hero__badge" :href="link('/guide/changelog')">
          <MsBadge variant="outline" tone="neutral">v{{ stats.version }}</MsBadge>
          <span>{{ copy.hero.badge }}</span>
          <span aria-hidden="true">→</span>
        </a>
        <h1 class="landing-hero__title">
          {{ copy.hero.title }}
          <span class="landing-hero__accent">{{ copy.hero.accent }}</span>
        </h1>
        <p class="landing-hero__subtitle">{{ copy.hero.subtitle }}</p>
        <div class="landing-actions">
          <LinkButton :href="link('/guide/introduction')" size="lg">
            {{ copy.hero.start }}
            <span aria-hidden="true">→</span>
          </LinkButton>
          <LinkButton :href="link('/components/button')" variant="outline" size="lg">
            {{ copy.hero.browse }}
          </LinkButton>
        </div>
        <MsSnippet class="landing-hero__snippet" :tabs="INSTALL_SNIPPETS" prompt="$" />
      </div>
    </section>

    <!-- Theme lab + app preview -->
    <section class="landing-section landing-lab" aria-labelledby="landing-lab-title">
      <div class="landing-container">
        <header class="landing-heading">
          <p class="landing-eyebrow">{{ copy.lab.eyebrow }}</p>
          <h2 id="landing-lab-title" class="landing-heading__title">{{ copy.lab.title }}</h2>
          <p class="landing-heading__subtitle">{{ copy.lab.subtitle }}</p>
        </header>

        <div class="landing-lab__controls">
          <div class="landing-lab__themes" role="group" :aria-label="copy.lab.theme">
            <button
              v-for="theme in THEMES"
              :key="theme.name"
              type="button"
              class="landing-chip"
              :aria-pressed="labTheme === theme.name"
              @click="labTheme = theme.name"
            >
              <span
                class="landing-chip__swatch"
                :data-ms-theme="theme.name"
                :data-ms-color-mode="labMode"
                aria-hidden="true"
              />
              {{ theme.label }}
            </button>
          </div>
          <div class="landing-lab__dials">
            <label class="landing-dial">
              <span>{{ copy.lab.mode }}</span>
              <MsSegmentedControl v-model="labMode" :options="modeOptions" size="sm" />
            </label>
            <label class="landing-dial">
              <span>{{ copy.lab.radius }}</span>
              <MsSegmentedControl v-model="labRadius" :options="radiusOptions" size="sm" />
            </label>
            <label class="landing-dial">
              <span>{{ copy.lab.density }}</span>
              <MsSegmentedControl v-model="labDensity" :options="densityOptions" size="sm" />
            </label>
          </div>
        </div>

        <MsProvider
          class="landing-lab__stage"
          target="wrapper"
          :theme="labTheme"
          :color-mode="labMode"
          :radius="labRadius"
          :density="labDensity"
          :locale="lang"
        >
          <AppPreview :copy="copy.preview" :lang="lang" />
        </MsProvider>
      </div>
    </section>

    <!-- Features -->
    <section class="landing-section" aria-labelledby="landing-features-title">
      <div class="landing-container">
        <header class="landing-heading">
          <p class="landing-eyebrow">{{ copy.features.eyebrow }}</p>
          <h2 id="landing-features-title" class="landing-heading__title">
            {{ copy.features.title }}
          </h2>
        </header>
        <ul class="landing-features">
          <li
            v-for="(item, index) in copy.features.items"
            :key="item.title"
            class="landing-feature"
          >
            <span class="landing-feature__icon"><FeatureIcon :name="FEATURE_ICONS[index]!" /></span>
            <h3 class="landing-feature__title">{{ item.title }}</h3>
            <p class="landing-feature__text">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Stats -->
    <section class="landing-stats" :aria-label="copy.features.eyebrow">
      <div class="landing-container">
        <dl class="landing-stats__list">
          <div v-for="item in statItems" :key="item.label" class="landing-stat">
            <dt class="landing-stat__label">{{ item.label }}</dt>
            <dd class="landing-stat__value">
              <StatNumber :value="item.value" :suffix="item.suffix" />
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Install -->
    <section class="landing-section" aria-labelledby="landing-install-title">
      <div class="landing-container landing-install">
        <header class="landing-heading landing-heading--start">
          <p class="landing-eyebrow">{{ copy.install.eyebrow }}</p>
          <h2 id="landing-install-title" class="landing-heading__title">
            {{ copy.install.title }}
          </h2>
          <p class="landing-heading__subtitle">{{ copy.install.subtitle }}</p>
          <div class="landing-actions landing-actions--start">
            <LinkButton :href="link('/guide/installation')" variant="outline">
              {{ copy.hero.start }}
            </LinkButton>
            <LinkButton :href="link('/guide/laravel-inertia')" variant="ghost">
              {{ copy.install.inertia }} →
            </LinkButton>
          </div>
        </header>
        <MsTabs default-value="vite" class="landing-install__tabs">
          <MsTabList :aria-label="copy.install.eyebrow">
            <MsTab value="vite">{{ copy.install.vite }}</MsTab>
            <MsTab value="inertia">{{ copy.install.inertia }}</MsTab>
            <MsTab value="css">{{ copy.install.css }}</MsTab>
          </MsTabList>
          <MsTabPanels>
            <MsTabPanel value="vite">
              <MsCodeBlock :code="SETUP_CODE.vite" language="ts" filename="src/main.ts" />
            </MsTabPanel>
            <MsTabPanel value="inertia">
              <MsCodeBlock
                :code="SETUP_CODE.inertia"
                language="ts"
                filename="resources/js/app.ts"
              />
            </MsTabPanel>
            <MsTabPanel value="css">
              <MsCodeBlock :code="SETUP_CODE.css" language="html" filename="index.html" />
            </MsTabPanel>
          </MsTabPanels>
        </MsTabs>
      </div>
    </section>

    <!-- CTA -->
    <section class="landing-section landing-section--last">
      <div class="landing-container">
        <div class="landing-cta">
          <h2 class="landing-cta__title">{{ copy.cta.title }}</h2>
          <p class="landing-cta__subtitle">{{ copy.cta.subtitle }}</p>
          <div class="landing-actions">
            <LinkButton :href="link('/guide/introduction')" size="lg">{{
              copy.cta.start
            }}</LinkButton>
            <LinkButton :href="REPO_URL" variant="outline" size="lg" external>
              {{ copy.cta.github }}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
