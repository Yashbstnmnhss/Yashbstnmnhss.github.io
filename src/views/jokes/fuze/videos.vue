<route lang="yaml">
name: fuze-videos
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis, NBackTop, NAnchor, NAnchorLink } from 'naive-ui'
import { toImportInfo } from '../../../lib/utils/imports'
import { useAchiever } from '../../../lib/models/achievements'

const achiever = useAchiever()

const videos = toImportInfo(
    import.meta.glob('@/assets/videos/jokes/fuze/**/*.{mp4,webm,ogv}', { eager: true })
)
const subtitles = toImportInfo(
    import.meta.glob('@/assets/videos/jokes/fuze/**/*.{srt,vtt}', { eager: true })
)

const videoAchiever = (e: Event) => {
    var target = e.target as HTMLVideoElement
    if (target.getAttribute('key') === 'gcscare') {
        achiever.achieve('tonight_is_the_best')
    }
}
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuze-videos') }}</n-h1>
    <n-anchor affix>
        <n-anchor-link
            v-for="video in videos"
            v-anchor="`#_${video.name}`"
            :title="$t(`views.jokes.fuze.videos.items.${video.name}`)"
        />
    </n-anchor>
    <br />
    <n-space vertical>
        <n-thing v-for="video in videos" :key="video.name" :id="`_${video.name}`">
            <template #header>
                <n-ellipsis line-clamp="3">
                    {{ $t(`views.jokes.fuze.videos.items.${video.name}`) }}
                </n-ellipsis>
            </template>
            <video
                @play="e => videoAchiever(e)"
                controls
                :key="video.name"
                :title="$t(`views.jokes.fuze.videos.items.${video.name}`)"
            >
                <source :src="video.path" />
                <track
                    v-if="subtitles.length > 0 && subtitles.some(v => video.name === v.name)"
                    :src="subtitles.find(v => v.name === video.name)?.path"
                    default
                />
                彳亍不支持是吧
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
