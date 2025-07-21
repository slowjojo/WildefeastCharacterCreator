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
        name: data.name,
        firstTrait: data.firstTrait,
        secondTrait: data.secondTrait,
        monsterousAquaintance: data.monsterousAquaintance
      }
    } else {
      this._specialty = null
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