<template>
  <div class="style-selector" v-if="toolController.hasToolSelected">
    <h3>Choose Primary Style</h3>
    <div class="style-buttons">
      <StyleCard
        v-for="style in toolController.availableMainStyles"
        :key="style"
        :style="style"
        :selected="toolController.primaryStyle === style"
        @select="handleStyleSelect"
        class="style-button"
      />
    </div>
  </div>
 
  <div v-else class="no-tool-message">
    <p>Please select a tool first</p>
  </div>
</template>

<script setup lang="ts">
import StyleCard from '../../cards/StyleCard.vue'
import { useDraftWilderStore } from '@/stores/useDraftWilder'

const { draftWilder } = useDraftWilderStore()
const toolController = draftWilder.ToolController

function handleStyleSelect(style: string) {
  toolController.setPrimaryStyle(style)
}
</script>

<style scoped>
.style-buttons {
  display: flex;
  gap: 6rem;
}

</style>