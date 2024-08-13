<template>
    <article class="summary-page page">
      <h1>Character Summary</h1>
      <div v-if="characterState.selectedTool">
        <h2>Selected Tool</h2>
        <p>Name: {{ characterState.selectedTool.name }}</p>
        <p>Base Styles: {{ characterState.selectedTool.baseStyles.join(', ') }}</p>
        <p>Base Technique: {{ characterState.selectedTool.baseTechnique }}</p>
        <p>Beginner Techniques: {{ characterState.selectedTool.beginnerTechniques.join(', ') }}</p>
      </div>
      <!-- Other summary details -->
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { characterState } from './index.vue';
  
  export default defineComponent({
    name: 'SummaryPage',
    setup() {
      return {
        characterState
      };
    }
  });
  </script>
  