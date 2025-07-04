import type { nameAndDescription } from "@/interfaces";
import type { traitData } from "@/class";

export class specialtyData {
  id: string;
  name: string;
  description: string;
  example_monsters: string[];
  traits: string[];
  important_monsters: nameAndDescription[];

  constructor(data: any, allTraits: traitData[]) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.example_monsters = data.example_monsters;

    
    this.traits = data.traits.filter((traitId: string) => {
      const trait = allTraits.find(t => t.id === traitId && t.level === 1);
      return trait !== undefined;
    });

    this.important_monsters = data.important_monsters;
  }
}
