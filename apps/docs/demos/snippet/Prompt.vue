<script setup lang="ts">
import { MsSnippet } from "@magic-style/vue";
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsSnippet code="winget install OpenJS.NodeJS.LTS" prompt="PS> " tone="info" />
    <MsSnippet code="export DATABASE_URL=postgres://app:secret@localhost:5432/app" prompt="" />
    <MsSnippet
      code="docker run --rm -p 8080:80 -e NGINX_HOST=docs.acme.dev -v ./dist:/usr/share/nginx/html:ro nginx:alpine"
      wrap-lines
      copy-prompt
    />
  </div>
</template>
