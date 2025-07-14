import { Meal } from "@/class"
import type { Bonus } from "@/interfaces"

export class BackgroundMeal extends Meal {
  number: number
  description: string

  constructor(data: { number: number; description: string; bonus: Bonus }) {
    super(data.bonus)
    this.number = data.number
    this.description = data.description
  }
}
