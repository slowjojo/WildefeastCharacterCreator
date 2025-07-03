// big central file for all compendium items, import all of it here



import { useTools } from "./useTools";
import { useSpecialties } from "./useSpecialties";
import { useTechnqiues } from "./useTechniques";
import { useTraits } from "./useTraits";

const { tools, selectedTool } = useTools()
const { specialties, selectedSpecialty } = useSpecialties()
const { techniques, selectedTechnique } = useTechnqiues()
const { traits, selectedTrait } = useTraits()


export function useCompendium() {
    return {
    tools,
    selectedTool,
    specialties,
    selectedSpecialty,
    techniques,
    selectedTechnique,
    traits,
    selectedTrait
    };
}