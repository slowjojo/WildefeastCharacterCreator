<template>
  <div class="style-selector">
    <div class="style-buttons">
      <v-btn
        v-for="style in mainStyles"
        :key="style"
        :color="selected === style ? 'primary' : 'default'"
        @click="selectStyle(style)"
      >
        {{ style }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useTools } from '@/stores/useTools'
import type { ToolController } from '@/classes/wilder/components/tool/toolController'
import type { WilderTool } from '@/interfaces'
import type { Style } from '@/classes/enums'

const props = defineProps<{
  toolController: ToolController
  tool: WilderTool
}>()

const { getMainStylesById, getBaseStyles } = useTools()
const selected = ref<Style | null>(null)

const mainStyles = computed<Style[]>(() => {
  return getMainStylesById(props.tool.id) ?? []
})

function selectStyle(primary: Style) {
  const [first, second] = mainStyles.value
  if (!first || !second) return

  const secondary = primary === first ? second : first
  const spread = getBaseStyles(primary, secondary)
  props.toolController.setStyles(spread)
  selected.value = primary
}

watch(() => props.tool.id, () => {
  selected.value = null
})
</script>

<style scoped>
.style-buttons {
  display: flex;
  gap: 12px;
}
</style>
