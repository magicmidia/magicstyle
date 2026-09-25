<script setup lang="ts">
import { ref, computed } from "vue";
import type { MsEmojiPickerProps, MsEmojiPickerEmits, MsEmojiItem } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

const emojiList: MsEmojiItem[] = [
  // Smileys & Emoções
  { emoji: "😀", name: "Sorriso", category: "smileys" },
  { emoji: "😃", name: "Rosto Feliz", category: "smileys" },
  { emoji: "😄", name: "Gargalhada", category: "smileys" },
  { emoji: "😁", name: "Sorriso Largo", category: "smileys" },
  { emoji: "😆", name: "Olhos Fechados", category: "smileys" },
  { emoji: "😅", name: "Suor Frio", category: "smileys" },
  { emoji: "🤣", name: "Rolando de Rir", category: "smileys" },
  { emoji: "😂", name: "Chorando de Rir", category: "smileys" },
  { emoji: "🙂", name: "Sorriso Leve", category: "smileys" },
  { emoji: "🙃", name: "De Ponta Cabeça", category: "smileys" },
  { emoji: "😉", name: "Piscadela", category: "smileys" },
  { emoji: "😊", name: "Bochechas Rosadas", category: "smileys" },
  { emoji: "😇", name: "Anjinho", category: "smileys" },
  { emoji: "🥰", name: "Apaixonado", category: "smileys" },
  { emoji: "😍", name: "Olhos de Coração", category: "smileys" },
  { emoji: "🤩", name: "Estrelas nos Olhos", category: "smileys" },
  { emoji: "😘", name: "Beijo com Coração", category: "smileys" },
  { emoji: "😋", name: "Delícia / Língua", category: "smileys" },
  { emoji: "😜", name: "Piscadela com Língua", category: "smileys" },
  { emoji: "🤪", name: "Maluquinho", category: "smileys" },
  { emoji: "😎", name: "Óculos de Sol", category: "smileys" },
  { emoji: "🤓", name: "Nerd", category: "smileys" },
  { emoji: "🧐", name: "Monóculo", category: "smileys" },
  { emoji: "🥳", name: "Festa", category: "smileys" },
  { emoji: "😏", name: "Sorriso Malicioso", category: "smileys" },
  { emoji: "😒", name: "Descontente", category: "smileys" },
  { emoji: "🤔", name: "Pensativo", category: "smileys" },
  { emoji: "🤫", name: "Silêncio", category: "smileys" },
  { emoji: "😴", name: "Dormindo", category: "smileys" },
  { emoji: "🤯", name: "Mente Explodindo", category: "smileys" },
  { emoji: "🥺", name: "Por Favorzinho", category: "smileys" },
  { emoji: "😭", name: "Choro Alto", category: "smileys" },
  { emoji: "😱", name: "Grito de Pavor", category: "smileys" },
  { emoji: "😡", name: "Bravo", category: "smileys" },
  { emoji: "💀", name: "Caveira / Morto", category: "smileys" },
  { emoji: "💩", name: "Cocozinho", category: "smileys" },
  { emoji: "🤡", name: "Palhaço", category: "smileys" },
  { emoji: "👻", name: "Fantasma", category: "smileys" },
  { emoji: "🤖", name: "Robô", category: "smileys" },

  // Gestos & Pessoas
  { emoji: "👋", name: "Aceno", category: "gestures" },
  { emoji: "✋", name: "Mão Levantada", category: "gestures" },
  { emoji: "👌", name: "Ok / Perfeito", category: "gestures" },
  { emoji: "🤌", name: "Gesto Italiano", category: "gestures" },
  { emoji: "✌️", name: "Paz e Amor", category: "gestures" },
  { emoji: "🤞", name: "Dedos Cruzados", category: "gestures" },
  { emoji: "🤟", name: "Te Amo", category: "gestures" },
  { emoji: "🤘", name: "Rock", category: "gestures" },
  { emoji: "🤙", name: "Chama no Whats", category: "gestures" },
  { emoji: "👍", name: "Joinha / Positivo", category: "gestures" },
  { emoji: "👎", name: "Descurtir / Negativo", category: "gestures" },
  { emoji: "👊", name: "Soco / Tamo Junto", category: "gestures" },
  { emoji: "👏", name: "Palmas", category: "gestures" },
  { emoji: "🙌", name: "Comemoração", category: "gestures" },
  { emoji: "🤝", name: "Aperto de Mão", category: "gestures" },
  { emoji: "🙏", name: "Oração / Por Favor", category: "gestures" },
  { emoji: "💪", name: "Músculo / Força", category: "gestures" },
  { emoji: "🧠", name: "Cérebro", category: "gestures" },
  { emoji: "👀", name: "Olhos Atentos", category: "gestures" },

  // Animais & Natureza
  { emoji: "🐶", name: "Cachorro", category: "animals" },
  { emoji: "🐱", name: "Gato", category: "animals" },
  { emoji: "🐭", name: "Rato", category: "animals" },
  { emoji: "🐰", name: "Coelho", category: "animals" },
  { emoji: "🦊", name: "Raposa", category: "animals" },
  { emoji: "🐻", name: "Urso", category: "animals" },
  { emoji: "🐼", name: "Panda", category: "animals" },
  { emoji: "🦁", name: "Leão", category: "animals" },
  { emoji: "🐯", name: "Tigre", category: "animals" },
  { emoji: "🦄", name: "Unicórnio", category: "animals" },
  { emoji: "🐸", name: "Sapo", category: "animals" },
  { emoji: "🐵", name: "Macaco", category: "animals" },
  { emoji: "🐔", name: "Galinha", category: "animals" },
  { emoji: "🐧", name: "Pinguim", category: "animals" },
  { emoji: "🦅", name: "Águia", category: "animals" },
  { emoji: "🦉", name: "Coruja", category: "animals" },
  { emoji: "🦋", name: "Borboleta", category: "animals" },
  { emoji: "🐝", name: "Abelha", category: "animals" },
  { emoji: "🐢", name: "Tartaruga", category: "animals" },
  { emoji: "🐍", name: "Cobra", category: "animals" },
  { emoji: "🐙", name: "Polvo", category: "animals" },
  { emoji: "🐬", name: "Golfinho", category: "animals" },
  { emoji: "🦈", name: "Tubarão", category: "animals" },

  // Comida & Bebida
  { emoji: "🍏", name: "Maçã Verde", category: "food" },
  { emoji: "🍎", name: "Maçã Vermelha", category: "food" },
  { emoji: "🍌", name: "Banana", category: "food" },
  { emoji: "🍉", name: "Melancia", category: "food" },
  { emoji: "🍇", name: "Uva", category: "food" },
  { emoji: "🍓", name: "Morango", category: "food" },
  { emoji: "🍒", name: "Cereja", category: "food" },
  { emoji: "🥑", name: "Abacate", category: "food" },
  { emoji: "🍔", name: "Hambúrguer", category: "food" },
  { emoji: "🍟", name: "Batata Frita", category: "food" },
  { emoji: "🍕", name: "Pizza", category: "food" },
  { emoji: "🌭", name: "Cachorro Quente", category: "food" },
  { emoji: "🥪", name: "Sanduíche", category: "food" },
  { emoji: "🌮", name: "Taco", category: "food" },
  { emoji: "🍣", name: "Sushi", category: "food" },
  { emoji: "🍜", name: "Lámen", category: "food" },
  { emoji: "🍝", name: "Espaguete", category: "food" },
  { emoji: "🍩", name: "Donut", category: "food" },
  { emoji: "🍪", name: "Cookie", category: "food" },
  { emoji: "🎂", name: "Bolo de Aniversário", category: "food" },
  { emoji: "🍫", name: "Chocolate", category: "food" },
  { emoji: "☕", name: "Café", category: "food" },
  { emoji: "🧃", name: "Suco", category: "food" },
  { emoji: "🍺", name: "Cerveja", category: "food" },
  { emoji: "🍷", name: "Vinho", category: "food" },

  // Viagens & Lugares
  { emoji: "🚗", name: "Carro", category: "travel" },
  { emoji: "🏎️", name: "Carro de Corrida", category: "travel" },
  { emoji: "🏍️", name: "Moto", category: "travel" },
  { emoji: "🚲", name: "Bicicleta", category: "travel" },
  { emoji: "✈️", name: "Avião", category: "travel" },
  { emoji: "🚀", name: "Foguete", category: "travel" },
  { emoji: "🛸", name: "Disco Voador", category: "travel" },
  { emoji: "🚢", name: "Navio", category: "travel" },
  { emoji: "🏰", name: "Castelo", category: "travel" },
  { emoji: "🗼", name: "Torre de Tóquio", category: "travel" },
  { emoji: "🗽", name: "Estátua da Liberdade", category: "travel" },
  { emoji: "🏖️", name: "Praia com Guarda-Sol", category: "travel" },
  { emoji: "🏕️", name: "Acampamento", category: "travel" },
  { emoji: "🏔️", name: "Montanha Nevada", category: "travel" },

  // Objetos & Tecnologia
  { emoji: "💻", name: "Notebook", category: "objects" },
  { emoji: "🖥️", name: "Computador", category: "objects" },
  { emoji: "📱", name: "Celular", category: "objects" },
  { emoji: "⌨️", name: "Teclado", category: "objects" },
  { emoji: "💡", name: "Lâmpada / Ideia", category: "objects" },
  { emoji: "🔦", name: "Lanterna", category: "objects" },
  { emoji: "💸", name: "Dinheiro Voando", category: "objects" },
  { emoji: "💵", name: "Nota de Dólar", category: "objects" },
  { emoji: "💳", name: "Cartão de Crédito", category: "objects" },
  { emoji: "💎", name: "Diamante", category: "objects" },
  { emoji: "🔑", name: "Chave", category: "objects" },
  { emoji: "🔒", name: "Cadeado Fechado", category: "objects" },
  { emoji: "🔓", name: "Cadeado Aberto", category: "objects" },
  { emoji: "🔨", name: "Martelo", category: "objects" },
  { emoji: "🔧", name: "Chave Inglesa", category: "objects" },
  { emoji: "📦", name: "Caixa / Encomenda", category: "objects" },
  { emoji: "✉️", name: "Carta / Email", category: "objects" },
  { emoji: "📸", name: "Câmera", category: "objects" },
  { emoji: "🎮", name: "Controle de Game", category: "objects" },

  // Símbolos & Corações
  { emoji: "❤️", name: "Coração Vermelho", category: "symbols" },
  { emoji: "🧡", name: "Coração Laranja", category: "symbols" },
  { emoji: "💛", name: "Coração Amarelo", category: "symbols" },
  { emoji: "💚", name: "Coração Verde", category: "symbols" },
  { emoji: "💙", name: "Coração Azul", category: "symbols" },
  { emoji: "💜", name: "Coração Roxo", category: "symbols" },
  { emoji: "🖤", name: "Coração Preto", category: "symbols" },
  { emoji: "🤍", name: "Coração Branco", category: "symbols" },
  { emoji: "💔", name: "Coração Partido", category: "symbols" },
  { emoji: "🔥", name: "Fogo / Em Alta", category: "symbols" },
  { emoji: "✨", name: "Brilhos / Mágico", category: "symbols" },
  { emoji: "🎉", name: "Festa / Confetes", category: "symbols" },
  { emoji: "⭐", name: "Estrela Amarela", category: "symbols" },
  { emoji: "⚡", name: "Raio", category: "symbols" },
  { emoji: "📌", name: "Alfinete", category: "symbols" },
  { emoji: "🎯", name: "Alvo no Centro", category: "symbols" },
  { emoji: "✅", name: "Confirmado / Check", category: "symbols" },
  { emoji: "❌", name: "Erro / Cancelar", category: "symbols" },
  { emoji: "⚠️", name: "Atenção / Alerta", category: "symbols" },
  { emoji: "💯", name: "Cem Pontos / Perfeito", category: "symbols" },
  { emoji: "🔔", name: "Sininho / Notificação", category: "symbols" },
];

