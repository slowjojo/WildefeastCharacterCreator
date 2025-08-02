// src/main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(vuetify)

// Initialize stores synchronously first
import { useDraftWilderStore } from '@/stores/useDraftWilder'
const draftStore = useDraftWilderStore() // This initializes immediately

// Then handle async startup
import { startupApp } from './io/Startup'
startupApp()
  .then(() => {
    console.log('App startup completed successfully')
  })
  .catch(err => {
    console.error('Startup initialization failed:', err)
  })

app.mount('#app')