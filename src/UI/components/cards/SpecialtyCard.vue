<template>
  <OptionCard
    :item="cardItem"
    :selected="selected"
    :hasIcon="false"
    @select="$emit('select', specialty.id)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { specialtyData } from '@/class'
import OptionCard from './OptionCard.vue'

const props = defineProps<{
  specialty: specialtyData
  selected?: boolean
}>()



const cardItem = computed(() => ({
  id: props.specialty.id,
  name: props.specialty.name,
  icon: undefined // Specialties don't have icons in your JSON
}))
</script>