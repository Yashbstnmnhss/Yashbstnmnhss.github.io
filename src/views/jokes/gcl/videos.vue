<route lang="yaml">
name: gcl-videos
meta:
    menu:
        for: jokes
        key: gcl-videos
        icon: video
        parent:
            key: gcl
            icon: person
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis, NBackTop, NAnchor, NAnchorLink } from 'naive-ui'
import { toImportInfo } from '../../portal'

const videos = toImportInfo(
    import.meta.glob('@/assets/videos/jokes/gcl/**/*.{mp4,webm,ogv}', { eager: true })
)
const subtitles = toImportInfo(
    import.meta.glob('@/assets/videos/jokes/gcl/**/*.{srt,vtt}', { eager: true })
)
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'gcl-videos']) }}</NH1>
    <NAnchor affix>
        <NAnchorLink
            v-for="video in videos"
            v-anchor="`#_${video.name}`"
            :title="$texta.get(['views', 'jokes', 'gcl', 'videos', 'items', video.name])"
        />
    </NAnchor>
    <br />
    <NSpace vertical>
        <NThing v-for="video in videos" :key="video.name" :id="`_${video.name}`">
            <template #header>
                <NEllipsis line-clamp="3">
                    {{ $texta.get(['views', 'jokes', 'gcl', 'videos', 'items', video.name]) }}
                </NEllipsis>
            </template>
            <video
                controls
                :key="video.name"
                :title="$texta.get(['views', 'jokes', 'gcl', 'videos', 'items', video.name])"
            >
                <source :src="video.path" />
                <track
                    v-if="subtitles.length > 0 && subtitles.some(v => video.name === v.name)"
                    :src="subtitles.find(v => v.name === video.name)?.path"
                    default
                />
                {{ $texta.get(['views', 'jokes', 'videos-alt']) }}
            </video>
        </NThing>
    </NSpace>
    <NBackTop />
</template>

<style scoped>
video {
    width: 80%;
    height: auto;
}
</style>
