<template>
	<h1>select specialty</h1>
		<specialtySelector :wilder="wilder" />
</template>

<script setup lang="ts">
import type { WilderData } from "@/class"
import specialtySelector from "@/UI/components/selectors/specialtySelector.vue";

const props = defineProps<{ wilder: WilderData }>();

</script>
