<route lang="yaml">
name: nan-medias
</route>

<script setup lang="ts">
import { NH1, NSpace, NThing, NEllipsis } from 'naive-ui'
import { toImportInfo } from '../../portal'

const sounds = toImportInfo(
    import.meta.glob('@/assets/sounds/jokes/nan/**/*.{mp3,wav,ogg}', { eager: true })
)
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.nan-medias') }}</n-h1>
    <n-space vertical>
        <n-thing v-for="sound in sounds" :key="sound.name">
            <template #header>
                <n-ellipsis line-clamp="3">
                    {{ $t(`views.jokes.nan.sounds.items.${sound.name}`) }}
                </n-ellipsis>
            </template>
            <audio
                :src="sound.path"
                controls
                :key="sound.name"
                :title="$t(`views.jokes.nan.sounds.items.${sound.name}`)"
            />
        </n-thing>
    </n-space>
</template>
