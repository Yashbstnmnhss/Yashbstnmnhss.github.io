<route lang="yaml">
name: joke-home
meta:
    menu:
        for: jokes
        key: joke-home
        icon: home
        group: header
        order: -1
</route>

<script setup lang="ts">
import P5C from '../../components/models/P5.vue'
import ACSBar from '../../components/models/ACSBar.vue'
import P5 from 'p5'
import {
    NBlockquote,
    NElement,
    NSpace,
    NButton,
    useMessage,
    NCard,
    NDivider,
    NCode,
    NAlert,
} from 'naive-ui'
import { RouterLink } from 'vue-router/auto'
import { random, useAchiever } from '../portal'
import { ref, onMounted } from 'vue'

import Handwrite from '@/assets/images/textures/handwrite.jpg'
import FUZE1 from '@/assets/images/jokes/fuze/monster.png'
import FUZE2 from '@/assets/images/jokes/fuze/onTheBus.jpg'
import FUZE3 from '@/assets/images/jokes/fuze/fuzeShout.png'
import FUZE4 from '@/assets/images/jokes/fuze/fuzeshoutsmall.jpg'

const achiever = useAchiever()
const message = useMessage()

const sketch = (p: P5) => {
    let diameter: number,
        angle: number = 0

    let f1: P5.Image, f2: P5.Image, f3: P5.Image

    let xoff = 0.0,
        xincrement = 0.01

    p.setup = () => {
        p.createCanvas(500, 350)
        diameter = p.height - 10
        p.noStroke()
        p.fill(255, 204, 0)

        f1 = p.loadImage(FUZE1)
        f2 = p.loadImage(FUZE2)
        f3 = p.loadImage(FUZE3)
    }

    p.draw = () => {
        p.background(0)

        let d1 = 10 + (p.sin(angle) * diameter) / 4 + diameter / 4
        let d2 = 10 + (p.sin(angle + p.PI / 2) * diameter) / 4 + diameter / 4

        p.text('F1', 0, p.height / 4)
        p.text('F2', p.width / 4, p.height / 4)
        p.image(f1, 0, p.height / 4, d1, d1)
        p.image(f2, p.width / 4, p.height / 4, d2, d2)

        let n = p.noise(xoff) * p.width
        xoff += xincrement

        p.text('F3', n, p.height / 4)
        p.image(f3, n, p.height / 4)

        angle += 0.02
    }
}
const sketch2 = (p: P5) => {
    let yOff1: number, yOff2: number
    const step = 10
    p.setup = () => {
        p.createCanvas(500, 80)
        p.frameRate(1)
        yOff1 = p.height / 2 + 15
        yOff2 = p.height / 4
    }

    function sin1(x: number) {
        return p.sin(x) * step
    }
    function sin2(x: number) {
        return p.sin(x + p.PI / 2) * step
    }
    function drawFunction(func: (x: number) => number, offset: number) {
        p.beginShape()
        for (var x = 0; x <= p.width; x += step) {
            var y = -func(x)
            var ry = y + offset
            p.curveVertex(x, ry)
        }
        p.endShape()
    }

    p.draw = () => {
        p.background(0)
        p.noFill()
        p.strokeWeight(2)

        p.stroke(0, 255, 0)
        drawFunction(sin1, yOff1)
        p.stroke(0, 0, 255)
        drawFunction(sin2, yOff1)

        p.noStroke()
        p.fill(0, 255, 0)
        p.text('sin(x)', 1, sin1(1) + yOff1 + 15)
        p.fill(0, 0, 255)
        p.text('sin(x + π / 2)', 1, sin2(1) + yOff2 - 15)
    }
}
const sketch3 = (p: P5) => {
    let yoffset: number
    const step = 15
    p.setup = () => {
        p.createCanvas(500, 80)
        p.frameRate(1)
        yoffset = p.height / 2 + 15
    }

    function noise(x: number) {
        return p.noise(x) * step
    }
    function drawFunction(func: (x: number) => number, offset: number) {
        p.beginShape()
        for (var x = 0; x <= p.width; x += step) {
            var y = -func(x)
            var ry = y + offset
            p.curveVertex(x, ry)
        }
        p.endShape()
    }

    p.draw = () => {
        p.background(0)
        p.noFill()
        p.strokeWeight(2)

        p.stroke(255, 0, 0)
        drawFunction(noise, yoffset)

        p.noStroke()
        p.fill(255, 0, 0)
        p.text('noise(x)', 1, noise(1) + yoffset + 15)
    }
}
const sketch4 = (p: P5) => {
    var a = 0,
        s = 0,
        f4: P5.Image
    p.setup = () => {
        p.createCanvas(500, 200)
        p.noStroke()
        p.rectMode('center')
        f4 = p.loadImage(FUZE4)
    }
    p.draw = () => {
        p.background(0)

        p.fill(255)
        p.textSize(26)
        p.text('y = sin(x)', 5, 50)
        p.text('y = sin(x + π / 2)', 5, 100)

        a += 0.04
        s = p.cos(a) * 2
        p.translate(p.width / 2, p.height / 2)
        p.scale(s)
        p.fill(51)
        p.image(f4, 0, 0, 50, 50)
        p.translate(75, 0)
        p.fill(255)
        p.scale(s)
        p.image(f4, 0, 0, 50, 50)
    }
}
const sketch5 = (p: P5) => {
    let yoffset: number
    const mult = 10
    p.setup = () => {
        p.createCanvas(500, 80)
        p.frameRate(1)
        yoffset = p.height / 2 + 15
    }

    function midproduct(x: number) {
        return (((x * 9301 + 49297) % 233280) / 233280) * mult
    }
    function drawFunction(func: (x: number) => number, offset: number) {
        p.beginShape()
        for (var x = 0; x <= p.width; x += mult) {
            var y = -func(x)
            var ry = y + offset
            p.curveVertex(x, ry)
        }
        p.endShape()
    }

    p.draw = () => {
        p.background(0)
        p.noFill()
        p.strokeWeight(2)

        p.stroke(255, 0, 0)
        drawFunction(midproduct, yoffset)

        p.noStroke()
        p.fill(255, 0, 0)
        p.text('线性同余生成器', 1, midproduct(1) + yoffset + 15)
    }
}

