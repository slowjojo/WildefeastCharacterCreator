<template>
  <div>
    <h1>TECHNIQUE SELECTOR</h1>
    <select v-model="selectedTechnique" @change="addSelectedTechnique">
      <option disabled value="">-- Select a technique --</option>
      <option
        v-for="techniqueId in tool.techniques.beginner"
        :key="techniqueId"
        :value="techniqueId"
      >
        {{ getTechniqueById(techniqueId)?.name || techniqueId }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTechnqiues } from '@/stores/useTechniques';
import type { toolData, WilderData } from '@/class';

const props = defineProps<{
  wilder: WilderData;
  tool: toolData;
}>();

const { getTechniqueById } = useTechnqiues();
const selectedTechnique = ref<string>('');

function addSelectedTechnique() {
  const technique = getTechniqueById(selectedTechnique.value);
  if (technique) {
    props.wilder.addTechnique(technique);
  }
}
</script>
