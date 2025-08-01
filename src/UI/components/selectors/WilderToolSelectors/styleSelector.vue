<template>
  <div class="style-selector" v-if="tool">
    <h3>Choose Primary Style</h3>
    <div class="style-buttons">
      <v-btn
        v-for="style in mainStyles"
        :key="style"
        :color="selected === style ? 'primary' : 'default'"
        @click="selectStyle(style)"
        class="style-button"
      >
        {{ style.toUpperCase() }}
      </v-btn>
    </div>
    <div v-if="selected" class="selected-info">
      <p><strong>Primary:</strong> {{ selected.toUpperCase() }} (3)</p>
      <p><strong>Secondary:</strong> {{ getSecondary() }} (2)</p>
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

const { getMainStylesById, getBaseStyles } = useTools()
const selected = ref<Style | null>(null)

// Get the current tool reactively
const tool = computed(() => props.toolController.reactiveTool.value)

const mainStyles = computed<Style[]>(() => {
  if (!tool.value?.id) return []
  return getMainStylesById(tool.value.id) ?? []
})

function selectStyle(primary: Style) {
  const [first, second] = mainStyles.value
  if (!first || !second) return

  const secondary = primary === first ? second : first
  const spread = getBaseStyles(primary, secondary)
  props.toolController.setStyles(spread)
  selected.value = primary
}

function getSecondary(): string {
  if (!selected.value) return ''
  const [first, second] = mainStyles.value
  const secondary = selected.value === first ? second : first
  return secondary?.toUpperCase() || ''
}

// Reset selection when tool changes
watch(() => tool.value?.id, () => {
  selected.value = null
})
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