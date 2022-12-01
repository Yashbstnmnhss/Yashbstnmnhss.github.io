<route lang="yaml">
name: zang
</route>

<script lang="ts" setup>
import Chatter from '../../../components/models/ChatHistory.vue'
import { NH1, NCard, NCode, NScrollbar, NSpace, NBlockquote } from 'naive-ui'

const ws = [
    {
        avatar: 'WS',
        username: 'WS',
        content: `
            距高考还剩885天。时间虽长,但它比初中三年消失的更快。初中三年留下过多的遗憾,到了高中三年,我绝不会给自己留下半分遗憾,为自己远大的志向而奋斗去实现它,为自己而战。
            <br/>
            &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;苦三年又如何?再苦一百年那又如何?
            <p align="right">一一王</p>
            石安 <br/>
            愿在2025年高考,金榜题名,考到自己理想的大学。 <br/>
            &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;在将来,希望不是别人选择你愿,而是你选择别人! <br/>
            天空依旧那么蓝,山依旧那么的高,海依旧那么浩瀚,宇宙依旧那么奥秘,唯独自己不断向最高境界奔去,创造属于自己的世界!❤ <br/>
            <u style="color: rgb(94, 102, 148)">收起</u>
        `,
    },
]
</script>

<template>
    <NH1>{{ $t('layouts.JokesLayout.zang') }}</NH1>
    <NSpace vertical>
        <NCard title="文件一 风魔龙怒怒怒">
            <video
                controls
                muted
                loop
                style="max-width: 100%"
                src="https://uploadstatic.mihoyo.com/ys-obc/2021/04/03/4359827/01706efa94061354a60a22a0ff8a8927_7268132782336279099.mp4"
            />
            <br />
            <br />
            一天清晨 你停下车子背起书包 向着教学楼方向走去
            <br />
            <br />

            <strong style="font-size: larger">"X!X!X!"</strong>
            <br />

            风魔龙叫出了你的名字 并且每个字之间都加了感叹号
            <br />
            <br />

            瞬间 天气骤变 疯狂雨骤 你惊恐地看向四周 不知所措
            <br />
            风魔龙在你不远处盘旋飞舞 手上拿着她这周值日的扫帚
            <br />
            她早已发现了你 毕竟已经叫出了你的名字和三个感叹号
            <br />
            甚至贴心地 用国家法律规定的引号引起来并加粗加大了字体 足以见你身份之不平凡
            <br />
            ...
            <br />
            突然 风魔龙疯了似的拿扫把抡向你所在的方位
            <br />
            一切太突然了 你还是躲晚了一步
            <br />
            此时
            <s>疯</s>
            风魔龙一脸白痴样看着你
            <br />
            你不为所动 因为现在你觉得很迷惑 这是
            <mark>迷惑&ThinSpace;性行为</mark>
            <br />
            <s>疯</s>
            风魔龙有些不高兴 握紧了手中的扫把 表现得有些失落
            <br />
            <br />
            <strong style="font-size: larger">
                "
                <ruby>
                    C
                    <rt>
                        <ruby style="font-weight: 200">
                            centralized &ThinSpace;
                            <rt style="font-weight: 100">集中式</rt>
                        </ruby>
                    </rt>
                    N
                    <rt>
                        <ruby style="font-weight: 200">
                            network &ThinSpace;
                            <rt style="font-weight: 100">网络</rt>
                        </ruby>
                    </rt>
                    M
                    <rt>
                        <ruby style="font-weight: 200">
                            management
                            <rt style="font-weight: 100">管理</rt>
                        </ruby>
                    </rt>
                </ruby>
                怎么不搭理我 X!X!X!!"
            </strong>
            <br />
            风魔龙一脸期望而又有些迷茫地问道 甚至憋出了
            <small style="font-size: 0.05vh">
                "一切管理手段的最终目的永远是保障网络的安全运行"
            </small>
            <br />
            <br />
            想起来那次 你与风魔龙相遇在西北方的风龙废墟
            <br />
            同你一起的还有生日相同一天的FUZE 还有红头发 还有...
            <br />
            你们一起攀上塔顶 摔入结界 经过一小会儿的白屏加载 你已翱翔在天穹
            <br />
            风魔龙在你的前方以某种正好你追不上的速度前行着
            <br />
            你奋力追赶 趁着风圈 可以获得一阵的加速度
            <br />
            而在你靠近她时 你射出了些东西 砸向的是------
            <br />
            风魔龙背上的痔疮
            <br />
            原来 你等众人并不是游手好闲 亦或是被动困在了无风之地
            <br />
            你们而是在为风魔龙治痔疮 因为就在这之前不久 她就因为痔疮发作而闹翻了整座岛上村
            <br />
            背后的故事令人暖心"""""
            <br />
            <br />
            回过神来 她还在拿着笤帚进行
            <mark>义务值日活动</mark>
            因为她肩上还残留着这几个字
            <br />
            你拍了拍身子 重新开始行走 相对风魔龙远离 相对教学楼靠近
            <br />
            风魔龙在你的背后 似乎还在说什么 不过那不重要了
            <br />
        </NCard>
        <NCard title="文件二 太阳">
            <NBlockquote>
                诶呀 你快点! <br />
                转过来 <br />
                别闹了 你这人怎么这样啊~! <br />
                我真是服了你了 <br />
                你能不能别闹了? <br />
                待会维尼该叫我啊 你快点教我!
            </NBlockquote>
            <strong>哇(哦(啊))(多人女生和声)</strong> 好帅啊! 屑存在感大帅哥! <br />
            诶呀 你是不是有病 你别以为你长得帅我就(*绷不住笑)哈哈哈
            <NBlockquote>
                诶, 你知道冰淇凌和冰激凌的区别吗? <br />
                <i>- 莫名的问题使你备感疑惑</i> <br />
                <i>- 显然你有些好奇是啥</i> <br />
                <strong>口感上的区别~</strong> <br />
                <i>- 过会儿 她还贴心地画了图 以便你理解</i> <br />
                <NBlockquote>
                    <i
                        >- 以下内容来自<a href="https://www.zhihu.com/question/29068215">这篇知乎</a
                        >中的评论</i
                    >
                    <br />
                    <strong
                        >两者没有区别，只是不同称谓。一般冰淇淋是正式的名称，所以冰激淋也可以做为俗称。</strong
                    >
                    <br />
                    <strong>冰淇淋 冰激凌 是同一种东西的不同翻译。</strong> <br />
                </NBlockquote>
                <i>- 冲浪后 你发现她仅仅是个爱跟风又幼稚且盲目的乐子罢了</i> <br />
                <mark>"口~ 感~ 上~ 的~ 区~ 别~"</mark>😂
            </NBlockquote>
            诶, 你是小太阳幼儿园的呗? 你是不是跟我一个幼儿园啊
            <i>孙笑川袭击小太阳幼儿园</i>
            <NBlockquote>
                You are the future
                <br />
                You are the reich
                <br />
                Today, we tear down the old
                <br />
                Here is your Fuhrer's gift to you
                <br />
                A new begining!
                <br />
                The sun! <br />
                <i>- 摘自"小太阳幼儿园园歌"</i>
            </NBlockquote>
        </NCard>
        <NCard title="文件三 还没开始就结束了">
            <Chatter :msgs="ws" />
        </NCard>
    </NSpace>
</template>
