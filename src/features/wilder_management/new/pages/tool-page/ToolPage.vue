<template>
    <div class="ToolButtons d-flex flex-wrap ga-4">
      <ToolCard
        v-for="tool in tools"
        :key="tool.id"
        :tool="tool"
        @click="selectTool(tool)"
      />
    </div>
  
    <!-- <div class="ToolSubOptions mt-6">
      <v-card v-if="selectedTool">
        <v-card-title>{{ selectedTool.name }}</v-card-title>
        <v-card-text>
          <p><strong>Styles:</strong> {{ selectedTool.primary_styles.join(', ') }}</p>
          <p><strong>Description:</strong> {{ selectedTool.description }}</p>
        </v-card-text>
      </v-card>
    </div>-->
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import toolsData from '@/assets/data/tools.json'
  import ToolCard from './ToolCard.vue'
  
  interface Tool {
  id: string
  name: string
  icon: string
  primary_styles: string[]
  description: string
  techniques: {
    starter: string
    beginner: string[]
    intermediate: string[]
    advanced: string[]
  }
}

const tools = ref<Tool[]>(toolsData)
const selectedTool = ref<Tool | null>(null)

  
  function selectTool(tool: any) {
    selectedTool.value = tool
  }
  </script>
  
  <style scoped>
  .ToolButtons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  </style>
  