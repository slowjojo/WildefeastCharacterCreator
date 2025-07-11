<template>
  <div>
    <h2>Select a Specialty</h2>
    <select v-model="wilder.specialty">
      <option disabled value="">-- Choose a Specialty --</option>
      <option v-for="specialty in specialties" 
        :key="specialty.id" 
        :value="specialty.id">
        {{ specialty.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { WilderData } from '@/class'
import { useSpecialties } from '@/stores/useSpecialties'
import { watch } from 'vue'

const { specialties, getSpecialtyById } = useSpecialties()
const { wilder } = defineProps<{ wilder: WilderData}>()

watch(
  () => wilder.specialty,
  (newSpecialtyId) => {
    const selectedSpecialty = getSpecialtyById(newSpecialtyId);
    if (selectedSpecialty) {
      wilder.applySpecialty(selectedSpecialty);
    }
  }
);


</script>
