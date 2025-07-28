<template>
  <div class="container">
    <div class="steps-bar">
      <v-btn @click="goToToolPage">Tool</v-btn>
      <v-btn @click="goToSpecialtyPage">Specialty</v-btn>
      <v-btn>Background</v-btn>
      <v-btn>Identity</v-btn>
    </div>
    <div class="selectors-panel">
      <div v-if="!draftWilder">Loading...</div>
        <ToolPage v-else-if="step === 1" :wilder="wilder" />
        <SpecialtyPage v-else-if="step === 2" :wilder="wilder"/>
        <BackgroundPage v-else-if="step === 3" :wilder="wilder" />
      </div>
    <div class="RightPanel">
      <h1>right panel will go here</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Wilder } from '@/class'
import { onMounted, ref, computed } from 'vue'
import ToolPage from './pages/tool-page/ToolPage.vue'
import SpecialtyPage from './pages/specialty-page/SpecialtyPage.vue'
import BackgroundPage from './pages/BackgroundPage.vue'

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

.container {
  display: flex;
  height: 100vh; 
}


.steps-bar {
  display: flex;
  flex-direction: column;
}

.steps-bar > button {
  width: 150px;
  height: 150px;
   cursor: pointer;
  background-color: bisque;
  transition: 0.2s ease;
}

.steps-bar > button:hover {
 background-color: #f5deb3;
}

.selectors-panel {
  width: 600px;
  background-color: aqua;
  overflow-y: auto;
  padding: 0;
}
</style>
