// stores/wilderStore.ts
import { defineStore } from 'pinia'
import { Wilder, type WilderData } from '@/class'
import localforage from 'localforage'

export const useWilderStore = defineStore('wilder', {
  state: () => ({
    draftWilder: null as Wilder | null,
    savedWilders: [] as Wilder[],
  }),
  actions: {
    initializeNewWilder() {
      this.draftWilder = new Wilder()
    },
    
    saveDraft() {
      if (!this.draftWilder) return
      
      const index = this.savedWilders.findIndex(w => w.ID === this.draftWilder!.ID)
      if (index !== -1) {
        this.savedWilders[index] = this.draftWilder
      } else {
        this.savedWilders.push(this.draftWilder)
      }
    },
    
    loadWilder(id: string) {
      const wilder = this.savedWilders.find(w => w.ID === id)
      if (wilder) this.draftWilder = wilder
    },
    
    updateWilderData(data: Partial<WilderData>) {
      if (!this.draftWilder) return
      this.draftWilder.Update(data as WilderData)
    },
    
    async loadWilders() {
      try {
        const loaded: Wilder[] = []
        
        await localforage.iterate((value, key) => {
          if (key.startsWith('wilder-')) {
            const wilder = new Wilder()
            wilder.Update(value as WilderData)
            loaded.push(wilder)
          }
        })
        
        this.savedWilders = loaded
        return loaded
      } catch (error) {
        console.error('Failed to load wilders:', error)
        throw error
      }
    }
  },
  persist: true
})