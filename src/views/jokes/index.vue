<route lang="yaml">
name: joke-home
</route>

<script setup lang="ts">
import Spoiler from '../../components/Spoiler.vue'
import {
    NResult,
    NButton
} from 'naive-ui'
import { RouterLink } from 'vue-router'
</script>

<template>
    <Spoiler>hi there?!</Spoiler>
    <n-result status="500"
        title="500 服务器错误"
        description="服务器出错可能说明该雇更多程序员了">
        <template #footer>
            <Spoiler>其实就是懒得做...</Spoiler> <br />
            <n-button>👈找点乐子吧(<router-link to="/jokes/fuzeinfo"><mark>指FUZE</mark></router-link>)🤣</n-button>
        </template>
    </n-result>
</template>