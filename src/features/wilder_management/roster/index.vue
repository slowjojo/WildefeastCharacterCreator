<template>
  <div class="main-container">
    <!-- Left Panel -->
    <div class="left-pane">
      <div class="options-container">
  
      </div>

      <div class="button-container">
        <v-btn class="newwilderbutton" @click="goToCharacterCreator" block>
          New Wilder
        </v-btn>
      </div>
    </div>

    <!-- Right Panel -->
    <div class="right-pane">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useWilders } from '@/stores/useWilders'

const router = useRouter()

const {
  wilders,
} = useWilders()

onMounted(() => {
  console.log('Loaded wilders:', wilders.value)
})


function goToCharacterCreator() {
  router.push('/wilder-management/new')
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
