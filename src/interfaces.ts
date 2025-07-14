    export interface iRankData{
        id: string
        rank: number
    }

    export interface nameAndDescription{
        id: string
        name: string
        description: string
    }
    
    export interface styleSpread{
        mighty: number
        precise: number
        swift: number
        tricky:number
    }
    export interface wilderSpecialty{
        name: string
        firstTrait: string
        secondTrait: string
        importantMonster: nameAndDescription 
    }
    export type Bonus = SkillBonus | StyleBonus | TraitBonus;

    export interface SkillBonus {
        type: 'skill';
        id: string;
    }

    export interface StyleBonus {
        type: 'style';
        id: 'mighty' | 'precise' | 'swift' | 'tricky';
    }

    export interface TraitBonus {
        type: 'trait';
        id: string;
}
