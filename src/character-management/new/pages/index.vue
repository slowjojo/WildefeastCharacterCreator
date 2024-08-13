<template>
  <div class="index-page">
    <div class="main-content">
      
      </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NamePage from './NamePage.vue';
import ToolPage from './ToolPage.vue';
import SpecialtyPage from './SpecialtyPage.vue';
import BackgroundPage from './BackgroundPage.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    NamePage,
    ToolPage,
    SpecialtyPage,
    BackgroundPage
  }
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
