<route lang="yaml">
name: markdowns-branches
meta:
    enable: true
    menu:
        for: jokes
        key: markdowns-branches
        icon: docText
        order: 277353
        group: expand
</route>

<script setup lang="tsx">
import { ref } from 'vue'
import { NCard, NH1, NSpace, NImage, NButton } from 'naive-ui'
import { Logger, type SelectiveSaveData } from '../../../lib'
import Branch, { type Route } from '../../../components/models/Branch.vue'
import { useContent } from '../../../store'

import FuzeImage from '@/assets/images/jokes/fuze/fuzeshout.png'
import Venti from '@/assets/images/branches/venti.png'
import Goshujin from '@/assets/images/branches/goshujin.png'

const store = useContent()

function op(
    items: {
        text: string
        mode?: 'next' | 'branch' | 'content' | 'rollback'
        content?: Route[]
        type?: 'default' | 'tertiary' | 'primary' | 'info' | 'success' | 'warning' | 'error'
    }[]
): Route {
    return ({ next, changeRoutes, renderAfter, removeRendered, onLoad, save }) => {
        onLoad(val => {
            if (typeof val === 'number' && val >= 0 && val < items.length) {
                doItem(items[val])
                return true
            }
            return false
        })
        function doItem(item: (typeof items)[number]) {
            removeRendered()
            if (item.mode === 'branch') changeRoutes(item.content ?? [])
            else if (item.mode === 'content') renderAfter(item.content ?? [])
            else if (item.mode === 'rollback')
                renderAfter([...(item.content ?? []), op(items.toSpliced(items.indexOf(item), 1))])
        }
        return (
            <NSpace>
                {items.map((item, index) => (
                    <NButton
                        type={item.type ?? 'default'}
                        onClick={() => {
                            doItem(item)
                            save(index)
                            next()
                        }}
                    >
                        {item.text}
                    </NButton>
                ))}
            </NSpace>
        )
    }
}

const routes: Route[] = [
    <div>
        <rightimg>
            <NImage
                style="height: 45vmin"
                src="https://qcloud.dpfile.com/pc/qYO4UpodrC7_gOveJa5dakZjmiIvGCL9h-AM4KQR9eaennM5ZIWPAig5yFlzPps905mDabRMXcC-NnPom6wedQ.jpg"
            />
        </rightimg>
        齐鲁路家具城位于七一路与向阳路交叉口香江家居广场 是一家快20年的老店了
        <br />
        春节过后来看看家具 可能是疫情原因 顾客很少 显得比较冷清
        <br />
        齐鲁家具城是伟大的FUZE现居住地 之前上小学时是在工人新村的 而现在已经沦为废墟了
        <br />
        严格上说不在齐鲁家具城 还要向东走一小段再拐入朝北的一条破烂水泥路 右面有一片施工用地
        <br />
        还没完 仍需前进再右拐再左拐再... 我们在这里就跟丢了 FUZE的朴素生活似乎不太愿意向外人展示
        <br />
        FUZE赴端典留学 上飞机过安检 把身上所有位置检查了个遍 安检机还是响不停 <br />
        最终发现是他钢铁般的意志被机器检测才导致的 <br />(<i>摘自《付兰日报》</i>)
    </div>,
    op([{ text: '不出所料' }, { text: '很符合对FUZE的印象' }]),
    <p>
        正确的 FUZE的住处很符合FUZE <br />
        或者物质是本原 正是工人新村和齐鲁家具城的地理环境与人口等因素造就了FUZE的气质 <br />
        FUZE的行为很奇怪 家里人称其为懒猫 帝国首领称其为松鼠 荣誉证书则称其为馒头 <br />
        他总能因为这些流言蜚语着急
    </p>,
    op([{ text: '我知道你很急' }, { text: '但你先别急' }]),
    <p>
        FUZE的"没尊严"话术来源于耶耶耶与煞白脸的白海林爆发 但他们其实是有尊严的 <br />
        只有FUZE和被摔在地上的一盒粉笔(<i>当且仅当被摔在地上时</i>)是真没尊严的 <br />
        "没尊严"这仨字成为FUZE的口头禅之前 他就没尊严了
        <br />
        小学一来就能看见他同桌拿着他的笔袋在过道穿梭 FUZE傻呵呵笑着追着 尤其是下午这情景出现概率最大{' '}
        <br />
        小学的体育课 FUZE一跑 后面一群女的在追 FUZE不亦乐乎 <br />
        初中的FUZE也一样 尤其是一开始就结识他最好的朋友——帝国首领 帝国首领对待FUZE是真不一般 <br />
        比如全课背后辱骂服务 下课道歉服务 FUZE很尴尬 很享受 <br />
        可惜FUZE最后兔死狗烹 与帝国首领断绝 跟钟帅、拾枣康等人组为乐子联盟
    </p>,
    op([{ text: '他们是不是玩原神?', type: 'success' }]),
    <p>
        <leftimg>
            <NImage style="height: 45vmin" src={Venti} />
        </leftimg>
        在FUZE消逝的前一段时间 他所有平台的头像不再是弱智的猫和老鼠 而是<strong>温迪</strong>
        显而易见的 他们很喜欢玩原神 尤其是FUZE <br />
        FUZE其实是温迪厨 只不过在这点上他比承认他自己是可莉厨萝莉控还隐晦
        <br />
        打着<strong>中世纪惯装的幌子</strong>故意让男角色温迪刻意女性化穿白丝
        为了满足某些个别群体的特殊癖好 这对于原神和米哈游倒没什么大惊小怪的
        毕竟他们"国产之光"也就只能这样想方设法火游戏了 <br />
        温迪的<mark>YAOI</mark>本子很多(魈也一样 但是没温迪妩媚 是为了满足另一种类型的怪癖)
        搜素框里有"原神"二字基本都能搜出来 而很少有他作为正常男性与其他女性的本子
    </p>,
]
</script>

