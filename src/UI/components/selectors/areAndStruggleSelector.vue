<template>
  <div>
    <div>Select your Are</div>
    <select v-model="selectedAre">
      <option disabled value="">-- are --</option>
      <option v-for="word in tool.are_and_struggle" :key="'are-' + word" :value="word">
        {{ word }}
      </option>
    </select>

    <div>Select your Struggle</div>
    <select v-model="selectedStruggle">
      <option disabled value="">-- struggle --</option>
      <option
        v-for="word in tool.are_and_struggle"
        :key="'struggle-' + word"
        :value="word"
        :disabled="word === selectedAre"
      >
        {{ word }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { WilderData, toolData } from '@/class'

const props = defineProps<{
  wilder: WilderData
  tool: toolData
}>()

const selectedAre = ref('')
const selectedStruggle = ref('')

watch([selectedAre, selectedStruggle], ([are, struggle]) => {
  if (are && struggle && are !== struggle) {
    props.wilder.applyAreAndStruggle(are, struggle)
  }
})
</script>
