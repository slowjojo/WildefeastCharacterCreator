<template>
  <div class="tool-list">
    <ToolCard
      v-for="tool in tools"
      :key="tool.id"
      :tool="tool"
      :selected="selectedToolId === tool.id"
      @select="handleToolSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ToolCard from '@/features/wilder_management/new/pages/tool-page/cards/ToolCard.vue';
import { useDraftWilderStore } from '@/stores/useDraftWilder'
import { useTools } from '@/stores/useTools';

const { draftWilder } = useDraftWilderStore()
const toolController = draftWilder.ToolController
const { tools } = useTools()

const selectedToolId = computed(() => toolController.tool.id)

function handleToolSelect(toolId: string) {
  toolController.setTool(toolId)
}
</script>