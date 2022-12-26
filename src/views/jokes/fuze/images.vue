<route lang="yaml">
name: fuze-images
meta:
    menu:
        for: jokes
        key: fuze-images
        icon: image
        parent:
            key: fuze
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
    <NH1>{{ $texta.get(['menus', 'jokes', 'fuze-images']) }}</NH1>
    <p>👍👍👍帅帅帅(′д｀ )…彡…彡</p>
    <NImageGroup>
        <NSpace>
            <NImage
                v-for="image in images"
                @dbclick="onClick()"
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
