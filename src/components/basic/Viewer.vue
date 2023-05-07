<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { RouterView } from 'vue-router'
import { KeepAlive } from 'vue'
import { Logger } from '../../lib'
import router from '../../route'
import { useAchiever } from '../../lib'

const achiever = useAchiever()
const bar = useLoadingBar()

const { transition } = defineProps({
    transition: {
        type: Boolean,
        default: false,
    },
})

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
    <RouterView v-slot="{ Component }">
        <component :is="Component" />
    </RouterView>
</template>
