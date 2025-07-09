<template>
	<div>
		<h1>TOOL PAGE</h1>
		<toolSelector :wilder="wilder" />
		<styleSelector v-if="wilder.tool" :wilder="wilder" />
	</div>
</template>

<script setup lang="ts">
import styleSelector from '@/UI/components/selectors/styleSelector.vue';
import toolSelector from '@/UI/components/selectors/toolSelector.vue'
import { WilderData } from '@/class'


	defineProps<{ wilder: WilderData }>()
</script>