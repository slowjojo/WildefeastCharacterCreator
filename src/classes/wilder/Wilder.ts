import type { iRankData } from "@/interfaces"
import { ThreeCourseBackground } from "./backgrounds/threeCourseBackground"

export class WilderData {
constructor(
    public name: string,
    public pronouns: string,
    public tool: string,
    public styles: [number, number, number, number],
    public specialty: string,
    public traits: iRankData[],
    public skills: iRankData[],
    public stamina: number,
    public maxStamina: number,
    public durability: number,
    public maxDurability: number,
    public dead: boolean ,
    public conditions: iRankData[],
    public background: ThreeCourseBackground,
    public staple: string,
    public spice: string,
    public monsterouscAquaintance: string,
    public areAndStruggleToBe: [string, string]
) {}
}