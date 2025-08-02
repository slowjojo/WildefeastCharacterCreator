<template>
  <div class="technique-selector" v-if="toolController.hasToolSelected">
    <h3>Select Beginner Technique</h3>
    
    <div v-if="availableTechniques.length > 0" class="technique-list">
      <div
        v-for="technique in availableTechniques"
        :key="technique.id"
        @click="toolController.setBeginnerTechnique(technique.id)"
        :class="{ 
          'technique-card': true, 
          'selected': toolController.beginnerTechnique === technique.id 
        }"
      >
        <div class="technique-name">{{ technique.name }}</div>
        <div class="technique-cost">{{ technique.cost }}</div>
        <div class="technique-description">{{ technique.description }}</div>
      </div>
    </div>
    
    <div v-else class="no-techniques-message">
      <p>No techniques available for this tool</p>
    </div>
    
    <div v-if="toolController.hasTechniqueSelected" class="selected-technique">
      <h4>Selected Technique:</h4>
      <p><strong>{{ selectedTechniqueData?.name }}</strong></p>
      <p>{{ selectedTechniqueData?.description }}</p>
    </div>
  </div>
  
  <div v-else class="no-tool-message">
    <p>Please select a tool first</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDraftWilderStore } from '@/stores/useDraftWilder'
import { useTechniques } from '@/stores/useTechniques'

const { draftWilder } = useDraftWilderStore()
const toolController = draftWilder.ToolController
const { getBeginnerTechniquesByTool, getTechniqueById } = useTechniques()

const availableTechniques = computed(() => {
  if (!toolController.toolId) return []
  return getBeginnerTechniquesByTool(toolController.toolId)
})

const selectedTechniqueData = computed(() => {
  if (!toolController.beginnerTechnique) return null
  return getTechniqueById(toolController.beginnerTechnique)
})
</script>

<style scoped>
.technique-selector {
  margin: 16px 0;
}

.technique-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0;
}

.technique-card {
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}

.technique-card:hover {
  border-color: #2196f3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.technique-card.selected {
  border-color: #2196f3;
  background: #e3f2fd;
}

.technique-name {
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 4px;
}

.technique-cost {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 8px;
}

.technique-description {
  color: #444;
  font-size: 0.9em;
  line-height: 1.4;
}

.selected-technique {
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
}

.selected-technique h4 {
  margin: 0 0 8px 0;
}

.selected-technique p {
  margin: 4px 0;
}

.no-techniques-message,
.no-tool-message {
  padding: 16px;
  background: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  color: #666;
}
</style>