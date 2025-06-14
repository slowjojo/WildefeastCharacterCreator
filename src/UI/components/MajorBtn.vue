<template>
<button @click="$emit('click')" >
    <slot />
</button>
</template>

<script setup lang="ts">
</script>

    <style scoped>
    button {
  width: 100%;
  height: 200px;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: #ddd;
  cursor: pointer;
}
    </style>