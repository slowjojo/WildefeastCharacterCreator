import { toolData } from '@/classes/wilder/Tool'
import toolsJson from '@/assets/data/tools.json'
import { type Ref, ref } from 'vue';

const tools: toolData[] = toolsJson.map(data => new toolData(data));
const selectedTool: Ref<toolData | null> = ref(null);

function getToolById(id: string): toolData | undefined {
  return tools.find(tool => tool.id === id);
}

export function useTools() {
    return {
    tools,
    selectedTool,
    getToolById
    };
}