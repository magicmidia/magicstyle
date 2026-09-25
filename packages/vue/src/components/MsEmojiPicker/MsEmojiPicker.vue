<script setup lang="ts">
import { ref, computed } from "vue";
import type { MsEmojiPickerProps, MsEmojiPickerEmits, MsEmojiItem } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsMessages } from "../../i18n/messages.ts";

const emojiList: MsEmojiItem[] = [
  // Smileys & Emotion
  { emoji: "😀", name: "Grinning Face", category: "smileys" },
  { emoji: "😃", name: "Happy Face", category: "smileys" },
  { emoji: "😄", name: "Big Grin", category: "smileys" },
  { emoji: "😁", name: "Beaming Smile", category: "smileys" },
  { emoji: "😆", name: "Squinting Laugh", category: "smileys" },
  { emoji: "😅", name: "Grin with Sweat", category: "smileys" },
  { emoji: "🤣", name: "Rolling on the Floor Laughing", category: "smileys" },
  { emoji: "😂", name: "Tears of Joy", category: "smileys" },
  { emoji: "🙂", name: "Slight Smile", category: "smileys" },
  { emoji: "🙃", name: "Upside-Down Face", category: "smileys" },
  { emoji: "😉", name: "Wink", category: "smileys" },
  { emoji: "😊", name: "Smiling with Blush", category: "smileys" },
  { emoji: "😇", name: "Angel / Halo", category: "smileys" },
  { emoji: "🥰", name: "In Love", category: "smileys" },
  { emoji: "😍", name: "Heart Eyes", category: "smileys" },
  { emoji: "🤩", name: "Star-Struck", category: "smileys" },
  { emoji: "😘", name: "Blowing a Kiss", category: "smileys" },
  { emoji: "😋", name: "Yum / Tongue", category: "smileys" },
  { emoji: "😜", name: "Winking with Tongue", category: "smileys" },
  { emoji: "🤪", name: "Zany Face", category: "smileys" },
  { emoji: "😎", name: "Sunglasses", category: "smileys" },
  { emoji: "🤓", name: "Nerd", category: "smileys" },
  { emoji: "🧐", name: "Monocle", category: "smileys" },
  { emoji: "🥳", name: "Party Face", category: "smileys" },
  { emoji: "😏", name: "Smirk", category: "smileys" },
  { emoji: "😒", name: "Unamused", category: "smileys" },
  { emoji: "🤔", name: "Thinking", category: "smileys" },
  { emoji: "🤫", name: "Shushing", category: "smileys" },
  { emoji: "😴", name: "Sleeping", category: "smileys" },
  { emoji: "🤯", name: "Mind Blown", category: "smileys" },
  { emoji: "🥺", name: "Pleading Face", category: "smileys" },
  { emoji: "😭", name: "Loudly Crying", category: "smileys" },
  { emoji: "😱", name: "Screaming in Fear", category: "smileys" },
  { emoji: "😡", name: "Angry", category: "smileys" },
  { emoji: "💀", name: "Skull / Dead", category: "smileys" },
  { emoji: "💩", name: "Pile of Poo", category: "smileys" },
  { emoji: "🤡", name: "Clown", category: "smileys" },
  { emoji: "👻", name: "Ghost", category: "smileys" },
  { emoji: "🤖", name: "Robot", category: "smileys" },

  // Gestos & Pessoas
  { emoji: "👋", name: "Waving Hand", category: "gestures" },
  { emoji: "✋", name: "Raised Hand", category: "gestures" },
  { emoji: "👌", name: "OK / Perfect", category: "gestures" },
  { emoji: "🤌", name: "Pinched Fingers", category: "gestures" },
  { emoji: "✌️", name: "Peace / Victory", category: "gestures" },
  { emoji: "🤞", name: "Crossed Fingers", category: "gestures" },
  { emoji: "🤟", name: "Love-You Gesture", category: "gestures" },
  { emoji: "🤘", name: "Rock On", category: "gestures" },
  { emoji: "🤙", name: "Call Me", category: "gestures" },
  { emoji: "👍", name: "Thumbs Up", category: "gestures" },
  { emoji: "👎", name: "Thumbs Down", category: "gestures" },
  { emoji: "👊", name: "Fist Bump", category: "gestures" },
  { emoji: "👏", name: "Clapping", category: "gestures" },
  { emoji: "🙌", name: "Raising Hands / Celebration", category: "gestures" },
  { emoji: "🤝", name: "Handshake", category: "gestures" },
  { emoji: "🙏", name: "Folded Hands / Please", category: "gestures" },
  { emoji: "💪", name: "Flexed Biceps / Strength", category: "gestures" },
  { emoji: "🧠", name: "Brain", category: "gestures" },
  { emoji: "👀", name: "Eyes", category: "gestures" },

  // Animais & Natureza
  { emoji: "🐶", name: "Dog", category: "animals" },
  { emoji: "🐱", name: "Cat", category: "animals" },
  { emoji: "🐭", name: "Mouse", category: "animals" },
  { emoji: "🐰", name: "Rabbit", category: "animals" },
  { emoji: "🦊", name: "Fox", category: "animals" },
  { emoji: "🐻", name: "Bear", category: "animals" },
  { emoji: "🐼", name: "Panda", category: "animals" },
  { emoji: "🦁", name: "Lion", category: "animals" },
  { emoji: "🐯", name: "Tiger", category: "animals" },
  { emoji: "🦄", name: "Unicorn", category: "animals" },
  { emoji: "🐸", name: "Frog", category: "animals" },
  { emoji: "🐵", name: "Monkey", category: "animals" },
  { emoji: "🐔", name: "Chicken", category: "animals" },
  { emoji: "🐧", name: "Penguin", category: "animals" },
  { emoji: "🦅", name: "Eagle", category: "animals" },
  { emoji: "🦉", name: "Owl", category: "animals" },
  { emoji: "🦋", name: "Butterfly", category: "animals" },
  { emoji: "🐝", name: "Bee", category: "animals" },
  { emoji: "🐢", name: "Turtle", category: "animals" },
  { emoji: "🐍", name: "Snake", category: "animals" },
  { emoji: "🐙", name: "Octopus", category: "animals" },
  { emoji: "🐬", name: "Dolphin", category: "animals" },
  { emoji: "🦈", name: "Shark", category: "animals" },

  // Comida & Bebida
  { emoji: "🍏", name: "Green Apple", category: "food" },
  { emoji: "🍎", name: "Red Apple", category: "food" },
  { emoji: "🍌", name: "Banana", category: "food" },
  { emoji: "🍉", name: "Watermelon", category: "food" },
  { emoji: "🍇", name: "Grapes", category: "food" },
  { emoji: "🍓", name: "Strawberry", category: "food" },
  { emoji: "🍒", name: "Cherries", category: "food" },
  { emoji: "🥑", name: "Avocado", category: "food" },
  { emoji: "🍔", name: "Hamburger", category: "food" },
  { emoji: "🍟", name: "French Fries", category: "food" },
  { emoji: "🍕", name: "Pizza", category: "food" },
  { emoji: "🌭", name: "Hot Dog", category: "food" },
  { emoji: "🥪", name: "Sandwich", category: "food" },
  { emoji: "🌮", name: "Taco", category: "food" },
  { emoji: "🍣", name: "Sushi", category: "food" },
  { emoji: "🍜", name: "Ramen", category: "food" },
  { emoji: "🍝", name: "Spaghetti", category: "food" },
  { emoji: "🍩", name: "Doughnut", category: "food" },
  { emoji: "🍪", name: "Cookie", category: "food" },
  { emoji: "🎂", name: "Birthday Cake", category: "food" },
  { emoji: "🍫", name: "Chocolate", category: "food" },
  { emoji: "☕", name: "Coffee", category: "food" },
  { emoji: "🧃", name: "Juice Box", category: "food" },
  { emoji: "🍺", name: "Beer", category: "food" },
  { emoji: "🍷", name: "Wine", category: "food" },

  // Viagens & Lugares
  { emoji: "🚗", name: "Car", category: "travel" },
  { emoji: "🏎️", name: "Racing Car", category: "travel" },
  { emoji: "🏍️", name: "Motorcycle", category: "travel" },
  { emoji: "🚲", name: "Bicycle", category: "travel" },
  { emoji: "✈️", name: "Airplane", category: "travel" },
  { emoji: "🚀", name: "Rocket", category: "travel" },
  { emoji: "🛸", name: "Flying Saucer", category: "travel" },
  { emoji: "🚢", name: "Ship", category: "travel" },
  { emoji: "🏰", name: "Castle", category: "travel" },
  { emoji: "🗼", name: "Tokyo Tower", category: "travel" },
  { emoji: "🗽", name: "Statue of Liberty", category: "travel" },
  { emoji: "🏖️", name: "Beach with Umbrella", category: "travel" },
  { emoji: "🏕️", name: "Camping", category: "travel" },
  { emoji: "🏔️", name: "Snow-Capped Mountain", category: "travel" },

  // Objects & Technology
  { emoji: "💻", name: "Laptop", category: "objects" },
  { emoji: "🖥️", name: "Desktop Computer", category: "objects" },
  { emoji: "📱", name: "Mobile Phone", category: "objects" },
  { emoji: "⌨️", name: "Keyboard", category: "objects" },
  { emoji: "💡", name: "Light Bulb / Idea", category: "objects" },
  { emoji: "🔦", name: "Flashlight", category: "objects" },
  { emoji: "💸", name: "Money with Wings", category: "objects" },
  { emoji: "💵", name: "Dollar Banknote", category: "objects" },
  { emoji: "💳", name: "Credit Card", category: "objects" },
  { emoji: "💎", name: "Gem Stone", category: "objects" },
  { emoji: "🔑", name: "Key", category: "objects" },
  { emoji: "🔒", name: "Locked", category: "objects" },
  { emoji: "🔓", name: "Unlocked", category: "objects" },
  { emoji: "🔨", name: "Hammer", category: "objects" },
  { emoji: "🔧", name: "Wrench", category: "objects" },
  { emoji: "📦", name: "Package", category: "objects" },
  { emoji: "✉️", name: "Envelope / Email", category: "objects" },
  { emoji: "📸", name: "Camera", category: "objects" },
  { emoji: "🎮", name: "Video Game", category: "objects" },

  // Symbols & Hearts
  { emoji: "❤️", name: "Red Heart", category: "symbols" },
  { emoji: "🧡", name: "Orange Heart", category: "symbols" },
  { emoji: "💛", name: "Yellow Heart", category: "symbols" },
  { emoji: "💚", name: "Green Heart", category: "symbols" },
  { emoji: "💙", name: "Blue Heart", category: "symbols" },
  { emoji: "💜", name: "Purple Heart", category: "symbols" },
  { emoji: "🖤", name: "Black Heart", category: "symbols" },
  { emoji: "🤍", name: "White Heart", category: "symbols" },
  { emoji: "💔", name: "Broken Heart", category: "symbols" },
  { emoji: "🔥", name: "Fire / Trending", category: "symbols" },
  { emoji: "✨", name: "Sparkles / Magic", category: "symbols" },
  { emoji: "🎉", name: "Party Popper / Confetti", category: "symbols" },
  { emoji: "⭐", name: "Star", category: "symbols" },
  { emoji: "⚡", name: "Lightning", category: "symbols" },
  { emoji: "📌", name: "Pushpin", category: "symbols" },
  { emoji: "🎯", name: "Bullseye", category: "symbols" },
  { emoji: "✅", name: "Check Mark", category: "symbols" },
  { emoji: "❌", name: "Cross Mark / Cancel", category: "symbols" },
  { emoji: "⚠️", name: "Warning / Alert", category: "symbols" },
  { emoji: "💯", name: "Hundred Points / Perfect", category: "symbols" },
  { emoji: "🔔", name: "Bell / Notification", category: "symbols" },
];

