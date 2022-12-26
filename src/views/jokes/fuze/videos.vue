<route lang="yaml">
name: fuze-videos
meta:
    menu:
        for: jokes
        key: fuze-videos
        icon: video
        parent:
            key: fuze
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis, NBackTop, NAnchor, NAnchorLink } from 'naive-ui'
import { toImportInfo } from '../../portal'
import { useAchiever } from '../../portal'

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
    <NH1>{{ $texta.get(['menus', 'jokes', 'fuze-videos']) }}</NH1>
    <NAnchor affix>
        <NAnchorLink
            v-for="video in videos"
            v-anchor="`#_${video.name}`"
            :title="$texta.get(['views', 'jokes', 'fuze', 'videos', 'items', video.name])"
        />
    </NAnchor>
    <br />
    <NSpace vertical>
        <NThing v-for="video in videos" :key="video.name" :id="`_${video.name}`">
            <template #header>
                <NEllipsis line-clamp="3">
                    {{ $texta.get(['views', 'jokes', 'fuze', 'videos', 'items', video.name]) }}
                </NEllipsis>
            </template>
            <video
                @play="e => videoAchiever(e)"
                controls
                :key="video.name"
                :title="$texta.get(['views', 'jokes', 'fuze', 'videos', 'items', video.name])"
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
