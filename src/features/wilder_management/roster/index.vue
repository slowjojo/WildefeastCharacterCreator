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
      <h1 v-if="selectedWilder">this will display the WilderRosterSummary of {{ selectedWilder?.name }}</h1>  
        <v-btn
    v-if="selectedWilder"
    color="red"
    @click="deleteSelectedWilder"
    style="margin-top: 1rem"
  >
    Delete Wilder
  </v-btn>
      <h1 v-else>Select a Wilder</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import OptionsArray from '@/UI/components/options-array/OptionsArray.vue'
import WilderRosterButtons from './components/WilderRosterButtons.vue'
import { useWilderStore } from '@/stores/wilderCatalogueStore'

const router = useRouter()
const wilderStore = useWilderStore()
const wilders = computed(() => wilderStore.wilders)
const selectedWilder = computed(() => wilderStore.selectedWilder)


function selectWilder(wilder: any) {
  wilderStore.selectedWilder = wilder
}

function goToCharacterCreator() {
  router.push('/wilder-management/new')
}

function deleteSelectedWilder() {
  if (
    selectedWilder.value &&
    confirm(`Are you sure you want to delete ${selectedWilder.value.name}?`)
  ) {
    wilderStore.removeWilder(selectedWilder.value.id)
    wilderStore.selectedWilder = null
  }
}

</script>



<style scoped>
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
