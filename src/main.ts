import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/css/global.css';
import vuetify from './plugins/vuetify';

createApp(App).mount('#app');
const app = createApp(App);
app.use(vuetify);
app.mount('#app');