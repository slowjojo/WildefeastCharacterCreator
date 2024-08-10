
<template>
    <article class="tool-details" v-if="tool">
      <div>
        <button class="back-button" @click="$emit('deselect')">Back</button>
        <h2>{{ tool.name }}</h2>
        <div>
          <h3>Base Technique</h3>
          <p>{{ tool.baseTechnique }}</p>
        </div>
        <div>
          <h3>Beginner Techniques</h3>
          <div class="technique-buttons">
            <button 
              v-for="technique in tool.beginnerTechniques" 
              :key="technique" 
              class="button" 
              @click="$emit('techniqueClick', technique)"
            >
              {{ technique }}
            </button>
          </div>
        </div>
        <div v-if="tool.baseStyles.length > 0" class="section">
          <h3>Base Styles</h3>
          <div class="style-spread-buttons">
            <button 
              v-for="(style, index) in tool.baseStyles" 
              :key="index" 
              class="button" 
              @click="$emit('styleSpreadClick', style)"
            >
              {{ style }}
            </button>
          </div>
        </div>
      </div>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Tool } from '@/types/characterTypes'; // Adjust if necessary
  
  export default defineComponent({
    name: 'ToolDetails',
    props: {
      tool: {
        type: Object as PropType<Tool>,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  .tool-details {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: calc(100% - 50px);
    padding: 10px;
    background-color: #f9f9f9;
    z-index: 2;
  }
  
  .back-button {
    margin-bottom: 10px;
  }
  
  .technique-buttons, .style-spread-buttons {
    display: flex;
    flex-wrap: wrap;
  }
  
  .button {
    margin: 5px;
  }
  </style>