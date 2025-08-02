// src/io/Startup.ts
import { useWilders } from "@/stores/useWilders"
import { useDraftWilderStore } from "@/stores/useDraftWilder"

export async function startupApp() {
  try {
    // Load existing wilders
    const wildersStore = useWilders()
    await wildersStore.loadWilders()
    
    // Ensure draft store is initialized (it should already be, but this is safe)
    const draftStore = useDraftWilderStore()
    if (!draftStore.draftWilder) {
      console.log('Initializing draft wilder...')
      draftStore.resetDraft() // This creates a new Wilder()
    }
    
    console.log('Startup completed successfully')
  } catch (error) {
    console.error('Startup failed:', error)
    throw error
  }
}