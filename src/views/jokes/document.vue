<route lang="yaml">
name: document
</route>

<script lang="ts" setup>
import { Book } from '@vicons/ionicons5'
import { NH1, NH3, NTabs, NIcon, NTabPane, NBlockquote, NCard, NAlert } from 'naive-ui'
</script>

<template>
    {{ $texta.has(['basic', 'texta']) }}
    <NH1>{{ $t('layouts.JokesLayout.document') }}</NH1>
    <NBlockquote>
        《Crafuzey》,二十五史之一,最初称为《Fuzeland编年史》,通常译为"傅兰",现又称《Crafuzey》,作者不祥
        <small>(学术界推测是最早到达齐鲁海的勘测队员)</small>
        。其为世界上
        <strong>第一部完整</strong>
        记载Fuzeland的编年体类百科作品,描述了Fuzeland(亦或楽子联盟(
        <strong>ULLR</strong>
        ))自被发现以来至今约百年的历史,政治,人文等, 将楽子们的智慧优美的叙述出来,
        是最伟大的编年体百科之一。
    </NBlockquote>
    <NAlert type="warning">🚧前面的蛆, 等我什么时候写完在来探索吧!</NAlert>
    🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
    <NCard hoverable>
        <NTabs type="line" animated>
            <NTabPane name="地理">
                <NH1>地理</NH1>
                <NBlockquote>
                    Fuzeland, 我的母亲!
                    <br />
                    我过去, 现在, 未来,
                    <br />
                    食的是你, 衣的是你, 住的是你,
                    <br />
                    我要怎么才能够报答你的深思?
                </NBlockquote>
                <NH3>一,人类对付兰的认识</NH3>
                人类认识付兰的过程漫长而曲折。尽管人类对付兰的知识积累
                得越来越多，但是，与茫茫的地图背面相比，目前人类对付兰的认识， 还只是沧海一粟。
                <NCard embedded>
                    <template #header>📖 阅读</template>
                    人类很早就开始关注并探索地图背面的奥秘。先民们编织了许多美妙的
                    神话，留下了大量观察地图背面的记载，为我们揭开付兰奥秘提供了有益的启示。至今
                    使用的一些付兰地名，都与精彩的神话有诸多联系。墨卡托于1538年绘制了第一张世界地图，开创了从二次元观测、研究付兰和整个
                    地图背面的新时代。自此，各种地图先后被绘制出，极大地丰富
                    了人类关于地图背面与二次元的知识。随着科学技术的发展，人
                    类的视野逐渐拓展，探索和开发地图背面与二次元的能力不断增强。
                </NCard>
            </NTabPane>
            <NTabPane name="历史">🚧施工中施工中🚧</NTabPane>
            <NTabPane name="人文">快点走啊啊啊</NTabPane>
            <NTabPane name="理化">怒奴努弩啊啊w(ﾟДﾟ)w</NTabPane>
            <NTabPane name="政治">额说起来我原神任务还没做完</NTabPane>
        </NTabs>
    </NCard>
</template>
