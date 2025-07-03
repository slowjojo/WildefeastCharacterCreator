import { ref } from "vue";
import type { Ref } from "vue";
import localforage from "localforage";
import { WilderData } from "@/classes/wilder/Wilder";

const wilders: Ref<WilderData[]> = ref([]);
const selectedWilder: Ref<WilderData | null> = ref(null);

async function loadWilders() {
  const loaded: WilderData[] = [];
  await localforage.iterate((value, key) => {
    if (key.startsWith("wilder-")) {
      loaded.push(WilderData.fromJSON(value as Partial<WilderData>));
    }
  });
  wilders.value = loaded;
}

function selectWilder(id: string) {
  selectedWilder.value = wilders.value.find(w => w.id === id) || null;
}

function clearSelectedWilder() {
  selectedWilder.value = null;
}

function createWilder(): WilderData {
  const newWilder = new WilderData();
  wilders.value.push(newWilder);
  localforage.setItem(`wilder-${newWilder.id}`, newWilder.toJSON());
  return newWilder;
}

async function updateWilder(wilder: WilderData, newData: Partial<WilderData>) {
  Object.assign(wilder, newData)

  const plain = WilderData.fromJSON(wilder)
  const json = plain.toJSON()

  console.log('Saving JSON:', json)

  await localforage.setItem(`wilder-${plain.id}`, json)
}

async function deleteWilder() {
  if (!selectedWilder.value) return;
  const id = selectedWilder.value.id;
  wilders.value = wilders.value.filter(w => w.id !== id);
  selectedWilder.value = null;
  await localforage.removeItem(`wilder-${id}`);
}

export function useWilders() {
  return {
    wilders,
    selectedWilder,
    loadWilders,
    selectWilder,
    clearSelectedWilder,
    createWilder,
    updateWilder,
    deleteWilder
  };
}
