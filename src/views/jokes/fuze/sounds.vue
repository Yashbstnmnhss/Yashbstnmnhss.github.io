<route lang="yaml">
name: fuze-sounds
</route>

<script setup lang="ts">
import {
    NH1,
    NSpace,
    NThing,
    NEllipsis
} from 'naive-ui'
import { toImportInfo } from '../../../utils/imports'

const sounds = toImportInfo(
    import.meta.globEager('@/assets/sounds/jokes/fuze/**/*.{mp3,wav,ogg}')
)
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuze-sounds') }}</n-h1>
    <n-space vertical>
        <n-thing v-for="sound in sounds" :key="sound.name">
            <template #header>
                <n-ellipsis line-clamp="3">
                    {{ $t('views.jokes.fuze.sounds.items.' + sound.name) }}
                </n-ellipsis>
            </template>
            <audio :src="sound.path" controls :title="$t('views.jokes.fuze.sounds.items.' + sound.name)" />
        </n-thing>
    </n-space>
</template>