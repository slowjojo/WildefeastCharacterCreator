<template>
  <v-card
    class="ToolCard"
    @click="$emit('select', tool.id)"
    :elevation="selected ? 6 : 2"
  >
    <div class="card-content">
      <!-- Icon + Name -->
      <div class="card-main">
        <v-avatar size="64" class="mr-4">
          <img
            class="tool-icon"
            :src="`/icons/${tool.icon}`"
            :alt="tool.name"
          />
        </v-avatar>
        <div class="ToolName text-h6">{{ tool.name }}</div>
      </div>
      
      <v-icon
        v-if="selected"
        class="check-icon"
        color="success"
        size="28"
        title="Selected"
      >
        mdi-check-circle
      </v-icon>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { ToolData } from '@/class'

defineProps<{
  tool: ToolData
  selected?: boolean
}>()

defineEmits<{
  (e: 'select', id: string): void
}>()
</script>

<style scoped>
.ToolCard {
  cursor: pointer;
  background-color: bisque;
  transition: 0.2s ease;
  width: 100%;
  padding: 12px;
}

.ToolCard:hover {
  background-color: #f5deb3;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.card-main {
  display: flex;
  align-items: center;
}

.tool-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.ToolName {
  font-weight: bold;
}
</style>
