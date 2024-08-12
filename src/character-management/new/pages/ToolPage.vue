<template>
  <main class="tool-page">
    <div class="tool-list">
      <div class="header">
        TOOL HEADER
      </div>

      <div v-if="tools.length === 0">Loading tools...</div>
      
      <button 
        v-for="(tool, index) in tools" 
        :key="tool.name"
        class="tool-button"
        @click="handleToolSelection(tool, index)"
        :data-status="isSelected(tool) ? 'active' : 'inactive'"
        :data-header="isHeader(tool) ? 'active' : 'inactive'"
        :class="{ slide: !isSelected(tool) && slideOut }"
        :style="getButtonStyle(index)"
      >
        {{ tool.name }}
      </button>
    </div>
  </main>
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
    const headerTool = ref<Tool | null>(null); // To keep track of the header tool
    const slideOut = ref(false); // State to handle sliding effect
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

    function isSelected(tool: Tool) {
      return selectedTool.value?.name === tool.name;
    }

    function isHeader(tool: Tool) {
      return headerTool.value?.name === tool.name;
    }

    function handleToolSelection(tool: Tool, index: number) {
      // Set the selected tool immediately
      selectedTool.value = tool;
      
      // Trigger slide-out effect
      slideOut.value = true;

      // Add a delay before setting the header tool
      setTimeout(() => {
        headerTool.value = tool; 
        slideOut.value = false; // Reset slide effect after header tool update
      }, 1000); // 1000 milliseconds = 1 second delay for header tool update
    }

    function getButtonStyle(index: number) {
      const baseHeight = 50; 
      const translateY = isHeader(tools.value[index]) ? -baseHeight * index - baseHeight : 0;
      return {
        transform: `translateY(${translateY}px)`,
        transition: 'transform 0.5s ease'
      };
    }

    return {
      tools,
      selectedTool,
      headerTool,
      slideOut,
      isSelected,
      isHeader,
      handleToolSelection,
      getButtonStyle
    };
  }
});
</script>

<style scoped>
.tool-page {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 300px;
  margin: 0;
  overflow: hidden;
}

.tool-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 50px); /* Create rows based on the number of tools */
  width: 100%;
  position: relative; /* Ensure grid is positioned relative to parent */
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
  position: relative;
  top: 0;
  left: 0;
  transition: top 0.5s ease, background-color 0.3s ease;
}

/* Base button styles */
.tool-button {
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  background-color: orange;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.5s ease, background-color 0.3s ease, color 0.3s ease; /* Smooth transitions for multiple properties */
}

/* Active button styles for selection */
.tool-button[data-status="active"] {
  background-color: #007BFF;
  color: white;
  border: 2px solid #0056b3;
}

/* Inactive button styles for selection */
.tool-button[data-status="inactive"] {
  background-color: orange;
}

/* Active button styles for header */
.tool-button[data-header="active"] {
  transform: translateY(0); /* Move to top position */
}

/* Inactive button styles for header */
.tool-button[data-header="inactive"] {
  transform: translateY(calc(var(--index) * 50px)); /* Default position */
}

/* Styles for sliding effect */
.tool-button.slide {
  transform: translateX(-100%); /* Slide out to the left */
  transition: transform 0.5s ease; /* Ensure smooth transition for sliding */
}
</style>
