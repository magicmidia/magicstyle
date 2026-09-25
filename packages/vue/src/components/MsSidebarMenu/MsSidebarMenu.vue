<script setup lang="ts">
import { provide, ref, toRef, watch } from "vue";
import {
  type MsSidebarMenuProps,
  type MsSidebarMenuEmits,
  type MsSidebarMenuItemData,
  type MsSidebarMenuGroupData,
  sidebarMenuContextKey,
} from "./types";
import MsSidebarMenuGroup from "./MsSidebarMenuGroup.vue";
import MsSidebarMenuItem from "./MsSidebarMenuItem.vue";
import { safeHref } from "../../composables/safe-url.ts";

defineOptions({
  name: "MsSidebarMenu",
});

const props = withDefaults(defineProps<MsSidebarMenuProps>(), {
  modelValue: undefined,
  items: undefined,
  tone: "primary",
  density: "normal",
  shape: "rounded",
  collapsed: false,
  accordion: false,
});

const emit = defineEmits<MsSidebarMenuEmits>();

const activeId = ref(props.modelValue);
watch(
  () => props.modelValue,
  (val) => {
    activeId.value = val;
  },
);

const openMap = ref<Record<string, boolean>>({});

// Initialize open states from items prop if any
function syncOpenStates(list?: (MsSidebarMenuItemData | MsSidebarMenuGroupData)[]) {
  if (!list) return;
  for (const entry of list) {
    if ("items" in entry && Array.isArray(entry.items)) {
      for (const item of entry.items) {
        if (item.open !== undefined) {
          openMap.value[item.id] = item.open;
        }
      }
    } else {
      const item = entry as MsSidebarMenuItemData;
      if (item.open !== undefined) {
        openMap.value[item.id] = item.open;
      }
    }
  }
}
syncOpenStates(props.items);

function selectItem(id: string, item?: MsSidebarMenuItemData) {
  activeId.value = id;
  emit("update:modelValue", id);
  if (item) {
    emit("select", item);
  }
}

function toggleOpen(id: string) {
  const current = Boolean(openMap.value[id]);
  const next = !current;

  if (props.accordion && next) {
    // In accordion mode, close other open items
    openMap.value = { [id]: true };
  } else {
    openMap.value[id] = next;
  }

  emit("toggle", { id, open: next });
}

function isItemActive(id: string): boolean {
  return activeId.value === id;
}

function isItemOpen(id: string): boolean {
  return Boolean(openMap.value[id]);
}

provide(sidebarMenuContextKey, {
  activeId,
  tone: toRef(props, "tone"),
  density: toRef(props, "density"),
  shape: toRef(props, "shape"),
  collapsed: toRef(props, "collapsed"),
  openMap,
  selectItem,
  toggleOpen,
  isItemActive,
  isItemOpen,
});

// Helper to determine if an entry is a group
function isGroup(
  entry: MsSidebarMenuItemData | MsSidebarMenuGroupData,
): entry is MsSidebarMenuGroupData {
  return "items" in entry && Array.isArray((entry as MsSidebarMenuGroupData).items);
}
</script>

<template>
  <nav
    class="ms-sidebar-menu"
    :data-tone="tone"
    :data-density="density"
    :data-shape="shape"
    :data-collapsed="collapsed"
    role="navigation"
    aria-label="Sidebar Navigation"
  >
    <!-- Slot-based declarative markup -->
    <slot>
      <!-- Data-driven rendering if items prop is provided -->
      <template v-if="items && items.length > 0">
        <template v-for="(entry, idx) in items" :key="idx">
          <!-- Group with title -->
          <MsSidebarMenuGroup v-if="isGroup(entry)" :title="entry.title">
            <MsSidebarMenuItem
              v-for="item in entry.items"
              :id="item.id"
              :key="item.id"
              :label="item.label"
              :icon="item.icon"
              :badge="item.badge"
              :badge-tone="item.badgeTone"
              :href="safeHref(item.href)"
              :disabled="item.disabled"
              :active="item.active"
              :open="item.open"
              :has-children="Boolean(item.children && item.children.length > 0)"
            >
              <template v-if="item.children && item.children.length > 0" #sub>
                <MsSidebarMenuItem
                  v-for="child in item.children"
                  :id="child.id"
                  :key="child.id"
                  :label="child.label"
                  :icon="child.icon"
                  :badge="child.badge"
                  :badge-tone="child.badgeTone"
                  :href="safeHref(child.href)"
                  :disabled="child.disabled"
                  :active="child.active"
                  :open="child.open"
                  :has-children="Boolean(child.children && child.children.length > 0)"
                />
              </template>
            </MsSidebarMenuItem>
          </MsSidebarMenuGroup>

          <!-- Flat Item -->
          <ul v-else class="ms-sidebar-menu-list">
            <MsSidebarMenuItem
              :id="(entry as MsSidebarMenuItemData).id"
              :label="(entry as MsSidebarMenuItemData).label"
              :icon="(entry as MsSidebarMenuItemData).icon"
              :badge="(entry as MsSidebarMenuItemData).badge"
              :badge-tone="(entry as MsSidebarMenuItemData).badgeTone"
              :href="safeHref((entry as MsSidebarMenuItemData).href)"
              :disabled="(entry as MsSidebarMenuItemData).disabled"
              :active="(entry as MsSidebarMenuItemData).active"
              :open="(entry as MsSidebarMenuItemData).open"
              :has-children="
                Boolean(
                  (entry as MsSidebarMenuItemData).children &&
                  (entry as MsSidebarMenuItemData).children!.length > 0,
                )
              "
            >
              <template
                v-if="
                  (entry as MsSidebarMenuItemData).children &&
                  (entry as MsSidebarMenuItemData).children!.length > 0
                "
                #sub
              >
                <MsSidebarMenuItem
                  v-for="child in (entry as MsSidebarMenuItemData).children"
                  :id="child.id"
                  :key="child.id"
                  :label="child.label"
                  :icon="child.icon"
                  :badge="child.badge"
                  :badge-tone="child.badgeTone"
                  :href="safeHref(child.href)"
                  :disabled="child.disabled"
                  :active="child.active"
                  :open="child.open"
                />
              </template>
            </MsSidebarMenuItem>
          </ul>
        </template>
      </template>
    </slot>
  </nav>
</template>
