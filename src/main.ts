import { createApp } from 'vue'
import App from './App.vue'

import i18n from './locales'
import router from './route'
import { pinia } from './store/pinia'
import directives from './lib/functions/directives'

import './assets/styles/global.less'
import './assets/styles/markdown.less'
import 'highlight.js/styles/tokyo-night-dark.css'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(pinia)
app.use(directives)
app.mount('#app')
