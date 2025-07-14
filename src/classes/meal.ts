import type { Bonus } from "@/interfaces"

export class Meal {
  bonus: Bonus

  constructor(bonus: Bonus) {
    this.bonus = bonus
  }

  getBonus(): Bonus {
    return this.bonus
  }
}


