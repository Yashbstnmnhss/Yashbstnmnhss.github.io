<route lang="yaml">
name: fuze-images
</route>

<script setup lang="ts">
import {
    NH1,
    NCarousel,
    NImage
} from 'naive-ui'
import { toImportInfo } from '../../../utils/imports'

const images = toImportInfo(
    import.meta.globEager('@/assets/images/jokes/fuze/**/*.{jpg,png,gif}')
)
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuze-images') }}</n-h1>
    <n-carousel autoplay draggable
        show-arrow dot-placement="top">
        <n-image v-for="image in images" 
            :src="image.path" :key="image.name" 
            alt="加载! 加载!! 加载!!! 不择手段地加载!" object-fit="cover"/>
    </n-carousel>
</template>