<script setup lang="ts">
import { MsCodeBlock } from "@magic-style/vue";

const component = `<template>
  <MsCard title="Pro plan" description="Unlimited projects and priority support.">
    <MsButton variant="soft" tone="success">Upgrade</MsButton>
  </MsCard>
</template>
`;

const config = `{
  "name": "acme-dashboard",
  "private": true,
  "type": "module"
}
`;
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 640px">
    <MsCodeBlock :code="component" language="vue" filename="PlanCard.vue" variant="card" />
    <MsCodeBlock :code="config" language="json" variant="ghost" :show-line-numbers="false" />
  </div>
</template>
