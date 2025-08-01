<template>
  <div class="tool-list">
    <ToolCard
      v-for="tool in tools"
      :key="tool.id"
      :tool="tool"
      :selected="toolController.tool?.id === tool.id"
      @select="handleToolSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { useTools } from '@/stores/useTools'
import type { ToolController } from '@/classes/wilder/components/tool/toolController'
import ToolCard from '../../cards/_ToolCard.vue'

const props = defineProps<{
  toolController: ToolController
}>()

const { tools } = useTools()

const handleToolSelect = (toolId: string) => {
  props.toolController.setTool(toolId)
}

</script>