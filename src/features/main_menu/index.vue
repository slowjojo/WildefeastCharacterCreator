<template>
  <div class="main-container">
    <!-- Left Side: Navigation -->
    <div class="left-pane">
      <div class="button-column">
        <MajorBtn @click="goToWilderManagment">catalogue</MajorBtn>
        <MajorBtn @click="goToCompendium">compendium</MajorBtn>
      </div>
    </div>

    <!-- Right Side: Content (currently empty, placeholder) -->
    <div class="right-pane">
    <h1>THIS IS WHERE SOMETHING ELSE WILL GO!</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import MajorBtn from '../../UI/components/MajorBtn.vue';

const router = useRouter();

function goToWilderManagment() {
  router.push('/wilder-management');
}
function goToCompendium() {
  router.push({ name: 'Compendium' });
}
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh; /* full screen height */
}

.left-pane {
  flex: 40%; /* half the screen */
}

.right-pane {
  flex: 60%; /* other half */
  padding: 2rem;
  background-color: #ffffff;
}

.button-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style>
