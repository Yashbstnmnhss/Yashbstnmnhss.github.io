<route lang="yaml">
name: fuze-sounds
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis } from 'naive-ui'
import { toImportInfo } from '../../../lib/utils/imports'
import { useAchiever } from '../../../lib/models/achievements'

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
    <n-h1>{{ $t('layouts.JokesLayout.fuze-sounds') }}</n-h1>
    <n-space vertical>
        <n-thing v-for="sound in sounds" :key="sound.name">
            <template #header>
                <n-ellipsis line-clamp="3">
                    {{ $t(`views.jokes.fuze.sounds.items.${sound.name}`) }}
                </n-ellipsis>
            </template>
            <audio
                :src="sound.path"
                controls
                @play="e => onPlay(e)"
                :key="sound.name"
                :title="$t(`views.jokes.fuze.sounds.items.${sound.name}`)"
            />
        </n-thing>
    </n-space>
</template>
