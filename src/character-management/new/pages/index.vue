<template>
  <div class="index-page">
    <div class="main-content">
      <div class="name-page-container container">
        <NamePage />
      </div>
      <div class="tool-page-container container">
        <ToolPage />
      </div>
      <div class="specialty-page-container container">
        <SpecialtyPage />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NamePage from './NamePage.vue';
import ToolPage from './ToolPage.vue';
import SpecialtyPage from './SpecialtyPage.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    NamePage,
    ToolPage,
    SpecialtyPage
  }
});
</script>

<style scoped>
.index-page {
  display: flex;
  justify-content: center; /* Center the main content horizontally */
  width: 100%;
  min-height: 100vh;
  background-color: var(--background);
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Space between components */
  width: 100%;
  max-width: 1200px; /* Ensure it does not stretch too wide */
  position: relative;
}
</style>