const props = withDefaults(defineProps<MsEmojiPickerProps>(), {
  modelValue: "",
  placeholder: "😀",
  disabled: false,
});

const emit = defineEmits<MsEmojiPickerEmits>();

const t = useMsMessages();

type MsEmojiCategoryId = keyof MsMessages["emojiPicker"]["categories"];

/** Category filter buttons; their titles come from the messages. */
const categories: { id: MsEmojiCategoryId; icon: string }[] = [
  { id: "all", icon: "🌐" },
  { id: "smileys", icon: "😀" },
  { id: "gestures", icon: "👍" },
  { id: "animals", icon: "🐶" },
  { id: "food", icon: "🍔" },
  { id: "travel", icon: "🚀" },
  { id: "objects", icon: "💡" },
  { id: "symbols", icon: "✨" },
];

const isOpen = ref(false);
const searchQuery = ref("");
const activeCategory = ref<MsEmojiCategoryId>("all");

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
          v-for="category in categories"
          :key="category.id"
          type="button"
          class="ms-emoji-picker__category-btn"
          :class="{ 'ms-emoji-picker__category-btn--active': activeCategory === category.id }"
          :title="t.emojiPicker.categories[category.id]"
          @click="activeCategory = category.id"
        >
          {{ category.icon }}
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
