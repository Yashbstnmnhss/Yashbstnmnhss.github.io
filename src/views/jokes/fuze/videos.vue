<route lang="yaml">
name: fuze-videos
</route>

<script setup lang="ts">
import {
    NH1,
    NSpace,
    NThing,
    NEllipsis,
    NBackTop
} from 'naive-ui'
import { toImportInfo } from '../../../utils/imports'

const videos = toImportInfo(
    import.meta.globEager('@/assets/videos/jokes/fuze/**/*.{mp4,webm,ogv}')
)
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuze-videos') }}</n-h1>
    <n-space vertical>
        <n-thing v-for="video in videos" :key="video.name">
            <template #header>
                <n-ellipsis line-clamp="3">
                    {{ $t('views.jokes.fuze.videos.items.' + video.name) }}
                </n-ellipsis>
            </template>
            <video controls :title="$t('views.jokes.fuze.videos.items.' + video.name)">
                <source :src="video.path" />
            </video>
        </n-thing>
    </n-space>
    <n-back-top />
</template>

<style scoped>
video {
    width: 80%;
    height: auto;
}
</style>