<script setup lang="ts">
import ToolSelector from './character-management/new/pages/index.vue'; // Update the path if necessary
</script>

<template>
  <div id="app">
    <ToolSelector />
  </div>
</template>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center; /* Center items vertically */
  height: 100vh; /* Full viewport height */
  margin: 0; /* Remove default margin */
  background-color: var(--background); /* Use theme variable */
}
</style>
