import type { iRankData } from "@/interfaces"
import { ThreeCourseBackground } from "./backgrounds/threeCourseBackground"
import { BackgroundMeal } from "./backgrounds/backgroundMeal"

export class WilderData { 
  public id: string; 
  public createdAt: number;

  constructor(
    public name: string = "",
    public pronouns: string = "",
    public tool: string = "",
    public styles: [number, number, number, number] = [0, 0, 0, 0],
    public specialty: string = "",
    public traits: iRankData[] = [],
    public skills: iRankData[] = [],
    public stamina: number = 0,
    public maxStamina: number = 0,
    public durability: number = 0,
    public maxDurability: number = 0,
    public dead: boolean = false,
    public conditions: iRankData[] = [],
    public background: ThreeCourseBackground = new ThreeCourseBackground(
      new BackgroundMeal("", "", ""),
      new BackgroundMeal("", "", ""),
      new BackgroundMeal("", "", "")
    ),
    public staple: string = "",
    public spice: string = "",
    public monsterouscAquaintance: string = "",
    public areAndStruggleToBe: [string, string] = ["", ""],
    public compleated: boolean = false,
  ) {
    this.id = `wilder-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    this.createdAt = Date.now();
  }
}  