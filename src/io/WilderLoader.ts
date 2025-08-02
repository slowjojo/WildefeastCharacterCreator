// src/io/WilderLoader.ts
import { Wilder, WilderData } from '@/class'
import localforage from 'localforage'

export class WilderLoader {
  static async loadSavedWilders(): Promise<Wilder[]> {
    try {
      const loaded: Wilder[] = []
     
      await localforage.iterate((value, key) => {
        if (key.startsWith('wilder-')) {
          const wilder = new Wilder()
          wilder.Update(value as WilderData)
          loaded.push(wilder)
        }
      })
     
      return loaded
    } catch (error) {
      console.error('Failed to load wilders:', error)
      throw new Error('Could not load saved wilders')
    }
  }

  // Could add other storage operations here if needed
  static async clearAllData(): Promise<void> {
    try {
      const keysToDelete: string[] = []
      await localforage.iterate((_value, key) => {
        if (key.startsWith('wilder-')) {
          keysToDelete.push(key)
        }
      })
      
      await Promise.all(keysToDelete.map(key => localforage.removeItem(key)))
    } catch (error) {
      console.error('Failed to clear wilder data:', error)
      throw new Error('Could not clear wilder data')
    }
  }

  static async exportData(): Promise<WilderData[]> {
    try {
      const exportData: WilderData[] = []
      
      await localforage.iterate((value, key) => {
        if (key.startsWith('wilder-')) {
          exportData.push(value as WilderData)
        }
      })
      
      return exportData
    } catch (error) {
      console.error('Failed to export wilder data:', error)
      throw new Error('Could not export wilder data')
    }
  }
}