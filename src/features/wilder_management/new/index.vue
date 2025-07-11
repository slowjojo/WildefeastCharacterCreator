<template>
  <div>
    <nav>
      <button @click="goToToolPage">Tool</button>
      <button @click="goToSpecialtyPage">Specialty</button>
    </nav>
    <div>
      <ToolPage v-if="step === 1" :wilder="draftWilder"/>
      <SpecialtyPage v-if="step === 2" :wilder="draftWilder"/>
    </div>
      
  </div>
  </template>

<script setup lang="ts">
import { ref, } from 'vue'
import ToolPage from './pages/ToolPage.vue'

import { WilderData } from '@/class'
import SpecialtyPage from './pages/SpecialtyPage.vue'

  const step = ref(1)
  const draftWilder = ref(new WilderData())

 function goToToolPage(): void {
  step.value = 1
 }

  function goToSpecialtyPage(): void {
  step.value = 2
 }

</script>

<style scoped>

</style>
