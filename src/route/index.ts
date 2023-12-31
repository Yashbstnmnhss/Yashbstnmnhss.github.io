import { createRouter, createWebHashHistory } from 'vue-router/auto'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
})

router.beforeEach(guard => {
    let path = guard.name?.toString()
    if (path !== '' && path !== '/' && path !== '/agsl') alert('请勿僭越')
})

export default router
