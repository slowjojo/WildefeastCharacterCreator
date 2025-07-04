import type { backgroundMeal } from '@/classes/wilder/ThreeCourseBackground';
import { threeCourseBackgrounds } from '@/class';
import backgroundsJson from '@/assets/data/backgrounds.json';
import { type Ref, ref } from 'vue';

const allBackgrounds = new threeCourseBackgrounds(backgroundsJson);

const selectedUpbringing: Ref<backgroundMeal | null> = ref(null);
const selectedInitiation: Ref<backgroundMeal | null> = ref(null);
const selectedAmbition: Ref<backgroundMeal | null> = ref(null);

export function useExampleBackgroundMeals() {
  return {
    allBackgrounds,
    selectedUpbringing,
    selectedInitiation,
    selectedAmbition,
  };
}
