<template>
  <div v-if="tool">
    <h3>Select Beginner Technique</h3>
    <div class="technique-list">
      <button
        v-for="tech in beginnerTechniques"
        :key="tech.id"
        @click="selectTechnique(tech.id)"
        :class="{ selected: tech.id === tool.beginnerTechnique }"
      >
        {{ tech.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ToolController } from '@/classes/wilder/components/tool/toolController'
import { useTechniques } from '@/stores/useTechniques'

const props = defineProps<{ toolController: ToolController }>()
const { beginnerTechniques } = useTechniques()

// Access reactive tool directly
const tool = computed(() => props.toolController.reactiveTool.value)

const selectTechnique = (techId: string) => {
  props.toolController.setBeginnerTechnique(techId)
}
</script>