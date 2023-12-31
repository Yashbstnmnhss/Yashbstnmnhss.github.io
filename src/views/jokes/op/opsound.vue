<route lang="yaml">
name: opsound
meta:
    menu:
        for: jokes
        key: opsound
        icon: volume
        group: expand
</route>

<script setup lang="ts">
import GS1 from '@/assets/sounds/genshin/genshinstart1.mp3'
import GS2 from '@/assets/sounds/genshin/genshinstart2.mp3'
import GS3 from '@/assets/sounds/genshin/genshinstart3.mp3'
import GS4 from '@/assets/sounds/genshin/tratsnihsneg.mp3'

import { NH1, NSpace, NText, NThing, NEllipsis, NAnchor, NAnchorLink, NBackTop } from 'naive-ui'
import { choice } from '../../portal'
const sounds: { name: string; extra?: string; url: string | (() => string) }[] = [
    {
        name: '富悦!',
        extra: '风刃',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/1925384b743e19b352a8b1d47d73891f_258929970929740596.mp3',
    },
    {
        name: '欢心!',
        extra: '荒星',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/45f444e223c1623eb5593b87a86343de_1288920449118209757.mp3',
    },
    {
        name: '随风而去吧!',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/3a048cae9bcda5302d313f139e6bfc3c_76165214760897997.mp3',
    },
    {
        name: '消失吧!',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/e0cabfec9efc6744fa35d5284cc911bc_4193042966327450581.mp3',
    },
    {
        name: '这...不是终点...',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/b996fb619770a2290231081093ca651d_1916366734641612613.mp3',
    },
    {
        name: '世界...咀嚼了我?...',
        extra: '世界...拒绝了我?',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/5ac94231950ba7ce541200b116be96de_4158668552683483344.mp3',
    },
    {
        name: '天雷鼓音!',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/521d58f4de4798f4005c081583e0bc17_237174685517234484.mp3',
    },
    {
        name: '化为尘埃吧!',
        url: 'https://uploadstatic.mihoyo.com/ys-obc/2022/05/13/6276411/b3f7d9011e7b92deb9bf14cfb5d6d0d3_115507631717893904.mp3',
    },
    {
        name: '趔车长是最棒的',
        extra: '列车长是最棒的',
        url: 'https://act-upload.mihoyo.com/sr-wiki/2023/05/07/75216984/ec6df7a8b61064f7b99426553090f9de_5996077766894241594.wav',
    },
    {
        name: '原神, 启动!',
        url: () => choice([GS1, GS2, GS3]),
    },
    {
        name: '!动启, 神原',
        url: GS4,
    },
]
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'opsound']) }}</NH1>
    <NAnchor affix>
        <NAnchorLink v-for="(sound, index) in sounds" v-anchor="`#_${index}`" :title="sound.name" />
    </NAnchor>
    <br />
    <NSpace vertical>
        <NThing v-for="(sound, index) in sounds" :key="index" :id="`_${index}`">
            <template #header>
                <NEllipsis line-clamp="3">
                    {{ sound.name }}
                </NEllipsis>
            </template>
            <template #description v-if="sound.extra">
                <NText italic>
                    <NEllipsis line-clamp="3">
                        {{ sound.extra }}
                    </NEllipsis>
                </NText>
            </template>
            <audio
                :src="typeof sound.url === 'string' ? sound.url : sound.url()"
                controls
                :key="index"
                :title="sound.name"
            />
        </NThing>
    </NSpace>
    <NBackTop />
</template>
