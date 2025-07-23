import { traitData } from '@/class';
import traitsJson from '@/assets/data/traits.json'
import { type Ref, ref } from 'vue';

const traits: traitData[] = traitsJson.map(data => new traitData(data));
const selectedTrait: Ref<traitData | null> = ref(null);

function getTraitById(id: string): traitData | undefined {
  return traits.find(trait => trait.id === id);
}

function getTraitName(id: string): string {
  const trait = traits.find(t => t.id === id)
  return trait?.name || id
}

export function useTraits() {
    return {
    traits,
    selectedTrait,
    getTraitById,
    getTraitName
    }
}