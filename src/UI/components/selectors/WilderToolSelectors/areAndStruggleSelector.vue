<template>
  <div class="are-struggle-selector" v-if="toolController.hasToolSelected">
    <h3>Choose Your Are and Struggle</h3>
    
    <div v-if="availableOptions.length > 0" class="selector-container">
      <div class="selector-group">
        <label>Select what you ARE:</label>
        <select 
          :value="toolController.are || ''"
          @change="updateAre($event)"
          class="selector"
        >
          <option disabled value="">-- choose what you ARE --</option>
          <option
            v-for="option in availableOptions"
            :key="'are-' + option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <div class="selector-group">
        <label>Select what you STRUGGLE with:</label>
        <select 
          :value="toolController.struggle || ''"
          @change="updateStruggle($event)"
          class="selector"
        >
          <option disabled value="">-- choose what you STRUGGLE with --</option>
          <option
            v-for="option in availableOptions"
            :key="'struggle-' + option"
            :value="option"
            :disabled="option === toolController.are"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>

    <div v-else class="no-options-message">
      <p>No options available for this tool</p>
    </div>
  </div>
  
  <div v-else class="no-tool-message">
    <p>Please select a tool first</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDraftWilderStore } from '@/stores/useDraftWilder'
import { useTools } from '@/stores/useTools'

const { draftWilder } = useDraftWilderStore()
const toolController = draftWilder.ToolController
const { getToolById } = useTools()

const availableOptions = computed(() => {
  if (!toolController.toolId) return []
  const toolData = getToolById(toolController.toolId)
  return toolData?.are_and_struggle ?? []
})

function updateAre(event: Event) {
  const target = event.target as HTMLSelectElement
  const newAre = target.value
  
  // If the new "are" is the same as current "struggle", clear struggle
  if (newAre === toolController.struggle) {
    toolController.setAreAndStruggle(newAre, '')
  } else {
    toolController.setAreAndStruggle(newAre, toolController.struggle || '')
  }
}

function updateStruggle(event: Event) {
  const target = event.target as HTMLSelectElement
  const newStruggle = target.value
  
  // If the new "struggle" is the same as current "are", clear are
  if (newStruggle === toolController.are) {
    toolController.setAreAndStruggle('', newStruggle)
  } else {
    toolController.setAreAndStruggle(toolController.are || '', newStruggle)
  }
}
</script>

<style scoped>
.are-struggle-selector {
  margin: 16px 0;
  color: black; /* Add this */
}

.selector-container {
  margin: 12px 0;
}

.selector-group {
  margin: 16px 0;
}

.selector-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: black; /* Change from #333 to black */
}

.selector {
  width: 100%;
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  color: black; /* Add this */
  transition: border-color 0.2s ease;
}

.selector:focus {
  outline: none;
  border-color: #2196f3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
}

.selector:disabled {
  background: #f5f5f5;
  color: #999;
}

.selected-summary {
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
}

.selected-summary h4 {
  margin: 0 0 8px 0;
  color: black; /* Change from #333 to black */
}

.selected-summary p {
  margin: 4px 0;
  color: black; /* Change from #555 to black */
}

.no-options-message,
.no-tool-message {
  padding: 16px;
  background: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  color: black; /* Change from #666 to black */
}
</style>