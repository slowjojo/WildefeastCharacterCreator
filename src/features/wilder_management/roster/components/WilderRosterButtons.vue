<template>
  <div class="wilder-roster-cards">
    <v-card
      v-for="wilder in wilders"
      :key="wilder.id"
      class="wilder-card"
      @click="$emit('select', wilder.id)"
    >
      <div class="card-text">
        <v-card-title>{{ wilder.name }}</v-card-title>
        <v-card-subtitle>
          {{ getToolName(wilder.tool) }} – {{ wilder.specialty }}
        </v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { ToolData } from '@/classes/wilder/components/tool/Tool'

const props = defineProps<{
  wilders: {
    id: string
    name: string
    tool: string
    specialty: string
  }[]
  tools: ToolData[]
}>()


function getToolName(toolId: string): string {
  const tool = props.tools.find(t => t.id === toolId)
  return tool ? tool.name : toolId
}
</script>

<style scoped>
.card-text {
  display: flex;
  flex-direction: column;
}
.wilder-roster-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.wilder-card {
  cursor: pointer;
  border: 2px solid beige;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  padding: 0.5rem;
  background-color: white;
}

.wilder-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>
