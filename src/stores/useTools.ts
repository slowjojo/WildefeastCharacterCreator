// stores/useTools.ts
import { defineStore } from 'pinia'
import { ToolData } from '@/classes/wilder/components/tool/Tool'
import { Style } from '@/classes/enums'
import type { StyleSpread } from '@/interfaces'
import { computed } from 'vue'

const useToolsStore = defineStore('tools', {
  state: () => ({
    tools: [] as ToolData[],
    selectedTool: null as ToolData | null,
  }),

  actions: {
   setTools(tools: ToolData[]) {
      this.tools = tools
    },

    getToolById(id: string): ToolData | undefined {
      return this.tools.find(tool => tool.id === id)
    },

    getMainStylesById(id: string): Style[] | undefined {
      const tool = this.getToolById(id)
      return tool?.main_styles ?? []
    },

    getBaseStyles(primary: Style, secondary: Style): StyleSpread {
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
  }
})

export function useTools() {
  const store = useToolsStore()
  
  return {
    tools: computed(() => store.tools),
    selectedTool: computed(() => store.selectedTool),
    getToolById: (id: string) => store.getToolById(id),
    getMainStylesById: (id: string) => store.getMainStylesById(id),
    getBaseStyles: (primary: Style, secondary: Style) => store.getBaseStyles(primary, secondary),
    setTools: (tools: ToolData[]) => store.setTools(tools)
  }
}