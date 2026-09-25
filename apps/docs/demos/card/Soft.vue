<script setup lang="ts">
import { MsCard } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 820px;
    "
  >
    <MsCard variant="soft" tone="primary" :title="t.softTipTitle" :description="t.softTipDesc" />
    <MsCard
      variant="soft"
      tone="success"
      :title="t.softDeployTitle"
      :description="t.softDeployDesc"
    />
    <MsCard
      variant="soft"
      tone="warning"
      :title="t.softQuotaTitle"
      :description="t.softQuotaDesc"
    />
    <MsCard
      variant="soft"
      tone="danger"
      :title="t.softPaymentTitle"
      :description="t.softPaymentDesc"
    />
  </div>
</template>
