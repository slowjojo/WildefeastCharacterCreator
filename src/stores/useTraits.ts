import { traitData } from '@/class';
import traitsJson from '@/assets/data/traits.json'
import { type Ref, ref } from 'vue';

const traits: traitData[] = traitsJson.map(data => new traitData(data));
const selectedTrait: Ref<traitData | null> = ref(null);

export function useTraits() {
    return {
    traits,
    selectedTrait,
    }
}