import { ToolData } from '@/classes/wilder/components/tool/Tool'
import toolsJson from '@/assets/data/tools.json'
import { type Ref, ref } from 'vue';

const tools: ToolData[] = toolsJson.map(data => new ToolData(data));
const selectedTool: Ref<ToolData | null> = ref(null);

function getToolById(id: string): ToolData | undefined {
  return tools.find(tool => tool.id === id);
}

export function useTools() {
    return {
    tools,
    selectedTool,
    getToolById
    };
}