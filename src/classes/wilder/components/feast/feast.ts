import { Meal } from "@/class"
import type { Bonus } from "@/interfaces"

export class Feast extends Meal {
  monsterId: string

  constructor(data: { monsterId: string; bonus: Bonus }) {
    super(data.bonus)
    this.monsterId = data.monsterId
  }
}