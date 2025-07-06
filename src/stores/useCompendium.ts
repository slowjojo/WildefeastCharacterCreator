// big central file for all compendium items, import all of it here



import { useTools } from "./useTools";
import { useSpecialties } from "./useSpecialties";
import { useTechnqiues } from "./useTechniques";
import { useTraits } from "./useTraits";
import { useExampleBackgroundMeals } from "./useExampleBackgroundMeals";

const { tools, selectedTool } = useTools()
const { specialties, selectedSpecialty } = useSpecialties()
const { techniques, selectedTechnique } = useTechnqiues()
const { traits, selectedTrait } = useTraits()
const {allBackgrounds, selectedUpbringing, selectedInitiation, selectedAmbition } = useExampleBackgroundMeals()

export function useCompendium() {
    return {
    tools,
    selectedTool,
    specialties,
    selectedSpecialty,
    techniques,
    selectedTechnique,
    traits,
    selectedTrait,
    allBackgrounds,
    selectedUpbringing,
    selectedInitiation,
    selectedAmbition
    };
}