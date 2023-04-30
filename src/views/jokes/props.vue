<route lang="yaml">
name: props
meta:
    keepAlive: false
    menu:
        for: jokes
        key: props
        icon: settings
        group: props
        order: 114514
</route>

<script setup lang="ts">
import {
    NTabs,
    NTabPane,
    NButton,
    NScrollbar,
    NCard,
    NList,
    NListItem,
    NThing,
    NIcon,
    NSpace,
    NText,
    NTimeline,
    NTimelineItem,
    NH1,
    NH2,
} from 'naive-ui'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMain } from '../../store'
import {
    Themes,
    getAchievement,
    Icons,
    apiTypes,
    DynamicsServices,
    assignUndefined,
} from '../portal'

const store = useMain(),
    storeRefs = storeToRefs(store),
    theme = storeRefs.theme,
    sidebar = storeRefs.sidebar,
    achieved = storeRefs.achievements.value.map(val => getAchievement(val))

const darkButtonType = ref('default'),
    lightButtonType = ref('default'),
    timelineAppendix = ref<apiTypes.TimelineItem[]>([])

const changeSidebar = () => (sidebar.value = !sidebar.value)
const changeTheme = (val: Themes) => {
    theme.value = val
    updateButtonType()
}
const updateButtonType = () => {
    darkButtonType.value = theme.value === Themes.dark ? 'primary' : 'default'
    lightButtonType.value = theme.value === Themes.light ? 'primary' : 'default'
}
onMounted(() => {
    updateButtonType()
    DynamicsServices.get<apiTypes.TimelineItem[]>('timeline')
        .then(
            val =>
                (timelineAppendix.value = val
                    .filter(val => val.title.length > 0 || val.text.length > 0)
                    .map(val =>
                        assignUndefined<apiTypes.TimelineItem, apiTypes.TimelineItem>(val, {
                            title: '',
                            text: '',
                            dashed: false,
                            time: '',
                            type: 'default',
                        })
                    ))
        )
        .catch(_ => (timelineAppendix.value = []))
})
const nowYear = new Date().getFullYear()
</script>

