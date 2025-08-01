<template>
  <div v-if="tool && areAndStruggle.length > 0">
    <h3>Choose Your Are and Struggle</h3>
    
    <div class="selector-group">
      <label>Select your Are:</label>
      <select v-model="selectedAre" class="selector">
        <option disabled value="">-- choose what you ARE --</option>
        <option v-for="word in areAndStruggle" :key="'are-' + word" :value="word">
          {{ word }}
        </option>
      </select>
    </div>

    <div class="selector-group">
      <label>Select your Struggle:</label>
      <select v-model="selectedStruggle" class="selector">
        <option disabled value="">-- choose what you STRUGGLE with --</option>
        <option
          v-for="word in areAndStruggle"
          :key="'struggle-' + word"
          :value="word"
          :disabled="word === selectedAre"
        >
          {{ word }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useTools } from '@/stores/useTools'
import type { ToolController } from '@/classes/wilder/components/tool/toolController';

const props = defineProps<{
  toolController: ToolController
}>()

const { getToolById } = useTools()

// Get the current tool reactively
const tool = computed(() => props.toolController.reactiveTool.value)
const ToolData = computed(() => tool.value?.id ? getToolById(tool.value.id) : null)
const areAndStruggle = computed(() => ToolData.value?.are_and_struggle ?? [])

const selectedAre = ref('')
const selectedStruggle = ref('')

watch([selectedAre, selectedStruggle], ([are, struggle]) => {
  // Prevent selecting the same thing for both
  if (are === struggle && struggle !== '') {
    selectedStruggle.value = ''
    return
  }

  // Update the controller when both are selected and different
  if (are && struggle && are !== struggle) {
    props.toolController.setAreAndStruggle(are, struggle)
  }
})

// Reset selections when tool changes
watch(() => tool.value?.id, () => {
  selectedAre.value = ''
  selectedStruggle.value = ''
})
</script>

<style scoped>
.selector-group {
  margin: 12px 0;
}

.selector-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

.selector {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.selector:focus {
  outline: none;
  border-color: #2196f3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
}
</style>