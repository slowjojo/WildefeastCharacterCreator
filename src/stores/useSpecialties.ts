import { specialtyData } from '@/class';
import specialtiesJson from '@/assets/data/specialties.json'
import { type Ref, ref } from 'vue';

const specialties: specialtyData[] = specialtiesJson.map(data => new specialtyData(data));
const selectedSpecialty: Ref<specialtyData | null> = ref(null);

function getSpecialtyById(id: string): specialtyData | undefined {
  return specialties.find(spec => spec.id === id);
}

export function useSpecialties() {
  return {
    specialties,
    selectedSpecialty,
    getSpecialtyById
  };
}
