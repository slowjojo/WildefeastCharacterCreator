// controllers/ToolController.ts
import { ref, type Ref } from 'vue';
import type { StyleSpread, WilderTool } from "@/interfaces";
import type { Wilder } from "../../Wilder";
import { Style } from "@/classes/enums";
import { useTools } from '@/stores/useTools';

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
    primaryStyle: undefined,
    beginnerTechnique: undefined,
    are: undefined,
    struggle: undefined
  }
}

  // Store only the primary style choice (the one that becomes 3)
  public setPrimaryStyle(primaryStyle: Style): void {
    if (this._tool.value) {
      this._tool.value = { 
        ...this._tool.value, 
        primaryStyle 
      }
    }
  }

  // Derive the full style spread from tool + primary style choice
  public getStyleSpread(): StyleSpread | null {
    if (!this._tool.value?.id || !this._tool.value?.primaryStyle) return null
    
    // Import this method from your store to get the tool's main styles
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

  // Backward compatibility - remove this method since we store primary style now
  public setStyles(): void {
    // This method is no longer needed since we derive styles
    console.warn('setStyles is deprecated, use setPrimaryStyle instead')
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

  // Expose reactive version for Vue components
  public get reactiveTool(): Ref<WilderTool | null> {
    return this._tool
  }

  // Computed property for current style spread
  public get currentStyleSpread(): StyleSpread | null {
    return this.getStyleSpread()
  }
}