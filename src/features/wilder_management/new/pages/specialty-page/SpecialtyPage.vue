<template>
  <div>
    <specialtySelector :specialty-controller="wilder.SpecialtyController" />
  </div>
</template>

<script setup lang="ts">
import type { Wilder } from '@/class';
import specialtySelector from '@/UI/components/selectors/WilderSpecialtySelectors/specialtySelector.vue';

const { wilder } = defineProps<{ wilder: Wilder }>()




</script>
