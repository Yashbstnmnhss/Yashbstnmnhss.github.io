import routes from '~pages'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [...routes],
})

export default router
