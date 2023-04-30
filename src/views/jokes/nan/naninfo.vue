<route lang="yaml">
name: nan-info
meta:
    menu:
        for: jokes
        key: nan-info
        label: nan
        icon: person
        parent:
            key: nan
            icon: person
</route>

<script lang="ts" setup>
import { h } from 'vue'
import { random } from '../../../lib/utils'
import Ye from '@/assets/images/jokes/nan/ye.png'
import Sand from '@/assets/images/jokes/nan/sand.png'
import SSK1 from '@/assets/images/jokes/nan/ssk1.png'
import SSK2 from '@/assets/images/jokes/nan/ssk2.png'
import SSK3 from '@/assets/images/jokes/nan/ssk3.jpg'
import SHUO from '@/assets/images/jokes/nan/shuo.png'
import Shout from '@/assets/images/jokes/nan/shout.png'
import Car from '@/assets/videos/jokes/nan/jiang.mp4'
import { NH1, NSpace, NCard, NImage, NScrollbar, NAlert } from 'naive-ui'
import Chatter from '../../../components/models/ChatHistory.vue'

const jiang = [
    {
        avatar: 'JIANG',
        username: '产权证',
        content: h('video', {
            src: Car,
            controls: true,
            style: { maxWidth: '100%', height: '200px' },
        }),
    },
    { avatar: 'JIANG', username: '产权证', content: '耶耶耶' },
]
const hacker = [
    {
        avatar: '月',
        username: 'Tom',
        content: `<div style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">
            在吗 <br/>
            我有个问题 <br/>
            你是怎么翻墙进外网的 <br/>
            </div>
        `,
    },
    {
        content: `<i style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">"你想干什么"</i>`,
    },
    {
        avatar: '月',
        username: 'Tom',
        content: `<div style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">
            我想看推特和YouTube <br/>
            我就想骂骂特朗普 <br/>
            拜登也行 <br/>
            我就是有点好奇 <br/>
            </div>
        `,
    },
    {
        content: `<i style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">(解释外面不干净)</i>`,
    },
    {
        avatar: '月',
        username: 'Tom',
        content: `<div style="
    text-shadow: 1px 1px 1px var(--n-color),
                -1px -1px 1px var(--n-color)
                ;">
            哦 <br/>
            那我还是不去了
            </div>
        `,
    },
]
</script>

