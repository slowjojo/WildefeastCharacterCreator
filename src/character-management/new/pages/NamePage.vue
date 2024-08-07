<template>
    <div class="container">
      <label for="nameInput">Enter your name:</label>
      <input id="nameInput" v-model="name" type="text" placeholder="Type your name here" />
      <p>Your name: {{ name }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'NamePage',
    setup() {
      const name = ref('');
      return { name };
    }
  });
  </script>
  
  <style scoped>

  </style>
  