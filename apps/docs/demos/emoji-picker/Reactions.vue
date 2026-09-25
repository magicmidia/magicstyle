<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsCard, MsEmojiPicker, type MsEmojiItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const reactions = ref<Record<string, number>>({ "🎉": 4, "👍": 2 });
const picked = ref("");

function react(item: MsEmojiItem) {
  reactions.value[item.emoji] = (reactions.value[item.emoji] ?? 0) + 1;
  picked.value = "";
}
</script>

<template>
  <MsCard variant="outline" padding="md" style="width: 100%; max-width: 420px">
    <p style="margin: 0 0 12px">
      <strong>{{ t.author }}</strong
      ><br />
      {{ t.post }}
    </p>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px">
      <MsButton
        v-for="(count, emoji) in reactions"
        :key="emoji"
        size="sm"
        variant="soft"
        tone="neutral"
        pill
        @click="reactions[emoji] = count + 1"
      >
        {{ emoji }} {{ count }}
      </MsButton>
      <MsEmojiPicker v-model="picked" placeholder="＋" @select="react" />
    </div>
  </MsCard>
</template>
