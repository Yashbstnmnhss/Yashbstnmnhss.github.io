<route lang="yaml">
name: fuze-sayings-original
meta:
    menu:
        for: jokes
        key: fuze-sayings-original
        icon: bookmark
        parent:
            key: fuze-sayings
            icon: book
            parent:
                key: fuze
</route>

<script setup lang="ts">
import { NH1, NSpace, NButton, NIcon, NBlockquote, NCard, NStatistic, useMessage } from 'naive-ui'
import { VolumeHighOutline as VolumeIcon } from '@vicons/ionicons5'
import { Logger, isMobile, useAchiever, randomRepeat, random } from '../../../portal'
import SayingPanel from '../../../../components/models/SayingPanel.vue'

const achiever = useAchiever()
const mobile = isMobile()
const message = useMessage()

const synth = !mobile ? window.speechSynthesis : null
const msg = !mobile ? new SpeechSynthesisUtterance() : null
var isSpeaking = false

const read = () => {
    if (mobile || !synth || !msg) {
        message.error('恭喜恭喜 那个不支持的设备说的就是你')
        return
    }
    if (isSpeaking) {
        synth.cancel()
        isSpeaking = false
        return
    }
    var str = document.getElementById('text')?.innerText
    if (str) {
        var has = '笑死我了打不过'
        has += randomRepeat('哈', 5, 15)
        str = str.replace(/12\-3/, `12-3${has}`)
    }
    Logger.debug('[Jokes.Fuze.Sayings.Original]', 'Reader text', '=', str)
    msg.text = str ?? '啊呐啦哇问号问号 怎么字符串未定义了'
    msg.lang = 'zh-CN'
    msg.volume = 1
    msg.rate = random(0.5, 1.875)
    msg.pitch = random(0.8, 2)
    msg.onstart = () => {
        isSpeaking = true
        achiever.achieve('sayings_inmind')
    }
    msg.onerror = msg.onend = () => (isSpeaking = false)
    synth.speak(msg)
    isSpeaking = true
}
</script>

<template>
    <NSpace vertical>
        <NSpace justify="space-between">
            <NH1>{{ $texta.get(['menus', 'jokes', 'fuze-sayings-original']) }}</NH1>
            <NButton @click="read()">
                <template #icon>
                    <NIcon>
                        <VolumeIcon />
                    </NIcon>
                </template>
                听听<strong>仅部分设备支持</strong>的语音
            </NButton>
        </NSpace>
        <NCard title="相遇论">
            <s>摘自《圣馒经》第二章第三节</s>
            <SayingPanel author="fuze" target="widemean-meet" />
        </NCard>
        <NCard title="统计">
            <NSpace :size="25">
                <NStatistic label="付泽" :value="2238"> </NStatistic>
                <NStatistic label="fuze" :value="302"> </NStatistic>
                <NStatistic label="彳亍" :value="1093"> </NStatistic>
                <NStatistic label="没尊严" :value="263">2021/6/6 13:56:45</NStatistic>
            </NSpace>
        </NCard>
    </NSpace>
</template>
