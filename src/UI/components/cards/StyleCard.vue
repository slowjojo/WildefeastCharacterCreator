<template>
  <OptionCard
    :item="cardItem"
    :selected="selected"
    :hasIcon="false"
    @select="$emit('select', style)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import OptionCard from './OptionCard.vue'

const props = defineProps<{
  style: string
  selected?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', style: string): void
}>()

const cardItem = computed(() => ({
  id: props.style,
  name: props.style.toUpperCase(),
  // No icon needed for styles
}))
</script>