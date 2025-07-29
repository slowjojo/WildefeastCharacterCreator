<template>
  <StepperPage>
    <!-- Step 1: Select a tool -->
    <StepperPageContent :complete="!!wilder.ToolController.tool?.id">
      <tool-selector :tool-controller="wilder.ToolController" />
    </StepperPageContent>

    <!-- Step 2: Fill out tool details -->
    <StepperPageContent
      v-if="tool"
      :complete="!!toolController.tool?.baseStyles &&
                 !!toolController.tool?.beginnerTechnique &&
                 !!toolController.tool?.are &&
                 !!toolController.tool?.struggle"
    >
      <style-selector :tool-controller="toolController" :tool="tool" />
      <technique-selector :tool-controller="toolController" :tool="tool" />
      <are-and-struggle-selector :tool-controller="toolController" :tool="tool" />
    </StepperPageContent>
  </StepperPage>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTools } from '@/stores/useTools'
import { Wilder } from '@/class'

import StepperPage from '@/UI/components/stepper/stepperPage.vue'
import StepperPageContent from '@/UI/components/stepper/stepperPageContent.vue'

import ToolSelector from '@/UI/components/selectors/WilderToolSelectors/toolSelector.vue'
import StyleSelector from '@/UI/components/selectors/WilderToolSelectors/styleSelector.vue'
import TechniqueSelector from '@/UI/components/selectors/WilderToolSelectors/techniqueSelector.vue'
import AreAndStruggleSelector from '@/UI/components/selectors/WilderToolSelectors/areAndStruggleSelector.vue'

const props = defineProps<{ wilder: Wilder }>()

const { getToolById } = useTools()

const toolController = props.wilder.ToolController
const tool = computed(() => getToolById(toolController.tool?.id || ''))
</script>
