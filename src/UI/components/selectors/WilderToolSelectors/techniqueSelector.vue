<template>
  <div class="technique-selector" v-if="toolController.hasToolSelected">
    <h3>Select Beginner Technique</h3>
   
    <div v-if="availableTechniques.length > 0" class="technique-list">
      <TechniqueCard
        v-for="technique in availableTechniques"
        :key="technique.id"
        :technique="technique"
        :selected="toolController.beginnerTechnique === technique.id"
        @select="handleTechniqueSelect"
        class="technique-card"
      />
    </div>
   
    <div v-else class="no-techniques-message">
      <p>No techniques available for this tool</p>
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
import TechniqueCard from '@/features/wilder_management/new/pages/tool-page/cards/TechniqueCard.vue'

const { draftWilder } = useDraftWilderStore()
const toolController = draftWilder.ToolController
const { getBeginnerTechniquesByTool } = useTechniques()

const availableTechniques = computed(() => {
  if (!toolController.toolId) return []
  return getBeginnerTechniquesByTool(toolController.toolId)
})



function handleTechniqueSelect(techniqueId: string) {
  toolController.setBeginnerTechnique(techniqueId)
}
</script>

<style scoped>
.technique-selector {
  margin: 16px 0;
}

.technique-list {
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 12px 0;
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