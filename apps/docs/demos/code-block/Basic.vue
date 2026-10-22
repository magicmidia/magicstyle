<script setup lang="ts">
import { MsCodeBlock } from "@magic-style/vue";

const code = `import { createApp } from "vue";
import { createMsI18n, createMsToast } from "@magic-style/vue";
import "@magic-style/css";
import App from "./App.vue";

const app = createApp(App);
app.use(createMsI18n({ locale: "en-US" }));
app.use(createMsToast());
app.mount("#app");
`;
</script>

<template>
  <div style="width: 100%; max-width: 640px">
    <MsCodeBlock :code="code" language="ts" filename="src/main.ts" />
  </div>
</template>