<template>
    <NTabs type="line" animated>
        <NTabPane name="设置">
            <NSpace vertical>
                <NText depth="3"> Bstnmnhss 3 · Vue技术支持 · 2022-{{ nowYear }}</NText>
                <NCard title="主题" hoverable>
                    <NButton
                        @click="changeTheme(Themes.dark)"
                        :type="(darkButtonType as any)"
                        style="width: 50%; height: 20vh"
                    >
                        <NScrollbar x-scrollable>
                            <span style="font-size: 6vw; word-break: break-all">黑暗</span>
                        </NScrollbar>
                    </NButton>
                    <NButton
                        @click="changeTheme(Themes.light)"
                        :type="(lightButtonType as any)"
                        style="width: 50%; height: 20vh"
                    >
                        <NScrollbar x-scrollable>
                            <span style="font-size: 6vw; word-break: break-all">光明</span>
                        </NScrollbar>
                    </NButton>
                </NCard>
            </NSpace>
        </NTabPane>
        <NTabPane name="成就">
            <NScrollbar x-scrollable trigger="none">
                <NList hoverable clickable>
                    <NListItem v-for="(item, index) in achieved" :key="index">
                        <NThing
                            content-style="margin-top: 10px;"
                            :title="$texta.get(`achievements.${item?.title || 'unknownTitle'}`)"
                            :description="
                                $texta.get(
                                    `achievements.${item?.description || 'unknownDescription'}`
                                )
                            "
                        >
                            <template #header-extra>
                                {{ item?.type || 'undefined' }}
                            </template>
                            <template #avatar>
                                <NIcon
                                    size="50"
                                    :color="
                                        item?.type === 'fantastic' ? 'orange' : 'rgb(36,204,255)'
                                    "
                                >
                                    <Component
                                        :is="
                                            Icons[
                                                item && item.icon && item.icon in Icons
                                                    ? item.icon
                                                    : 'medal'
                                            ]
                                        "
                                    />
                                </NIcon>
                            </template>
                        </NThing>
                    </NListItem>
                </NList>
            </NScrollbar>
        </NTabPane>
        <NTabPane name="后记">
            <UpdateLog />
            <NH1>大 时 间 线</NH1>
            <div style="overflow: auto; padding: 12px">
                <NTimeline horizontal>
                    <NTimelineItem
                        type="info"
                        line-type="dashed"
                        title="换群"
                        content="仙人掌保护协会被封了"
                        time="2021/3/11"
                    />
                    <NTimelineItem
                        type="info"
                        line-type="dashed"
                        title="Discord"
                        content="最初账号"
                        time="2021/10/28"
                    />
                    <NTimelineItem
                        type="info"
                        line-type="dashed"
                        title="日炎"
                        content="问世"
                        time="2021/10/31"
                    />
                    <NTimelineItem
                        type="info"
                        line-type="dashed"
                        title="开始卖惨"
                        content="与柯莱首条Discord"
                        time="2022/1/28 20:01"
                    />
                    <NTimelineItem
                        type="info"
                        line-type="dashed"
                        title="《广义相遇论》"
                        content="出版印刷"
                        time="2022/1/29 19:02:25"
                    />
                    <NTimelineItem
                        type="success"
                        title="出生了"
                        content="第三版大图书馆"
                        time="2022/4/1"
                    />
                    <NTimelineItem
                        type="info"
                        title="亻寸氵睾"
                        content="灵魂完工了"
                        time="2022/4/20"
                    />
                    <NTimelineItem
                        type="info"
                        title="格拉迪斯与柯莱"
                        content="新增俩卖惨乐子"
                        time="2022/5/4"
                    />
                    <NTimelineItem
                        type="info"
                        title="大更新一"
                        content="更新了一堆(我也不知道具体是啥)"
                        time="2022/6/14"
                    />
                    <NTimelineItem
                        type="info"
                        title="大更新二"
                        content="更新了114514个(日志这么写的..)"
                        time="2022/7/8"
                    />
                    <NTimelineItem
                        type="error"
                        title="亻寸氵睾的消失"
                        content="FUZE在此彻底失联"
                        time="2022/7/16 16:25"
                    />
                    <NTimelineItem
                        type="warning"
                        title="提问"
                        content="这日志的意义是啥呢."
                        time="2022/7/26"
                    />
                    <NTimelineItem
                        type="info"
                        title="大更新三"
                        content="个口,神女,联合国!"
                        time="2022/8/3"
                    />
                    <NTimelineItem
                        type="error"
                        title="三年的句号"
                        content="与三年告个别吧"
                        time="2022/9/1"
                    />
                    <NTimelineItem
                        type="info"
                        title="大更新四"
                        content="扁平化喽"
                        time="2022/10/9"
                    />
                    <NTimelineItem
                        type="info"
                        title="大更新五"
                        content="如你所见.."
                        time="2022/11/?"
                    />
                    <NTimelineItem
                        type="error"
                        title="最后的卖惨"
                        content="与柯莱维持了小一年后彻底断绝"
                        time="2022/12/12"
                    />
                    <NTimelineItem
                        type="info"
                        title="大更新六"
                        content="凹冈嗖浪"
                        time="2022/12/13"
                    />
                    <NTimelineItem
                        v-for="item in timelineAppendix"
                        :type="(item.type as any)"
                        :line-type="item.dashed ? 'dashed' : 'default'"
                        :title="item.title"
                        :content="item.text"
                        :time="item.time"
                    />
                </NTimeline>
            </div>
            <NH1> 荡然无存 后会无期 </NH1>
            <NH2> 凹冈嗖浪</NH2>
            丅廾巨尺巨 丨丂 冂口 从口尺巨 凵尸刀亼丅巨 冂口丅巨丂 日巨匚亼凵丂巨 丨 廾亼丅巨 丨丅
            亼冂刀 冂口 口冂巨 匚亼尺巨 亼日口凵丅 丨丅 亼冂丫从口尺巨 丨丅 日巨匚亼从巨 亼
            丫亼冂刀巨尺巨 日凵丅 丨 刀口冂丅 匚亼尺巨 丂丅丨厶厶 丅廾巨冂 丨丅 丂凵丨匚丨刀巨
            亼冂刀 日巨匚亼从巨 亼 巳廾口丂丅 亼尺口凵冂刀 从巨 巨匕巨尺丫刀亼丫 日凵丅 丨
            丂丅丨厶厶 刀口 冂口丅 丂匚亼尺巨 口彳 丨丅 日巨匚亼凵丂巨 丨丅 丅廾巨 口冂巨 口冂巨
            彳口凵尺 彳丨匕巨 口冂巨 彳口凵尺 丫巨亼廾 丂口 丨丅 亼厶厶 巳口冂巨 丅廾巨冂 丨
            廾亼匕巨 冂口 匚廾口丨匚巨 日凵丅 丂口 厶口冂巳
        </NTabPane>
    </NTabs>
</template>
