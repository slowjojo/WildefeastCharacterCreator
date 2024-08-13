<template>
  <article 
    class="specialty-details"
    :class="{ 'slide-in': isVisible, 'slide-out': !isVisible }"
  >
    <div class="content">
      <h1>SPECIALTY DETAILS</h1>
      <button class="back-button" @click="$emit('deselect')">Back</button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  name: 'SpecialtyDetails',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const isVisible = computed(() => props.isVisible);

    return { isVisible };
  }
});
</script>

<style scoped>
.specialty-details {
  position: absolute;
  top: 50px; /* Adjust based on header height */
  right: -100%; /* Start off-screen to the right */
  width: 100%;
  height: calc(100% - 50px); /* Adjust based on header height */
  padding: 20px;
  background-color: white;
  transition: right 0.5s ease; /* Transition for sliding effect */
  z-index: 2; /* Ensure specialty-details is above other content */
  overflow: auto;
}

.specialty-details.slide-in {
  right: 0; /* Move into view */
}

.specialty-details.slide-out {
  right: -100%; /* Move out of view to the right */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  margin-bottom: 20px;
}

.back-button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
