import { meal } from "@/class"
import type { Bonus } from "@/interfaces"

export class feast extends meal {
  monsterId: string

  constructor(data: { monsterId: string; bonus: Bonus }) {
    super(data.bonus)
    this.monsterId = data.monsterId
  }
}