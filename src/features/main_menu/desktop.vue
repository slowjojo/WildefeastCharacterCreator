<template>
 <!-- top nav -->
<div>
  <MajorBtn @click="goToWilderManagment">catalogue</MajorBtn>
  <MajorBtn @click="goToCompendium">compendium</MajorBtn>
</div>
  <!-- compendium button -->
  <!-- content manager button -->

  <!-- left side view -->

<!-- bottom nav -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import MajorBtn from '../../UI/components/MajorBtn.vue';

const router = useRouter()
 function goToWilderManagment() {
  router.push({ name: 'WilderManagement' })
 }
 function goToCompendium() {
  router.push({ name: 'Compendium'})
 }
</script>

<style>

</style>
