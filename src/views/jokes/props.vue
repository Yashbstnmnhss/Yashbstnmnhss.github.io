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
    NTag,
    NCode,
    NH2,
    NTable,
} from 'naive-ui'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMain } from '../../store'
import {
    Themes,
    getAchievement,
    Icons,
    apiTypes,
    VERSION,
    BSTNMNHSS,
    getDatapacks,
    tokenizeMarkdown,
} from '../portal'

const store = useMain(),
    storeRefs = storeToRefs(store),
    theme = storeRefs.theme,
    achieved = storeRefs.achievements.value.map(val => getAchievement(val))

const darkButtonType = ref('default'),
    lightButtonType = ref('default'),
    timelineAppendix = ref<apiTypes.TimelineItem[]>([])

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
})
const nowYear = new Date().getFullYear()
const mode = import.meta.env.MODE

import { tokenize, parse, evaluate } from '../../lib/functions/kuo'

evaluate(
    parse(
        tokenize(`
(if false (: 
    (define a (: (print TheAFunction)))
    (a)
))
(print $a)
`)
    )
)
</script>

<template>
    <NTabs type="line" animated>
        <NTabPane name="设置">
            <NSpace vertical>
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
                <NCard title="数据包" hoverable>
                    <NList hoverable bordered>
                        <NListItem
                            v-for="(item, index) in Object.keys(getDatapacks())"
                            :key="index"
                        >
                            <NThing :title="item">
                                <template #header-extra>
                                    {{ index }}
                                </template>
                            </NThing>
                        </NListItem>
                    </NList>
                </NCard>
                <NSpace align="center" justify="center">
                    <NText depth="3">
                        {{ `${BSTNMNHSS}-${VERSION}` }} · Vue框架 · 2022-{{ nowYear }}</NText
                    >

                    <NTag :type="mode === 'production' ? 'primary' : 'warning'">
                        {{ mode }}
                    </NTag>
                </NSpace>
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
                                {{
                                    $texta.get([
                                        'views',
                                        'jokes',
                                        'props',
                                        'achievements',
                                        item?.type || 'undefined',
                                    ])
                                }}
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
        <NTabPane name="指南">
            <NH1>Kuo 括</NH1>
            <NH2>基本要素</NH2>
            <NTable>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>示例</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>标识</td>
                        <td>除井号、括号、引号、空白的所有字符</td>
                    </tr>
                    <tr>
                        <td>数字</td>
                        <td>-14.5 64e-5 .7159 0b1010 0xfff 0o777</td>
                    </tr>
                    <tr>
                        <td>文字</td>
                        <td>"双引号字符串" '单引号字符串 \n'</td>
                    </tr>
                    <tr>
                        <td>逻辑</td>
                        <td>true false</td>
                    </tr>
                    <tr>
                        <td>列表</td>
                        <td>[中括号包裹 以空格分隔项 ...]</td>
                    </tr>
                    <tr>
                        <td>字典</td>
                        <td>{ 键A 值A 键B 值B }</td>
                    </tr>
                    <tr>
                        <td>空值</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>调用</td>
                        <td>(函数名或可调用的值 参数...)</td>
                    </tr>
                </tbody>
            </NTable>
            <NH2>示例</NH2>
            <NCode
                language="kuo"
                word-wrap
                :code="`
(set a 1) # 声明a=1
(print $a) # $a是(get a)的语法糖 

(define my-function (: [x] (+ x 1))) 
'定义函数 define与set不同点是 define在全局作用域 而set在本地作用域'
'(:) 函数是(lambda)的别名 第一个参数可为列表或不填 传入需要捕获的参数名称'
'其余参数为函数体内容 默认返回最后一个表达式的结果'

(my-function 2) # 可直接调用 无需$或(get) 返回3

# 也可以使用(return value)函数在特定地方返回结果

# 一个字典
(set dict {
    a 1
    b 2
    c   # 不填为null
})
(set $dict.c 2) # 现在dict.c=2

# 同样该语法糖作用于列表 
(set list [1 2])
(set $list.0 0) # 列表:[0 2]

# 支持动态名称
(set name a)
(get $dict.$name) # (get $dict.a) => 1
`"
            />
        </NTabPane>
        <NTabPane name="后记">
            <NH1>大 时 间 线</NH1>
            <div style="overflow: auto; padding: 12px">
                <NTimeline>
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
                    <NTimelineItem type="info" title="大更新" content="很多" time="2023/5/7" />
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
        </NTabPane>
    </NTabs>
</template>
