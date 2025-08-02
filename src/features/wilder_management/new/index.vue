<template>
  <div v-if="draftWilder">
    <ToolPage />
    <SpecialtyPage />
    <BackgroundPage />
    <NameAndPronounsPage />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup lang="ts">
import { useDraftWilderStore } from '@/stores/useDraftWilder';
import ToolPage from './pages/tool-page/ToolPage.vue';
import SpecialtyPage from './pages/specialty-page/SpecialtyPage.vue';
import BackgroundPage from './pages/BackgroundPage.vue';
import NameAndPronounsPage from './pages/NameAndPronounsPage.vue';

const { draftWilder } = useDraftWilderStore()
</script>

<style scoped>
</style>