import { ref } from 'vue'
import { Wilder } from '@/class'

export function useDraftCharacter() {
  const draft = ref(new Wilder())
  
  return { draft }
}