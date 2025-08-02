  <template>
    <SpecialtyCard
      v-for="spec in specialties"
      :key="spec.id"
      :specialty="spec"
      :selected="selectedSpecialtyId === spec.id"
      @select="specialtyController.setSpecialty"
    />
  </template>

  <script setup lang="ts">
import { onMounted, ref } from 'vue'
import { SpecialtyController } from '@/classes/wilder/components/specialty/specialtyController'
import { useSpecialties } from '@/stores/useSpecialties'
import SpecialtyCard from '@/UI/components/cards/SpecialtyCard.vue'

const props = defineProps<{ specialtyController: SpecialtyController }>()
const { specialties } = useSpecialties()

const selectedSpecialtyId = ref('')

onMounted(() => {
  selectedSpecialtyId.value = props.specialtyController.specialty?.id || ''
})
  </script>
