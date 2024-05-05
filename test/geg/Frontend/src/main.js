import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import 'flowbite/dist/flowbite.min.js';
import './assets/main.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';





const app = createApp(App)
app.use(PrimeVue);
app.use(createPinia())
app.use(router)
app.use(VCalendar, {})

app.mount('#app')
