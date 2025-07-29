<template>
  <div class="stepper-page">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, provide } from 'vue'

const stepStates = reactive<{
  steps: { id: number; complete: boolean }[]
}>({ steps: [] })

function registerStep(index: number) {
  if (!stepStates.steps.find(s => s.id === index)) {
    stepStates.steps.push({ id: index, complete: false })
  }
}

function setStepComplete(index: number, value: boolean) {
  const step = stepStates.steps.find(s => s.id === index)
  if (step) step.complete = value
}

const isStepperComplete = computed(() =>
  stepStates.steps.length > 0 &&
  stepStates.steps.every(s => s.complete)
)

provide('registerStep', registerStep)
provide('setStepComplete', setStepComplete)
provide('isStepperComplete', isStepperComplete)
</script>

<style scoped>
.stepper-page {
  width: 100%;
  height: 100%;
  overflow-y: scroll;  
  scroll-snap-type: y mandatory;

  scrollbar-width: none;          /* Firefox */
  -ms-overflow-style: none;
}

.stepper-page::-webkit-scrollbar {
  display: none;
}
</style>
