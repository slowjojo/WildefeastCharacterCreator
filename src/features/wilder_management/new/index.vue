<!-- src/features/wilder_management/new/index.vue -->
<template>
  <div v-if="draftWilder" class="character-creator">
    <v-stepper
      v-model="currentStep"
      :items="stepperItems"
      hide-actions
      vertical
    >
      <!-- Tool Selection Step -->
      <template v-slot:item.1>
        <v-card flat>
          <v-card-title>Configure Your Tool</v-card-title>
          <v-card-text>
            <ToolPage />
          </v-card-text>
        </v-card>
      </template>

      <!-- Specialty Selection Step -->
      <template v-slot:item.2>
        <v-card flat>
          <v-card-title>Choose Your Specialty</v-card-title>
          <v-card-text>
            <SpecialtyPage />
          </v-card-text>
        </v-card>
      </template>

      <!-- Background Step -->
      <template v-slot:item.3>
        <v-card flat>
          <v-card-title>Select Your Background</v-card-title>
          <v-card-text>
            <BackgroundPage />
          </v-card-text>
        </v-card>
      </template>

      <!-- Name & Pronouns Step -->
      <template v-slot:item.4>
        <v-card flat>
          <v-card-title>Character Details</v-card-title>
          <v-card-text>
            <NameAndPronounsPage />
          </v-card-text>
        </v-card>
      </template>
    </v-stepper>

    <!-- Custom Navigation Footer -->
    <v-card-actions class="stepper-actions">
      <v-btn
        @click="previousStep"
        :disabled="currentStep === 1"
        variant="outlined"
      >
        Previous
      </v-btn>
      
      <v-spacer />
      
      <div class="step-info">
        Step {{ currentStep }} of {{ stepperItems.length }}
      </div>
      
      <v-spacer />
      
      <v-btn
        @click="nextStep"
        :disabled="!canProceed"
        color="primary"
      >
        {{ isLastStep ? 'Finish' : 'Next' }}
      </v-btn>
    </v-card-actions>
  </div>
  
  <div v-else>
    <v-progress-circular indeterminate />
    Loading...
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDraftWilderStore } from '@/stores/useDraftWilder'
import ToolPage from './pages/tool-page/ToolPage.vue'
import SpecialtyPage from './pages/specialty-page/SpecialtyPage.vue'
import BackgroundPage from './pages/BackgroundPage.vue'
import NameAndPronounsPage from './pages/NameAndPronounsPage.vue'

const { draftWilder } = useDraftWilderStore()
const currentStep = ref(1) // Vuetify stepper starts at 1

// Define stepper structure
const stepperItems = computed(() => [
  {
    title: 'Tool',
    value: 1,
    complete: toolController.isComplete
  },
  {
    title: 'Specialty', 
    value: 2,
    complete: isSpecialtyComplete.value
  },
  {
    title: 'Background',
    value: 3, 
    complete: isBackgroundComplete.value
  },
  {
    title: 'Details',
    value: 4,
    complete: isNameComplete.value
  }
])

const toolController = draftWilder.ToolController

// Completion status for each step
const isSpecialtyComplete = computed(() => {
  const specialty = draftWilder.SpecialtyController.specialty
  return !!(specialty?.id && specialty?.firstTrait && specialty?.secondTrait)
})

const isBackgroundComplete = computed(() => {
  const bg = draftWilder.BackgroundController.background
  return !!(bg?.upbringing && bg?.initiation && bg?.ambition)
})

const isNameComplete = computed(() => {
  return !!draftWilder.name && draftWilder.name.length > 0
})

// Navigation logic
const canProceed = computed(() => {
  const currentStepData = stepperItems.value.find(item => item.value === currentStep.value)
  return currentStepData?.complete || currentStep.value === 4 // Last step can be incomplete
})

const isLastStep = computed(() => currentStep.value === stepperItems.value.length)

function nextStep() {
  if (canProceed.value && !isLastStep.value) {
    currentStep.value++
  } else if (isLastStep.value && canProceed.value) {
    // Handle completion - save character, navigate somewhere, etc.
    console.log('Character creation completed!')
    // You might want to:
    // - Save the character
    // - Navigate to character sheet
    // - Show success message
  }
}

function previousStep() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}
</script>

<style scoped>
.character-creator {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.v-stepper {
  flex: 1;
  overflow-y: auto;
}

/* Vertical stepper specific styling */
.v-stepper.v-stepper--vertical {
  display: flex;
  flex-direction: row; /* Make the stepper itself horizontal */
}

.v-stepper.v-stepper--vertical .v-stepper-header {
  flex: 0 0 250px; /* Fixed width for the step list */
  background: #f8f9fa;
}

.v-stepper.v-stepper--vertical .v-stepper-window {
  flex: 1; /* Content takes remaining space */
}

.stepper-actions {
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  padding: 1rem 2rem;
}

.step-info {
  font-size: 0.875rem;
  color: #666;
}

/* Make sure step content has proper spacing */
.v-card-text {
  padding: 2rem !important;
}
</style>