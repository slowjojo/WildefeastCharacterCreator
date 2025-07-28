<template>
  <div>
    <select v-model="selectedTechnique" @change="addSelectedTechnique">
      <option disabled value="">-- Select a technique --</option>
      <option
        v-for="techniqueId in beginnerTechniqueIds"
        :key="techniqueId"
        :value="techniqueId"
      >
        {{ getTechniqueById(techniqueId)?.name || techniqueId }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTechniques } from '@/stores/useTechniques'
import { useTools } from '@/stores/useTools'
import type { WilderTool } from '@/interfaces'
import type { ToolController } from '@/classes/wilder/components/tool/toolController'

const props = defineProps<{
  toolController: ToolController
  tool: WilderTool
}>()

const selectedTechnique = ref<string>('')

const { getTechniqueById } = useTechniques()
const { getToolById } = useTools()

const ToolData = computed(() => getToolById(props.tool.id))
const beginnerTechniqueIds = computed(() => ToolData.value?.techniques.beginner ?? [])

function addSelectedTechnique() {
  if (selectedTechnique.value) {
    props.toolController.setBeginnerTechnique(selectedTechnique.value)
  }
}
</script>
