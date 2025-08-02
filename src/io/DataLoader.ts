// src/io/DataLoader.ts
import { ToolData } from '@/classes/wilder/components/tool/Tool'
import toolsJson from '@/assets/data/tools.json'

export class DataLoader {
  static async loadTools(): Promise<ToolData[]> {
    try {
      return toolsJson.map(data => new ToolData(data))
    } catch (error) {
      console.error('Failed to load tools:', error)
      throw new Error('Could not load tools data')
    }
  }

  // Add other JSON data loaders here as needed
  // static async loadSpecialties(): Promise<SpecialtyData[]> { ... }
  // static async loadBackgrounds(): Promise<BackgroundData[]> { ... }
}