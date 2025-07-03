import { techniqueData } from "@/classes/wilder/Techniques";
import techniquesJson from '@/assets/data/techniques.json';
import { type Ref, ref } from 'vue';

const techniques: techniqueData[] = techniquesJson.map(data => new techniqueData(data));
const selectedTechnique: Ref<techniqueData | null> = ref(null);

export function useTechnqiues() {
    return {
    techniques,
    selectedTechnique,
    };
}