const props = withDefaults(defineProps<MsEmojiPickerProps>(), {
  modelValue: "",
  placeholder: "😀",
  disabled: false,
});

const emit = defineEmits<MsEmojiPickerEmits>();

const t = useMsMessages();

const isOpen = ref(false);
const searchQuery = ref("");
const activeCategory = ref("all");

const filteredEmojis = computed(() => {
  let list = emojiList;
  if (activeCategory.value !== "all") {
    list = list.filter((e) => e.category === activeCategory.value);
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter((e) => e.name.toLowerCase().includes(q) || e.emoji.includes(q));
  }
  return list;
});

const selectEmoji = (item: MsEmojiItem) => {
  emit("update:modelValue", item.emoji);
  emit("select", item);
  isOpen.value = false;
};

const toggleDropdown = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="ms-emoji-picker">
    <button
      type="button"
      class="ms-emoji-picker__trigger"
      :disabled="props.disabled"
      @click="toggleDropdown"
    >
      <span>{{ props.modelValue || props.placeholder }}</span>
    </button>

    <div v-if="isOpen" class="ms-emoji-picker__dropdown">
      <input
        v-model="searchQuery"
        type="text"
        class="ms-emoji-picker__search"
        :placeholder="t.emojiPicker.search"
      />

      <div class="ms-emoji-picker__categories">
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'all' }"
          title="Todos"
          @click="activeCategory = 'all'"
        >
          🌐
        </button>
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'smileys' }"
          title="Carinhas"
          @click="activeCategory = 'smileys'"
        >
          😀
        </button>
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'gestures' }"
          title="Gestos"
          @click="activeCategory = 'gestures'"
        >
          👍
        </button>
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'animals' }"
          title="Animais"
          @click="activeCategory = 'animals'"
        >
          🐶
        </button>
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'food' }"
          title="Comidas"
          @click="activeCategory = 'food'"
        >
          🍔
        </button>
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'travel' }"
          title="Viagens"
          @click="activeCategory = 'travel'"
        >
          🚀
        </button>
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'objects' }"
          title="Objetos"
          @click="activeCategory = 'objects'"
        >
          💡
        </button>
        <button
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === 'symbols' }"
          title="Símbolos"
          @click="activeCategory = 'symbols'"
        >
          ✨
        </button>
      </div>

      <div class="ms-emoji-picker__grid">
        <button
          v-for="item in filteredEmojis"
          :key="item.emoji"
          type="button"
          class="ms-emoji-picker__item"
          :title="item.name"
          @click="selectEmoji(item)"
        >
          {{ item.emoji }}
        </button>
      </div>
    </div>
  </div>
</template>
