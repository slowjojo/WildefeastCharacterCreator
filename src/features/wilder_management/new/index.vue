<template>
  <ToolPage :wilder="draft.value"/>
  <SpecialtyPage :wilder="draft.value"/>
  <BackgroundPage :wilder="draft.value"/>
  <NameAndPronounsPage :wilder="draft.value"/>
</template>

<script setup lang="ts">
import { useDraftCharacter } from '@/stores/useDraftWilder';
import ToolPage from './pages/tool-page/ToolPage.vue';
import SpecialtyPage from './pages/specialty-page/SpecialtyPage.vue';
import BackgroundPage from './pages/BackgroundPage.vue';
import NameAndPronounsPage from './pages/NameAndPronounsPage.vue';

const { draft } = useDraftCharacter()

</script>



<style scoped>

</style>