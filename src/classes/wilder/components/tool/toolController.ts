// controllers/ToolController.ts
import { ref, type Ref } from 'vue';
import type { StyleSpread, WilderTool } from "@/interfaces";
import type { Wilder } from "../../Wilder";
import { Style } from "@/classes/enums";
import { useTools } from '@/stores/useTools';

export class ToolController {
   public readonly parent: Wilder
  private _tool: Ref<WilderTool> = ref({
    id: "",
    primaryStyle: null,
    beginnerTechnique: "",
    are: "",
    struggle: ""
  })

  constructor(parent: Wilder) {
    this.parent = parent
  }

  public Hydrate(data: WilderTool | null): void {
    this._tool.value = data || {
      id: "",
      primaryStyle: null,
      beginnerTechnique: "",
      are: "",
      struggle: ""
    }
  }
  
  public setTool(toolId: string): void {
    this._tool.value = {
      id: toolId,
      primaryStyle: null,
      beginnerTechnique: "",
      are: "",
      struggle: ""
    }
  }
  
  public get tool(): WilderTool {
    return this._tool.value
  }

  public setPrimaryStyle(primaryStyle: Style): void {
    this._tool.value = {
      ...this._tool.value,
      primaryStyle
    }
  }

  public get primaryStyle(): Style | null {
    return this._tool.value.primaryStyle
  }

  public setBeginnerTechnique(techniqueId: string): void {
    this._tool.value = {
      ...this._tool.value,
      beginnerTechnique: techniqueId
    }
  }

  public get beginnerTechnique(): string {
    return this._tool.value.beginnerTechnique
  }

  public setAreAndStruggle(are: string, struggle: string): void {
    this._tool.value = {
      ...this._tool.value,
      are,
      struggle
    }
  }

  public get are(): string {
    return this._tool.value.are
  }

  public get struggle(): string {
    return this._tool.value.struggle
  }

  public get toolId(): string {
    return this._tool.value.id
  }

  // COMPLETION STATE GETTERS
  public get hasToolSelected(): boolean {
    return !!this._tool.value.id
  }

  public get hasStyleSelected(): boolean {
    return this._tool.value.primaryStyle !== null
  }

  public get hasTechniqueSelected(): boolean {
    return !!this._tool.value.beginnerTechnique
  }

  public get hasAreAndStruggleSelected(): boolean {
    return !!(this._tool.value.are && this._tool.value.struggle)
  }

  public get isComplete(): boolean {
    return this.hasToolSelected && 
           this.hasStyleSelected && 
           this.hasTechniqueSelected && 
           this.hasAreAndStruggleSelected
  }

  // DERIVED DATA GETTERS
  public get currentStyleSpread(): StyleSpread | null {
    if (!this._tool.value.id || !this._tool.value.primaryStyle) return null
   
    const { getMainStylesById } = useTools()
    const mainStyles = getMainStylesById(this._tool.value.id)
   
    if (!mainStyles || mainStyles.length !== 2) return null
   
    const primary = this._tool.value.primaryStyle
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
    const { getBeginnerTechniquesByTool } = require('@/stores/useTechniques') // You'd need to create this
    return getBeginnerTechniquesByTool(this.toolId)
  }

  public resetAll(): void {
    this._tool.value = {
      id: "",
      primaryStyle: null,
      beginnerTechnique: "",
      are: "",
      struggle: ""
    }
  }
}