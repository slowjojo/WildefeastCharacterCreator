import { ToolData } from '@/classes/wilder/Tool'
import toolsJson from '@/assets/data/tools.json'
import { type Ref, ref } from 'vue';

const tools: ToolData[] = toolsJson.map(data => new ToolData(data));
const selectedTool: Ref<ToolData | null> = ref(null);

export function useTools() {
    return {
    tools,
    selectedTool,
    };
}