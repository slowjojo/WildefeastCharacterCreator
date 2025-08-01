import { techniqueData } from "@/classes/wilder/components/technique/Technique";
import techniquesJson from '@/assets/data/techniques.json';
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

export function useTechniques() {
    return {
        techniques,
        selectedTechnique,
        getTechniqueById,
        beginnerTechniques,
        getBeginnerTechniquesByTool,
        getTechniquesByToolAndTier
    };
}