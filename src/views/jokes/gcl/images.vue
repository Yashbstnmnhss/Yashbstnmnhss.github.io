<route lang="yaml">
name: gcl-images
meta:
    menu:
        for: jokes
        key: gcl-images
        icon: image
        parent:
            key: gcl
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
    <NH1>{{ $texta.get(['menus', 'jokes', 'gcl-images']) }}</NH1>
    <p>😀(*^_^*)😂🤣印尼照片</p>
    <NImageGroup>
        <NSpace>
            <NImage
                v-for="image in images"
                @dblclick="onClick()"
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
