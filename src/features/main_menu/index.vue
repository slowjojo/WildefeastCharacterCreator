<template>
 <!-- top nav -->
  <h1>main menu</h1>
 <div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <MajorBtn @click="goToWilderManagment">catalogue</MajorBtn>
  <MajorBtn @click="goToCompendium">compendium</MajorBtn>
</div>
  <!-- content manager button -->

  <!-- left side view -->

<!-- bottom nav -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import MajorBtn from '../../UI/components/MajorBtn.vue';

const router = useRouter()
 function goToWilderManagment() {
  router.push('/wilder-management')
 }
 function goToCompendium() {
  router.push({ name: 'Compendium'})
 }
</script>

<style>

</style>
