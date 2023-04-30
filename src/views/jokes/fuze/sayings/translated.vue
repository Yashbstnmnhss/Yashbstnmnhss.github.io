<route lang="yaml">
name: fuze-sayings-translated
meta:
    menu:
        for: jokes
        key: fuze-sayings-translated
        icon: bookmark
        parent:
            key: fuze-sayings
            icon: book
            parent:
                key: fuze
</route>

<script setup lang="ts">
import { NH1, NTabs, NTabPane, NBlockquote } from 'naive-ui'
import { useAchiever } from '../../../portal'
import SayingPanel from '../../../../components/models/SayingPanel.vue'

const achiever = useAchiever()
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'fuze-sayings-translated']) }}</NH1>
    <s>懒得做换行了 看着有点眼瞎 凑活凑活吧</s>
    <NTabs animated size="large" pane-class="tab-pane-style">
        <NTabPane name="1">
            <SayingPanel author="fuze" target="widemean-meet-1" />
        </NTabPane>
        <NTabPane name="2">
            <SayingPanel author="fuze" target="widemean-meet-2" />
        </NTabPane>
        <NTabPane name="3">
            <SayingPanel author="fuze" target="widemean-meet-3" />
        </NTabPane>
    </NTabs>
    <br />
    为什么会衍生出着三版呢? 问问谷歌生草机吧(现在大陆无法正常访问了[悲])
</template>
