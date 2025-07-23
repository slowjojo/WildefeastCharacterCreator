import type { Wilder } from "../../Wilder"
import type { WilderSpecialty } from "@/interfaces"


export class SpecialtyController {
  private readonly parent: Wilder
  private _specialty: WilderSpecialty | null

  constructor(parent: Wilder) {
    this.parent = parent
    this._specialty = null
  }

  public Hydrate(data: WilderSpecialty | null): void {
    if (data) {
      this._specialty = {
        id: data.id,
        firstTrait: data.firstTrait,
        secondTrait: data.secondTrait,
        monstrousAcquaintance: data.monstrousAcquaintance
      }
    } else {
      this._specialty = null
    }
  }

  public setSpecialty(specialtyId: string): void {
    this._specialty = {
      id: specialtyId,
      firstTrait: undefined,
      secondTrait: undefined,
      monstrousAcquaintance: undefined
    }
  }

  public setFirstTrait(traitId: string): void {
    if (this._specialty)
    this._specialty.firstTrait = traitId
  }

   public setSecondTrait(traitId: string): void {
    if (this._specialty)
    this._specialty.secondTrait = traitId
  }
public setMonstrousAcquaintance(name: string, description: string, id?: string): void {
  if (!this._specialty) return

  if (!this._specialty.monstrousAcquaintance) {
    this._specialty.monstrousAcquaintance = { name: '', description: '', monsterId: '' }
  }

  this._specialty.monstrousAcquaintance.name = name
  this._specialty.monstrousAcquaintance.description = description
  if (id) {
    this._specialty.monstrousAcquaintance.monsterId = id
  }
}

  public static Hydrate(parent: Wilder, data: WilderSpecialty | null): void {
    if (!parent.SpecialtyController) {
      throw new Error("SpecialtyController not found on parent")
    }
    parent.SpecialtyController.Hydrate(data)
  }

  public get specialty(): WilderSpecialty | null {
    return this._specialty
  }

}