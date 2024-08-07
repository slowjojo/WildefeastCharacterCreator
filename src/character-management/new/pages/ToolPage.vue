<template>
    <div class="container">
      <h1>Tool List</h1>
      <div v-if="tools.length === 0">Loading tools...</div>
      <div v-else class="tool-buttons">
        <button 
          v-for="tool in tools" 
          :key="tool.name" 
          class="tool-button" 
          @click="handleButtonClick(tool)"
        >
          {{ tool.name }}
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import CharacterOptionsLoader from '@/services/characterOptionsLoader';
  import { Tool } from '@/types/characterTypes';
  
  export default defineComponent({
    name: 'ToolPage',
    setup() {
      const tools = ref<Tool[]>([]);
      const characterOptionsLoader = new CharacterOptionsLoader();
  
      // Load tools when component is mounted
      onMounted(async () => {
        await characterOptionsLoader.loadTools();
        tools.value = characterOptionsLoader.getTools();
      });
  
      function handleButtonClick(tool: Tool) {
        alert(`You clicked on ${tool.name}`);
        // Implement further actions here, e.g., navigating to a detail page
      }
  
      return {
        tools,
        handleButtonClick
      };
    }
  });
  </script>
  
  <style scoped>

.tool-buttons {
  display: flex;
  flex-direction: column;
  width: 100%; /* Allow the container to take up full width */
}

  .tool-button {
  width: 100%;           
  height: 50px;           
  padding: 0;        
  margin: 0;         
  border: 1px solid #ccc; 
  border-radius: 4px;   
  background-color: orange; 
  cursor: pointer;      
  display: flex;         
  align-items: center;   
  justify-content: center; 
}

.tool-button:hover {
  background-color: #e0e0e0; /* Darker background on hover */
}
  </style>
  