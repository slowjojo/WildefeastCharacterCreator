<!-- ToolDetails.vue -->
<template>
  <article 
    class="tool-details"
    :class="{ 'slide-in': isVisible, 'slide-out': !isVisible }"
  >
    <div class="content">
      <template v-if="tool">
        <div class="section" v-if="tool.baseStyles.length > 0">
          <h3>Base Styles</h3>
          <div class="style-buttons">
            <button 
              v-for="style in tool.baseStyles" 
              :key="style" 
              class="button" 
              @click="handleStyleClick(style)"
            >
              {{ style }}
            </button>
          </div>
        </div>

        <div class="section">
          <h3>Base Technique</h3>
          <p>{{ tool.baseTechnique }}</p>
        </div>

        <div class="section" v-if="tool.beginnerTechniques.length > 0">
          <h3>Beginner Techniques</h3>
          <div class="technique-buttons">
            <button 
              v-for="technique in tool.beginnerTechniques" 
              :key="technique" 
              class="button" 
              @click="handleTechniqueClick(technique)"
            >
              {{ technique }}
            </button>
          </div>
        </div>
      </template>
      
      <template v-else>
        <p>No tool selected.</p>
      </template>

      <button class="back-button" @click="$emit('deselect')">Back</button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { Tool } from '@/types/characterTypes';

export default defineComponent({
  name: 'ToolDetails',
  props: {
    tool: {
      type: Object as PropType<Tool | null>,
      default: null
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const isVisible = computed(() => props.isVisible);

    function handleTechniqueClick(technique: string) {
      emit('techniqueClick', technique);
    }

    function handleStyleClick(style: string) {
      emit('styleClick', style);
    }

    return { isVisible, handleTechniqueClick, handleStyleClick };
  }
});
</script>

<style scoped>
.tool-details {
  position: absolute;
  top: 50px;
  right: -100%;
  width: 100%;
  height: calc(100% - 50px);
  padding: 20px;
  background-color: white;
  transition: right 0.5s ease;
  z-index: 2;
  overflow: auto;
}

.tool-details.slide-in {
  right: 0;
}

.tool-details.slide-out {
  right: -100%;
}

.content {
  display: flex;
  flex-direction: column;
}

.section {
  margin-bottom: 20px;
}

.technique-buttons,
.style-buttons {
  display: flex;
  flex-direction: column;
}

.button {
  margin: 5px;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.back-button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
