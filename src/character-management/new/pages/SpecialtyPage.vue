<template>
  <main class="page">
    <div class="specialty-list">
      <div 
        class="header" 
        :class="{ slide: slideOut }"
      >
        SPECIALTY HEADER
      </div>

      <div v-if="specialties.length === 0">Loading specialties...</div>
      
      <button 
        v-for="(specialty, index) in specialties" 
        :key="specialty.name"
        class="specialty-button"
        @click="handleSpecialtySelection(specialty, index)"
        :data-status="getButtonStatus(specialty)"
        :data-header="isHeader(specialty) ? 'active' : 'inactive'"
        :style="getButtonStyle(index)"
      >
        {{ specialty.name }}
      </button>
    </div>

    <SpecialtyDetails 
      :specialty="selectedSpecialty"
      :isVisible="showDetails"
      @deselect="handleSpecialtyDeselection"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import CharacterOptionsLoader from '@/services/characterOptionsLoader';
import { Specialty } from '@/types/characterTypes';
import SpecialtyDetails from './SpecialtyDetails.vue';

export default defineComponent({
  name: 'SpecialtyPage',
  components: {
    SpecialtyDetails
  },
  setup() {
    const specialties = ref<Specialty[]>([]);
    const selectedSpecialty = ref<Specialty | null>(null);
    const headerSpecialty = ref<Specialty | null>(null);
    const slideOut = ref(false);
    const showDetails = ref(false);
    const characterOptionsLoader = new CharacterOptionsLoader();

    onMounted(async () => {
      try {
        await characterOptionsLoader.loadSpecialties();
        specialties.value = characterOptionsLoader.getSpecialties();
        console.log('Specialties loaded:', specialties.value);
      } catch (error) {
        console.error('Error loading specialties:', error);
      }
    });

    function isSelected(specialty: Specialty) {
      return selectedSpecialty.value?.name === specialty.name;
    }

    function isHeader(specialty: Specialty) {
      return headerSpecialty.value?.name === specialty.name;
    }

    function getButtonStatus(specialty: Specialty) {
      return isSelected(specialty) ? 'active' : 'inactive';
    }

    function handleSpecialtySelection(specialty: Specialty, index: number) {
      selectedSpecialty.value = specialty;

      if (!slideOut.value) {
        slideOut.value = true;
      }

      setTimeout(() => {
        headerSpecialty.value = specialty; 
      }, 500);

      setTimeout(() => {
        showDetails.value = true;
      }, 1000);
    }

    function handleSpecialtyDeselection() {
      showDetails.value = false;

      setTimeout(() => {
        headerSpecialty.value = null;
      }, 500);

      setTimeout(() => {
        slideOut.value = false;
      }, 1000);
      setTimeout(() => {
        selectedSpecialty.value = null;
      }, 1500);
    }

    function getButtonStyle(index: number) {
      const buttonHeight = 50; 
      const headerHeight = 50;
      const translateY = isHeader(specialties.value[index]) ? 0 : (buttonHeight * index) + headerHeight;
      const translateX = slideOut.value && !isSelected(specialties.value[index]) ? '-100%' : '0';
      return {
        transform: `translateY(${translateY}px) translateX(${translateX})`,
        transition: 'transform 0.5s ease'
      };
    }

    return {
      specialties,
      selectedSpecialty,
      headerSpecialty,
      slideOut,
      showDetails,
      isSelected,
      isHeader,
      getButtonStatus,
      handleSpecialtySelection,
      handleSpecialtyDeselection,
      getButtonStyle
    };
  }
});
</script>

<style scoped>
.specialty-list {
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

.specialty-button {
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

.specialty-button[data-status="active"] {
  background-color: #007BFF;
  color: white;
  border: 2px solid #0056b3;
}

.specialty-button[data-status="inactive"] {
  background-color: orange;
}

.specialty-button[data-header="active"] {
  transform: translateY(0);
}

.specialty-button[data-header="inactive"] {
  transform: translateY(calc(var(--index) * 50px + 50px));
}

.header.slide, .specialty-button.slide {
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}
</style>
