<template>
  <div>
    <select v-model="wilder.tool">
      <option disabled value="">-- Select a Tool --</option>
      <option v-for="tool in tools" 
      :key="tool.id" 
      :value="tool.id">
        {{ tool.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { WilderData } from '@/class';
import { useTools } from '@/stores/useTools'
import { watch } from 'vue';

const { tools, getToolById } = useTools()
const { wilder } = defineProps<{ wilder: WilderData }>()

watch(
  () => wilder.tool,
  (newToolId) => {
    const selectedTool = getToolById(newToolId);
    if (selectedTool) {
      wilder.applyTool(selectedTool);
    }
  }
);

</script>