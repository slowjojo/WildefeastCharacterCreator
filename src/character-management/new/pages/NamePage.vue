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


  div {
    color: var(--primaryText);
    padding: 1em;
    border: 1px solid var(--border);
    border-radius: 4px;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
    color: var(--headerText);
  }
  
  input {
    padding: 0.5em;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 1em;
    width: 100%;
    max-width: 300px;
    color: var(--primaryText);
  }
  
  p {
    font-size: 1em;
    color: var(--secondaryText);
  }
  </style>
  