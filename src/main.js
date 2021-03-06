import { createApp } from 'vue'
import App from './App.vue'
import arabic from '@vee-validate/i18n/dist/locale/ar.json';

import VeeValidate from "./plugins/VeeBuilder"



createApp(App)
    .use(VeeValidate)
    .mount('#app')
