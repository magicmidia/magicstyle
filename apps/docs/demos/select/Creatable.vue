<script setup lang="ts">
import { computed, ref } from "vue";
import { MsField, MsSelect, type MsSelectOption } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const labels = ref<string | number | (string | number)[] | null>(["bug"]);
const created = ref<MsSelectOption[]>([]);

const options = computed<MsSelectOption[]>(() => [
  { value: "bug", label: t.bug },
  { value: "feature", label: t.feature },
  { value: "docs", label: t.documentation },
  { value: "performance", label: t.performance },
  ...created.value,
]);

function onCreate(label: string) {
  created.value.push({ value: label, label });
}
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.issueLabels" :description="t.createHelp">
      <MsSelect
        v-model="labels"
        :options="options"
        multiple
        searchable
        creatable
        :placeholder="t.addLabels"
        @create="onCreate"
      />
    </MsField>
  </div>
</template>
