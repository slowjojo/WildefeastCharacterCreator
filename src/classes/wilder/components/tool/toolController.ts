import type { WilderData, toolData } from '@/class'

export class ToolController {
  private wilder: WilderData


  constructor(wilder: WilderData) {
    this.wilder = wilder

  }

  
  applyTool(toolId: string): void {
    this.wilder.tool = toolId
  }
}
