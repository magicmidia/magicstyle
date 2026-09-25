<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { MsBadge } from "@magic-style/vue";
import { useUi } from "../composables/useUi.ts";
import { siteLang } from "../i18n/ui.ts";
import ptOverrides from "../../../i18n/api/pt-BR.json";
import esOverrides from "../../../i18n/api/es-ES.json";

interface ApiProp {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
  deprecated?: string;
}
interface ApiDoc {
  name: string;
  props: ApiProp[];
  events: { name: string; signature: string; description: string }[];
  slots: { name: string; type: string; description: string }[];
  exposed: { name: string; type: string; description: string }[];
}
/** Per-locale override: `source` is the English text it was translated from. */
type Overrides = Record<
  string,
  Partial<Record<"props" | "events" | "slots", Record<string, { text: string; source: string }>>>
>;

const props = defineProps<{ component: string }>();
const ui = useUi();
const { lang } = useData();

const docs = import.meta.glob<ApiDoc>("../../generated/api/*.json", {
  eager: true,
  import: "default",
});
const doc = computed(() => docs[`../../generated/api/${props.component}.json`]);

const overrides = computed<Overrides>(() => {
  const l = siteLang(lang.value);
  if (l === "pt-BR") return ptOverrides as Overrides;
  if (l === "es-ES") return esOverrides as Overrides;
  return {};
});

/** Translated description, or the English one flagged when missing/stale. */
function describe(kind: "props" | "events" | "slots", name: string, english: string) {
  if (siteLang(lang.value) === "en-US" || !english) return { text: english, english: false };
  const entry = overrides.value[props.component]?.[kind]?.[name];
  if (entry && entry.source === english) return { text: entry.text, english: false };
  return { text: english, english: true };
}

const eventPayload = (signature: string) =>
  signature.replace(/^\(event: "[^"]+",?\s*/, "(").replace(/\): void$/, ")");
</script>

<template>
  <div v-if="doc" class="docs-api">
    <h3 :id="`api-${component.toLowerCase()}`" class="docs-api__title">
      <code>{{ component }}</code>
    </h3>

    <template v-if="doc.props.length">
      <h4 class="docs-api__heading">{{ ui.props }}</h4>
      <div class="docs-api__scroll">
        <table class="docs-api__table">
          <thead>
            <tr>
              <th scope="col">{{ ui.name }}</th>
              <th scope="col">{{ ui.type }}</th>
              <th scope="col">{{ ui.default }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in doc.props" :key="prop.name">
              <td>
                <code class="docs-api__name">{{ prop.name }}</code>
                <MsBadge v-if="prop.required" size="sm" variant="outline">{{
                  ui.required
                }}</MsBadge>
                <p
                  v-if="describe('props', prop.name, prop.description).text"
                  class="docs-api__desc"
                >
                  {{ describe("props", prop.name, prop.description).text }}
                  <abbr
                    v-if="describe('props', prop.name, prop.description).english"
                    class="docs-api__en"
                    :title="ui.englishOnly"
                    >EN</abbr
                  >
                </p>
              </td>
              <td>
                <code class="docs-api__type">{{ prop.type }}</code>
              </td>
              <td>
                <code v-if="prop.default" class="docs-api__type">{{ prop.default }}</code>
                <span v-else aria-hidden="true">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template v-if="doc.events.length">
      <h4 class="docs-api__heading">{{ ui.events }}</h4>
      <div class="docs-api__scroll">
        <table class="docs-api__table">
          <thead>
            <tr>
              <th scope="col">{{ ui.name }}</th>
              <th scope="col">{{ ui.type }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in doc.events" :key="event.name">
              <td>
                <code class="docs-api__name">{{ event.name }}</code>
                <p
                  v-if="describe('events', event.name, event.description).text"
                  class="docs-api__desc"
                >
                  {{ describe("events", event.name, event.description).text }}
                </p>
              </td>
              <td>
                <code class="docs-api__type">{{ eventPayload(event.signature) }}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template v-if="doc.slots.length">
      <h4 class="docs-api__heading">{{ ui.slots }}</h4>
      <div class="docs-api__scroll">
        <table class="docs-api__table">
          <thead>
            <tr>
              <th scope="col">{{ ui.name }}</th>
              <th scope="col">{{ ui.type }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="slot in doc.slots" :key="slot.name">
              <td>
                <code class="docs-api__name">#{{ slot.name }}</code>
                <p
                  v-if="describe('slots', slot.name, slot.description).text"
                  class="docs-api__desc"
                >
                  {{ describe("slots", slot.name, slot.description).text }}
                </p>
              </td>
              <td>
                <code class="docs-api__type">{{ slot.type === "any" ? "—" : slot.type }}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>
