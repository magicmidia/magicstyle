<script setup lang="ts">
import { computed, ref } from "vue";
import { useData } from "vitepress";
import {
  MS_THEME_CONTRACT,
  MsBadge,
  MsInput,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTabPanels,
  MsTabs,
} from "@magic-style/vue";
import { data as tokens, type TokenRow } from "./tokens.data.ts";
import { PAGES } from "./strings.ts";
import { siteLang } from "../i18n/ui.ts";
import { useCopy } from "./useCopy.ts";

type Kind =
  "color" | "radius" | "shadow" | "space" | "size" | "weight" | "font" | "height" | "other";

const { lang } = useData();
const s = computed(() => PAGES[siteLang(lang.value)]);
const { copied, copy } = useCopy();
const query = ref("");
const tab = ref("contract");

function kindOf(name: string): Kind {
  if (name.startsWith("color-") || name === "tone" || name.startsWith("tone-")) return "color";
  if (name.startsWith("radius") || name === "control-radius") return "radius";
  if (name.startsWith("elevation") || name.startsWith("shadow")) return "shadow";
  if (name.startsWith("space-")) return "space";
  if (name.startsWith("typography-size")) return "size";
  if (name.startsWith("typography-weight")) return "weight";
  if (name.startsWith("font-")) return "font";
  if (name.startsWith("control-height")) return "height";
  return "other";
}

const matches = (row: { name: string; value?: string }) => {
  const q = query.value
    .trim()
    .toLowerCase()
    .replace(/^--ms-/, "");
  return q === "" || row.name.includes(q) || (row.value ?? "").toLowerCase().includes(q);
};

const contract = computed(() =>
  MS_THEME_CONTRACT.map((entry) => ({
    name: entry.key,
    required: entry.required,
    description: s.value.contract[entry.key] ?? entry.description,
  })).filter(matches),
);
const derived = computed(() => tokens.derived.filter(matches));
const primitives = computed(() => tokens.primitives.filter(matches));

const PALETTE = /^color-([a-z]+)-(\d+)$/;
const palettes = computed(() => {
  const families = new Map<string, TokenRow[]>();
  for (const row of tokens.primitives) {
    const match = PALETTE.exec(row.name);
    if (!match) continue;
    const list = families.get(match[1]!) ?? [];
    list.push(row);
    families.set(match[1]!, list);
  }
  return [...families].map(([family, rows]) => ({
    family,
    rows: rows.sort((a, b) => Number(PALETTE.exec(a.name)![2]) - Number(PALETTE.exec(b.name)![2])),
  }));
});

const tabs = computed(() => [
  {
    value: "contract",
    label: s.value.tokens.contract,
    hint: s.value.tokens.contractHint,
    count: contract.value.length,
  },
  {
    value: "derived",
    label: s.value.tokens.derived,
    hint: s.value.tokens.derivedHint,
    count: derived.value.length,
  },
  {
    value: "primitives",
    label: s.value.tokens.primitives,
    hint: s.value.tokens.primitivesHint,
    count: primitives.value.length,
  },
]);
</script>

<template>
  <div class="docs-tokens">
    <div class="docs-tokens__toolbar">
      <MsInput
        v-model="query"
        type="search"
        size="sm"
        clearable
        :placeholder="s.tokens.search"
        :aria-label="s.tokens.search"
      />
    </div>

    <MsTabs v-model="tab">
      <MsTabList :aria-label="s.tokens.token">
        <MsTab v-for="item in tabs" :key="item.value" :value="item.value">
          {{ item.label }}
          <MsBadge size="sm" variant="outline" tone="neutral">{{ item.count }}</MsBadge>
        </MsTab>
      </MsTabList>

      <MsTabPanels>
        <MsTabPanel v-for="item in tabs" :key="item.value" :value="item.value">
          <p class="docs-tokens__hint">{{ item.hint }}</p>

          <div v-if="item.value === 'primitives' && query === ''" class="docs-tokens__palettes">
            <div v-for="palette in palettes" :key="palette.family" class="docs-tokens__palette">
              <span class="docs-tokens__palette-name">{{ palette.family }}</span>
              <button
                v-for="row in palette.rows"
                :key="row.name"
                type="button"
                class="docs-tokens__chip"
                :style="{ background: `var(--ms-${row.name})` }"
                :title="`--ms-${row.name}: ${row.value}`"
                :aria-label="`${s.tokens.copyName} --ms-${row.name}`"
                @click="copy(`var(--ms-${row.name})`, row.name)"
              >
                <span>{{ copied === row.name ? "✓" : row.name.split("-").pop() }}</span>
              </button>
            </div>
          </div>

          <div class="docs-tokens__table-wrap">
            <table class="docs-tokens__table">
              <thead>
                <tr>
                  <th scope="col">{{ s.tokens.token }}</th>
                  <th scope="col">
                    {{ item.value === "contract" ? s.tokens.description : s.tokens.value }}
                  </th>
                  <th scope="col" class="docs-tokens__preview-col">{{ s.tokens.preview }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in item.value === 'contract'
                    ? contract
                    : item.value === 'derived'
                      ? derived
                      : primitives"
                  :key="row.name"
                >
                  <td>
                    <button
                      type="button"
                      class="docs-tokens__name"
                      :title="s.tokens.copyName"
                      @click="copy(`var(--ms-${row.name})`, row.name)"
                    >
                      <code>--ms-{{ row.name }}</code>
                      <span
                        v-if="copied === row.name"
                        class="docs-tokens__copied"
                        aria-live="polite"
                      >
                        {{ s.tokens.copied }}
                      </span>
                    </button>
                    <MsBadge
                      v-if="'required' in row && !row.required"
                      size="sm"
                      variant="outline"
                      tone="neutral"
                    >
                      {{ s.tokens.optional }}
                    </MsBadge>
                  </td>
                  <td class="docs-tokens__value">
                    <template v-if="'description' in row">{{ row.description }}</template>
                    <code v-else :title="row.value">{{ row.value }}</code>
                  </td>
                  <td class="docs-tokens__preview-col">
                    <span
                      class="docs-token-preview"
                      :data-kind="kindOf(row.name)"
                      :style="{ '--token': `var(--ms-${row.name})` }"
                    >
                      <template
                        v-if="
                          kindOf(row.name) === 'size' ||
                          kindOf(row.name) === 'weight' ||
                          kindOf(row.name) === 'font'
                        "
                        >Aa</template
                      >
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              v-if="
                (item.value === 'contract'
                  ? contract
                  : item.value === 'derived'
                    ? derived
                    : primitives
                ).length === 0
              "
              class="docs-tokens__empty"
            >
              {{ s.tokens.empty }}
            </p>
          </div>
        </MsTabPanel>
      </MsTabPanels>
    </MsTabs>
  </div>
</template>
