<template>
    <div>
      <h1>wilder-management</h1>
      <div class="ma-3">
        <v-fade-transition leave-absolute>
        
          <router-view />
        </v-fade-transition>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import * as Vue from 'vue'
  
  export default Vue.defineComponent({
    name: 'wilder-management',
  })
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    overflow: hidden;
  }
  </style>
  