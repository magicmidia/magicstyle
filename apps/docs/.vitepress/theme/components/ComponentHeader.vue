<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { MsBadge } from "@magic-style/vue";
import { COMPONENTS } from "../../../catalog/components.ts";
import { CATEGORIES } from "../../../catalog/categories.ts";
import { siteLang } from "../i18n/ui.ts";
import { useUi } from "../composables/useUi.ts";
import { REPO_URL } from "../site.ts";

const props = defineProps<{ slug: string }>();
const { lang } = useData();
const ui = useUi();

const entry = computed(() => COMPONENTS.find((c) => c.slug === props.slug));
const category = computed(() => CATEGORIES.find((c) => c.id === entry.value?.category));
const importLine = computed(
  () => `import { ${entry.value?.components.join(", ")} } from "@magic-style/vue";`,
);
</script>

<template>
  <div v-if="entry" class="docs-component-header">
    <div class="docs-component-header__meta">
      <MsBadge v-if="category" variant="outline">{{ category.title[siteLang(lang)] }}</MsBadge>
      <MsBadge v-if="entry.apg" variant="soft" tone="success">WAI-ARIA</MsBadge>
      <a
        :href="`${REPO_URL}/tree/main/packages/vue/src/components/${entry.dir}`"
        target="_blank"
        rel="noreferrer"
      >
        {{ ui.viewSource }}
      </a>
      <a
        :href="`${REPO_URL}/issues/new?labels=bug&title=${encodeURIComponent(`[${entry.dir}] `)}`"
        target="_blank"
        rel="noreferrer"
      >
        {{ ui.reportIssue }}
      </a>
    </div>
    <div class="language-ts vp-adaptive-theme docs-component-header__import">
      <span class="lang">ts</span>
      <pre><code>{{ importLine }}</code></pre>
    </div>
  </div>
</template>
