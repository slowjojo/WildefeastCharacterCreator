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
import { WilderData } from '@/class';
import { useTools } from '@/stores/useTools';


import styleSelector from '@/UI/components/selectors/styleSelector.vue'
import toolSelector from '@/UI/components/selectors/toolSelector.vue'
import techniqueSelector from '@/UI/components/selectors/techniqueSelector.vue'
import areAndStruggleSelector from '@/UI/components/selectors/areAndStruggleSelector.vue'


const { getToolById } = useTools();

const props = defineProps<{ wilder: WilderData }>();

const tool = computed(() => getToolById(props.wilder.tool));

</script>
