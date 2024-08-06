// src/services/characterOptionsLoader.ts
import { Tool, Specialty, Trait } from '../types/characterTypes';
import { fetchTools, fetchSpecialties, fetchTraits, fetchFlavourTexts } from './dataparser';

class CharacterOptionsLoader {
  private tools: Tool[] = [];
  private specialties: Specialty[] = [];
  private traits: Trait[] = [];
  private flavourTexts: { [key: string]: string } = {};

  async loadTools(): Promise<void> {
    try {
      const data = await fetchTools();
      this.tools = data.tools.map(tool => ({
        ...tool,
        id: tool.name  // Using name as ID
      }));
      console.log('Tools loaded:', this.tools);
    } catch (error) {
      console.error('Error fetching tools:', error);
    }
  }

  async loadSpecialties(): Promise<void> {
    try {
      const data = await fetchSpecialties();
      this.specialties = data.specialties.map(specialty => ({
        ...specialty
      }));
      console.log('Specialties loaded:', this.specialties);
    } catch (error) {
      console.error('Error fetching specialties:', error);
    }
  }

  async loadTraits(): Promise<void> {
    try {
      const data = await fetchTraits();
      this.traits = data.traits.map(trait => ({
        ...trait
      }));
      console.log('Traits loaded:', this.traits);
    } catch (error) {
      console.error('Error fetching traits:', error);
    }
  }

  async loadFlavourTexts(): Promise<void> {
    try {
      this.flavourTexts = await fetchFlavourTexts();
      console.log('Flavour texts loaded:', this.flavourTexts);
    } catch (error) {
      console.error('Error fetching flavor texts:', error);
    }
  }

  getTools(): Tool[] {
    return this.tools;
  }

  getSpecialties(): Specialty[] {
    return this.specialties;
  }

  getTraits(): Trait[] {
    return this.traits;
  }

  getFlavorTextForTool(toolName: string): string {
    return this.flavourTexts[toolName] || 'No flavor text available.';
  }
}

export default CharacterOptionsLoader;
