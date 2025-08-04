<template>
  <OptionCard
    :item="cardItem"
    :selected="selected"
    :hasIcon="true"
    @select="$emit('select', tool.id)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ToolData } from '@/classes/wilder/components/tool/Tool'
import OptionCard from '@/UI/components/cards/OptionCard.vue';

const props = defineProps<{
  tool: ToolData
  selected?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', id: string): void
}>()

const cardItem = computed(() => ({
  id: props.tool.id,
  name: props.tool.name,
  icon: props.tool.icon
}))
</script>