  <template>
      <h1>Create Your Wilder</h1>
       <input v-model="name" placeholder="Enter name" />
      <div>your name is {{name}}</div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue'

 const name = ref('')
</script>

<style scoped>

</style>
