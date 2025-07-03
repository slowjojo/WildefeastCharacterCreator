// src/Startup.ts
import { useWilders } from "@/stores/useWilders"

export async function startupApp() {
  const store = useWilders()
  await store.loadWilders()
}
