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
import type { Style } from '@/classes/enums'
import OptionCard from '@/UI/components/cards/OptionCard.vue';

const props = defineProps<{
  style: Style
  selected?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', style: Style): void
}>()

const cardItem = computed(() => ({
  id: props.style,
  name: props.style.toUpperCase(),
}))
</script>