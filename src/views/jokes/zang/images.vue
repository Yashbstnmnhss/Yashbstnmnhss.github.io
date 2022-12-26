<route lang="yaml">
name: zang-images
meta:
    menu:
        for: jokes
        key: zang-images
        icon: image
        parent:
            key: zang
            icon: person
</route>

<script setup lang="ts">
import { NH1, NImageGroup, NSpace, NImage, NBackTop } from 'naive-ui'
import { toImportInfo } from '../../portal'

const images = toImportInfo(
    import.meta.glob('@/assets/images/jokes/zang/**/*.{jpg,png,gif}', { eager: true })
)
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'zang-images']) }}</NH1>
    <NImageGroup>
        <NSpace>
            <NImage
                v-for="image in images"
                :src="image.path"
                :key="image.name"
                :title="image.name"
                class="jokes-images"
                :alt="$texta.get(['views', 'jokes', 'images-alt'])"
                object-fit="cover"
                width="350"
            />
        </NSpace>
    </NImageGroup>
    <NBackTop />
</template>
