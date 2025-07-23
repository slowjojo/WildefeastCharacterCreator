<template>
  <div>
    <select v-model="selectedIndex" @change="applySelectedStyle">
      <option disabled value="">-- Select a Style Spread --</option>
      <option v-for="(style, index) in availableStyles" :key="index" :value="index">
        {{ describeStyle(style) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { WilderStyles, WilderTool } from "@/interfaces"
import type { Wilder } from "@/class"
import { ref, watch, computed } from "vue"
import { useTools } from "@/stores/useTools"

const props = defineProps<{
  wilder: Wilder
  tool: WilderTool
}>()

const { getToolById } = useTools()
const fullToolData = computed(() => getToolById(props.tool.id))
const availableStyles = computed(() => fullToolData.value?.styles ?? [])

const selectedIndex = ref<number | ''>('')

function describeStyle(styles: WilderStyles): string {
  return `Mighty: ${styles.mighty}, Precise: ${styles.precise}, Swift: ${styles.swift}, Tricky: ${styles.tricky}`
}

function applySelectedStyle() {
  const styles = availableStyles.value[selectedIndex.value as number]
  if (styles) {
    props.wilder.ToolController.setStyles(styles)
  }
}

watch(() => props.tool.id, () => {
  selectedIndex.value = ''
})
</script>
