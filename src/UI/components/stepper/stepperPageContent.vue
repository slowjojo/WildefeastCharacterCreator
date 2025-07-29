<template>
  <div class="stepper-page-content">
    <slot />
    <div class="status-indicator">
      <v-icon v-if="complete" color="success" size="28">mdi-check-circle</v-icon>
      <v-icon v-else-if="mandatory" color="grey" size="28">mdi-checkbox-blank-circle-outline</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject, onMounted, watch } from 'vue'

const props = defineProps<{
  complete: boolean
  mandatory?: boolean
}>()

const registerStep = inject<(index: number) => void>('registerStep')!
const setStepComplete = inject<(index: number, complete: boolean) => void>('setStepComplete')!

const myIndex = (() => {
  const vnodeKey = getCurrentInstance()?.vnode?.key
  return typeof vnodeKey === 'number' ? vnodeKey : Math.floor(Math.random() * 100000)
})()

onMounted(() => {
  registerStep(myIndex)
  setStepComplete(myIndex, props.complete)
})

watch(() => props.complete, (val) => {
  setStepComplete(myIndex, val)
})
</script>

<style scoped>
.stepper-page-content {
  position: relative;
  height: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
}

.status-indicator {
  position: absolute;
  right: 16px;
  bottom: 54px;
}
</style>
