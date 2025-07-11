import { specialtyData, type WilderData } from '@/class'
import { useSpecialties } from '@/stores/useSpecialties'

export class SpecialtyController {
    private wilder: WilderData
    private specialties: specialtyData[]

  constructor(wilder: WilderData) {
    this.wilder = wilder
    this.specialties = useSpecialties()specialties
  }
 getSpecialtyId(specialty: specialtyData): string {
    return specialty.id
 }
  getSpecialtyById(specialtyId: string): specialtyData | undefined {
    return this.specialties.find(s => s.id === specialtyId)
  }

  applySpecialty(specialtyId: string ): void {
  this.wilder.specialty = specialtyId
}

}