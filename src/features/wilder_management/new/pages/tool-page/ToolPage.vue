<template>
	<div>
		<h1>TOOL PAGE</h1>
		<toolSelector :wilder="wilder" />
		<styleSelector v-if="tool" :wilder="wilder" :tool="tool" />
		<techniqueSelector v-if="tool" :wilder="wilder" :tool="tool" />
		<areAndStruggleSelector v-if="tool" :wilder="wilder" :tool="tool" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Wilder } from '@/class';
import { useTools } from '@/stores/useTools';


import styleSelector from '@/UI/components/selectors/WilderToolSelectors/styleSelector.vue';
import toolSelector from '@/UI/components/selectors/WilderToolSelectors/toolSelector.vue';
import techniqueSelector from '@/UI/components/selectors/WilderToolSelectors/techniqueSelector.vue';
import areAndStruggleSelector from '@/UI/components/selectors/WilderToolSelectors/areAndStruggleSelector.vue';


const { getToolById } = useTools();

const props = defineProps<{ wilder: Wilder }>();

const tool = computed(() => {
  return getToolById(props.wilder.ToolController.tool?.id || '')
})


</script>
