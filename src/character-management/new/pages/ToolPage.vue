<template>
  <div class="tool-page page">
    <!-- Tool List Section -->
    <article class="tool-list">
      <div>
        <div v-if="tools.length === 0">Loading tools...</div>
        <div class="tool-buttons">
          <div 
            v-if="!selectedTool" 
            class="header"
          >
            Tools Header
          </div>
          <button 
            v-for="tool in tools" 
            :key="tool.name" 
            :class="{ 
              'button': true, 
              'selected': isSelected(tool), 
              'hidden': isToolHidden(tool) 
            }"
            @click="toggleToolSelection(tool)"
            :style="getButtonStyle(tool)"
          >
            {{ tool.name }}
          </button>
        </div>
      </div>
    </article>
    
    <!-- Tool Details Section -->
    <ToolDetails 
      v-if="showDetails"
      :tool="selectedTool" 
      @deselect="deselectTool"
      @techniqueClick="handleTechniqueClick"
      @styleSpreadClick="handleStyleSpreadClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import CharacterOptionsLoader from '@/services/characterOptionsLoader'; // Adjust if necessary
import { Tool } from '@/types/characterTypes'; // Adjust if necessary
import ToolDetails from './ToolDetails.vue'; // Adjust path since they're in the same directory

export default defineComponent({
  name: 'ToolPage',
  components: {
    ToolDetails
  },
  setup() {
    const tools = ref<Tool[]>([]);
    const selectedTool = ref<Tool | null>(null);
    const showDetails = ref<boolean>(false);
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
      if (selectedTool.value === tool) {
        deselectTool();
        return;
      }
      
      selectedTool.value = tool;
      showDetails.value = false;

      nextTick(() => {
        setTimeout(() => {
          showDetails.value = true;
        }, 500); // Delay in milliseconds
      });
    }

    function deselectTool() {
      showDetails.value = false;
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

    function getButtonStyle(tool: Tool) {
      if (isSelected(tool)) {
        return { 
          top: '0px', 
          zIndex: 2 
        };
      }
      const index = tools.value.indexOf(tool);
      return { 
        top: `${index * 50 + 50}px`, 
        zIndex: 1 
      };
    }

    return {
      tools,
      selectedTool,
      showDetails,
      toggleToolSelection,
      deselectTool,
      handleTechniqueClick,
      handleStyleSpreadClick,
      isSelected,
      isToolHidden,
      getButtonStyle
    };
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 300px;
  background-color: white;
  border: 4px solid #f08721;
  position: relative;
  overflow: hidden;
}

.tool-page {
  position: relative;
}

.tool-list {
  position: relative;
  width: 100%;
  height: 100%;
}

.tool-buttons {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.header {
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  transition: top 0.5s ease, background-color 0.3s ease;
}

.button {
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
  position: absolute;
  transition: top 0.5s ease, background-color 0.3s ease;
}

.button.selected {
  background-color: #007BFF;
  color: white;
}

.button.hidden {
  display: none;
}
</style>
