<template>
  <div class="tool-page">
    <article class="tool-list">
      <div class="page">
        <h1>Tool List</h1>
        <div v-if="tools.length === 0">Loading tools...</div>
        <div v-else class="tool-buttons">
          <button 
            v-for="tool in tools" 
            :key="tool.name" 
            class="button" 
            @click="selectTool(tool)"
          >
            {{ tool.name }}
          </button>
        </div>
      </div>
    </article>
    
    <article v-if="selectedTool" class="tool-details container">
      <div class="page">
        <h2>{{ selectedTool.name }}</h2>
        <div>
          <h3>Base Technique</h3>
          <p>{{ selectedTool.baseTechnique }}</p>
        </div>
        <div>
          <h3>Beginner Techniques</h3>
          <div class="technique-buttons">
            <button 
              v-for="technique in selectedTool.beginnerTechniques" 
              :key="technique" 
              class="button" 
              @click="handleTechniqueClick(technique)"
            >
              {{ technique }}
            </button>
          </div>
        </div>
        <div v-if="selectedTool.baseStyles.length > 0" class="section">
          <h3>Base Styles</h3>
          <div class="style-spread-buttons">
            <button 
              v-for="(style, index) in selectedTool.baseStyles" 
              :key="index" 
              class="button" 
              @click="handleStyleSpreadClick(style)"
            >
              {{ style }}
            </button>
          </div>
          <div>
            <button class="button" @click="selectTool(null)">
              Choose different tool
            </button>
          </div>
        </div>
      </div>
    </article>
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
    const selectedTool = ref<Tool | null>(null);
    const characterOptionsLoader = new CharacterOptionsLoader();

    onMounted(async () => {
      await characterOptionsLoader.loadTools();
      tools.value = characterOptionsLoader.getTools();
    });

    function selectTool(tool: Tool | null) {
      selectedTool.value = tool;
    }

    function handleTechniqueClick(technique: string) {
      alert(`You selected the beginner technique: ${technique}`);
    }

    function handleStyleSpreadClick(option: string) {
      alert(`You selected the style spread option: ${option}`);
    }

    return {
      tools,
      selectedTool,
      selectTool,
      handleTechniqueClick,
      handleStyleSpreadClick
    };
  }
});
</script>

<style scoped>
.tool-page {
  display: flex;
  position: relative;
}

.tool-list {
  flex: 1;
}

.tool-details {
  position: absolute;
  right: -300px;
  top: 0;
  width: 300px; /* Adjust width as needed */
  height: 100%; /* Full height of the parent container */
  background-color: white;
}
</style>
