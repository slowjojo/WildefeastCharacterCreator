<template>
	<div v-if="specialtyData">
	      <label>Pick First Trait:</label>
	      <select v-model="firstTrait">
	        <option disabled value="">-- select --</option>
	        <option
	          v-for="traitId in specialtyData.traits"
	          :key="traitId"
	          :value="traitId"
	        >
	          {{ getTraitName(traitId) }}
	        </option>
	      </select>
	
	      <label>Pick Second Trait:</label>
	      <select v-model="secondTrait">
	        <option disabled value="">-- select --</option>
	        <option
	          v-for="trait in allTraits"
	          :key="trait.id"
	          :value="trait.id"
	          :disabled="trait.id === firstTrait"
	        >
	          {{ trait.name }}
	        </option>
	      </select>
	    </div>
</template>

<script setup lang="ts">
defineProps<{ 
	specialtyData: import("c:/Users/gutzm/Desktop/Wilderfesast_website_box/wilderfeast_website_project/src/class").specialtyData | null;
	getTraitName: (id: string) => string;
	secondTrait: string;
	allTraits: import("c:/Users/gutzm/Desktop/Wilderfesast_website_box/wilderfeast_website_project/src/class").traitData[];
}>()
const firstTrait = defineModel<string>('firstTrait', { required: true })
</script>
