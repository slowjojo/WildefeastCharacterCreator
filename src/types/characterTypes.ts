// src/types/characterTypes.ts

export interface Tool {
    name: string;
    baseStyles: string[]; // baseStyles is an array of strings
    baseTechnique: string;
    beginnerTechniques: string[];
    intermediateTechniques: string[];
    advancedTechniques: string[];
    flavorText: string
}
export type Style = 'mighty' | 'precise' | 'swift' | 'tricky';

export interface StyleSpread {
    [style: string]: number; // Maps style name to its value
}
export interface Specialty {
    name: string;
    traits: string[];
    importantMonster: string[]
}

export interface Trait {
    name: string;
    default?: boolean;
    cost: string;
    text: string
}