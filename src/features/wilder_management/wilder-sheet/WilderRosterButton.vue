<template>
  <div class="wilder-button" @click="$emit('select', wilder)">
    <h3 class="wilder-name">{{ wilder.name || 'Unnamed Wilder' }}</h3>
    <p class="wilder-tool">
      Tool: <strong>{{ wilder.tool || '—' }}</strong>
    </p>
    <p class="wilder-specialty">
      Specialty: <strong>{{ wilder.specialty || '—' }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { WilderData } from '@/classes/wilder/Wilder'

defineProps<{
  wilder: WilderData
}>()

defineEmits<{
  (e: 'select', wilder: WilderData): void
}>()
</script>

<style scoped>
.wilder-button {
  display: flex;
  flex-direction: column;
  color: #000;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
}

.wilder-button:hover {
  transform: translateY(-2px);
  border-color: #999;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
}

.wilder-button:focus,
.wilder-button:focus-visible {
  outline: none;
}

.wilder-name {
  margin: 0;
  font-size: 1.2rem;
}

.wilder-tool,
.wilder-specialty {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
}

</style>
