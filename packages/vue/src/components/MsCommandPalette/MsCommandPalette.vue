<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import type { MsCommandPaletteProps, MsCommandPaletteEmits, MsCommandItem } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import { useScrollLock } from "../../composables/use-scroll-lock.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";
import { useFocusTrap } from "../../composables/use-focus-trap.ts";

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
  hotkey: true,
});

const emit = defineEmits<MsCommandPaletteEmits>();

const isOpen = ref(props.modelValue);
const search = ref("");
const activeIndex = ref(0);
const searchInput = ref<HTMLInputElement | null>(null);
const dialogRef = ref<HTMLElement | null>(null);
const listboxId = useMsId("ms-command-listbox");
const optionIdPrefix = useMsId("ms-command-option");

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
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

/** Commands in rendered (grouped) order, so arrow keys follow what the user sees. */
const orderedCommands = computed(() => Object.values(groupedCommands.value).flat());
const activeCommand = computed(() => orderedCommands.value[activeIndex.value]);
const optionId = (cmd: MsCommandItem): string => `${optionIdPrefix}-${cmd.id}`;

function firstEnabledFrom(start: number, step: 1 | -1): number {
  const list = orderedCommands.value;
  for (let offset = 0; offset < list.length; offset++) {
    const index = (start + step * offset + list.length * list.length) % list.length;
    if (!list[index]?.disabled) return index;
  }
  return -1;
}

watch(orderedCommands, () => {
  activeIndex.value = Math.max(0, firstEnabledFrom(0, 1));
});

watch(isOpen, (open) => {
  if (!open) return;
  search.value = "";
  activeIndex.value = Math.max(0, firstEnabledFrom(0, 1));
  // Focus the search input however the palette was opened (v-model or hotkey).
  void nextTick(() => searchInput.value?.focus());
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

useScrollLock(isOpen);
useFocusTrap(dialogRef, isOpen, { initialFocus: () => searchInput.value });
useDismissableLayer({
  active: isOpen,
  inside: [dialogRef],
  onDismiss: close,
  closeOnOutside: () => false,
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (!isOpen.value || orderedCommands.value.length === 0) return;

  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const step = e.key === "ArrowDown" ? 1 : -1;
    const next = firstEnabledFrom(activeIndex.value + step, step);
    if (next !== -1) activeIndex.value = next;
  } else if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    const next =
      e.key === "Home"
        ? firstEnabledFrom(0, 1)
        : firstEnabledFrom(orderedCommands.value.length - 1, -1);
    if (next !== -1) activeIndex.value = next;
  } else if (e.key === "Enter") {
    e.preventDefault();
    const current = activeCommand.value;
    if (current) {
      selectCommand(current);
    }
  }
};

const handleGlobalKey = (e: KeyboardEvent) => {
  // defaultPrevented: another mounted palette already handled this shortcut.
  if (!props.hotkey || e.defaultPrevented) return;
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
        ref="dialogRef"
        class="ms-command-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Paleta de Comandos"
        tabindex="-1"
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
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref="searchInput"
            v-model="search"
            type="text"
            class="ms-command-palette__search-input"
            role="combobox"
            aria-autocomplete="list"
            :aria-label="props.placeholder"
            :aria-expanded="orderedCommands.length > 0"
            :aria-controls="listboxId"
            :aria-activedescendant="activeCommand ? optionId(activeCommand) : undefined"
            :placeholder="props.placeholder"
          />
          <span class="ms-command-palette__kbd" aria-hidden="true">ESC</span>
        </div>

        <ul
          v-if="orderedCommands.length > 0"
          :id="listboxId"
          class="ms-command-palette__results"
          role="listbox"
          :aria-label="props.placeholder"
        >
          <li
            v-for="(cmds, groupName, groupIndex) in groupedCommands"
            :key="groupName"
            role="presentation"
          >
            <ul
              class="ms-command-palette__group"
              role="group"
              :aria-labelledby="`${listboxId}-group-${groupIndex}`"
            >
              <li
                :id="`${listboxId}-group-${groupIndex}`"
                class="ms-command-palette__group-title"
                role="presentation"
              >
                {{ groupName }}
              </li>
              <li
                v-for="cmd in cmds"
                :id="optionId(cmd)"
                :key="cmd.id"
                class="ms-command-palette__item"
                :class="{
                  'ms-command-palette__item--active': activeCommand?.id === cmd.id,
                  'ms-command-palette__item--disabled': cmd.disabled,
                }"
                role="option"
                :aria-selected="activeCommand?.id === cmd.id"
                :aria-disabled="cmd.disabled || undefined"
                @click="selectCommand(cmd)"
              >
                <div class="ms-command-palette__item-main">
                  <span class="ms-command-palette__item-icon" aria-hidden="true">❖</span>
                  <span>{{ cmd.label }}</span>
                </div>
                <span v-if="cmd.shortcut" class="ms-command-palette__kbd">
                  {{ cmd.shortcut }}
                </span>
              </li>
            </ul>
          </li>
        </ul>

        <div v-else class="ms-command-palette__empty" role="status">
          {{ props.emptyText }}
        </div>

        <div class="ms-command-palette__footer" aria-hidden="true">
          <span>Navegar com ↑ ↓</span>
          <span>Executar com ↵</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
