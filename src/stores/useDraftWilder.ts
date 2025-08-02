// src/stores/useDraftWilder.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Wilder } from '@/classes/wilder/Wilder'

export const useDraftWilderStore = defineStore('draftWilder', () => {
  const draftWilder = ref<Wilder>(new Wilder())

  const resetDraft = () => {
    draftWilder.value = new Wilder()
  }

  return {
    draftWilder,
    resetDraft
  }
})