<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { RouterView } from 'vue-router'
import { KeepAlive } from 'vue'
import Logger from '../utils/logger'
import router from '../route'
import { useAchiever } from '../composables/achievements'

const achiever = useAchiever()
const bar = useLoadingBar()

router.beforeEach(() => bar?.start())
router.afterEach(() => bar?.finish())
router.onError(() => {
    achiever.achieve('ohh_will_fix_this_route_error_later')
    Logger.error('[Viewer]', 'router error')
    bar?.error()
})
</script>

<template>
    <router-view v-slot="{ Component }">
        <keep-alive v-if="router.currentRoute.value.meta.keepAlive">
            <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component" />
    </router-view>
</template>