var card: HTMLElement = ref(undefined as any)
const moveCard = (event: MouseEvent) => {
    const cumulativeOffset = (element: HTMLElement) => {
        var top = 0,
            left = 0
        do {
            top += element.offsetTop || 0
            left += element.offsetLeft || 0
            element = element.offsetParent as HTMLElement
        } while (element)

        return {
            top: top,
            left: left,
        }
    }
    const x = ((event.pageX - cumulativeOffset(card).left - 350 / 2) * -1) / 100
    const y = ((event.pageY - cumulativeOffset(card).top - 350 / 2) * -1) / 100
    const matrix = [
        [1, 0, 0, -x * 0.00005],
        [0, 1, 0, -y * 0.00005],
        [0, 0, 1, 1],
        [0, 0, 0, 1],
    ]
    card.style.transform = `matrix3d(${matrix})`
}
onMounted(() => (card = document.getElementById('card')!))
</script>

<template>
    <NSpace vertical justify="center">
        <NElement @mousemove="moveCard" @mouseleave="() => (card.style.transform = '')">
            <NSpace align="center" justify="center">
                <img
                    id="card"
                    title="亲手签名 珍宝"
                    :src="Handwrite"
                    class="handwrite"
                    draggable="false"
                    @contextmenu="void"
                />
            </NSpace>
        </NElement>
        <NAlert type="error"> 疯骗奸狡付泽一定要被制裁 任何馒头终将绳之以法 </NAlert>
        <NCard hoverable>
            <ACSBar
                @dblclick="achiever.achieve('SCP')"
                :level="'3'"
                :secondary-category="'Thaumiel'"
                :category="'Safe'"
                :disruption="'Vlam'"
                :risk="'Danger'"
            >
                <template #project-number>277353</template>
            </ACSBar>
        </NCard>
        <NCard title="描述" hoverable>
            乐联是由乐子成员组成的联盟
            <br />
            乐子旗帜整体为褪色的淡蓝色, 显目的"😂"与
            <RouterLink to="/jokes/fuze/fuzeinfo">F U Z E</RouterLink>
            的"F"
            <em>
                "一个由乐子组成的
                <s>反疯子主义</s>
                联盟"
            </em>
            <br />
            <strong><mark>事实上!</mark></strong>
            <br />
            <mark>乐子联盟 (乐联)</mark>
            一个
            <em>赤裸裸的</em>
            <strong>乐子</strong>
            联盟
            <br />
            <strong>丅廾巨 凵几丨口几 口彳 厶亼凵巳廾丨几巳弓丅口匚片弓 (凵厶)</strong>
            <br />
            共有5名
            <mark>常任成员</mark>
            (包括
            <RouterLink to="/jokes/fuze/fuzeinfo">FUZE</RouterLink>
            ), {{ random(4000, 10086) }}多名普通成员组成
            <br />
            (事实上 普通成员成员数量的变化
            <strong>不可测量</strong>
            这里为
            <em>最大值</em>
            )
            <br />
            现任主席 (乐子委员会总书记):
            <RouterLink to="/jokes/fuze/fuzeinfo">FUZE</RouterLink>

            <NBlockquote>
                联盟条约规定:
                <br />
                联盟中成员如果受到任何疯子或疯子组织的攻击, 其他成员必须一一切方式尽可能的给予援助
            </NBlockquote>

            <s>
                这也就是
                <mark>风险等级:需谨慎</mark>
                的原因 (尽管, 我是说也许 也许并不会有任何伤害)
            </s>
            <br />
            <br />
            最初乐联的创立是抵制他人继续将其成员当作乐子看待的抱团措施
            <br />
            但最后反而更加规范化了其成员的乐子行为并加之证实
            <br />
            也加强了各成员的乐子创造力
            <br />
            虽事与愿违 但客观来看其积极性不可轻易抹除
            <NDivider />
            乐联的成立时间(抑或叫做被我正式发现认可的时间)较晚, 并且存在时间短暂, 后期便空有其名
            <br />
            再到后期(其实刚过了几天都没有), 乐联多数成员宣布联盟岌岌可危, 甚至有人声称将要解体
            <br />
            (不过现在来看这些话似乎都得到了证实)
            <br />
            就在濒临解散,联盟胎死腹中之时,部分成员(如珊瑚宫心海)发动了
            <strong>819事件</strong>
            :
            <br />
            在原有联盟基础上进行改组, 联盟主旨为
            <mark>"针对屑存在感而联合起来"</mark>
            <br />
            然而, 819事件在持续不到两天的情况下就杳无音讯, 似乎标志着此次改组完全就是回光返照
            <NDivider />
            整个联盟昙花一现, 存在时间甚至以天为单位计量都需要小数点
            <br />
            然而, 其所带来的影响不可忽视, 像是这篇文章所记载的一样
            <br />
            现在的乐联更多指代的是
            <strong>这些事与人变成集合的系列名</strong>
            并不是那个短i命"联盟"
            <NDivider />
            而至于继续保留并使用这个联盟的名字, 绝不是纯粹的嘲讽嘲笑, 就像反复说到的一样:
            <br />
            <mark>
                那些包括乐联的父集与乐联的子集和这些所有的全集都是
                <strong>宝贵的精神财产,历史资料,美好回忆</strong>
            </mark>
            <br />
            借此名字再适合不过了
            <br />
            这些文章的意义并不在于让人嘲笑讥讽,在脑子里短暂滑过一笑
            <br />
            而在于记录当下或以前美好的时光趣事,不然它们通通会逝去,清空回收站,再也回不来,也回不去
            <br />
            "乐联"这个名字太适合作这些东西的标题了 它本身就寄托了很多乐子事
            <br />
            现在绝大多数(至少我能知道的) 都可以在这里放着了
            <br />
            乐联现在不构成任何威胁 反倒是很多乐子事情的标题
            <NDivider />
            后记:
            <br />
            乐联的成员很多都失联了 但这里还是会有很多记录的
        </NCard>
        <NCard title="特殊收容措施" hoverable>
            <s>收容啥呀 笑就完事了😂</s>
            <br />
            <strong>切记一定要远离疯子主义联盟</strong>
            <NDivider />
            277353在以每天46386人的速度递减(约等于五万),主要体现在中国大陆一年一度的
            <strong>
                <ruby>
                    初中学业考试和高中阶段学校招生考试
                    <rt>中考</rt>
                </ruby>
            </strong>
            中正常参加且获得正规成绩的学生数, 尤其是该数值带有负号时
            <br />
            一次著名的事故发生在202■年的中考, 教育部门下发的两个文件中显示:主城区17857
            <span class="hover-hide">0</span>
            , 全市125471, 然而主城区却比全市多了五万, 这打破了全集与子集的关系,
            从而引发第四次数学危机 同时,其又变相证明了量子力学中的量子纠缠与叠加态,
            又可以成为物理学界一颗璀璨的明星
            <br />
            <h2>盒子测试</h2>
            这儿有个盒子,设法用它装下整个277353并保证它不会逃出, 设想一下 如果是你 你会怎么做?
            <br />
            用啥样的盒子? 方的? 圆的? 三角的? 椭圆的? 棱边的? 柱状的? 锥状的? 榫状的? 矛状的?
            扭曲的? 平直的? 内凹的? 外凸的? 有角的? 有弧的? 有贝塞尔曲线的? 超出三维的立体的?
            无限小的? 无限大的? 似点的? 似线的? 似面的? 四不像的? 谷形的? 穴形的? 滩形的? 川形的?
            风形的? U形的? V形的? 棒形的? 丁形的? 十形的? 一形的? 馒头形的?
            <br />
            怎么让它逃不走??? 快说啊
        </NCard>
        <NCard title="原理" hoverable>
            <NSpace vertical>
                <colview>
                    <P5C style="width: auto" :sketch="sketch" />
                    <span>
                        如图 F1,F2做
                        <code>sin</code>
                        缩放运动, 其表达式为
                        <br />
                        <NBlockquote>
                            <NCode
                                language="typescript"
                                trim
                                word-wrap
                                :code="`setup: \n  刀丨亼从巨丅巨尺 = height - 10 \n  亼几巳厶巨 = 0 \nupdate: \n  F1.width, F1.height = (10 + (sin(亼几巳厶巨) * 刀丨亼从巨丅巨尺) / 4 + diameter / 4) \n  F2.width, F2.height = (10 + (sin(亼几巳厶巨 + π / 2) * 刀丨亼从巨丅巨尺) / 4 + 刀丨亼从巨丅巨尺 / 4) \n  亼几巳厶巨 += 0.02
                            `"
                            />
                        </NBlockquote>
                        可见, '刀丨亼从巨丅巨尺'为波高, '亼几巳厶巨'自0恒递增0.02;
                        F1取'亼几巳厶巨'的
                        <code>sin</code>
                        值, F2取'亼几巳厶巨'与二分之一π之和的
                        <code>sin</code>
                        值
                        <br />
                        <NBlockquote>
                            <code>sin</code>
                            (x + π / 2) =
                            <code>cos</code>
                            (x)
                        </NBlockquote>
                        <br />
                        <code>sin</code>
                        ,
                        <code>sin(x + π / 2)</code>
                        (也就是
                        <code>cos</code>
                        ) 函数可以
                        <strong>平滑地</strong>
                        缩放大小
                    </span>
                </colview>
                <colview>
                    <rowview>
                        <P5C style="width: auto; max-width: 100%" :sketch="sketch2" />
                        <P5C style="width: auto; max-width: 100%" :sketch="sketch3" />
                    </rowview>

                    <span>
                        如图, 蓝色为F2部分函数, 绿色为F1部分函数
                        <NDivider />
                        F3为
                        <strong>一维柏林噪声</strong>
                        运动
                        <br />
                        <NBlockquote>
                            <NCode
                                language="typescript"
                                trim
                                word-wrap
                                :code="`setup: \n  xoff = 0.0 \n  xinc = 0.01 \nupdate: \n  F3.x = noise(xoff) * width \n  xoff += xinc
                            `"
                            />
                        </NBlockquote>
                        基于xoff得到一个噪声值, 并根据视图宽度缩放(* width), 且xoff恒增加xinc(0.01)
                    </span>
                </colview>
                <colview>
                    <P5C style="width: auto" :sketch="sketch4" />

                    <span>
                        如图, 为
                        <code>noise</code>
                        的函数图像, 缩放15倍<br />综上, 此两条表达式为主要原理
                    </span>
                </colview>
                <NDivider />
                <colview>
                    <P5C style="width: auto" :sketch="sketch5" />
                    <span>
                        <h3>f(x) = ((x * 9301 + 49297) % 233280) / 233280</h3>
                    </span>
                </colview>
            </NSpace>
        </NCard>

        <NCard title="并不简单的问题" hoverable closable>
            一个男人 但他失踪了 至少联系不上了
            <template #action>
                <NButton @click="message.warning('只是这样吗?')"> 闲置 </NButton>
                <NButton @click="message.success('听起来像是馒头的行为)')">
                    傻乎乎呆呆张嘴
                </NButton>
                <NButton
                    @click="
                        message.error(
                            '哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
                        )
                    "
                >
                    <strong>呐喊</strong>
                </NButton>
                <NButton
                    @click="
                        () => {
                            message.loading('THE NEW ORDER , LAST DAYS OF EUROPE')
                            achiever.achieve('last_days_of_europe')
                        }
                    "
                >
                    <s>彷徨</s>
                </NButton>
            </template>
            <template #footer>
                <small>他到底去哪了?</small>
            </template>
        </NCard>
    </NSpace>
</template>

<style lang="less" scoped>
.hover-hide:hover {
    opacity: 0;
    display: none;
}

.handwrite {
    width: 100%;
    min-height: 50vh;
    overflow: hidden;
    border-radius: 5px;
    user-select: none;
    -webkit-user-drag: none;
    box-shadow: -20px 30px 116px 0 var(--text-color-3);
    transition: transform 0.15s ease-out;
}
</style>
