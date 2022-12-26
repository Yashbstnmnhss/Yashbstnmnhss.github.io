<route lang="yaml">
name: zang-sounds
meta:
    menu:
        for: jokes
        key: zang-sounds
        icon: volume
        parent:
            key: zang
            icon: person
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis } from 'naive-ui'
import { toImportInfo } from '../../portal'

const sounds = toImportInfo(
    import.meta.glob('@/assets/sounds/jokes/zang/**/*.{mp3,wav,ogg}', { eager: true })
)
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'zang-sounds']) }}</NH1>
    <NSpace vertical>
        <NThing v-for="sound in sounds" :key="sound.name">
            <template #header>
                <NEllipsis line-clamp="3">
                    {{ $texta.get(['views', 'jokes', 'zang', 'sounds', 'items', sound.name]) }}
                </NEllipsis>
            </template>
            <audio
                :src="sound.path"
                controls
                :key="sound.name"
                :title="$texta.get(['views', 'jokes', 'zang', 'sounds', 'items', sound.name])"
            />
        </NThing>
    </NSpace>
</template>
