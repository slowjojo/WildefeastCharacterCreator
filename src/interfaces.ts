import type { Style } from "./classes/enums";

export interface IRankData{
    name: string;
    rank: number;
}


export interface WilderTool {
    id: string;

    primaryStyle?: Style;
    beginnerTechnique?: string;
    are?: string;
    struggle?: string;
}

export type StyleSpread = Record<Style, number>

export interface WilderSpecialty{
    id: string;
    firstTrait?: string;
    secondTrait?: string;
    monstrousAcquaintance?: monstrousAcquaintance;
}

export interface monstrousAcquaintance{
    name:string;   
    description: string;
    monsterId?: string;
}

export interface WilderBackground{
    upbringing: BackgroundMeal;
    initiation: BackgroundMeal;
    ambition: BackgroundMeal;
}

export interface BackgroundMeal extends Meal{
    description: string;
}

export interface Bonus{
    type: "trait" | "skill" | "style";
    targetId: string;
}

export interface Meal{
    bonus: Bonus;
}

export interface Feast extends Meal{
    monsterId: string;
}

