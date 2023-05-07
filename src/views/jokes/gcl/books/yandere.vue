<route lang="yaml">
name: gcl-books-yandere
meta:
    menu:
        for: jokes
        key: gcl-books-yandere
        icon: bookmark
        parent:
            key: gcl-books
            icon: book
            parent:
                key: gcl
</route>

<script setup lang="ts">
import SayingPanel from '../../../../components/models/SayingPanel.vue'
import { NH1, NTabs, NTabPane, NCard, NLi } from 'naive-ui'
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'gcl-books-yandere']) }}</NH1>
    <NTabs animated size="large" pane-class="tab-pane-style">
        <NTabPane name="C1">
            <SayingPanel author="clea" target="yandere-c1" />
        </NTabPane>
        <NTabPane name="C2">
            <SayingPanel author="clea" target="yandere-c2" />
        </NTabPane>
        <NTabPane name="C3">
            <SayingPanel author="clea" target="yandere-c3" />
        </NTabPane>
        <NTabPane name="C4">
            <SayingPanel author="clea" target="yandere-c4" />
        </NTabPane>
    </NTabs>
    <br />
    <NCard title="乐子的推特😂">
        <NLi>柯莱: <a href="https://twitter.com/mada46757690?s=20">@mada46757690</a> </NLi>
        <NLi>
            格莱迪丝:
            <a href="https://twitter.com/gladyss_ajaa?s=20">@gladyss_ajaa</a>,
            <a href="https://twitter.com/gladys_chndra?s=20">@gladys_chndra</a>
            <spoiler>"你长的真好看👎😂"</spoiler>
        </NLi>
    </NCard>
</template>
