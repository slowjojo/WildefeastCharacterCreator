<!-- pages/WilderCreator.vue -->
<template>
  <div class="leftside">
    <button @click="startNewCharacterDraft">New Character</button>

    <div class="form" v-if="selectedWilder">
      <input v-model="selectedWilder.name" placeholder="Character Name" />
      <input v-model="selectedWilder.tool" placeholder="Character Tool" />
      <input v-model="selectedWilder.specialty" placeholder="Character Specialty" />
      <button @click="handleSave">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useWilderStore } from '@/stores/wilderCatalogueStore'
import { WilderData } from '@/classes/wilder/Wilder'

const wilderStore = useWilderStore()
const router = useRouter()

// Access selectedWilder from the store
const selectedWilder = computed({
  get: () => wilderStore.selectedWilder,
  set: (val) => wilderStore.selectedWilder = val,
})

function startNewCharacterDraft() {
  selectedWilder.value = new WilderData()
}

function handleSave() {
  if (selectedWilder.value) {
    wilderStore.addWilder(selectedWilder.value)
    selectedWilder.value = null
    console.log('Going to /wilder-management...')
    router.push('/wilder-management')
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.leftside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
