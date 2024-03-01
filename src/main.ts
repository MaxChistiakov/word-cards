import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

import { createPinia } from 'pinia'

import { setupFirebase } from '@/services/firebase.service'

setupFirebase()

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')