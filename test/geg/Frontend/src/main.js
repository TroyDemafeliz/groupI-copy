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
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Toast from "vue-toastification";

const app = createApp(App)

const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
    maxToasts: 20,
    newestOnTop: true,
}
app.use(Toast, options)

app.component('VueDatePicker', VueDatePicker);
app.use(PrimeVue);
app.use(createPinia())
app.use(router)
app.use(VCalendar, {})

app.mount('#app')
