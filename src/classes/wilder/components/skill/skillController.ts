import type { IRankData } from "@/interfaces"
import type { Wilder } from "../../Wilder"

interface SkillsData{
  assurance:  number
  call:       number
  craft:      number
  cure:       number
  display:    number
  grab:       number
  hoard:      number
  search:     number
  shot:       number
  strike:     number
  study:      number
  traversal:  number
}

export class SkillsController {
    public readonly Parent: Wilder
    private _skills: SkillsData

    public constructor(parent: Wilder) {
        this.Parent = parent
        this._skills = []
    }
}