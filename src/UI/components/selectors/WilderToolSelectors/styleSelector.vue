<template>
  <div class="style-selector" v-if="tool">
    <h3>Choose Primary Style</h3>
    <div class="style-buttons">
      <v-btn
        v-for="style in mainStyles"
        :key="style"
        :color="selectedPrimaryStyle === style ? 'primary' : 'default'"
        @click="selectPrimaryStyle(style)"
        class="style-button"
      >
        {{ style.toUpperCase() }}
      </v-btn>
    </div>
    <div v-if="selectedPrimaryStyle" class="selected-info">
      <p><strong>Primary:</strong> {{ selectedPrimaryStyle.toUpperCase() }} (3)</p>
      <p><strong>Secondary:</strong> {{ getSecondaryStyle() }} (2)</p>
      <p><strong>Others:</strong> {{ getOtherStyles().join(', ').toUpperCase() }} (1 each)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useTools } from '@/stores/useTools'
import type { ToolController } from '@/classes/wilder/components/tool/toolController'
import type { Style } from '@/classes/enums'

const props = defineProps<{
  toolController: ToolController
}>()

const { getMainStylesById } = useTools()
const selectedPrimaryStyle = ref<Style | null>(null)

// Get the current tool reactively
const tool = computed(() => props.toolController.reactiveTool.value)

const mainStyles = computed<Style[]>(() => {
  if (!tool.value?.id) return []
  return getMainStylesById(tool.value.id) ?? []
})

function selectPrimaryStyle(primaryStyle: Style) {
  props.toolController.setPrimaryStyle(primaryStyle)
  selectedPrimaryStyle.value = primaryStyle
}

function getSecondaryStyle(): string {
  if (!selectedPrimaryStyle.value) return ''
  const secondary = mainStyles.value.find(style => style !== selectedPrimaryStyle.value)
  return secondary?.toUpperCase() || ''
}

function getOtherStyles(): string[] {
  if (!selectedPrimaryStyle.value) return []
  const [first, second] = mainStyles.value
  const others = ['mighty', 'precise', 'swift', 'tricky'].filter(
    style => style !== first && style !== second
  )
  return others
}

// Reset selection when tool changes
watch(() => tool.value?.id, () => {
  selectedPrimaryStyle.value = null
})

// Initialize selection from existing data
watch(() => tool.value?.primaryStyle, (primaryStyle) => {
  selectedPrimaryStyle.value = primaryStyle || null
}, { immediate: true })
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
</style>