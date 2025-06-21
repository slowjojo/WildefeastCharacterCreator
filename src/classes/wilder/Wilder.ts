import type { iRankData } from "@/interfaces"

export class WilderData {
  id: string;
  name: string;
  pronouns: string;
  tool: string;
  styles: [number, number, number, number];
  specialty: string;
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
  areAndStruggleToBe: [string, string];
  completed: boolean;
  createdAt: number;

  constructor() {
    this.id = `wilder-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    this.name = "";
    this.pronouns = "";
    this.tool = "";
    this.styles = [0, 0, 0, 0];
    this.specialty = "";
    this.traits = [];
    this.skills = [];
    this.stamina = 0;
    this.maxStamina = 0;
    this.durability = 0;
    this.maxDurability = 0;
    this.dead = false;
    this.conditions = [];
    this.staple = "";
    this.spice = "";
    this.monsterouscAquaintance = "";
    this.areAndStruggleToBe = ["", ""];
    this.completed = false;
    this.createdAt = Date.now();
  }
   static Deserialize(obj: Partial<WilderData>): WilderData {
    const data = new WilderData();

    data.id = obj.id ?? data.id;
    data.name = obj.name ?? "";
    data.pronouns = obj.pronouns ?? "";
    data.tool = obj.tool ?? "";
    data.styles = obj.styles ?? [0, 0, 0, 0];
    data.specialty = obj.specialty ?? "";
    data.traits = obj.traits ?? [];
    data.skills = obj.skills ?? [];
    data.stamina = obj.stamina ?? 0;
    data.maxStamina = obj.maxStamina ?? 0;
    data.durability = obj.durability ?? 0;
    data.maxDurability = obj.maxDurability ?? 0;
    data.dead = obj.dead ?? false;
    data.conditions = obj.conditions ?? [];
    data.staple = obj.staple ?? "";
    data.spice = obj.spice ?? "";
    data.monsterouscAquaintance = obj.monsterouscAquaintance ?? "";
    data.areAndStruggleToBe = obj.areAndStruggleToBe ?? ["", ""];
    data.completed = obj.completed ?? false;
    data.createdAt = obj.createdAt ?? data.createdAt;

    return data;
  }

  Serialize(): object {
    return {
      id: this.id,
      name: this.name,
      pronouns: this.pronouns,
      tool: this.tool,
      styles: this.styles,
      specialty: this.specialty,
      traits: this.traits,
      skills: this.skills,
      stamina: this.stamina,
      maxStamina: this.maxStamina,
      durability: this.durability,
      maxDurability: this.maxDurability,
      dead: this.dead,
      conditions: this.conditions,
      staple: this.staple,
      spice: this.spice,
      monsterouscAquaintance: this.monsterouscAquaintance,
      areAndStruggleToBe: this.areAndStruggleToBe,
      compleated: this.completed,
      createdAt: this.createdAt,
    };
  }
}
