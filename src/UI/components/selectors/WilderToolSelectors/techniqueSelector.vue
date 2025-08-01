<template>
  <div v-if="tool">
    <h3>Select Beginner Technique</h3>
    <div class="technique-list">
      <button
        v-for="tech in availableTechniques"
        :key="tech.id"
        @click="selectTechnique(tech.id)"
        :class="{ selected: tech.id === tool.beginnerTechnique }"
        class="technique-button"
      >
        <div class="technique-name">{{ tech.name }}</div>
        <div class="technique-cost">{{ tech.cost }}</div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ToolController } from '@/classes/wilder/components/tool/toolController'
import { useTechniques } from '@/stores/useTechniques'

const props = defineProps<{ toolController: ToolController }>()
const { getBeginnerTechniquesByTool } = useTechniques()

// Access reactive tool directly
const tool = computed(() => props.toolController.reactiveTool.value)

// Get techniques available for this tool
const availableTechniques = computed(() => {
  if (!tool.value?.id) return []
  return getBeginnerTechniquesByTool(tool.value.id)
})

const selectTechnique = (techId: string) => {
  props.toolController.setBeginnerTechnique(techId)
}
</script>

<style scoped>
.technique-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.technique-button {
  padding: 12px;
  border: 2px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  text-align: left;
  transition: all 0.2s ease;
}

.technique-button:hover {
  background: #f5f5f5;
  border-color: #999;
}

.technique-button.selected {
  background: #e3f2fd;
  border-color: #2196f3;
}

.technique-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.technique-cost {
  font-size: 0.9em;
  color: #666;
}
</style>