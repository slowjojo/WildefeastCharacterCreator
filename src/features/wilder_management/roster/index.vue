<template>
  <div class="main-container">
    <div class="left-pane">
      <div class="options-container">
        <OptionsArray>
          <WilderRosterButtons
            :wilders="wilders"
            @select="selectWilder"
          />
        </OptionsArray>
      </div>

      <div class="button-container">
        <v-btn class="newwilderbutton" @click="goToCharacterCreator" block color="white" text>
          New Wilder
        </v-btn>
      </div>
    </div>

    <div class="right-pane">
      <h1 v-if="selectedWilder">this will display the WilderRosterSummary of {{ selectedWilder.name }} </h1>
      <h1 v-else>Select a Wilder</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import OptionsArray from '@/UI/components/options-array/OptionsArray.vue'
import WilderRosterButtons from './components/WilderRosterButtons.vue'

const router = useRouter()

const selectedWilder = ref<any | null>(null)

function goToCharacterCreator() {
  router.push('/wilder-management/new')
}

function selectWilder(wilder: any) {
  selectedWilder.value = wilder
}

const wilders = ref([
  { id: 1, name: 'Ashfang', tool: 'Cleaver', specialty: 'Butcher' },
  { id: 2, name: 'Mistvale', tool: 'Twine', specialty: 'Gardener' },
  { id: 3, name: 'Driftroot', tool: 'Pan', specialty: 'Stockkeeper' },
  { id: 4, name: 'Ash', tool: 'Cleaver', specialty: 'Butcher' },
  { id: 5, name: 'Misa', tool: 'Twine', specialty: 'Gardener' },
  { id: 6, name: 'Dot', tool: 'Pan', specialty: 'Stockkeeper' },
  { id: 7, name: 'fang', tool: 'Cleaver', specialty: 'Butcher' },
  { id: 8, name: 'istvale', tool: 'Twine', specialty: 'Gardener' },
  { id: 9, name: 'riftoot', tool: 'Pan', specialty: 'Stockkeeper' }
])
</script>

<style scoped>
/* Ensure top-level containers don't scroll past viewport */
:global(html),
:global(body),
:global(#app) {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
  overflow: hidden;
}

.left-pane {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: aqua;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

/* New wrapper to restrict OptionsArray scroll area */
.options-container {
  flex: 1;
  margin-bottom: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.button-container {
  flex-shrink: 0;
  padding: 0;
  background-color: brown;
  display: flex;
  justify-content: center;
}

.newwilderbutton {
  cursor: pointer;
  border: 2px solid black;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  padding: 0.75rem;
  width: 100%;
  background-color: brown;
  color: white;
  text-align: center;
}

.right-pane {
  padding: 1rem;
}
</style>
