<template>
	<h1>select specialty</h1>
	    <select v-model="selectedWilder.specialty">
	      <option 
	          v-for="specialty in specialties" 
	          :key="specialty.id" 
	          :value="specialty.id"
	        >
	        {{ specialty.name }}
	      </option>
	    </select>
	
	  <h1>Select first Trait (from your Specialty)</h1>
	    <select v-model="trait1">
	      <option v-for="trait in availableFirstTraits" :key="trait.id" :value="trait.id">
	        {{ trait.name }}
	      </option>
	    </select>
	
	  <h1>Select second Trait (from any Specialty)</h1>
	    <select v-model="trait2">
	      <option v-for="trait in availableSecondTraits" :key="trait.id" :value="trait.id">
	        {{ trait.name }}
	      </option>
	    </select>
</template>

<script setup lang="ts">
import type { WilderData } from "@/class"
import { computed, ref } from "vue";

defineProps<{ 
	selectedWilder: WilderData;
	specialties: import("c:/Users/gutzm/Desktop/Wilderfesast_website_box/wilderfeast_website_project/src/class").specialtyData[];
	trait1: string;
	availableFirstTraits: import("c:/Users/gutzm/Desktop/Wilderfesast_website_box/wilderfeast_website_project/src/class").traitData[];
	trait2: string;
	availableSecondTraits: import("c:/Users/gutzm/Desktop/Wilderfesast_website_box/wilderfeast_website_project/src/class").traitData[];
}>()

const trait1 = ref("")
const trait2 = ref("")
    
const availableFirstTraits = computed(() => {
  const specialty = specialties.find(s => s.id === selectedWilder.value?.specialty)
  if (!specialty) return []
  return traits.filter(
    trait =>
      specialty.traits.includes(trait.id) &&
      trait.level === 1
  )
})

const allSpecialtyTraits = computed(() => {
  return [...new Set(specialties.flatMap(s => s.traits))]
})

const availableSecondTraits = computed(() => {
  const firstTrait = trait1.value
  return traits.filter(
    trait =>
      allSpecialtyTraits.value.includes(trait.id) &&
      trait.id !== firstTrait &&
      trait.level === 1
  )
})



</script>
