<route lang="yaml">
name: zang
</route>

<script lang="ts" setup>
import Chatter from '../../../components/models/Chatter.vue'
import { NH1, NCard, NCode, NScrollbar, NSpace, NBlockquote } from 'naive-ui'

const ws = [
    {
        avatar: 'WS',
        username: 'WS',
        content: `
            距高考还剩885天。时间虽长,但它比初中三年消失的更快。初中三年留下过多的遗憾,到了高中三年,我绝不会给自己留下半分遗憾,为自己远大的志向而奋斗去实现它,为自己而战。
            <br/>
            &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;苦三年又如何?再苦一百年那又如何?
            <p align="right">一一王</p>
            石安 <br/>
            愿在2025年高考,金榜题名,考到自己理想的大学。 <br/>
            &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;在将来,希望不是别人选择你愿,而是你选择别人! <br/>
            天空依旧那么蓝,山依旧那么的高,海依旧那么浩瀚,宇宙依旧那么奥秘,唯独自己不断向最高境界奔去,创造属于自己的世界!❤ <br/>
            <u style="color: rgb(94, 102, 148)">收起</u>
        `,
    },
]
</script>

<template>
    <NH1>{{ $t('layouts.JokesLayout.zang') }}</NH1>
    <video
        controls
        muted
        loop
        style="max-width: 100%"
        src="https://uploadstatic.mihoyo.com/ys-obc/2021/04/03/4359827/01706efa94061354a60a22a0ff8a8927_7268132782336279099.mp4"
    />
    <NSpace vertical>
        <NCard>
            种太阳
            <br />
            <NScrollbar x-scrollable>
                <NCode
                    language="typescript"
                    trim
                    code="while (NaN != NaN) plantSun().then(() => fuckZang())"
                />
            </NScrollbar>
            种太阳
            <NBlockquote>
                You are the future
                <br />
                You are the reich
                <br />
                Today, we tear down the old
                <br />
                Here is your Fuhrer's gift to you
                <br />
                A new begining!
                <br />
                The sun!
            </NBlockquote>
        </NCard>
        <NCard title="还没开始就结束了">
            <Chatter :msgs="ws" />
        </NCard>
    </NSpace>
</template>
