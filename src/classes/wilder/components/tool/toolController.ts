import type { StyleSpread, WilderTool } from "@/interfaces"
import type { Wilder } from "../../Wilder"
import { Style } from "@/classes/enums"

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
        baseStyles: data.baseStyles,
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
        baseStyles: undefined,
        beginnerTechnique: undefined,
        are: undefined,
        struggle: undefined
    }
  }

    public getStyleSpread(primary: Style, secondary: Style): StyleSpread {
    const spread: StyleSpread = {
      [Style.Mighty]: 1,
      [Style.Precise]: 1,
      [Style.Swift]: 1,
      [Style.Tricky]: 1
    }

    spread[primary] = 3
    spread[secondary] = 2

    return spread
  }
    

public setStyles(baseStyles: StyleSpread): void {
  if (this._tool) {
    this._tool.baseStyles = baseStyles
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
