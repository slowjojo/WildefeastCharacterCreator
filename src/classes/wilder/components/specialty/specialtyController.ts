import type { WilderData } from "@/class"

export class SpecialtyController {
  private wilder: WilderData

  constructor(wilder: WilderData) {
    this.wilder = wilder
  }

  applySpecialty(specialtyId: string ): void {
  this.wilder.specialty = specialtyId
}

}