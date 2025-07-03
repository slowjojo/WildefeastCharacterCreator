import { specialtyData } from '@/class';
import specialtyJson from '@/assets/data/specialties.json'
import { type Ref, ref } from 'vue';

const tools: specialtyData[] = specialtyJson.map(data => new specialtyData(data));
const selectedSpecialty: Ref<specialtyData | null> = ref(null);

export function useSpecialties() {
    return {
    tools,
    selectedSpecialty,
    }
}