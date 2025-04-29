<!-- /wilder-management/index.vue -->
<template>
  <div class="wilder-management-page">
    <h1>Wilder Management</h1>
    

    <router-view /> <!-- Will show roster (later), or /new/... pages -->
   
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.wilder-management-page {
  padding: 2rem;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
</style>
