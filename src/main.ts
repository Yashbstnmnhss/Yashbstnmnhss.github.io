import { createApp } from 'vue'
import App from './App.vue'

import texta from './lib/functions/texta'
import directives from './lib/functions/directives'
import router from './route'
import pinia from './store/pinia'

import './assets/styles/global.less'
import './assets/styles/markdown.less'
import 'highlight.js/styles/tokyo-night-dark.css'

const app = createApp(App)
app.use(texta)
app.use(directives)
app.use(router)
app.use(pinia)
app.mount('#app')
