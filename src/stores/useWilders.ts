import { ref } from "vue";
import type { Ref } from "vue";
import { Wilder } from "@/classes/wilder/Wilder";

const wilders: Ref<Wilder[]> = ref([]);
const selectedWilder: Ref<Wilder | null> = ref(null);

//load wilders here?

function selectWilder(id: string) {
  selectedWilder.value = wilders.value.find(w => w.ID === id) || null;
}

function clearSelectedWilder() {
  selectedWilder.value = null;
}

function loadWilders() {
  // For now, just clear and add one empty Wilder for testing
  const newWilder = new Wilder()
  wilders.value = [newWilder]
  selectedWilder.value = newWilder
}

function deleteWilder() {
  if (!selectedWilder.value) return
  wilders.value = wilders.value.filter(w => w.ID !== selectedWilder.value?.ID)
  selectedWilder.value = null
}

export function useWilders() {
  return {
    wilders,
    selectedWilder,
    selectWilder,
    clearSelectedWilder,
    loadWilders,
    deleteWilder
  };
}
