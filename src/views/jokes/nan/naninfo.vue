<route lang="yaml">
name: nan
</route>

<script lang="ts" setup>
import { h } from 'vue'
import { random } from '../../../lib/utils'
import Ye from '@/assets/images/jokes/nan/ye.png'
import Sand from '@/assets/images/jokes/nan/sand.png'
import Car from '@/assets/videos/jokes/nan/jiang.mp4'
import { NH1, NSpace, NCard } from 'naive-ui'
import Chatter from '../../../components/models/Chatter.vue'

const jiang = [
    {
        avatar: 'JIANG',
        username: '产权证',
        content: h('video', {
            src: Car,
            controls: true,
            style: { maxWidth: '100%', height: '200px' },
        }),
    },
    { avatar: 'JIANG', username: '产权证', content: '耶耶耶' },
]
const hacker = [
    {
        avatar: '月',
        username: 'Tom',
        content: `<div style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">
            在吗 <br/>
            我有个问题 <br/>
            你是怎么翻墙进外网的 <br/>
            </div>
        `,
    },
    {
        content: `<i style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">"你想干什么"</i>`,
    },
    {
        avatar: '月',
        username: 'Tom',
        content: `<div style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">
            我想看推特和YouTube <br/>
            我就想骂骂特朗普 <br/>
            拜登也行 <br/>
            我就是有点好奇 <br/>
            </div>
        `,
    },
    {
        content: `<i style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">(解释外面不干净)</i>`,
    },
    {
        avatar: '月',
        username: 'Tom',
        content: `<div style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">
            哦 <br/>
            那我还是不去了
            </div>
        `,
    },
]
</script>

<template>
    <NH1>{{ $t('layouts.JokesLayout.nan') }}</NH1>
    <NSpace vertical>
        <svg width="100" height="100" viewBox="0 0 100 100">
            <text
                x="35"
                y="30"
                style="
                    user-select: none;
                    width: 100%;
                    height: 50%;
                    font-size: 25px;
                    fill: var(--n-text-color);
                "
            >
                个
            </text>
            <text
                x="35"
                y="60"
                style="
                    user-select: none;
                    width: 100%;
                    height: 50%;
                    font-size: 25px;
                    fill: var(--n-text-color);
                "
            >
                口
            </text>
            <text
                x="60"
                y="80"
                style="
                    user-select: none;
                    width: 100%;
                    height: 50%;
                    font-size: 50px;
                    fill: var(--n-text-color);
                "
            >
                ♂
            </text>
        </svg>
        <NCard title="网课时边开车边耶耶耶的屑" hoverable>
            <Chatter :msgs="jiang" />
        </NCard>
        <NCard
            title="黑客牌扫描仪"
            :style="`background-image: url(${Sand}); background-position: right center; background-repeat: no-repeat; background-size: contain;`"
            hoverable
        >
            <Chatter :msgs="hacker" />
        </NCard>
        <NCard
            title="在东欧打过二战"
            :style="`background-image: url(${Ye}); background-position: right center; background-repeat: no-repeat; background-size: contain;`"
            hoverable
        >
            <h1 class="sdl">斯大林</h1>
            <h1 class="lsf">罗斯福</h1>
            <h1 class="qjr">丘吉尔</h1>
            二战德国跟中国是
            <span style="border-bottom: 1px dashed var(--n-text-color)">同盟</span>
            <span style="border-right: 1px dashed var(--n-text-color)">国</span>
            <br />
            吊打他们仨 -_-y
            <br />
            我艹你们{{ `亻${random(2, 10)}` }}妈
        </NCard>
        <NCard>中国</NCard>
    </NSpace>
</template>

<style lang="less" scoped>
.mixin(@s) {
    animation-timing-function: steps(@s, start);
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-direction: alternate;
}
.sdl {
    animation-name: Fade;
    animation-delay: 0s;
    animation-duration: 2s;
    .mixin(2);
}
.lsf {
    animation-name: Fade;
    animation-delay: 2s;
    animation-duration: 2s;
    .mixin(3);
}
.qjr {
    animation-name: Fade;
    animation-delay: 4s;
    animation-duration: 2s;
    .mixin(4);
}

@keyframes Fade {
    from {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
