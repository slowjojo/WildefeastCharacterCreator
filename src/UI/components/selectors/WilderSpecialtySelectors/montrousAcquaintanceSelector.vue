<template>
	<div v-if="specialtyData">
	      <h3>Monstrous Acquaintance</h3>
	      <input v-model="monsterName" placeholder="Name" />
	      <textarea v-model="monsterDesc" placeholder="Description" />
	      <input v-model="monsterId" placeholder="Monster ID (optional)" />
	      <button @click="saveMonster">Save Acquaintance</button>
	    </div>
</template>

<script setup lang="ts">
defineProps<{ 
	specialtyData: import("c:/Users/gutzm/Desktop/Wilderfesast_website_box/wilderfeast_website_project/src/class").specialtyData | null;
	monsterName: string;
	monsterDesc: string;
	monsterId: string;
	saveMonster: () => void;
}>()
</script>
