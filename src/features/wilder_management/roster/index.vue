<template>
  <div class="main-container">
    <!-- Left Panel -->
    <div class="left-pane">
      <div class="options-container">
        <OptionsArray>
          <WilderRosterButtons
            :wilders="wilders"
            :tools="tools"
            @select="selectWilder"
          />
        </OptionsArray>
      </div>

      <div class="button-container">
        <v-btn class="newwilderbutton" @click="goToCharacterCreator" block>
          New Wilder
        </v-btn>
      </div>
    </div>

    <!-- Right Panel -->
    <div class="right-pane">
      <div v-if="selectedWilder">
        <h2>{{ selectedWilder.Name }}</h2>
        <p>
          <strong>Tool:</strong>
          {{ getToolName(selectedWilder.ToolController.tool?.id || '') }}
        </p>
        <p>
          <strong>Specialty:</strong>
          {{ selectedWilder.SpecialtyController.specialty?.name || '—' }}
        </p>
        <v-btn color="red" @click="deleteSelectedWilder" style="margin-top: 1rem">
          Delete Wilder
        </v-btn>
      </div>
      <div v-else>
        <h2>Select a Wilder</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import OptionsArray from '@/UI/components/options-array/OptionsArray.vue'
import WilderRosterButtons from './components/WilderRosterButtons.vue'
import { useWilders } from '@/stores/useWilders'
import { useTools } from '@/stores/useTools'

const router = useRouter()
const { tools } = useTools()

const {
  wilders,
  selectedWilder,
  selectWilder,
  deleteWilder,
  loadWilders
} = useWilders()

onMounted(() => {
  loadWilders()
  console.log('Loaded wilders:', wilders.value)
})

function getToolName(id: string): string {
  const tool = tools.find(t => t.id === id)
  return tool ? tool.name : '—'
}

function goToCharacterCreator() {
  router.push('/wilder-management/new')
}

function deleteSelectedWilder() {
  if (
    selectedWilder.value &&
    confirm(`Are you sure you want to delete ${selectedWilder.value.Name}?`)
  ) {
    deleteWilder()
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
  height: 100vh;
  background-color: #f9f9f9;
  box-sizing: border-box;
  border-right: 2px solid black;
}

.options-container {
  flex-basis: 80%;
  min-height: 0;
  overflow-y: auto;
}

.button-container {
  flex-basis: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
}

.newwilderbutton {
  width: 60%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
}

.right-pane {
  padding: 2rem;
  overflow-y: auto;
}
</style>
