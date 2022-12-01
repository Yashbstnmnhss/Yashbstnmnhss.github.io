<route lang="yaml">
name: fuze-images
</route>

<script setup lang="ts">
import { NH1, NImageGroup, NSpace, NImage, NBackTop } from 'naive-ui'
import { toImportInfo } from '../../portal'
import { useAchiever } from '../../portal'

const achiever = useAchiever()
const images = toImportInfo(
    import.meta.glob('@/assets/images/jokes/fuze/**/*.{jpg,png,gif}', { eager: true })
)

const onClick = () => {
    achiever.achieve('hasi_hasi_hasi')
}
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuze-images') }}</n-h1>
    {{ $t('views.jokes.fuze.images.tip') }}
    <n-image-group>
        <n-space>
            <n-image
                v-for="image in images"
                @dbclick="onClick()"
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
