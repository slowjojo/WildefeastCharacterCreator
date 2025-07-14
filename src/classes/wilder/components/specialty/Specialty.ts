import type { nameAndDescription } from "@/interfaces";

export class specialtyData {
  id: string;
  name: string;
  description: string;
  example_monsters: string[];
  traits: string[];
  important_monsters: nameAndDescription[];

  constructor(data: any ) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.example_monsters = data.example_monsters;
    this.traits = data.traits;
    this.important_monsters = data.important_monsters
  }
}

