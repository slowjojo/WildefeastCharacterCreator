<template>
  <div>
    <select v-model="selectedToolId">
      <option disabled value="">-- Select a Tool --</option>
      <option v-for="tool in tools" :key="tool.id" :value="tool.id">
        {{ tool.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useTools } from '@/stores/useTools'
import type { Wilder } from '@/class'

const { tools, getToolById } = useTools()

const props = defineProps<{
  wilder: Wilder
}>()

const selectedToolId = ref('')

onMounted(() => {
  selectedToolId.value = props.wilder.ToolController.tool?.id || ''
})

watch(selectedToolId, (newId) => {
  const selectedTool = getToolById(newId)
  if (selectedTool) {
    props.wilder.ToolController.setTool(selectedTool.id)
  }
})
</script>
