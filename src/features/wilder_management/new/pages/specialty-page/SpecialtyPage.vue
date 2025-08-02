<template>
  <div>
    SpecialtyController
  </div>
</template>

<script setup lang="ts">
import SpecialtySelector from '@/UI/components/selectors/WilderSpecialtySelectors/specialtySelector.vue';
import { useDraftWilderStore } from '@/stores/useDraftWilder'

const { draftWilder } = useDraftWilderStore()
</script>