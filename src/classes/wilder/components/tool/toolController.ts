import type { WilderStyles, WilderTool } from "@/interfaces"
import type { Wilder } from "../../Wilder"

export class ToolController {
  public readonly parent: Wilder
  private _tool: WilderTool | null

  constructor(parent: Wilder) {
    this.parent = parent
    this._tool = null
  }

  public Hydrate(data: WilderTool | null): void {
    if (data) {
      this._tool = {
        id: data.id,
        selectedStyles: data.selectedStyles,
        beginnerTechnique: data.beginnerTechnique,
        are: data.are,
        struggle: data.struggle
      }
    } else {
      this._tool = null
    }
  }

    public setTool(toolId: string): void {
        this._tool = {
        id: toolId,
        selectedStyles: undefined,
        beginnerTechnique: undefined,
        are: undefined,
        struggle: undefined
    }
  }

    public setStyles(style: WilderStyles): void {
        if (this._tool) {
        this._tool.selectedStyles = style
 }
}

    public setBeginnerTechnique(techniqueId: string): void {
        if (this._tool) {
        this._tool.beginnerTechnique = techniqueId
  }
}

   public setAreAndStruggle(are: string, struggle: string): void {
        if (this._tool) {
        this._tool.are = are
        this._tool.struggle = struggle
  }
}

  public get tool(): WilderTool | null {
    return this._tool
  }
}
