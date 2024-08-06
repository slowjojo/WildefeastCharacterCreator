<template>
  <div>
    <NamePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NamePage from './NamePage.vue'; // Update the path to where NamePage.vue is located

export default defineComponent({
  name: 'IndexPage',
  components: {
    NamePage // Register NamePage component
  },
  setup() {
    // Component logic goes here
  }
});
</script>

<style scoped>
/* Styles go here */
</style>
