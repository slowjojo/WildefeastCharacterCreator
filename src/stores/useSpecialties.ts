import { specialtyData } from '@/class';
import specialtiesJson from '@/assets/data/specialties.json'
import { type Ref, ref } from 'vue';

const specialties: specialtyData[] = specialtiesJson.map(data => new specialtyData(data));
const selectedSpecialty: Ref<specialtyData | null> = ref(null);



export function useSpecialties() {
  return {
    specialties,
    selectedSpecialty
  };
}
