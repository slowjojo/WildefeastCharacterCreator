export interface IRankData{
    name: string;
    rank: number;
}

export interface WilderStyles{
    mighty: number;
    precise: number;
    swift: number;
    tricky: number;
}

export interface WilderTool {
    name: string;
    styles: WilderStyles;
    starterTechnique: string;
    beginnerTechnique: string;
    are: string;
    struggle: string;
}


export interface WilderSpecialty{
    name: string;
    firstTrait: string;
    secondTrait: string;
    monsterousAquaintance:MonsterousAcquaintance;
}

export interface MonsterousAcquaintance{
    name:string;
    monsterId: string;
    description: string;
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

