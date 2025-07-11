<template>
  <div>
    <select v-model="selectedIndex" @change="applySelectedStyle">
      <option disabled value="">-- Select a Style Spread --</option>
      <option v-for="(style, index) in tool.styles" :key="index" :value="index">
        {{ describeStyle(style) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { styleSpread } from "@/interfaces"
import type { toolData } from "@/classes/wilder/Tool"
import type { WilderData } from "@/class"
import { ref, watch } from "vue"

const props = defineProps<{
  wilder: WilderData
  tool: toolData
}>()



// cant bind styleSpread to v-model directly so i need to do this, maybe fix later

const selectedIndex = ref<number | ''>('')

function describeStyle(style: styleSpread): string {
  return `Mighty: ${style.mighty}, Precise: ${style.precise}, Swift: ${style.swift}, Tricky: ${style.tricky}`
}

function applySelectedStyle() {
  if (selectedIndex.value !== '') {
    const selectedStyle = props.tool.styles[selectedIndex.value]
    props.wilder.applyStartingStyles(selectedStyle)
  }
}

watch(() => props.tool.id, () => {
  selectedIndex.value = ''
})
</script>
