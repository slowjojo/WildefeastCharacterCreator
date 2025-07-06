   <!-- Rip this whole part out eventually and replace it with multiple pages -->
   
   <template>
<div class="form" v-if="selectedWilder">
  <h1>select Name</h1>
    <input v-model="selectedWilder.name" placeholder="Character Name" />
  <h1>select Tool</h1>
    <select v-model="selectedWilder.tool">
      <option 
        v-for="tool in tools" 
        :key="tool.id" 
        :value="tool.id">
        {{ tool.name }}
      </option>
    </select>

  <h1>Select what you are</h1>
    <select v-model="are">
      <option disabled value=""></option>
      <option v-for="option in areOptions" :key="option" :value="option">
          {{ option }}
      </option>
    </select>

  <h1>Select what you struggle to be</h1>
    <select v-model="struggle">
      <option disabled value="">  </option>
      <option v-for="option in struggleOptions" :key="option" :value="option">
          {{ option }}
       </option>
    </select>

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
  
    <h1>Select your initiation</h1>
    

      <button @click="goBack">Done</button>
  </div>
</template>

    <script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { useWilders } from '@/stores/useWilders'
    import { WilderData } from '@/class'
    import { useCompendium } from '@/stores/useCompendium'
    import { computed, ref, watch } from 'vue'

    const router = useRouter()
    const { selectedWilder, updateWilder } = useWilders()
    const { tools,
            specialties,
            traits,

       } = useCompendium()
    
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

const are = ref("")
const struggle = ref("")

const formSelectedTool = computed(() =>
  tools.find(t => t.id === selectedWilder.value?.tool)
);

const currentAreAndStruggle = computed(() =>
  formSelectedTool.value?.are_and_struggle ?? []
);
const areOptions = computed(() => currentAreAndStruggle.value);
const struggleOptions = computed(() =>
  currentAreAndStruggle.value.filter(option => option !== are.value)
);
watch(() => selectedWilder.value?.tool, () => {
  are.value = "";
  struggle.value = "";
});

function goBack() {
  if (selectedWilder.value) {
    selectedWilder.value.traits = [
      { id: trait1.value, rank: 1 },
      { id: trait2.value, rank: 1 }
    ];
    selectedWilder.value.areAndStruggle = [are.value, struggle.value];

    const cleanWilder = WilderData.fromJSON(selectedWilder.value);

    updateWilder(cleanWilder, {}).then(() => {
      router.push('/wilder-management');
    });
  } else {
    router.push('/wilder-management');
  }
}

    </script>

    <style scoped>
    select {
      background-color: aquamarine;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
    </style>
