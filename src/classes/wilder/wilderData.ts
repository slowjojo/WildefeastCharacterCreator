import type { Feast, IRankData, WilderBackground, WilderSpecialty, WilderTool } from "@/interfaces";

export class WilderData {
  id: string;
  name: string;
  player: string;
  
  dead: boolean;
  conditions: IRankData [];

  tool: WilderTool | null;
  specialty: WilderSpecialty | null;
  background: WilderBackground| null;

  trainedTechniques: IRankData[];

  feasts?: Feast[];

  constructor() {
    this.id = "";
    this.name = ""
    this.player = ""

    this.dead = false
    this.conditions = []

    this.tool = null
    this.specialty = null
    this.background = null

    this.trainedTechniques = []

    this.feasts = []
  }



}

