<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { RouterView } from 'vue-router'
import router from '../route';

const bar = useLoadingBar()

router.beforeEach(() => bar?.start())
router.afterEach(() => bar?.finish())
router.onError(() => bar?.error())
</script>

<template>
    <router-view />
</template>