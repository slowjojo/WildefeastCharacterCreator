<template>
  <div>
    <div>Select your Are</div>
    <select v-model="selectedAre">
      <option disabled value="">-- are --</option>
      <option v-for="word in areAndStruggle" :key="'are-' + word" :value="word">
        {{ word }}
      </option>
    </select>

    <div>Select your Struggle</div>
    <select v-model="selectedStruggle">
      <option disabled value="">-- struggle --</option>
      <option
        v-for="word in areAndStruggle"
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
import { ref, watch, computed } from 'vue'
import type { Wilder } from '@/class'
import type { WilderTool } from '@/interfaces'
import { useTools } from '@/stores/useTools'

const props = defineProps<{
  wilder: Wilder
  tool: WilderTool
}>()

const { getToolById } = useTools()
const ToolData = computed(() => getToolById(props.tool.id))
const areAndStruggle = computed(() => ToolData.value?.are_and_struggle ?? [])

const selectedAre = ref('')
const selectedStruggle = ref('')

watch([selectedAre, selectedStruggle], ([are, struggle]) => {

  if (are === struggle && struggle !== '') {
    selectedStruggle.value = ''
    return
  }


  if (are && struggle && are !== struggle) {
    props.wilder.ToolController.setAreAndStruggle(are, struggle)
  }
})



</script>
