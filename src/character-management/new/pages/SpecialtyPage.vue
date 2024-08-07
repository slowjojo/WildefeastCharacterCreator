<template>
    <div class="container">
      <h1>Specialty List</h1>
      <div v-if="specialties.length === 0">Loading specialties...</div>
      <div v-else class="specialty-buttons">
        <button 
          v-for="specialty in specialties" 
          :key="specialty.name" 
          class="specialty-button" 
          @click="handleButtonClick(specialty)"
        >
          {{ specialty.name }}
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import CharacterOptionsLoader from '@/services/characterOptionsLoader';
  import { Specialty } from '@/types/characterTypes';
  
  export default defineComponent({
    name: 'SpecialtyPage',
    setup() {
      const specialties = ref<Specialty[]>([]);
      const characterOptionsLoader = new CharacterOptionsLoader();
  
      // Load specialties when component is mounted
      onMounted(async () => {
        await characterOptionsLoader.loadSpecialties();
        specialties.value = characterOptionsLoader.getSpecialties();
      });
  
      function handleButtonClick(specialty: Specialty) {
        alert(`You clicked on ${specialty.name}`);
        // Implement further actions here, e.g., navigating to a detail page
      }
  
      return {
        specialties,
        handleButtonClick
      };
    }
  });
  </script>
  
  <style scoped>
    .specialty-buttons {
  display: flex;
  flex-direction: column;
  width: 100%; /* Allow the container to take up full width */
}

  .specialty-button {
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

.specialty-button:hover {
  background-color: #e0e0e0; /* Darker background on hover */
}
  </style>
  