import { ToolData } from '@/classes/wilder/components/tool/Tool'
import toolsJson from '@/assets/data/tools.json'
import { type Ref, ref } from 'vue';
import { Style } from '@/classes/enums';
import type { StyleSpread } from '@/interfaces';

const tools: ToolData[] = toolsJson.map(data => new ToolData(data));
const selectedTool: Ref<ToolData | null> = ref(null);

function getToolById(id: string): ToolData | undefined {
  return tools.find(tool => tool.id === id);
}

function getMainStylesById(id:string): Style[] | undefined {
  const tool = getToolById(id);
  return tool?.main_styles ?? []
}

function getBaseStyles(primary: Style, secondary: Style): StyleSpread {
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

export function useTools() {
    return {
    tools,
    selectedTool,
    getToolById,
    getMainStylesById,
    getBaseStyles
    };
}