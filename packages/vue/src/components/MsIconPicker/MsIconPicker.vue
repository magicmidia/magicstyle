<script setup lang="ts">
import { ref, computed } from "vue";
import { sanitizeSvg } from "../../composables/sanitize-svg.ts";
import type { MsIconPickerProps, MsIconPickerEmits, MsIconItem } from "./types.ts";

const ICON_PATHS: Record<string, string> = {
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  menu: '<line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  trash:
    '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  pause: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  heart:
    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  calendar:
    '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  upload:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  unlock:
    '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  alert:
    '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  refresh:
    '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  "external-link":
    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
};

const defaultIcons: MsIconItem[] = [
  { id: "home", name: "Home", category: "Navegação" },
  { id: "arrow-right", name: "Seta Direita", category: "Navegação" },
  { id: "arrow-left", name: "Seta Esquerda", category: "Navegação" },
  { id: "menu", name: "Menu", category: "Navegação" },
  { id: "search", name: "Busca", category: "Ações" },
  { id: "check", name: "Confirmar", category: "Ações" },
  { id: "x", name: "Fechar", category: "Ações" },
  { id: "trash", name: "Excluir", category: "Ações" },
  { id: "edit", name: "Editar", category: "Ações" },
  { id: "copy", name: "Copiar", category: "Ações" },
  { id: "download", name: "Download", category: "Ações" },
  { id: "upload", name: "Upload", category: "Ações" },
  { id: "refresh", name: "Atualizar", category: "Ações" },
  { id: "play", name: "Play", category: "Mídia" },
  { id: "pause", name: "Pause", category: "Mídia" },
  { id: "image", name: "Imagem", category: "Mídia" },
  { id: "heart", name: "Favorito", category: "Interface" },
  { id: "star", name: "Estrela", category: "Interface" },
  { id: "bell", name: "Notificação", category: "Interface" },
  { id: "user", name: "Usuário", category: "Interface" },
  { id: "settings", name: "Configurações", category: "Interface" },
  { id: "shield", name: "Segurança", category: "Interface" },
  { id: "calendar", name: "Calendário", category: "Sistema" },
  { id: "clock", name: "Horário", category: "Sistema" },
  { id: "folder", name: "Pasta", category: "Sistema" },
  { id: "file", name: "Arquivo", category: "Sistema" },
  { id: "lock", name: "Bloqueado", category: "Sistema" },
  { id: "unlock", name: "Desbloqueado", category: "Sistema" },
  { id: "sun", name: "Sol (Claro)", category: "Sistema" },
  { id: "moon", name: "Lua (Escuro)", category: "Sistema" },
  { id: "info", name: "Informação", category: "Sistema" },
  { id: "alert", name: "Alerta", category: "Sistema" },
  { id: "external-link", name: "Link Externo", category: "Navegação" },
];

const props = withDefaults(defineProps<MsIconPickerProps>(), {
  modelValue: "",
  placeholder: "Selecione um ícone...",
  disabled: false,
});

const emit = defineEmits<MsIconPickerEmits>();

const isOpen = ref(false);
const searchQuery = ref("");
const selectedCategory = ref("Todos");

const activeIcons = computed(() => props.icons || defaultIcons);

const getIconContent = (id: string): string => {
  const custom = activeIcons.value.find((i) => i.id === id);
  if (custom?.svg) return sanitizeSvg(custom.svg);
  return ICON_PATHS[id] || "";
};

const categories = computed(() => {
  const cats = new Set<string>();
  activeIcons.value.forEach((i) => {
    if (i.category) cats.add(i.category);
  });
  return ["Todos", ...Array.from(cats)];
});

const filteredIcons = computed(() => {
  let list = activeIcons.value;
  if (selectedCategory.value !== "Todos") {
    list = list.filter((i) => i.category === selectedCategory.value);
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter((i) => i.name.toLowerCase().includes(q) || i.id.toLowerCase().includes(q));
  }
  return list;
});

const selectIcon = (icon: MsIconItem) => {
  emit("update:modelValue", icon.id);
  emit("select", icon);
  isOpen.value = false;
};

const toggleDropdown = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="ms-icon-picker">
    <button
      type="button"
      class="ms-icon-picker__trigger"
      :disabled="props.disabled"
      @click="toggleDropdown"
    >
      <span class="ms-icon-picker__preview">
        <svg
          v-if="props.modelValue && getIconContent(props.modelValue)"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-html="getIconContent(props.modelValue)"
        />
        <span v-else>❖</span>
      </span>
      <span>{{ props.modelValue || props.placeholder }}</span>
    </button>

    <div v-if="isOpen" class="ms-icon-picker__dropdown">
      <input
        v-model="searchQuery"
        type="text"
        class="ms-icon-picker__search"
        placeholder="Buscar ícones..."
      />

      <div class="ms-icon-picker__categories">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="ms-icon-picker__category-btn"
          :class="{ 'ms-icon-picker__category-btn--active': selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="ms-icon-picker__grid">
        <button
          v-for="icon in filteredIcons"
          :key="icon.id"
          type="button"
          class="ms-icon-picker__item"
          :class="{ 'ms-icon-picker__item--selected': props.modelValue === icon.id }"
          :title="icon.name"
          @click="selectIcon(icon)"
        >
          <svg
            v-if="getIconContent(icon.id)"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="getIconContent(icon.id)"
          />
          <span v-else>❖</span>
        </button>
      </div>
    </div>
  </div>
</template>
