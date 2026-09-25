<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from "vue";
import type { MsCodeBlockProps, MsCodeBlockEmits } from "./types.ts";

const props = withDefaults(defineProps<MsCodeBlockProps>(), {
  code: "",
  language: "",
  filename: "",
  showLineNumbers: true,
  copyable: true,
  wrapLines: false,
  collapsible: false,
  defaultCollapsed: false,
  variant: "bordered",
});

const emit = defineEmits<MsCodeBlockEmits>();

const copied = ref(false);
const isCollapsed = ref(props.defaultCollapsed);
let copyTimer: ReturnType<typeof setTimeout> | null = null;

onBeforeUnmount(() => {
  if (copyTimer) {
    clearTimeout(copyTimer);
    copyTimer = null;
  }
});

const lines = computed(() => {
  if (!props.code) return [1];
  const clean = props.code.replace(/\n$/, "");
  return clean.split("\n").map((_, i) => i + 1);
});

const formattedMaxHeight = computed(() => {
  if (props.collapsible && isCollapsed.value) return undefined;
  if (!props.maxHeight) return undefined;
  return typeof props.maxHeight === "number" ? `${props.maxHeight}px` : props.maxHeight;
});

const classes = computed(() => [
  "ms-code-block",
  `ms-code-block--${props.variant}`,
  {
    "ms-code-block--wrap": props.wrapLines,
    "ms-code-block--collapsible": props.collapsible,
    "ms-code-block--collapsed": props.collapsible && isCollapsed.value,
  },
]);

const handleCopy = async () => {
  if (!props.code) return;
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(props.code);
      copied.value = true;
      emit("copy", props.code);
      if (copyTimer) clearTimeout(copyTimer);
      copyTimer = setTimeout(() => {
        copied.value = false;
        copyTimer = null;
      }, 2000);
    } catch {
      // ignore
    }
  }
};

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
  emit("toggle-collapse", isCollapsed.value);
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const HASH_COMMENT_LANGS = new Set([
  "sh",
  "bash",
  "shell",
  "zsh",
  "python",
  "py",
  "yaml",
  "yml",
  "toml",
  "ruby",
  "rb",
  "dockerfile",
  "makefile",
  "powershell",
  "ps1",
  "r",
  "ini",
  "conf",
]);

const TOKEN_CLASSES = [
  "comment",
  "string",
  "tag",
  "attr",
  "keyword",
  "boolean",
  "type",
  "number",
  "function",
] as const;

function tokenRegex(lang?: string): RegExp {
  const hashComment = lang && HASH_COMMENT_LANGS.has(lang.toLowerCase()) ? "|#[^\\n]*" : "";
  return new RegExp(
    [
      `(\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/|<!--[\\s\\S]*?-->${hashComment})`,
      "(`(?:\\\\.|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*')",
      "(<\\/?[a-zA-Z0-9_\\-]+|\\/?>)",
      "(\\b[a-zA-Z0-9_:@.\\-]+(?==[\"']))",
      "(\\b(?:const|let|var|function|return|if|else|for|while|switch|case|break|default|new|try|catch|finally|throw|class|extends|import|export|from|as|async|await|typeof|instanceof|interface|type|enum|implements|public|private|protected|readonly|static|get|set|def)\\b)",
      "(\\b(?:true|false|null|undefined)\\b)",
      "(\\b(?:string|number|boolean|any|void|unknown|never|Record|Array|Promise|Ref|ComputedRef|HTMLElement|object)\\b)",
      "(\\b\\d+(?:\\.\\d+)?\\b)",
      "(\\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\\s*\\())",
    ].join("|"),
    "g",
  );
}

/**
 * Tokenizes the raw source first and escapes every piece afterwards, so
 * escaped entities (&#39;, &quot;) can never be re-matched as tokens.
 */
function highlightCode(src: string, lang?: string): string {
  if (!src) return "";
  let html = "";
  let last = 0;
  for (const match of src.matchAll(tokenRegex(lang))) {
    const index = match.index ?? 0;
    html += escapeHtml(src.slice(last, index));
    const group = match.slice(1).findIndex((value) => value !== undefined);
    const text = escapeHtml(match[0]);
    html +=
      group === -1 ? text : `<span class="ms-code-token--${TOKEN_CLASSES[group]}">${text}</span>`;
    last = index + match[0].length;
  }
  return html + escapeHtml(src.slice(last));
}

const highlightedCode = computed(() => highlightCode(props.code, props.language));
</script>

<template>
  <div
    :class="classes"
    :data-variant="props.variant"
    :data-collapsed="props.collapsible && isCollapsed ? '' : undefined"
  >
    <div
      v-if="props.filename || props.language || props.copyable || $slots.header || $slots.actions"
      class="ms-code-block__header"
    >
      <div class="ms-code-block__meta">
        <slot name="header">
          <span v-if="props.filename" class="ms-code-block__filename">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
            {{ props.filename }}
          </span>
          <span v-if="props.language" class="ms-code-block__lang">
            {{ props.language }}
          </span>
        </slot>
      </div>

      <div class="ms-code-block__actions">
        <slot name="actions" />
        <button
          v-if="props.copyable"
          type="button"
          class="ms-code-block__copy-btn"
          :class="{ 'ms-code-block__copy-btn--copied': copied }"
          :title="copied ? 'Copiado!' : 'Copiar código'"
          :aria-label="copied ? 'Copiado!' : 'Copiar código'"
          @click="handleCopy"
        >
          <svg
            v-if="!copied"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <svg
            v-else
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{{ copied ? "Copiado" : "Copiar" }}</span>
        </button>
      </div>
    </div>

    <div class="ms-code-block__body" :style="{ maxHeight: formattedMaxHeight }">
      <div v-if="props.showLineNumbers" class="ms-code-block__lines" aria-hidden="true">
        <span v-for="line in lines" :key="line">{{ line }}</span>
      </div>
      <!-- eslint-disable vue/no-v-html -- highlightCode escapes every token (tested) -->
      <pre
        class="ms-code-block__pre"
      ><code v-if="props.code" v-html="highlightedCode" /><code v-else><slot /></code></pre>
      <!-- eslint-enable vue/no-v-html -->

      <div
        v-if="props.collapsible && isCollapsed"
        class="ms-code-block__expand-gradient"
        aria-hidden="true"
      />
    </div>

    <div v-if="props.collapsible || $slots.footer" class="ms-code-block__footer">
      <slot name="footer">
        <button
          v-if="props.collapsible"
          type="button"
          class="ms-code-block__collapse-btn"
          @click="toggleCollapse"
        >
          {{ isCollapsed ? "Mostrar mais linhas" : "Recolher código" }}
        </button>
      </slot>
    </div>
  </div>
</template>
