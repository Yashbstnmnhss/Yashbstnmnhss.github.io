<route lang="yaml">
name: gcl-images
</route>

<script setup lang="ts">
import { NH1, NImageGroup, NSpace, NImage, NBackTop } from 'naive-ui'
import { toImportInfo } from '../../portal'
import { useAchiever } from '../../portal'

const achiever = useAchiever()
const images = toImportInfo(
    import.meta.glob('@/assets/images/jokes/gladyschandraclealukito/**/*.{jpg,png,gif}', {
        eager: true,
    })
)

const onClick = () => {
    achiever.achieve('gcl_big_jokes')
}
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.gcl-images') }}</n-h1>
    {{ $t('views.jokes.gcl.images.tip') }}
    <n-image-group>
        <n-space>
            <n-image
                v-for="image in images"
                @dblclick="onClick()"
                :src="image.path"
                :key="image.name"
                :title="image.name"
                class="jokes-images"
                :alt="$t('views.jokes.images-alt')"
                object-fit="cover"
                width="350"
            />
        </n-space>
    </n-image-group>
    <n-back-top />
</template>
