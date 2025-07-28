<template>
<div class="selectors-container" ref="container">
  <div class="slide">
    <SubMenuContent
      :complete="!!wilder.ToolController.tool?.id"
    >
      <tool-selector :tool-controller="wilder.ToolController" />
    </SubMenuContent>
  </div>

  <div class="slide" v-if="tool">
    <SubMenuContent
      :complete="!!tool"
    >
      <style-selector :tool-controller="wilder.ToolController" :tool="tool!" />
      <technique-selector :tool-controller="wilder.ToolController" :tool="tool!" />
      <are-and-struggle-selector :tool-controller="wilder.ToolController" :tool="tool!" />
    </SubMenuContent>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTools } from '@/stores/useTools'
import { Wilder } from '@/class'

import SubMenuContent from '@/UI/SubMenuContent.vue'
import ToolSelector from '@/UI/components/selectors/WilderToolSelectors/toolSelector.vue'
import StyleSelector from '@/UI/components/selectors/WilderToolSelectors/styleSelector.vue'
import TechniqueSelector from '@/UI/components/selectors/WilderToolSelectors/techniqueSelector.vue'
import AreAndStruggleSelector from '@/UI/components/selectors/WilderToolSelectors/areAndStruggleSelector.vue'

const props = defineProps<{ wilder: Wilder }>()
const { getToolById } = useTools()


const tool = computed(() => getToolById(props.wilder.ToolController.tool?.id || ''))


</script>

<style scoped>
.selectors-container {
  width: 100%;
  height: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.slide {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
}
</style>
