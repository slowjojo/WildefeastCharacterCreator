// src/io/Startup.ts
import { useWilders } from "@/stores/useWilders"
import { useDraftWilderStore } from "@/stores/useDraftWilder"
import { useTools } from "@/stores/useTools"
import { DataLoader } from "./DataLoader"
import { WilderLoader } from "./WilderLoader"

export async function startupApp() {
  try {
    // Load JSON data
    const toolsStore = useTools()
    const tools = await DataLoader.loadTools()
    toolsStore.setTools(tools)
    
    // Load stored wilders
    const wildersStore = useWilders()
    const wilders = await WilderLoader.loadSavedWilders()
    wildersStore.setWilders(wilders)
   
    // Initialize draft wilder
    const draftStore = useDraftWilderStore()
    if (!draftStore.draftWilder) {
      draftStore.resetDraft()
    }
   
    console.log('Startup completed successfully')
  } catch (error) {
    console.error('Startup failed:', error)
    throw error
  }
}