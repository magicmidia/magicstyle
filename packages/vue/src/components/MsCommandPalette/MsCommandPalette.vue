<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import type { MsCommandPaletteProps, MsCommandPaletteEmits, MsCommandItem } from "./types.ts";

const defaultCommands: MsCommandItem[] = [
  { id: "docs", label: "Ir para Documentação", group: "Navegação", shortcut: "G D" },
  { id: "components", label: "Explorar Componentes", group: "Navegação", shortcut: "G C" },
  { id: "tokens", label: "Inspecionar Design Tokens", group: "Navegação", shortcut: "G T" },
  { id: "theme", label: "Alternar Tema Claro / Escuro", group: "Ações Rápidas", shortcut: "⌘ T" },
  { id: "copy-cdn", label: "Copiar link do CDN CSS", group: "Ações Rápidas", shortcut: "⌘ C" },
  { id: "feedback", label: "Enviar Feedback", group: "Geral", shortcut: "⌘ F" },
];

const props = withDefaults(defineProps<MsCommandPaletteProps>(), {
  modelValue: false,
  placeholder: "Digite um comando ou pesquise...",
  emptyText: "Nenhum comando encontrado.",
});

const emit = defineEmits<MsCommandPaletteEmits>();

const isOpen = ref(props.modelValue);
const search = ref("");
const activeIndex = ref(0);
const searchInput = ref<HTMLInputElement | null>(null);

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
    if (val) {
      search.value = "";
      activeIndex.value = 0;
      nextTick(() => {
        searchInput.value?.focus();
      });
    }
  },
);

const commandList = computed(() => props.items || defaultCommands);

const filteredCommands = computed(() => {
  if (!search.value.trim()) return commandList.value;
  const q = search.value.toLowerCase().trim();
  return commandList.value.filter(
    (c) => c.label.toLowerCase().includes(q) || (c.group && c.group.toLowerCase().includes(q)),
  );
});

const groupedCommands = computed(() => {
  const groups: Record<string, MsCommandItem[]> = {};
  filteredCommands.value.forEach((c) => {
    const g = c.group || "Ações";
    if (!groups[g]) groups[g] = [];
    groups[g]!.push(c);
  });
  return groups;
});

const close = () => {
  isOpen.value = false;
  emit("update:modelValue", false);
};

const selectCommand = (cmd: MsCommandItem) => {
  if (cmd.disabled) return;
  emit("select", cmd);
  close();
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;

  if (e.key === "Escape") {
    close();
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (filteredCommands.value.length > 0) {
      activeIndex.value = (activeIndex.value + 1) % filteredCommands.value.length;
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (filteredCommands.value.length > 0) {
      activeIndex.value =
        (activeIndex.value - 1 + filteredCommands.value.length) % filteredCommands.value.length;
    }
  } else if (e.key === "Enter") {
    e.preventDefault();
    const current = filteredCommands.value[activeIndex.value];
    if (current) {
      selectCommand(current);
    }
  }
};

const handleGlobalKey = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    isOpen.value = !isOpen.value;
    emit("update:modelValue", isOpen.value);
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleGlobalKey);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleGlobalKey);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="ms-command-palette-backdrop"
      @click.self="close"
      @keydown="handleKeyDown"
    >
      <div
        class="ms-command-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Paleta de Comandos"
      >
        <div class="ms-command-palette__search-wrapper">
          <svg
            class="ms-command-palette__search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref="searchInput"
            v-model="search"
            type="text"
            class="ms-command-palette__search-input"
            :placeholder="props.placeholder"
          />
          <span class="ms-command-palette__kbd">ESC</span>
        </div>

        <ul v-if="filteredCommands.length > 0" class="ms-command-palette__results" role="listbox">
          <template v-for="(cmds, groupName) in groupedCommands" :key="groupName">
            <li class="ms-command-palette__group-title">{{ groupName }}</li>
            <li
              v-for="cmd in cmds"
              :key="cmd.id"
              class="ms-command-palette__item"
              :class="{
                'ms-command-palette__item--active': filteredCommands[activeIndex]?.id === cmd.id,
              }"
              role="option"
              :aria-selected="filteredCommands[activeIndex]?.id === cmd.id"
              @click="selectCommand(cmd)"
            >
              <div class="ms-command-palette__item-main">
                <span class="ms-command-palette__item-icon">❖</span>
                <span>{{ cmd.label }}</span>
              </div>
              <span v-if="cmd.shortcut" class="ms-command-palette__kbd">
                {{ cmd.shortcut }}
              </span>
            </li>
          </template>
        </ul>

        <div v-else class="ms-command-palette__empty">
          {{ props.emptyText }}
        </div>

        <div class="ms-command-palette__footer">
          <span>Navegar com ↑ ↓</span>
          <span>Executar com ↵</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
