// stores/useWilders.ts - Type-safe version
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { Wilder, WilderData } from '@/class'
import localforage from 'localforage'

// Define the store state interface explicitly
interface WilderStoreState {
  draftWilder: Wilder | null
  savedWilders: Wilder[]
  selectedWilder: Wilder | null
}

const useWilderStore = defineStore('wilder', {
  state: () => ({
  draftWilder: null as Wilder | null,
  savedWilders: [] as Wilder[],
  selectedWilder: null as Wilder | null,
} as any),
 
  actions: {
    initializeNewWilder(): void {
      this.draftWilder = new Wilder()
    },
   
    selectWilder(wilderId: string): void {
      this.selectedWilder = this.savedWilders.find((w: { ID: string }) => w.ID === wilderId) || null
    },
   
    deleteSelectedWilder(): void {
      if (!this.selectedWilder) return
     
      const index = this.savedWilders.findIndex((w: { ID: any }) => w.ID === this.selectedWilder!.ID)
      if (index !== -1) {
        this.savedWilders.splice(index, 1)
        // Also remove from storage
        localforage.removeItem(`wilder-${this.selectedWilder.ID}`)
        this.selectedWilder = null
      }
    },
   
    saveDraft(): void {
      if (!this.draftWilder) return
     
      const index = this.savedWilders.findIndex((w: { ID: any }) => w.ID === this.draftWilder!.ID)
      if (index !== -1) {
        this.savedWilders[index] = this.draftWilder
      } else {
        this.savedWilders.push(this.draftWilder)
      }
     
      // Save to persistent storage
      const wilderData = this.serializeWilder(this.draftWilder)
      localforage.setItem(`wilder-${this.draftWilder.ID}`, wilderData)
    },
   
    loadWilder(id: string): void {
      const wilder = this.savedWilders.find((w: { ID: string }) => w.ID === id)
      if (wilder) this.draftWilder = wilder
    },
   
    // Accept either complete or partial data
    updateWilderData(data: WilderData | Partial<WilderData>): void {
      if (!this.draftWilder) return
      
      // If partial data, we need to merge it properly
      if (this.isPartialWilderData(data)) {
        // For partial updates, just update the specific properties
        // This is a simplified approach - you might want more sophisticated merging
        const currentData = this.serializeWilder(this.draftWilder)
        const mergedData = { ...currentData, ...data } as WilderData
        this.draftWilder.Update(mergedData)
      } else {
        this.draftWilder.Update(data)
      }
    },

    // Type guard to check if data is partial
    isPartialWilderData(data: WilderData | Partial<WilderData>): data is Partial<WilderData> {
      return (data as WilderData).id === undefined
    },
   
    async loadWilders(): Promise<Wilder[]> {
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
    },

    // Helper method to serialize a Wilder for storage
    serializeWilder(wilder: Wilder): WilderData {
      const data = new WilderData()
      data.id = wilder.ID
      data.name = wilder.Name
      data.player = wilder.Player
      data.dead = wilder.Dead
      data.tool = wilder.ToolController.tool
      data.specialty = wilder.SpecialtyController.specialty
      data.background = wilder.BackgroundController.background
      data.feasts = wilder.FeastsController.feasts
      return data
    }
  },
 
  persist: true
})

// Export the composable that components will use
export function useWilders() {
  const store = useWilderStore()
 
  return {
    // State - computed for reactivity
    wilders: computed(() => store.savedWilders),
    selectedWilder: computed(() => store.selectedWilder),
    draftWilder: computed(() => store.draftWilder),
   
    // Actions - bound methods to preserve 'this' context
    loadWilders: () => store.loadWilders(),
    selectWilder: (wilderId: string) => store.selectWilder(wilderId),
    deleteWilder: () => store.deleteSelectedWilder(),
    initializeNewWilder: () => store.initializeNewWilder(),
    saveDraft: () => store.saveDraft(),
    loadWilder: (id: string) => store.loadWilder(id),
    updateWilderData: (data: WilderData | Partial<WilderData>) => store.updateWilderData(data),
    serializeWilder: (wilder: Wilder) => store.serializeWilder(wilder)
  }
}