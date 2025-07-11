import type { techniqueData, WilderData } from "@/class"


export class SpecialtyController {
  private wilder: WilderData

  constructor(wilder: WilderData) {
    this.wilder = wilder
  }
  getTechniqueId(technique: techniqueData): string {
    return technique.id
  }

  applyStarterTechnique(techniqueId: string): void {
    this.wilder.techniques.push(techniqueId)
  }

  addTechnique(techniqueId: string): void {
    if (!this.wilder.techniques.includes(techniqueId)) {
      this.wilder.techniques.push(techniqueId)
    }
  }
}
