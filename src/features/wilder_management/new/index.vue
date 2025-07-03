  <template>
    <div class="form" v-if="selectedWilder">
      <input v-model="selectedWilder.name" placeholder="Character Name" />
         <select v-model="selectedWilder.tool">
      <option 
        v-for="tool in tools" 
        :key="tool.id" 
        :value="tool.id"
      >
        {{ tool.name }}
      </option>
    </select>
      <input v-model="selectedWilder.specialty" placeholder="Character Specialty" />
      <button @click="goBack">Done</button>
    </div>
  </template>

  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useWilders } from '@/stores/useWilders'
  import { WilderData } from '@/class'
  import { useTools } from '@/stores/useTools'

  // Setup router and store access
  const router = useRouter()
  const { selectedWilder, updateWilder } = useWilders()
  const { tools, } = useTools()

function goBack() {
  if (selectedWilder.value) {
    // Convert proxy into plain WilderData instance
    const cleanWilder = WilderData.fromJSON(selectedWilder.value)

    updateWilder(cleanWilder, {}).then(() => {
      router.push('/wilder-management')
    })
  } else {
    router.push('/wilder-management')
  }
}
  </script>

  <style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  </style>
