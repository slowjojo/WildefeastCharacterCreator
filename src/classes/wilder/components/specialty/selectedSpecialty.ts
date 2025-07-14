import type { monsterousAquaintance } from "@/interfaces";

export class SelectedSpecialtyData {
  specialtyId: string;
  firstTrait: string;
  secondTrait: string;
  monsterousAquaintance: monsterousAquaintance;

  constructor(data?: Partial<SelectedSpecialtyData>) {
    this.specialtyId = data?.specialtyId ?? "";
    this.firstTrait = data?.firstTrait ?? "";
    this.secondTrait = data?.secondTrait ?? "";
    this.monsterousAquaintance = data?.monsterousAquaintance ?? {
      id: "",
      name: "",
      description: "",
    };
  }

}
// add toJSON and from json