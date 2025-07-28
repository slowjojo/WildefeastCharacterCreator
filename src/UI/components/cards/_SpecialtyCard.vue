<template>
  <div
    class=" pa-4 d-flex align-center"
    :class="{ selected }"
    @click="$emit('select', specialty.id)"
  >
    <h3>{{ specialty.name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { specialtyData } from '@/class';

defineProps<{
  specialty: specialtyData
  selected?: boolean
}>()

defineEmits<{
  (e: 'select', id: string): void
}>()
</script>

<style>
.specialty-card {
  cursor: pointer;
  background-color: bisque;
  transition: 0.2s ease;
}
.specialty-card:hover {
  background-color: #f5deb3;
}

.specialty.name {
  font-weight: bold;
}

</style>
