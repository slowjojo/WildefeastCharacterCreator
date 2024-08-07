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
        id: tool.name,
        baseStyles: this.mapBaseStyles(tool.baseStyles) // Use the mapping function
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

  // The mapping function included within the class
  private mapBaseStyles(baseStyles: string[]): string[] {
    const styleMapping: { [key: string]: string } = {
      "1": "1", // Just using the number as-is for points
      "2": "2",
      "3": "3",
      "4": "4"
    };

    return baseStyles.map(style => {
      // Split the style string into individual numbers
      const pointsDistribution = style.split('').map(num => styleMapping[num] || '0');

      // Map the points to the respective styles
      return [
        `${pointsDistribution[0] || '0'} Mighty`,
        `${pointsDistribution[1] || '0'} Precise`,
        `${pointsDistribution[2] || '0'} Swift`,
        `${pointsDistribution[3] || '0'} Tricky`
      ].filter(part => !part.startsWith('0')).join(' ');
    });
  }
}

export default CharacterOptionsLoader;