<template>
    <colview>
        <NH1>{{ $texta.get(['menus', 'jokes', 'nan']) }}</NH1>
        <svg style="align-content: end" width="100" height="100" viewBox="0 0 100 100">
            <text
                x="35"
                y="30"
                style="
                    user-select: none;
                    width: 100%;
                    height: 50%;
                    font-size: 25px;
                    fill: var(--n-text-color);
                "
            >
                个
            </text>
            <text
                x="35"
                y="60"
                style="
                    user-select: none;
                    width: 100%;
                    height: 50%;
                    font-size: 25px;
                    fill: var(--n-text-color);
                "
            >
                口
            </text>
            <text
                x="60"
                y="80"
                style="
                    user-select: none;
                    width: 100%;
                    height: 50%;
                    font-size: 50px;
                    fill: var(--n-text-color);
                "
            >
                ♂
            </text>
        </svg>
    </colview>
    <NSpace vertical>
        <NCard title="文件一 网课时边开车边耶耶耶的屑" hoverable>
            <colview>
                <Chatter :msgs="jiang" />
                <span style="height: auto; align-self: baseline">
                    <NAlert title="专家点评" :show-icon="false" type="info">
                        白海林:"就没遇见像你们这种班的!没尊严了!"(粉笔RIP)
                    </NAlert>
                </span>
            </colview>
        </NCard>
        <NCard
            title="文件二 黑客牌扫描仪"
            :style="`background-image: url(${Sand}); background-position: right center; background-repeat: no-repeat; background-size: contain;`"
            hoverable
        >
            <Chatter :msgs="hacker" />
            <br />
            黑客呀! 我都黑不进去 (指简简单单在屏幕搜索栏打字) <br />
            凡事都要 先摘眼镜扫描扫描 <br />
            发个试卷→摘镜扫描 系个鞋带→摘镜扫描 认个熟人→摘镜扫描
        </NCard>
        <NCard
            title="文件三 在东欧打过二战"
            :style="`background-image: url(${Ye}); background-position: right center; background-repeat: no-repeat; background-size: contain;`"
            hoverable
        >
            <colview>
                <h1 class="sdl">斯大林</h1>
                <h1 class="lsf">罗斯福</h1>
                <h1 class="qjr">丘吉尔</h1>
            </colview>
            <div>
                二战德国跟中国是
                <span style="border-bottom: 1px dashed var(--n-text-color)">同盟</span>
                <span style="border-right: 1px dashed var(--n-text-color)">国</span>
                <br />
                吊打他们仨 -_-y
                <br />
                我艹你们{{ `亻${random(2, 10)}` }}妈
            </div>
        </NCard>
        <NCard
            title="文件四 拾枣"
            class="bgs"
            :style="`background:url(${SSK1}); background-size:contain; background-origin:fixed`"
        >
            <NSpace vertical>
                <NSpace>
                    <NScrollbar x-scrollable>
                        <NImage
                            :show-toolbar="false"
                            object-fill="cover"
                            class="hovernone"
                            :src="SSK2"
                        />
                    </NScrollbar>
                    <NScrollbar x-scrollable>
                        <NImage
                            :show-toolbar="false"
                            object-fill="cover"
                            width="200"
                            class="hovernone"
                            :src="SSK3"
                        />
                    </NScrollbar>
                </NSpace>
                <div>网络男神可与空气交流</div>
            </NSpace>
        </NCard>
        <NCard title="文件五 熊咆龙吟殷岩泉">
            <colview>
                <NScrollbar style="width: auto" x-scrollable>
                    <NImage :show-toolbar="false" object-fill="cover" :src="Shout" />
                </NScrollbar>
                <span style="align-self: flex-end">
                    <ruby>李<rt>lí</rt></ruby>
                    聪 智 <br />
                    钟(离)好帅啊~ <br />
                    ------正打歪着珊瑚宫心海的聪智
                </span>
            </colview>
        </NCard>
        <NCard title="文件六 圣阳世纪电视包装袋">
            <colview>
                <NScrollbar style="width: auto" x-scrollable>
                    <NImage :show-toolbar="false" object-fill="cover" :src="SHUO" />
                </NScrollbar>
                <span>
                    <NAlert title="名言金句" :show-icon="false" type="warning">
                        - "投放危险物质爆炸罪!" <br />
                        - "长大去圣阳世纪电视宣传包装袋!" <br />
                        - "单刃短柄匕首掏出你的心肝五脏!"
                    </NAlert>
                    <br />
                    语文考试中硕哥举起了手:"老师,'亵渎'的'渎'怎么写?" 老师抬头一言不发地看着他
                    <br />
                    还是考试,硕哥桌上有很多橡皮屑:"老师我这有点儿橡皮屑" <br />
                    又是考试,硕哥的好同学用异物扔硕哥:"老师我举报有人<strong>投掷</strong>我!"委屈地告状
                    <br />
                    硕哥的好同学们与硕哥打闹:"你们这俩鸟人 该死的! 放开我! 该死的" <br />
                    明媚的早上,硕哥一人拿着自己的繁体字化学笔记专注学习<br />直接坐在楼门口的水泥台上:"什么繁体字我又不是<strong>廣東</strong>人"
                    <br />
                    本上还贴心地写了下课提醒的备忘录
                    <br />
                    "我们俩班是联班!"(硕哥卖力地搬着凳子) <br />
                    <mark>硕!</mark>

                    ------很狠圣阳世纪员工硕哥
                </span>
            </colview>
        </NCard>
    </NSpace>
</template>

<style lang="less" scoped>
.mixin(@s) {
    animation-timing-function: steps(@s, start);
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-direction: alternate;
}
.sdl {
    animation-name: Fade;
    animation-delay: 0s;
    animation-duration: 2s;
    .mixin(2);
}
.lsf {
    animation-name: Fade;
    animation-delay: 2s;
    animation-duration: 2s;
    .mixin(3);
}
.qjr {
    animation-name: Fade;
    animation-delay: 4s;
    animation-duration: 2s;
    .mixin(4);
}
.hovernone {
    opacity: 1;
    transition: opacity ease-in-out 0.5s;
    .hovernone:hover {
        opacity: 0;
    }
}
.bgs {
    animation-name: Background-Slide;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-direction: alternate-reverse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

@keyframes Fade {
    from {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes Background-Slide {
    from {
        background-position: -200px 0;
    }
    to {
        background-position: 200px 0;
    }
}
</style>
