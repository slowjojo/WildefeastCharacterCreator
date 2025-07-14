import type { iRankData, styleSpread, wilderSpecialty } from "@/interfaces"
import { threeCourseBackgroundData } from "@/class"
  import { ToolController } from "./components/tool/toolController"

const BaseStyles: styleSpread = { mighty: 1, precise: 1, swift: 1, tricky: 1 };

export class WilderData {
  id: string;
  name: string;
  pronouns: string;
  tool: string;
  styles: styleSpread;
  techniques: string[];
  specialty: wilderSpecialty | null;
  background: threeCourseBackgroundData | null;
  traits: iRankData[];
  skills: iRankData[];
  stamina: number;
  maxStamina: number;
  durability: number;
  maxDurability: number;
  dead: boolean;
  conditions: iRankData[];
  staple: string;
  spice: string;
  monsterouscAquaintance: string;
  areAndStruggle: [string, string];
  completed: boolean;
  createdAt: number;

  toolController: ToolController;

  constructor() {
    this.id = `wilder-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    this.name = "";
    this.pronouns = "";
    this.tool = "";
    this.styles = { ...BaseStyles };
    this.techniques = [];
    this.specialty = null;
    this.background = null;
    this.traits = [];
    this.skills = [
      { id: "assurance", rank: 0 },
      { id: "call", rank: 0 },
      { id: "craft", rank: 0 },
      { id: "cure", rank: 0 },
      { id: "display", rank: 0 },
      { id: "grab", rank: 0 },
      { id: "hoard", rank: 0 },
      { id: "search", rank: 0 },
      { id: "shot", rank: 0 },
      { id: "strike", rank: 0 },
      { id: "study", rank: 0 },
      { id: "traversal", rank: 0 },
    ];
    this.stamina = 0;
    this.maxStamina = 0;
    this.durability = 0;
    this.maxDurability = 0;
    this.dead = false;
    this.conditions = [];
    this.staple = "";
    this.spice = "";
    this.monsterouscAquaintance = "";
    this.areAndStruggle = ["", ""];
    this.completed = false;
    this.createdAt = Date.now();

    this.toolController = new ToolController(this);
  }

toJSON() {
  return {
    id: this.id,
    name: this.name,
    pronouns: this.pronouns,
    tool: this.tool,
    styles: { ...this.styles },
    techniques: [...this.techniques],
    specialty: this.specialty,
    background: {
      upbringing: { ...this.background.upbringing },
      initiation: { ...this.background.initiation },
      ambition: { ...this.background.ambition },
    },
    traits: this.traits.map(t => ({ ...t })),
    skills: this.skills.map(s => ({ ...s })), 
    stamina: this.stamina,
    maxStamina: this.maxStamina,
    durability: this.durability,
    maxDurability: this.maxDurability,
    dead: this.dead,
    conditions: this.conditions.map(c => ({ ...c })), 
    staple: this.staple,
    spice: this.spice,
    monsterouscAquaintance: this.monsterouscAquaintance,
    areAndStruggle: [...this.areAndStruggle],
    completed: this.completed,
    createdAt: this.createdAt,
  };
}

  static fromJSON(data: Partial<WilderData>): WilderData {
  const w = new WilderData();

  w.id = data.id ?? w.id;
  w.name = data.name ?? "";
  w.pronouns = data.pronouns ?? "";
  w.tool = data.tool ?? "";
  w.styles = data.styles ?? { ...BaseStyles };
  w.techniques = data.techniques ?? [];
  w.specialty = data.specialty ?? null;
  w.traits = data.traits ?? [];
  w.skills = data.skills ?? [];
  w.stamina = data.stamina ?? 0;
  w.maxStamina = data.maxStamina ?? 0;
  w.durability = data.durability ?? 0;
  w.maxDurability = data.maxDurability ?? 0;
  w.dead = data.dead ?? false;
  w.conditions = data.conditions ?? [];
  w.staple = data.staple ?? "";
  w.spice = data.spice ?? "";
  w.monsterouscAquaintance = data.monsterouscAquaintance ?? "";
  w.areAndStruggle = data.areAndStruggle ?? ["", ""];
  w.completed = data.completed ?? false;
  w.createdAt = data.createdAt ?? Date.now();

 if (data.background) {
  w.background = new threeCourseBackgroundData({
    upbringing: data.background.upbringing ?? { number: 0, description: "", bonus: "" },
    initiation: data.background.initiation ?? { number: 0, description: "", bonus: "" },
    ambition: data.background.ambition ?? { number: 0, description: "", bonus: "" },
  });
}
  return w;
}

}
//-- Helper Functions ----------------------------------------------------------------------------------

/**

applyStartingStyles(startingStyles: styleSpread): void {
  this.styles = { ...startingStyles };
}

applyAreAndStruggle(are: string, struggle: string): void {
  this.areAndStruggle = [are, struggle];
}

applySpecialty(specialty: specialtyData): void {
  this.specialty = specialty.id
}


removeTechnique(technique: techniqueData): void {
  this.techniques = this.techniques.filter(id => id !== technique.id);
}

addTrait(trait: traitData): void {
  const baseId = trait.id.split('_')[0]; // e.g., "digging" from "digging_2"
  const newLevel = trait.level;

  const existingIndex = this.traits.findIndex(t => t.id.startsWith(baseId + '_'));

  if (existingIndex !== -1) {
    const existingTrait = this.traits[existingIndex];
    const existingLevel = parseInt(existingTrait.id.split('_')[1]) || 1;

    if (newLevel > existingLevel) {
  
      this.traits[existingIndex] = { id: trait.id, rank: 1 };
    }
    
  } else {
  
    this.traits.push({ id: trait.id, rank: 1 });
  }
}
}

*/
