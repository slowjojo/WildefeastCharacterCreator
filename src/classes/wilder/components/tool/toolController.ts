// controllers/ToolController.ts
import { ref, type Ref } from 'vue';
import type { StyleSpread, WilderTool } from "@/interfaces";
import type { Wilder } from "../../Wilder";
import { Style } from "@/classes/enums";

export class ToolController {
  public readonly parent: Wilder
  private _tool: Ref<WilderTool | null> = ref(null) 

  constructor(parent: Wilder) {
    this.parent = parent
  }

  public Hydrate(data: WilderTool | null): void {
    this._tool.value = data ? { ...data } : null
  }

  public setTool(toolId: string): void {
    this._tool.value = {
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
    if (this._tool.value) {
      this._tool.value = { 
        ...this._tool.value, 
        baseStyles 
      }
    }
  }

  public setBeginnerTechnique(techniqueId: string): void {
    if (this._tool.value) {
      this._tool.value = { 
        ...this._tool.value, 
        beginnerTechnique: techniqueId 
      }
    }
  }

  public setAreAndStruggle(are: string, struggle: string): void {
    if (this._tool.value) {
      this._tool.value = { 
        ...this._tool.value, 
        are, 
        struggle 
      }
    }
  }

  // Getter returns the reactive value
  public get tool(): WilderTool | null {
    return this._tool.value
  }

  // New: Expose reactive version for Vue components
  public get reactiveTool(): Ref<WilderTool | null> {
    return this._tool
  }
}