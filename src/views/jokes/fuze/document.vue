<route lang="yaml">
name: fuze-document
</route>

<script lang="ts" setup>
import { NH1, NTabs, NTabPane, NBlockquote, NCard, NAlert } from 'naive-ui'
</script>

<template>
    <NH1>Fuzeland编年史</NH1>
    <NBlockquote>
        《Fuzeland》,二十五史之一,最初称为《Fuzeland编年史》,通常译为"傅兰",现又称《Crafuzey》,作者不祥
        <small>(学术界推测是最早到达齐鲁海的勘测队员)</small>
        。其为世界上
        <strong>第一部完整</strong>
        记载Fuzeland的编年体类百科作品,描述了Fuzeland自被发现以来至今约百年的历史,政治,人文等,
        将Fuzist们的智慧优美的叙述出来, 是最伟大的编年体百科之一。
    </NBlockquote>
    <NAlert type="warning">🚧前面的蛆, 等我什么时候写完在来探索吧!</NAlert>
    🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
    <NCard hoverable>
        <NTabs type="line" animated>
            <NTabPane name="地理">啊啊啊先不要进来啊</NTabPane>
            <NTabPane name="历史">🚧施工中施工中🚧</NTabPane>
            <NTabPane name="人文">快点走啊啊啊</NTabPane>
            <NTabPane name="理化">怒奴努弩啊啊w(ﾟДﾟ)w</NTabPane>
            <NTabPane name="政治">额说起来我原神任务还没做完</NTabPane>
        </NTabs>
    </NCard>
</template>
