// stores/useWilders.ts
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { Wilder, WilderData } from '@/class'

const useWilderStore = defineStore('wilder', {
  state: () => ({
    draftWilder: null as Wilder | null,
    savedWilders: [] as Wilder[],
    selectedWilder: null as Wilder | null,
  }),
 
  actions: {
    // Set wilders from external loader
    setWilders(wilders: Wilder[]): void {
      this.savedWilders = wilders
    },

    initializeNewWilder(): void {
      this.draftWilder = new Wilder()
    },
   
    selectWilder(wilderId: string): void {
      this.selectedWilder = this.savedWilders.find(w => w.id === wilderId) || null
    },
   
    async deleteSelectedWilder(): Promise<void> {
      if (!this.selectedWilder) return
     
      const index = this.savedWilders.findIndex(w => w.id === this.selectedWilder!.id)
      if (index !== -1) {
        // Use the Wilder's delete method
        await this.selectedWilder.delete()
        this.savedWilders.splice(index, 1)
        this.selectedWilder = null
      }
    },
   
    async saveDraft(): Promise<void> {
      if (!this.draftWilder) return
     
      const index = this.savedWilders.findIndex(w => w.id === this.draftWilder!.id)
      if (index !== -1) {
        this.savedWilders[index] = this.draftWilder
      } else {
        this.savedWilders.push(this.draftWilder)
      }
     
      // Use the Wilder's save method
      await this.draftWilder.save()
    },
   
    loadWilder(id: string): void {
      const wilder = this.savedWilders.find(w => w.id === id)
      if (wilder) this.draftWilder = wilder
    },
   
    updateWilderData(data: WilderData | Partial<WilderData>): void {
      if (!this.draftWilder) return
      
      if (this.isPartialWilderData(data)) {
        const currentData = this.draftWilder.serialize()
        const mergedData = { ...currentData, ...data } as WilderData
        this.draftWilder.Update(mergedData)
      } else {
        this.draftWilder.Update(data)
      }
    },

    isPartialWilderData(data: WilderData | Partial<WilderData>): data is Partial<WilderData> {
      return (data as WilderData).id === undefined
    }
  },
 
  persist: true
})

export function useWilders() {
  const store = useWilderStore()
 
  return {
    // State - computed for reactivity
    wilders: computed(() => store.savedWilders),
    selectedWilder: computed(() => store.selectedWilder),
    draftWilder: computed(() => store.draftWilder),
   
    // Actions
    setWilders: (wilders: Wilder[]) => store.setWilders(wilders),
    selectWilder: (wilderId: string) => store.selectWilder(wilderId),
    deleteWilder: () => store.deleteSelectedWilder(),
    initializeNewWilder: () => store.initializeNewWilder(),
    saveDraft: () => store.saveDraft(),
    loadWilder: (id: string) => store.loadWilder(id),
    updateWilderData: (data: WilderData | Partial<WilderData>) => store.updateWilderData(data)
  }
}