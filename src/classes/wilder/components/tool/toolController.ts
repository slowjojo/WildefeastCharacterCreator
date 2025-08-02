import type { StyleSpread, WilderTool } from "@/interfaces";
import type { Wilder } from "../../Wilder";
import { Style } from "@/classes/enums";
import { useTools } from '@/stores/useTools';

export class ToolController {
  public readonly parent: Wilder
  private _tool: WilderTool

  constructor(parent: Wilder) {
    this.parent = parent
    this._tool = {
      id: "",
      primaryStyle: null,
      beginnerTechnique: "",
      are: "",
      struggle: ""
    }
  }

  public Hydrate(data: WilderTool | null): void {
    this._tool = data || {
      id: "",
      primaryStyle: null,
      beginnerTechnique: "",
      are: "",
      struggle: ""
    }
  }
 
  public setTool(toolId: string): void {
    this._tool = {
      id: toolId,
      primaryStyle: null,
      beginnerTechnique: "",
      are: "",
      struggle: ""
    }
  }
 
  public get tool(): WilderTool {
    return this._tool
  }

  public setPrimaryStyle(primaryStyle: Style): void {
    this._tool = {
      ...this._tool,
      primaryStyle
    }
  }

  public get primaryStyle(): Style | null {
    return this._tool.primaryStyle
  }

  public setBeginnerTechnique(techniqueId: string): void {
    this._tool = {
      ...this._tool,
      beginnerTechnique: techniqueId
    }
  }

  public get beginnerTechnique(): string {
    return this._tool.beginnerTechnique
  }

  public setAreAndStruggle(are: string, struggle: string): void {
    this._tool = {
      ...this._tool,
      are,
      struggle
    }
  }

  public get are(): string {
    return this._tool.are
  }

  public get struggle(): string {
    return this._tool.struggle
  }

  public get toolId(): string {
    return this._tool.id
  }

  // COMPLETION STATE GETTERS - Fixed: removed .value references
  public get hasToolSelected(): boolean {
    return !!this._tool.id
  }

  public get hasStyleSelected(): boolean {
    return this._tool.primaryStyle !== null
  }

  public get hasTechniqueSelected(): boolean {
    return !!this._tool.beginnerTechnique
  }

  public get hasAreAndStruggleSelected(): boolean {
    return !!(this._tool.are && this._tool.struggle)
  }

  public get isComplete(): boolean {
    return this.hasToolSelected &&
           this.hasStyleSelected &&
           this.hasTechniqueSelected &&
           this.hasAreAndStruggleSelected
  }

  // DERIVED DATA GETTERS - Fixed: removed .value references
  public get currentStyleSpread(): StyleSpread | null {
    if (!this._tool.id || !this._tool.primaryStyle) return null
   
    const { getMainStylesById } = useTools()
    const mainStyles = getMainStylesById(this._tool.id)
   
    if (!mainStyles || mainStyles.length !== 2) return null
   
    const primary = this._tool.primaryStyle
    const secondary = mainStyles.find((style: Style) => style !== primary)!
   
    return this.getBaseStyleSpread(primary, secondary)
  }

  private getBaseStyleSpread(primary: Style, secondary: Style): StyleSpread {
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

  // TOOL DATA GETTERS (requires useTools store)
  public get toolData() {
    if (!this.toolId) return null
    const { getToolById } = useTools()
    return getToolById(this.toolId)
  }

  public get availableMainStyles(): Style[] {
    if (!this.toolId) return []
    const { getMainStylesById } = useTools()
    return getMainStylesById(this.toolId) ?? []
  }

  public get availableBeginnerTechniques() {
    if (!this.toolId) return []
    const { getBeginnerTechniquesByTool } = require('@/stores/useTechniques')
    return getBeginnerTechniquesByTool(this.toolId)
  }

  // Fixed: removed .value reference
  public resetAll(): void {
    this._tool = {
      id: "",
      primaryStyle: null,
      beginnerTechnique: "",
      are: "",
      struggle: ""
    }
  }
}