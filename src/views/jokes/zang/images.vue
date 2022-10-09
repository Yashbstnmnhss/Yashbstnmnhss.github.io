<route lang="yaml">
name: zang-images
</route>

<script setup lang="ts">
import { NH1, NImageGroup, NSpace, NImage, NBackTop } from 'naive-ui'
import { toImportInfo } from '../../../lib/utils/imports'

const images = toImportInfo(
    import.meta.glob('@/assets/images/jokes/zang/**/*.{jpg,png,gif}', { eager: true })
)
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.zang-images') }}</n-h1>
    <n-image-group>
        <n-space>
            <n-image
                v-for="image in images"
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
