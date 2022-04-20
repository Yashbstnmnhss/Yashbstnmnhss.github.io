<route lang="yaml">
name: fuze
</route>

<script setup lang="ts">
import FuzeAvatar from '@/assets/images/jokes/fuze/avatar.jpg'
import {
    NH1,
    NThing,
    NImage,
    NLi,
    NButton
} from 'naive-ui'
import { useRouter } from 'vue-router'
import Spoiler from '../../components/Spoiler.vue'

const router = useRouter()
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuze') }}</n-h1>
    <n-thing>
        <template #avatar>
            <n-image width="100" :src="FuzeAvatar" />
        </template>
        <template #header>
            <mark>Fuze</mark> (fuze, fUzE, FUZE, FUze, fuZE, FuzE, fUZe, ...)
        </template>
        <template #description>
            qilu furniture city (齐鲁家具城) <Spoiler><strong>七一路</strong>家具城</Spoiler>, fuzeland (付兰) <Spoiler>付兰永存!</Spoiler>
            <br />
            <u><strong>LONG LIVE FUZELAND!</strong></u><Spoiler>*btw</Spoiler>
        </template>
            114514岁, 是带哲学家, 曾在<strong>Discord</strong>上大肆蛊惑式宣传自己的事迹
										<Spoiler>(当 代 希 特 勒)</Spoiler>, 最常见的一句话为<em>"u r a weird guy who
											kept
											saying the word "fuze"!"(你是个大聪明)</em> <span class="spoiler">(震声)</span>,
										<small>(经常在宣传的后面)</small>用来<strong>强下定义</strong>, 打别人个措手不及,
										营造一种莫名其妙但好像真的是<s>那个大聪明一样</s> 这种手段被称为——————<strong>下 定 义</strong>
                                        <Spoiler>万 恶 之 源</Spoiler>
										(<small>define</small>)
            <br />
            <n-li>"Fuze, 你没尊严!"</n-li>
            <n-li>"Fuze, 我们请你吃苹果🍎!"</n-li>
            <n-li>"Fuze, 你没穿衣服!"</n-li>
            <n-li>"Fuze, 你臃肿!"<Spoiler>实 话 实 说</Spoiler></n-li>
            <n-li>"Fuze, 你无能狂怒!"</n-li>
            <n-li>"Fuze, 我们是你的<strong>好朋友!</strong>"<Spoiler>最 好 の 朋 友</Spoiler></n-li>
            <n-li>"<em>dei!</em> Fuze, 说普通话!"</n-li>
        <template #footer>
            <n-button @click="router.push('/fuzeblockisnotagame')">
                <mark>FUZE block</mark>
                <strong>is not </strong>
                <s>a game!</s>
            </n-button>
        </template>
    </n-thing>
</template>