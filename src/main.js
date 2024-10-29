import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('media-');

app.use(router)

app.mount('#app')