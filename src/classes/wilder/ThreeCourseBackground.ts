export interface backgroundMeal{
  number: number;
  description: string;
  skillId: string;
}

export class threeCourseBackgrounds {
    upbringings: backgroundMeal[];
    initiations: backgroundMeal[];
    ambitions: backgroundMeal[];

    constructor(data: {
        upbringings:  backgroundMeal[];
        initiations:  backgroundMeal[];
        ambitions:  backgroundMeal[];
    }) {
        this.upbringings = data.upbringings;
        this.initiations = data.initiations;
        this.ambitions = data.ambitions;
    }
}

export class threeCourseBackgroundData {
  upbringing: backgroundMeal;
  initiation: backgroundMeal;
  ambition: backgroundMeal;

  constructor({
    upbringing,
    initiation,
    ambition,
  }: {
    upbringing: backgroundMeal;
    initiation: backgroundMeal;
    ambition: backgroundMeal;
  }) {
    this.upbringing = upbringing;
    this.initiation = initiation;
    this.ambition = ambition;
  }

}