import { createApp } from 'vue'
import App from './App.vue'

import i18n from './locales'
import router from './route'
import { store, key } from './store'

import './assets/global.css'
import './assets/markdown.css'
import 'highlight.js/styles/tokyo-night-dark.css'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(store, key)
app.mount('#app')