<template>
  <div class="index-page">
    <div class="name-page-container">
      <NamePage />
    </div>
    <div class="tool-page-container">
      <ToolPage />
    </div>
    <!-- Display the NamePage component -->
    <div>
      <SpecialtyPage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolPage from './ToolPage.vue'; // Ensure this path is correct
import NamePage from './NamePage.vue';
import SpecialtyPage from './SpecialtyPage.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ToolPage, // Register ToolPage component
    NamePage, // Register NamePage component
    SpecialtyPage
  },
  setup() {
    // Component logic goes here
  }
});
</script>

<style scoped>
  .index-page {
    display: flex;
  }
</style>
