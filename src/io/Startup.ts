import { useWilderStore } from '@/stores/wilderCatalogueStore'

const store = useWilderStore()
store.loadWildersFromStorage()
