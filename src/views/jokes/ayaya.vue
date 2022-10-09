<route lang="yaml">
name: ayaya
</route>

<script lang="ts" setup>
import Spoiler from '../../components/models/Spoiler.vue'
import Cat from '@/assets/images/jokes/ayaya/cat.jpg'
import Water from '@/assets/images/jokes/ayaya/water.jpg'
import Night from '@/assets/images/jokes/ayaya/night.jpg'
import Nani from '@/assets/images/jokes/ayaya/nani.jpg'
import Ayaya from '@/assets/videos/jokes/ayaya.mp4'
import { NH1, NBlockquote, NSpace, NCard, NImage, NScrollbar } from 'naive-ui'
</script>

<template>
    <NH1>{{ $t('layouts.JokesLayout.ayaya') }}</NH1>
    <NBlockquote>Association of Southeast Asian Nations</NBlockquote>
    <NSpace vertical>
        <NCard>
            东南亚真是正确的，客观的，合理的，明晰的，真实的，辩证的，深刻的，通达的，优美的，巧妙的，精辟的，雅正的，机智的，全面的，明白晓畅的，不偏不倚的，恰如其分的，滴水不漏的，不容质疑的，切中要害的，一针见血的，淋漓尽致的，深谙事理的，真知灼见的，发蒙振聩的，微言大义的，金声玉振的，透过现象看本质的，知其然而知其所以然的，可供世人仿效的，千古颠扑不破的
        </NCard>
        <NCard hoverable>
            <video :src="Ayaya" muted loop controls style="max-width: 100%" />
            <template #footer>
                首领绫绫
                <Spoiler>ayaya</Spoiler>
                正在发表振奋人心的演讲
                <Spoiler>(迫真)</Spoiler>
                ,视频有些崩坏
            </template>
        </NCard>
        <NCard title="菲律宾的生活">
            <NScrollbar x-scrollable>
                <NImage
                    object-fit="cover"
                    width="450"
                    :src="Water"
                    title="glasses of water"
                    alt="glasses of water"
                />
            </NScrollbar>
            <NScrollbar x-scrollable>
                <NImage
                    object-fit="cover"
                    width="450"
                    :src="Night"
                    title="菲律宾之夜"
                    alt="菲律宾之夜"
                />
            </NScrollbar>
            <template #footer>[图一]每天一杯水(1/1) [图二]美丽的夜景</template>
        </NCard>
        <NCard>
            <NScrollbar x-scrollable>
                <NImage
                    object-fit="cover"
                    width="450"
                    :src="Cat"
                    title="the quality you trust, now made e"
                    alt="the quality you trust, now made e"
                />
            </NScrollbar>
            <template #footer>
                日炎
                <Spoiler>rhianne</Spoiler>
                (凯亚单推人)的小猫, 生日快乐! 小猫!
            </template>
        </NCard>
        <NCard title="骨骼惊奇的四人">
            元旦夜
            <br />
            听歌
            <br />
            玩机器人
            <br />
            学英语
            <br />
            餐厅吃饭等半小时都没上菜
            <br />
            复习
            <br />
            烤电脑,政治
        </NCard>
        <NCard title="大人">
            <strong>lads言lads语</strong>
            <br />
            <mark>"你們so mean😭"</mark>
            <br />
            <NImage object-fit="cover" width="250" :src="Nani" title="nani" alt="nani" />
            <br />
            1.Chinglish 中英混用
            <br />
            2.使用繁体中文
            <br />
            3.喜欢加"吧"或:lmao:或 😭 (尤其是句末)
            <br />
            4.汉语欧化严重(例如形容词滥用) 浓浓的英语语法味道
            <br />
            5.极其奇怪的句意
            <br />
            <br />
            <strong>FEIFEI (陈斐)</strong>
            <br />
            攒原石ing 为了抽符合xp的人 喜欢内鬼舅舅
            <br />
            <mark>"he(神里绫人) is not handsome"</mark>
        </NCard>
    </NSpace>
</template>
