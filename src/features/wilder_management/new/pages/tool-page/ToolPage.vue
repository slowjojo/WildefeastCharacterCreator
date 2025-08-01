

<template>
  <ToolSelector :tool-controller="wilder.ToolController"/>
  <StyleSelector :tool-controller="wilder.ToolController"/>
  <TechniqueSelector :tool-controller="wilder.ToolController"/>
  <AreAndStruggleSelector :tool-controller="wilder.ToolController"/>
</template>


<script setup lang="ts">
import type { Wilder } from '@/class';


defineProps<{
  wilder: Wilder
}>()


</script>