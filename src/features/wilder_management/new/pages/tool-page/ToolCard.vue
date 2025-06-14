<template>
    <v-card class="ToolCard pa-4 d-flex align-center" outlined>
      <v-avatar size="64" class="mr-4">
        <img
      class="tool-icon"
      :src="`/icons/${tool.icon}`"
      :alt="tool.name"
        />
      </v-avatar>
      <div class="ToolName text-h6">{{ tool.name }}</div>
    </v-card>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    tool: {
      id: string
      name: string
      icon: string
      primary_styles: string[]
      description: string
    }
  }>()
  </script>
  
<style>
v-card {
    cursor: pointer;
    background-color: bisque;

    .tool-icon {
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  object-fit: contain;
}
}
</style>