<template>
</template>

<script setup lang="ts">
//handle the character creation and the seperate pages
import { reactive } from 'vue'

const character = {
  name: "",
  tool: null,
  styles: { mighty: 0, precise: 0, swift: 0, tricky: 0 },
  techniques: [],
  specialty: null,
  traits: [],
  importantMonster: "",
  skills: {
    search: 0, sneak: 0, strike: 0, assure: 0,
    craft: 0, study: 0, sway: 0, travel: 0,
  },
  background: {
    upbringing: "",
    initiation: "",
    ambition: "",
    connection: ""
  },
  pack: {
    archetype: "",
    name: "",
    den: ""
  },
  appearance: {
    mutations: [],
    quirks: []
  }
};
</script>

<style scoped>
</style>
