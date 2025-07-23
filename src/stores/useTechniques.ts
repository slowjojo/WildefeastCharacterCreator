import { techniqueData } from "@/classes/wilder/components/technique/Technique";
import techniquesJson from '@/assets/data/techniques.json';
import { type Ref, ref } from 'vue';

const techniques: techniqueData[] = techniquesJson.map(data => new techniqueData(data));
const selectedTechnique: Ref<techniqueData | null> = ref(null);

function getTechniqueById(id: string): techniqueData | undefined {
  return techniques.find(technique => technique.id === id);
}


export function useTechniques() {
    return {
    techniques,
    selectedTechnique,
    getTechniqueById
    };
}