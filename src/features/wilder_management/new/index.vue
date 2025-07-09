   <!-- Rip this whole part out eventually and replace it with multiple pages -->
   
   <template>
<div class="form">
  <ToolPage v-if="step === 1" :wilder="draftWilder" @next="step++"/>

  
    
  </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import ToolPage from './ToolPage.vue'

  import { WilderData } from '@/class'

    const step = ref(1)
    const draftWilder = ref(new WilderData())

  watchEffect(() => {
  console.log(draftWilder.value.tool)
})

    </script>

    <style scoped>

    </style>
