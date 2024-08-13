<template>
  <div class="index-page">
    <div class="tool-page-container container">
      <ToolPage />
    </div>
    <div class="specialty-page-container container">
      <SpecialtyPage />
    </div>
    <div class="background-page-container container">
      <BackgroundPage />
    </div>
    <div class="name-page-container container">
      <NamePage />
    </div>
    <div class="summary-page-container container">
      <SummaryPage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import NamePage from './NamePage.vue';
import ToolPage from './ToolPage.vue';
import SpecialtyPage from './SpecialtyPage.vue';
import BackgroundPage from './BackgroundPage.vue';
import SummaryPage from './SummaryPage.vue';
import { Specialty, StyleSpread, Tool } from '@/types/characterTypes'; // Correct import path

export default defineComponent({
  name: 'IndexPage',
  components: {
    NamePage,
    ToolPage,
    SpecialtyPage,
    BackgroundPage,
    SummaryPage
  }
});

export const characterState = reactive({
  selectedTool: null as Tool | null,
  toolStyles: {} as StyleSpread,
  selectedTechnique: null as string | null,
  selectedSpecialty: null as Specialty | null,
  additionalTrait: null as string | null,
  background: {
    childhoodMeal: '',
    initiationMeal: '',
    futureMeal: ''
  },
  skills: {} as Record<string, number>,
  name: ''
});
</script>


<style scoped>
.index-page {
  display: flex;
  justify-content: center; /* Center the main content horizontally */
  width: 100%;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Ensure it does not stretch too wide */
  position: relative;
}
</style>
