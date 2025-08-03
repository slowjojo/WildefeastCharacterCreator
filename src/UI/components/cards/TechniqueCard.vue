<template>
  <OptionCard
    :item="cardItem"
    :selected="selected"
    :hasIcon="false"
    @select="handleSelect"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { techniqueData } from '@/classes/wilder/components/technique/Technique'
import OptionCard from './OptionCard.vue'

const props = defineProps<{
  technique: techniqueData
  selected?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', id: string): void
}>()

const cardItem = computed(() => ({
  id: props.technique.id,
  name: `${props.technique.name}`,
}))

function handleSelect(id: string) {
  emit('select', id)
}
</script>