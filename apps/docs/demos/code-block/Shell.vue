<script setup lang="ts">
import { MsCodeBlock } from "@magic-style/vue";

const script = `# Install dependencies and start the app
pnpm install --frozen-lockfile
pnpm build
PORT=4173 pnpm preview --host 0.0.0.0 --strictPort --open "http://localhost:4173/dashboard?tab=overview"
`;
</script>

<template>
  <div style="width: 100%; max-width: 640px">
    <MsCodeBlock :code="script" language="bash" filename="deploy.sh" wrap-lines />
  </div>
</template>
