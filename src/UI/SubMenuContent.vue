<template>
  <div class="sub-menu-wrapper">
    <slot />

    <div class="status-indicator">
      <v-icon
        v-if="complete"
        color="success"
        size="28"
        title="Step complete"
      >
        mdi-check-circle
      </v-icon>
      <v-icon
        v-else-if="mandatory"
        color="grey"
        size="28"
        title="This step is required"
      >
        mdi-checkbox-blank-circle-outline
      </v-icon>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  complete: boolean
  mandatory?: boolean
}>()
</script>

<style scoped>
.sub-menu-wrapper {
  position: relative;
  height: 100%;
}

.status-indicator {
  position: absolute;
  right: 16px;
  bottom: 54px;
}
</style>
