<template>
  <div>
    <h1>Specialty Page</h1>

    <!-- Pick a Specialty -->
    <div>
      <label for="specialty">Choose a Specialty:</label>
      <select v-model="selectedSpecialtyId" @change="applySpecialty">
        <option disabled value="">-- select --</option>
        <option v-for="spec in specialties" :key="spec.id" :value="spec.id">
          {{ spec.name }}
        </option>
      </select>
    </div>

    <!-- Choose Traits -->
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

    <!-- Monstrous Acquaintance -->
    <div v-if="specialtyData">
      <h3>Monstrous Acquaintance</h3>
      <input v-model="monsterName" placeholder="Name" />
      <textarea v-model="monsterDesc" placeholder="Description" />
      <input v-model="monsterId" placeholder="Monster ID (optional)" />
      <button @click="saveMonster">Save Acquaintance</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Wilder } from '@/class'
import { useSpecialties } from '@/stores/useSpecialties'
import { useTraits } from '@/stores/useTraits'

const props = defineProps<{ wilder: Wilder }>()

const { specialties, getSpecialtyById } = useSpecialties()
const { traits, getTraitName } = useTraits()

// Selected specialty ID
const selectedSpecialtyId = ref(props.wilder.SpecialtyController.specialty?.id || '')

const specialtyData = computed(() =>
  selectedSpecialtyId.value ? getSpecialtyById(selectedSpecialtyId.value) || null : null
)

function applySpecialty() {
  props.wilder.SpecialtyController.setSpecialty(selectedSpecialtyId.value)
}

// Trait selection
const firstTrait = ref(props.wilder.SpecialtyController.specialty?.firstTrait || '')
const secondTrait = ref(props.wilder.SpecialtyController.specialty?.secondTrait || '')

watch(firstTrait, id => {
  if (id) props.wilder.SpecialtyController.setFirstTrait(id)
})
watch(secondTrait, id => {
  if (id) props.wilder.SpecialtyController.setSecondTrait(id)
})

// All traits (for second trait select)
const allTraits = computed(() => traits)

// Monstrous acquaintance
const monsterName = ref('')
const monsterDesc = ref('')
const monsterId = ref('')

function saveMonster() {
  if (!selectedSpecialtyId.value) return
  props.wilder.SpecialtyController.setMonstrousAcquaintance(
    monsterName.value,
    monsterDesc.value,
    monsterId.value || undefined
  )
}
</script>
