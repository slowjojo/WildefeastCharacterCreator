<template>
  <div class="style-selector" v-if="toolController.hasToolSelected">
    <h3>Choose Primary Style</h3>
    <div class="style-buttons">
      <v-btn
        v-for="style in toolController.availableMainStyles"
        :key="style"
        :color="toolController.primaryStyle === style ? 'primary' : 'default'"
        @click="toolController.setPrimaryStyle(style)"
        class="style-button"
      >
        {{ style.toUpperCase() }}
      </v-btn>
    </div>
    
    <div v-if="toolController.hasStyleSelected" class="selected-info">
      <p><strong>Primary:</strong> {{ toolController.primaryStyle?.toUpperCase() }} (3)</p>
      <p><strong>Secondary:</strong> {{ getSecondaryStyle() }} (2)</p>
      
      <div v-if="toolController.currentStyleSpread" class="style-spread">
        <h4>Full Style Spread:</h4>
        <ul>
          <li v-for="(value, style) in toolController.currentStyleSpread" :key="style">
            {{ style.toUpperCase() }}: {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div v-else class="no-tool-message">
    <p>Please select a tool first</p>
  </div>
</template>

<script setup lang="ts">
import { useDraftWilderStore } from '@/stores/useDraftWilder'

const { draftWilder } = useDraftWilderStore()
const toolController = draftWilder.ToolController

function getSecondaryStyle(): string {
  if (!toolController.primaryStyle || toolController.availableMainStyles.length !== 2) return ''
  const secondary = toolController.availableMainStyles.find(style => style !== toolController.primaryStyle)
  return secondary?.toUpperCase() || ''
}
</script>

<style scoped>
.style-selector {
  margin: 16px 0;
}

.style-buttons {
  display: flex;
  gap: 12px;
  margin: 12px 0;
}

.style-button {
  min-width: 100px;
}

.selected-info {
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
}

.selected-info p {
  margin: 4px 0;
}

.style-spread {
  margin-top: 12px;
}

.style-spread ul {
  list-style: none;
  padding: 0;
}

.style-spread li {
  padding: 2px 0;
}

.no-tool-message {
  padding: 16px;
  background: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  color: #666;
}
</style>