<template>
    <NH1>BRANCHES</NH1>
    <NSpace vertical justify="space-between" style="padding: 2vw">
        <Branch v-model:save-data="store.branches" :routes="routes" />
        <!--<SelectiveManager
            v-model:save-data="store.branches"
            :routes="{
                '&': [
                    { target: '1' },
                    { type: 'option', target: '2', buttons: [{ text: 'nothing happened' }] },
                    { target: '3' },
                ],
            }"
        >
            <P name="1">
               
            </P>
            <P name="3">
                <rightimg>
                    <NImage
                        style="height: 45vmin"
                        src="https://qcloud.dpfile.com/pc/qYO4UpodrC7_gOveJa5dakZjmiIvGCL9h-AM4KQR9eaennM5ZIWPAig5yFlzPps905mDabRMXcC-NnPom6wedQ.jpg"
                    />
                </rightimg>
                齐鲁路家具城位于七一路与向阳路交叉口香江家居广场 是一家快20年的老店了
                <br />
                春节过后来看看家具 可能是疫情原因 顾客很少 显得比较冷清
                <br />
                齐鲁家具城是伟大的FUZE现居住地 之前上小学时是在工人新村的 而现在已经沦为废墟了
                <br />
                严格上说不在齐鲁家具城 还要向东走一小段再拐入朝北的一条破烂水泥路 右面有一片施工用地
                <br />
                还没完 仍需前进再右拐再左拐再... 我们在这里就跟丢了
                FUZE的朴素生活似乎不太愿意向外人展示
                <br />
                FUZE赴端典留学 上飞机过安检 把身上所有位置检查了个遍 安检机还是响不停 <br />
                最终发现是他钢铁般的意志被机器检测才导致的 <br />
                (<i>摘自《朝鲜日报》</i>)
            </P>
            <O name="2">
                <template v-slot="{ controller, buttons, next }">
                    {{ Logger.log(controller, buttons, next) }}
                    <button v-for="(bo, index) in buttons" :key="index" @click="next()">
                        {{ bo.text }}
                    </button>
                </template>
            </O>

            
            <Selective
                :button-space="{ justify: 'center' }"
                storable
                :options="[
                    {
                        text: '不出所料',
                        route: 'skip',
                    },
                    {
                        text: '很符合对FUZE的印象',
                        route: 'skip',
                    },
                ]"
            >
                <br />
                正确的 FUZE的住处很符合FUZE <br />
                或者物质是本原 正是工人新村和齐鲁家具城的地理环境与人口等因素造就了FUZE的气质 <br />
                FUZE的行为很奇怪 家里人称其为懒猫 帝国首领称其为松鼠 荣誉证书则称其为馒头 <br />
                他总能因为这些流言蜚语着急 <br />
                <P
                    storable
                    :options="[
                        {
                            text: '我知道你很急',
                            route: 'skip',
                        },
                        {
                            text: '但你先别急',
                            route: 'skip',
                        },
                    ]"
                >
                    <br />
                    FUZE的"没尊严"话术来源于耶耶耶与煞白脸的白海林爆发 但他们其实是有尊严的 <br />
                    只有FUZE和被摔在地上的一盒粉笔(<i>当且仅当被摔在地上时</i>)是真没尊严的 <br />
                    "没尊严"这仨字成为FUZE的口头禅之前 他就没尊严了<br />
                    小学一来就能看见他同桌拿着他的笔袋在过道穿梭 FUZE傻呵呵笑着追着
                    尤其是下午这情景出现概率最大 <br />
                    小学的体育课 FUZE一跑 后面一群女的在追 FUZE不亦乐乎 <br />
                    初中的FUZE也一样 尤其是一开始就结识他最好的朋友——帝国首领
                    帝国首领对待FUZE是真不一般 <br />
                    比如全课背后辱骂服务 下课道歉服务 FUZE很尴尬 很享受 <br />
                    可惜FUZE最后兔死狗烹 与帝国首领断绝 跟钟帅、拾枣康等人组为乐子联盟 <br />
                    <P
                        storable
                        :options="[
                            {
                                text: '他们是不是玩原神?',
                                route: 'skip',
                            },
                        ]"
                    >
                        <br />
                        显而易见的 他们很喜欢玩原神 尤其是FUZE <br />
                        在FUZE消逝的前一段时间 他所有平台的头像不再是弱智的猫和老鼠 而是<strong
                            >温迪</strong
                        >
                        <br />
                        <div>
                            
                        </div>
                        <P
                            storable
                            :options="[
                                {
                                    text: 'YAOI是什么',
                                    route: 'rollback',
                                    target: 'yaoi',
                                    icon: 'info',
                                },
                                {
                                    text: 'FUZE变态么',
                                    route: 'skip',
                                },
                            ]"
                        >
                            <template #yaoi>
                                <br />
                                YAOI像是男同性恋内容的本子 女性看的应该多一些
                                因为上学遇见的大多数女性都喜欢<mark>耽美</mark>
                            </template>
                            <br />
                            <div>
                                <rightimg>
                                    <NImage style="height: 40vmin" :src="Goshujin" />
                                </rightimg>
                                <div>
                                    他的癖好是有点怪 自从翻了别人的哔哩哔哩浏览记录 <br />
                                    "原来你也看夜守?" <br />
                                    他本人很喜欢看一些抽象的漫画解说视频
                                    这些漫画要么是性转男变女要么是女装要么是其他抽象类型 <br />
                                    FUZE自称喜欢看<mark>恋爱少女的养成方式</mark>
                                    里面有个叫<strong>日向</strong>的"女主角"(是男主的兄弟
                                    打扮成女生了) 男主就与日向模拟谈恋爱 <br />
                                    他还很喜欢一位作者——
                                    <strong>
                                        万杖<ruby>
                                            梓<rt>
                                                <ruby>zi<rt>FUZE: xin</rt></ruby>
                                            </rt>
                                        </ruby> </strong
                                    >——正是那部漫画的作者 也有同类型的作品罢 <br />

                                    一次向我要完本子网站后
                                    立刻兴致冲冲地打开了一个性转(抑或是伪娘?)的本子 自豪地截图给我看
                                </div>
                            </div>
                            <br />
                            <P
                                storable
                                :options="[
                                    {
                                        text: '弄得很舒服',
                                        target: 'com',
                                    },
                                    {
                                        text: '玩原神的都这样',
                                        target: 'gen',
                                    },
                                ]"
                            >
                                <template #com>
                                    <br />
                                    出来了 还不是一点半点 他自称自己习惯连发
                                    <strong>弄一次再弄一次</strong>
                                    不知如何做到的
                                </template>
                                <template #gen>
                                    <br />
                                    一针见血的 玩原神玩得
                                </template>
                                <br />
                                懒得写了 你该去玩原神了
                                <RouterLink to="../../genshin">启动</RouterLink>
                            </P>
                        </P>
                    </P>
                </P>
            </Selective>
            
        </SelectiveManager>-->
    </NSpace>
</template>
