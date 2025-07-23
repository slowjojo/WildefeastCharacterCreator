<template>
  <div>
    <nav>
      <button @click="goToToolPage">Tool</button>
      <button @click="goToSpecialtyPage">Specialty</button>
    </nav>
    <div>
    <div v-if="!draftWilder">Loading...</div>
      <ToolPage v-else-if="step === 1" :wilder="wilder" />
      <SpecialtyPage v-else-if="step === 2" :wilder="wilder"/>
    </div>
      
  </div>
  </template>

<script setup lang="ts">
import { Wilder } from '@/class'
import { onMounted, ref, computed } from 'vue'
import ToolPage from './pages/tool-page/ToolPage.vue'
import SpecialtyPage from './pages/SpecialtyPage.vue'

const step = ref(1)
const draftWilder = ref<Wilder | null>(null)

const wilder = computed(() => draftWilder.value as Wilder)

onMounted(() => {
  draftWilder.value = new Wilder()
})

function goToToolPage() {
  step.value = 1
}

function goToSpecialtyPage() {
  step.value = 2
}


</script>

<style scoped>

</style>
