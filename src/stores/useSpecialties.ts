import { specialtyData } from '@/class';
import specialtyJson from '@/assets/data/specialties.json';
import traitsJson from '@/assets/data/traits.json'; // adjust path if needed
import { traitData } from '@/class';
import { type Ref, ref } from 'vue';

// Create traitData instances
const allTraits: traitData[] = traitsJson.map(data => new traitData(data));

// Create specialtyData instances, filtering for level 1 traits
const specialties: specialtyData[] = specialtyJson.map(data => new specialtyData(data, allTraits));

const selectedSpecialty: Ref<specialtyData | null> = ref(null);

function getSpecialtyById(id: string): specialtyData | undefined {
  return specialties.find(specialty => specialty.id === id);
}

export function useSpecialties() {
  return {
    specialties,
    selectedSpecialty,
    getSpecialtyById
  };
}
