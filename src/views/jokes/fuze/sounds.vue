<route lang="yaml">
name: fuze-sounds
meta:
    menu:
        for: jokes
        key: fuze-sounds
        icon: volume
        parent:
            key: fuze
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis } from 'naive-ui'
import { toImportInfo } from '../../portal'
import { useAchiever } from '../../portal'

const sounds = toImportInfo(
    import.meta.glob('@/assets/sounds/jokes/fuze/**/*.{mp3,wav,ogg}', { eager: true })
)
const achiever = useAchiever()
var dignityPlayTimes = 0

const onPlay = (e: Event) => {
    var target = e.target as HTMLVideoElement
    if (target.getAttribute('key') === 'wocaoxing') {
        dignityPlayTimes++
        if (dignityPlayTimes === 10) achiever.achieve('cant_get_mad_who_havent_dignity')
    }
}
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'fuze-sounds']) }}</NH1>
    <NSpace vertical>
        <NThing v-for="sound in sounds" :key="sound.name">
            <template #header>
                <NEllipsis line-clamp="3">
                    {{ $texta.get(['views', 'jokes', 'fuze', 'sounds', 'items', sound.name]) }}
                </NEllipsis>
            </template>
            <audio
                :src="sound.path"
                controls
                @play="e => onPlay(e)"
                :key="sound.name"
                :title="$texta.get(['views', 'jokes', 'fuze', 'sounds', 'items', sound.name])"
            />
        </NThing>
    </NSpace>
</template>
