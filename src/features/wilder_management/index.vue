<template>
  <div>
    <h1>Wilder Management</h1>

    <div class="ma-3">
      <v-btn color="primary" @click="goToCreator">New</v-btn>

      <v-fade-transition leave-absolute>
        <router-view />
      </v-fade-transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goToCreator() {
  router.push({ name: 'CreateWilder' })
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
</style>
