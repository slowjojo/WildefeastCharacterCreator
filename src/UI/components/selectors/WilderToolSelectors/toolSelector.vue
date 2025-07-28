<template> 
  <div class="tool-list">
    <ToolCard
      v-for="tool in tools"
      :key="tool.id"
      :tool="tool"
      :selected="toolController.tool?.id === tool.id"
      :complete="!!toolController.tool?.id"
      @select="handleToolSelect"
    />
  </div> 
</template>

<script setup lang="ts">
import { useTools } from '@/stores/useTools'
import type { ToolController } from '@/classes/wilder/components/tool/toolController'
import ToolCard from '../../cards/_ToolCard.vue'

const props = defineProps<{ toolController: ToolController }>()

const { tools } = useTools()

const handleToolSelect = (toolId: string) => {
  console.log('Tool selected:', toolId)
  props.toolController.setTool(toolId)
  console.log('current tool:', props.toolController.tool)
}
</script>

<style scoped>

.tool-list {
  display:flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 16px;
}

</style>