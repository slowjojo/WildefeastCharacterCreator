

<template>
  <ToolSelector :tool-controller="wilder.ToolController"/>
  <StyleSelector :tool-controller="wilder.ToolController"/>
  <TechniqueSelector :tool-controller="wilder.ToolController"/>
  <AreAndStruggleSelector :tool-controller="wilder.ToolController"/>
</template>


<script setup lang="ts">
import type { Wilder } from '@/class';
import AreAndStruggleSelector from '@/UI/components/selectors/WilderToolSelectors/areAndStruggleSelector.vue';
import StyleSelector from '@/UI/components/selectors/WilderToolSelectors/styleSelector.vue';
import TechniqueSelector from '@/UI/components/selectors/WilderToolSelectors/techniqueSelector.vue';
import ToolSelector from '@/UI/components/selectors/WilderToolSelectors/toolSelector.vue';


defineProps<{
  wilder: Wilder
}>()


</script>