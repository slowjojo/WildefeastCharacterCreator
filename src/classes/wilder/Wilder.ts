import type { iRankData } from "@/interfaces"
import { ThreeCourseBackground } from "./backgrounds/threeCourseBackground"

class WilderData
{
    name: string
    pronouns: string
    tool: string
    styles: [number, number, number, number]
    specialty: string
    traits: iRankData[]
    skills: iRankData[]
    stamina: number
    maxStamina: number
    durability: number
    maxDurability: number
    get isBroken() {
        return this.durability <= 0
    }
    dead: boolean 
    conditions: iRankData[]
    background: threeCourseBackground
    staple: string
    spice: string
    monsterouscAquaintance: string
    areAndStruggleToBe: [string, string]


}