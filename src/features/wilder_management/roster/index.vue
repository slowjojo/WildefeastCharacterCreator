<template>
    <div>
      <h1>Your Wilder Roster</h1>
      <button @click="goToCharacterCreator">+ New Wilder</button>
      <!-- Loop through and show Wilder characters here -->
    </div>
  </template>
  
  <script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

  function goToCharacterCreator() {
  router.push('/wilder-management/new')
}
  </script>
  