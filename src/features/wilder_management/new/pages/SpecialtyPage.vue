<template>
	<h1>select specialty</h1>
		<specialtySelector :wilder="wilder" />
		<traitSelector v-if="specialty" :wilder="wilder" :specialty="specialty"/>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { WilderData } from "@/class"
import { useSpecialties } from "@/stores/useSpecialties"
import specialtySelector from "@/UI/components/selectors/specialtySelector.vue"
import traitSelector from "@/UI/components/selectors/traitselector.vue"

const { getSpecialtyById } = useSpecialties();

const props = defineProps<{ wilder: WilderData }>();

const specialty = computed(() => getSpecialtyById(props.wilder.specialty));

</script>
