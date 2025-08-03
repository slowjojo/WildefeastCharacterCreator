import { techniqueData } from "@/classes/wilder/components/technique/Technique";
import techniquesJson from '@/assets/data/techniques.json';
import { Style } from '@/classes/enums'; // Add this import
import { useTools } from '@/stores/useTools'; // Add this import
import { type Ref, ref, computed } from 'vue';

const techniques: techniqueData[] = techniquesJson.map(data => new techniqueData(data));
const selectedTechnique: Ref<techniqueData | null> = ref(null);

function getTechniqueById(id: string): techniqueData | undefined {
  return techniques.find(technique => technique.id === id);
}

// Get all beginner techniques for any tool
const beginnerTechniques = computed(() => 
  techniques.filter(tech => tech.tier === 'beginner')
);

// Get beginner techniques for a specific tool
function getBeginnerTechniquesByTool(toolId: string): techniqueData[] {
  return techniques.filter(tech => 
    tech.tier === 'beginner' && tech.tool === toolId
  );
}

// Get techniques by tool and tier
function getTechniquesByToolAndTier(toolId: string, tier: string): techniqueData[] {
  return techniques.filter(tech => 
    tech.tool === toolId && tech.tier === tier
  );
}

function getSharedTechniquesByStyle(style: Style): techniqueData[] {
  return techniques.filter(tech => 
    tech.tool === 'shared' && 
    tech.required_style === style &&
    tech.tier === 'intermediate' // since all shared are intermediate
  )
}

function getAvailableSharedTechniques(toolId: string): techniqueData[] {
  const { getToolById } = useTools()
  const tool = getToolById(toolId)
  if (!tool) return []
 
  return tool.main_styles.flatMap(style => 
    getSharedTechniquesByStyle(style)
  )
}

export function useTechniques() {
    return {
        techniques,
        selectedTechnique,
        getTechniqueById,
        beginnerTechniques,
        getBeginnerTechniquesByTool,
        getTechniquesByToolAndTier,
        getSharedTechniquesByStyle,      // Add this
        getAvailableSharedTechniques     // Add this
    };
}