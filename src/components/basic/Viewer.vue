<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { RouterView } from 'vue-router/auto'
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
</script>

<template>
    <RouterView v-slot="{ Component }">
        <component :is="Component" />
    </RouterView>
</template>
