<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { RouterView } from 'vue-router'
import { KeepAlive } from 'vue'
import { Logger } from '../../lib'
import router from '../../route'
import { useAchiever } from '../../lib'

const achiever = useAchiever()
const bar = useLoadingBar()

router.beforeEach(() => bar?.start())
router.afterEach(() => bar?.finish())
router.onError(() => {
    achiever.achieve('ohh_will_fix_this_route_error_later')
    Logger.error('[Viewer]', 'router error')
    bar?.error()
})

const current = router.currentRoute.value
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition v-if="current.meta.transition" :name="(current.meta.transition as string)">
            <keep-alive v-if="current.meta.keepAlive" :max="10">
                <component :key="current.path" :is="Component" />
            </keep-alive>
            <component v-else :key="current.path" :is="Component" />
        </transition>
        <keep-alive v-else-if="current.meta.keepAlive" :max="10">
            <component :key="current.path" :is="Component" />
        </keep-alive>
        <component v-else :key="current.path" :is="Component" />
    </router-view>
</template>
