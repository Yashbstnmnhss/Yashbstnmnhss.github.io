<route lang="yaml">
name: fuze-sayings-original
</route>

<script setup lang="ts">
import {
    NH1,
    NSpace,
    NButton,
    NIcon,
    NBlockquote
} from 'naive-ui'
import {
    VolumeHighOutline as VolumeIcon
} from '@vicons/ionicons5'

const synth = window.speechSynthesis
const msg = new SpeechSynthesisUtterance()
var isSpeaking = false

const read = () => {
    if (isSpeaking) {
        synth.cancel()
        isSpeaking = false
        return
    }
    msg.text = document.getElementById('text')?.innerText ?? '114514 怎么undefined了'
    msg.lang = 'zh-CN'
    msg.volume = 1
    msg.rate = 0.8
    msg.pitch = 2
    msg.onerror = msg.onend = () => {
        isSpeaking = false
    }
    synth.speak(msg)
    isSpeaking = true
}
</script>

<template>
    <n-space justify="space-between">
        <n-h1>{{ $t('layouts.JokesLayout.fuze-sayings-original') }}</n-h1>
        <n-button @click="read()">
            <template #icon>
                <n-icon>
                    <VolumeIcon />
                </n-icon>
            </template>
            听听<strong>仅部分设备支持</strong>的语音
        </n-button>
    </n-space>
    <s>摘自《圣经》第二章第三节</s>
    <n-blockquote id="text">
        网络上的感情不要带到现实里
        <br /> 绝望是来自过去的
        <br /> 没事
        <br /> 你骂吧
        <br /> 我这人心态好
        <br /> 说实话
        <br /> 对于我这个不在现场的人
        <br /> 想要劝解你
        <br /> 绝对不是一件容易的事
        <br /> 你有没有想过一件事情
        <br /> 引力是什么
        <br /> 人与人之间为什么会<strong>相遇</strong>
        <br /> 明明<strong>相遇</strong>后，总会出现各种的挫折
        <br /> 就像同学间的友谊，恋人之间的<strong>爱</strong>情
        <br /> 早早晚晚都会出现不可避开的矛盾
        <br /> 那人与人之间为什么会<strong>相遇</strong>
        <br /> 明明不再<strong>相遇</strong>
        <br /> 什么什么是真的
        <br /> 虽然我刚刚退游回归，并不想理你这个问题
        <br /> 但是我认为应该是假的
        <br /> 不过也有可能是真的
        <br /> 这没准就是另外一个事实呢
        <br /> 没准是来自深渊的哥哥与万叶呢
        <br /> 好吧，回到刚才那个问题
        <br /> 你觉得人与人为什么会<strong>相遇</strong>呢？
        <br /> 这个问题我早就想到了
        <br /> 但是我一直无法得到一个能让我自己满意的答案
        <br /> 我希望你也能仔细想想这个问题
        <br /> 这只是一个小问题
        <br /> 但是如果能够解答出完美无缺的答案
        <br /> 那么，人就会领悟其中的真谛
        <br /> 我认为游戏只是抒发情感的工具
        <br /> 只不过是人们为了追求愉悦而创造的工具罢了
        <br /> <mark>我打不过12-3</mark>，这是事实
        <br /> 摆在眼前的事实
        <br /> 这件事情我无法逃避
        <br /> 随你们怎么说吧
        <br /> 我还是想不明白
        <br /> 既然人与人之间<strong>相遇</strong>，就一定会有不可避免的冲突
        <br /> 一定会有骂街，打骂，最终不欢而散的结局
        <br /> 那人与人为什么会<strong>相遇</strong>
        <br /> 我想了很久
        <br /> 我个人给出的答案是
        <br /> 是因为<strong>爱</strong>
        <br /> 是人们心中那被称之为良心的东西
        <br /> 这种东西促使人不为自己增加罪恶感
        <br /> 能够宽容一切的<strong>爱</strong>
        <br /> 在面对他人的语言攻击，精神侮辱上
        <br /> 给予其宽容的<strong>爱</strong>
        <br /> 能让人们以后
        <br /> 不为当时自己一时冲动或是心血来潮的时候所犯的错误感到悲痛
        <br /> 你可以骂我
        <br /> 因为我打不到的东西。你可以得到
        <br /> 你有这个资格骂我
        <br /> 但是我所希望的
        <br /> 是人能够永远不会被过去所抛弃
        <br /> 不会为过去自己做的事所感到伤心，自卑，甚至是恐惧
        <br /> 随你怎么说吧
        <br /> 但我仍然希望你们可以想想这个问题
        <br /> 人与人为什么会<strong>相遇</strong>
        <br /> 这个问题并不简单
        <br /> 每个人都有自己的答案
        <br /> 当他想出真正完美无缺的答案的时候
        <br /> 那么，他和自己的友人，恋人，家人，社会上的所有人
        <br /> 绝对有着最美好的时光
        <br /> 虽然那可能是悲伤的，甚至是让自己失望的
        <br /> 感觉绝对是不会让自己所后悔的
        <br /> 那时候你就能战胜自己的过去
        <br /> 人总会变的
        <br /> 人与人<strong>相遇</strong>的人也会变的
        <br /> 但是只要明白了其中的答案
        <br /> 有了属于自己的答案
        <br /> 也能够感悟新的交往
        <br /> 就算是让自己心痛的
        <br /> 也绝对能够找到自己满意的一面
        <br /> 超越了自己过去的一面
        <br /> 让自己体会到人与人之间<strong>相遇</strong>的<strong>爱</strong>
        <br /> 而不只只是弥留在与他人造成何等悲伤的过去
        <br /> 这就是我所认为的
        <br /> 我真的希望你们能好好想想这个问题
        <br /> 没有关系
        <br /> 就算你们不去想这个问题。也没有关系
        <br /> 我不能去强迫
        <br /> 但是我真的希望可以去想想
        <br /> 自己生存的目的是为了什么
        <br /> 人与人之间的交流是为了什么
        <br /> 自己在过去所做的错误究竟能否弥补
        <br /> 能否弥补自己所称之为良心的东西
        <br /> 这就是我想说的了了
        <br /> 行啊，玩明白了
        <br /> [菜汪]请使用最新版手机QQ体验新功能
        <br /> 行啊，又说<strong>黑历史</strong>
    </n-blockquote>
</template>