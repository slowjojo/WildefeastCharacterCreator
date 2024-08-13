<template>
  <main class="page">
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

    <ToolDetails 
      :tool="selectedTool"
      :isVisible="showDetails"
      @deselect="handleToolDeselection"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import CharacterOptionsLoader from '@/services/characterOptionsLoader';
import { Tool } from '@/types/characterTypes';
import ToolDetails from './ToolDetails.vue';

export default defineComponent({
  name: 'ToolPage',
  components: {
    ToolDetails
  },
  setup() {
    const tools = ref<Tool[]>([]);
    const selectedTool = ref<Tool | null>(null);
    const headerTool = ref<Tool | null>(null);
    const slideOut = ref(false);
    const showDetails = ref(false);
    const characterOptionsLoader = new CharacterOptionsLoader();

    onMounted(async () => {
      try {
        await characterOptionsLoader.loadTools();
        tools.value = characterOptionsLoader.getTools();
        console.log('Tools loaded:', tools.value);
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
      selectedTool.value = tool;

      if (!slideOut.value) {
        slideOut.value = true;
      }

      setTimeout(() => {
        headerTool.value = tool; 
      }, 500);

      setTimeout(() => {
        showDetails.value = true;
      }, 1000);
    }

    function handleToolDeselection() {
      showDetails.value = false;

      setTimeout(() => {
        headerTool.value = null;
      }, 500);

      setTimeout(() => {
        slideOut.value = false;
      }, 1000);
      setTimeout(() => {
        selectedTool.value = null;
      }, 1500);
    }

    function getButtonStyle(index: number) {
      const buttonHeight = 50; 
      const headerHeight = 50;
      const translateY = isHeader(tools.value[index]) ? 0 : (buttonHeight * index) + headerHeight;
      const translateX = slideOut.value && !isSelected(tools.value[index]) ? '-100%' : '0';
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
      showDetails,
      isSelected,
      isHeader,
      getButtonStatus,
      handleToolSelection,
      handleToolDeselection,
      getButtonStyle
    };
  }
});
</script>

<style scoped>
.tool-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
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
  z-index: 1;
  transition: transform 0.5s ease;
}

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
  position: absolute;
  transition: transform 0.5s ease, background-color 0.3s ease, color 0.3s ease;
}

.tool-button[data-status="active"] {
  background-color: #007BFF;
  color: white;
  border: 2px solid #0056b3;
}

.tool-button[data-status="inactive"] {
  background-color: orange;
}

.tool-button[data-header="active"] {
  transform: translateY(0);
}

.tool-button[data-header="inactive"] {
  transform: translateY(calc(var(--index) * 50px + 50px));
}

.header.slide, .tool-button.slide {
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}
</style>
