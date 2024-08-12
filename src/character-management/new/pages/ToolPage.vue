<template>
  <main class="tool-page">
    <div class="tool-list">
      <div 
        class="header" 
        :class="{ slide: slideOut }"
      >
        TOOL HEADER
      </div>

      <div v-if="tools.length === 0">Loading tools...</div>
      
      <button 
        v-for="(tool, index) in tools" 
        :key="tool.name"
        class="tool-button"
        @click="handleToolSelection(tool, index)"
        :data-status="getButtonStatus(tool)"
        :data-header="isHeader(tool) ? 'active' : 'inactive'"
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

    function getButtonStatus(tool: Tool) {
      return isSelected(tool) ? 'active' : 'inactive';
    }

    function handleToolSelection(tool: Tool, index: number) {
      // Set the selected tool immediately
      selectedTool.value = tool;

      // Trigger slide-out effect if not already active
      if (!slideOut.value) {
        slideOut.value = true;
      }

      // Add a delay before setting the header tool
      setTimeout(() => {
        headerTool.value = tool; 
        // Slide effect should remain in place
      }, 500); // Adjust time to match the transition duration
    }

    function getButtonStyle(index: number) {
      const baseHeight = 50; 
      const translateY = isHeader(tools.value[index]) ? -baseHeight * index - baseHeight : 0;
      const translateX = slideOut.value && !isSelected(tools.value[index]) ? '-100%' : '0'; // Move non-selected buttons to the left if slideOut is true
      return {
        transform: `translateY(${translateY}px) translateX(${translateX})`,
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
      getButtonStatus,
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
  grid-template-rows: auto 1fr; /* Adjust to accommodate header and buttons */
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
  transition: transform 0.5s ease; /* Add transition for sliding effect */
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
.header.slide, .tool-button.slide {
  transform: translateX(-100%); /* Slide out to the left */
  transition: transform 0.5s ease; /* Ensure smooth transition for sliding */
}
</style>
