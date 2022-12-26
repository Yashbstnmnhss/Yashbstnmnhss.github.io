<route lang="yaml">
name: nan-medias
meta:
    menu:
        for: jokes
        key: nan-medias
        icon: chatboxE
        parent:
            key: nan
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis } from 'naive-ui'
import { toImportInfo } from '../../portal'

const sounds = toImportInfo(
    import.meta.glob('@/assets/sounds/jokes/nan/**/*.{mp3,wav,ogg}', { eager: true })
)
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'nan-medias']) }}</NH1>
    <NSpace vertical>
        <NThing v-for="sound in sounds" :key="sound.name">
            <template #header>
                <NEllipsis line-clamp="3">
                    {{ $texta.get(['views', 'jokes', 'nan', 'sounds', 'items', sound.name]) }}
                </NEllipsis>
            </template>
            <audio
                :src="sound.path"
                controls
                :key="sound.name"
                :title="$texta.get(['views', 'jokes', 'nan', 'sounds', 'items', sound.name])"
            />
        </NThing>
    </NSpace>
</template>
