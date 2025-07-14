import type { BackgroundMeal } from "@/class"

export class threeCourseBackgroundData {
  upbringing: BackgroundMeal
  initiation: BackgroundMeal
  ambition: BackgroundMeal

  constructor({
    upbringing,
    initiation,
    ambition,
  }: {
    upbringing: BackgroundMeal
    initiation: BackgroundMeal
    ambition: BackgroundMeal
  }) {
    this.upbringing = upbringing
    this.initiation = initiation
    this.ambition = ambition
  }
}