<!-- /wilder-management/new/index.vue -->
<template>
  <div class="character-creation-wrapper">
    <h1>Create Your Wilder</h1>
    <h2>{{ stepTitle }}</h2>

    <router-view />

    <div class="nav-buttons">
      <button @click="goToPreviousStep" :disabled="!previousStep">← Back</button>
      <button @click="goToNextStep" :disabled="!nextStep">Next →</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Correct step order (Tool → Specialty → Background → Name)
const steps = ['tool', 'specialty', 'background', 'name']

// Determine current step from the URL path
const currentStep = route.path.split('/').pop() || ''
const currentIndex = steps.indexOf(currentStep)

// Compute next and previous step names
const nextStep = currentIndex >= 0 && currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null
const previousStep = currentIndex > 0 ? steps[currentIndex - 1] : null

const stepTitles: Record<string, string> = {
  tool: 'Step 1: Tool & Styles',
  specialty: 'Step 2: Specialty',
  background: 'Step 3: Background',
  name: 'Step 4: Name & Pronouns',
}

const stepTitle = stepTitles[currentStep] || 'Character Creation'

function goToNextStep() {
  if (nextStep) {
    router.push(`/wilder-management/new/${nextStep}`)
  }
}

function goToPreviousStep() {
  if (previousStep) {
    router.push(`/wilder-management/new/${previousStep}`)
  }
}
</script>

<style scoped>
.character-creation-wrapper {
  padding: 2rem;
  max-width: 700px;
  margin: auto;
}

.nav-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
