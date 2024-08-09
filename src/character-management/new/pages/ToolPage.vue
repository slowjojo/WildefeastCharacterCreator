<template>
  <div class="tool-page page">
    <!-- Tool List Section -->
    <article class="tool-list">
      <div>
        <h1>Tool List</h1>
        <div v-if="tools.length === 0">Loading tools...</div>
        <div class="tool-buttons">
          <button 
            v-for="tool in tools" 
            :key="tool.name" 
            :class="{ 'button': true, 'selected': isSelected(tool), 'hidden': isToolHidden(tool) }"
            @click="toggleToolSelection(tool)"
          >
            {{ tool.name }}
          </button>
        </div>
      </div>
    </article>
    
    <!-- Tool Details Section -->
    <article v-if="selectedTool" class="tool-details">
      <div>
        <button class="back-button" @click="deselectTool">Back</button>
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
      try {
        await characterOptionsLoader.loadTools();
        tools.value = characterOptionsLoader.getTools();
        console.log('Tools loaded:', tools.value); // Debug statement
      } catch (error) {
        console.error('Error loading tools:', error);
      }
    });

    function toggleToolSelection(tool: Tool) {
      selectedTool.value = selectedTool.value === tool ? null : tool;
    }

    function deselectTool() {
      selectedTool.value = null;
    }

    function handleTechniqueClick(technique: string) {
      alert(`You selected the beginner technique: ${technique}`);
    }

    function handleStyleSpreadClick(option: string) {
      alert(`You selected the style spread option: ${option}`);
    }

    function isSelected(tool: Tool) {
      return selectedTool.value?.name === tool.name;
    }

    function isToolHidden(tool: Tool) {
      return selectedTool.value && !isSelected(tool);
    }

    return {
      tools,
      selectedTool,
      toggleToolSelection,
      deselectTool,
      handleTechniqueClick,
      handleStyleSpreadClick,
      isSelected,
      isToolHidden
    };
  }
});
</script>

<style scoped>
.tool-page {
  display: flex;
  flex-direction: column;
}

.tool-list {
  margin: 0;
  padding: 0;
}

.tool-buttons {
  display: flex;
  flex-wrap: wrap;
}

.button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}

.button.selected {
  background-color: #007BFF;
  color: white;
}

.button.hidden {
  display: none;
}

.tool-details {
  margin-top: 20px;
}
</style>
