    import { defineStore } from 'pinia'
    import { WilderData } from '@/classes/wilder/Wilder'

    export const useWilderStore = defineStore('wilderCatalogue', {
      state: () => ({
        wilders: [] as WilderData[],
        selectedWilder: null as WilderData | null,
      }),

   actions: {
  addWilder(wilder: WilderData) {
    this.wilders.push(wilder)
    this.saveWildersToStorage()
  },

  loadWildersFromStorage() {
    const raw = localStorage.getItem('wilderfeast:wilders')
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        this.wilders = parsed.map((obj: any) => WilderData.Deserialize(obj))
      } catch (e) {
        console.error('Failed to load wilders:', e)
      }
    }
  },

  removeWilder(id: string) {
    this.wilders = this.wilders.filter(w => w.id !== id)
    this.saveWildersToStorage()
  },

  saveWildersToStorage() {
    const serialized = this.wilders.map(w => w.Serialize())
    localStorage.setItem('wilderfeast:wilders', JSON.stringify(serialized))
  }
}
    })
