<route lang="yaml">
name: joke-home
</route>

<script setup lang="ts">
import ACSBar from '../../components/ACSBar.vue'
import Spoiler from '../../components/Spoiler.vue'
import {
    NBlockquote,
    NSpace,
    NCard,
    NDivider,
} from 'naive-ui'
import { RouterLink } from 'vue-router'
</script>

<template>
    <n-space vertical justify="center">
        <n-card hoverable>
            <ACSBar />
        </n-card>
        <n-card title="描述" hoverable>
            乐子旗帜整体为褪色的淡蓝色, 显目的"😂"与 <router-link to="/fuze">F U Z E</router-link>の"F"
            <em>"一个由乐子组成的<s>反疯子主义</s>联盟"</em> <br />
            <strong><mark>事实上!</mark></strong> <br />
            <mark>乐子联盟 (乐联)</mark> 一个<em>赤裸裸の</em><strong>乐子</strong>联盟 <br />
            <strong>The Union Of Laughing-Stocks (UL)</strong> <br />
            共有5名<mark>常任成员</mark> (包括 <router-link to="/fuze">FUZE</router-link>), 1100多名普通成员组成 <br />
            (事实上 普通成员成员数量的变化<strong>不可测量</strong> 这里为<em>最大值</em>) <br />
            现任主席 (乐子委员会总书记): <router-link to="/fuze">FUZE</router-link>
            <n-divider />
            联盟条约规定:
            <n-blockquote>
                联盟中成员如果受到任何疯子或疯子组织的攻击, 其他成员必须一一切方式尽可能的给予援助
            </n-blockquote>
            <s>这也就是<mark>风险等级:需谨慎</mark>的原因 (尽管, 我是说也许 也许并不会有任何伤害)</s>
        </n-card>
        <n-card title="特殊收容措施" hoverable>
            <s>收容啥呀 笑就完事了😂</s>
        </n-card>
    </n-space>
</template>

<style scoped>
</style>