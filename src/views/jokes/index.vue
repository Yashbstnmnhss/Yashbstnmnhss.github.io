<route lang="yaml">
name: joke-home
</route>

<script setup lang="ts">
import ACSBar from '../../components/ACSBar.vue'
import { useAchiever } from '../../composables/achievements'
import P5C from '../../components/P5.vue'
import P5 from 'p5'
import { NBlockquote, NSpace, NCard, NDivider, NCode } from 'naive-ui'
import { RouterLink } from 'vue-router'

import FUZE1 from '../../assets/images/jokes/fuze/monster.png'
import FUZE2 from '../../assets/images/jokes/fuze/onTheBus.jpg'
import FUZE3 from '../../assets/images/jokes/fuze/fuzeShout.png'
import FUZE4 from '../../assets/images/jokes/fuze/fuzeshoutsmall.jpg'
import NOTE from '../../assets/images/textures/note_block.png'

import { onMounted } from 'vue'
import { toImportInfo } from '../../utils/imports'

const achiever = useAchiever()
const sounds = toImportInfo(import.meta.globEager('../../assets/sounds/fuze/*.mp3'))

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
        p.background(255)
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
    let yOff1: number, yOff2: number
    const step = 15
    p.setup = () => {
        p.createCanvas(500, 80)
        p.frameRate(1)
        yOff1 = p.height / 2 + 15
        yOff2 = p.height / 4
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
        p.background(255)
        p.noFill()
        p.strokeWeight(2)

        p.stroke(255, 0, 0)
        drawFunction(noise, yOff1)

        p.noStroke()
        p.fill(255, 0, 0)
        p.text('noise(x)', 1, noise(1) + yOff1 + 15)
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
        p.background(255)

        p.fill(0)
        p.textSize(26)
        p.text('y = sin(x)', 0, 50)
        p.text('y = sin(x + π / 2)', 0, 100)

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

var fumusics: HTMLCollection
onMounted(() => {
    fumusics = document.getElementById('fumusics')?.children!
    for (var i = 0; i < fumusics.length; i++) {
        var audio = fumusics.item(i) as HTMLAudioElement
        audio.onended = () => (audio.src = '')
    }
})
const fumusic = (sound: string, index: number) => {
    var audio = fumusics[index] as HTMLAudioElement
    audio.pause()
    audio.src = sound
    audio.loop = false
    audio.play()
}
</script>

<template>
    <n-space vertical justify="center">
        <n-card hoverable>
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
        </n-card>
        <n-card title="描述" hoverable>
            乐子旗帜整体为褪色的淡蓝色, 显目的"😂"与
            <router-link to="/jokes/fuzeinfo">F U Z E</router-link>
            の"F"
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
            <em>赤裸裸の</em>
            <strong>乐子</strong>
            联盟
            <br />
            <strong>The Union Of Laughing-Stocks (UL)</strong>
            <br />
            共有5名
            <mark>常任成员</mark>
            (包括
            <router-link to="/jokes/fuzeinfo">FUZE</router-link>
            ), {{ Math.ceil(Math.random() * 10050) }}多名普通成员组成
            <br />
            (事实上 普通成员成员数量的变化
            <strong>不可测量</strong>
            这里为
            <em>最大值</em>
            )
            <br />
            现任主席 (乐子委员会总书记):
            <router-link to="/jokes/fuzeinfo">FUZE</router-link>
            <n-divider />
            联盟条约规定:
            <n-blockquote>
                联盟中成员如果受到任何疯子或疯子组织的攻击, 其他成员必须一一切方式尽可能的给予援助
            </n-blockquote>
            <s>
                这也就是
                <mark>风险等级:需谨慎</mark>
                的原因 (尽管, 我是说也许 也许并不会有任何伤害)
            </s>
        </n-card>
        <n-card title="特殊收容措施" hoverable>
            <s>收容啥呀 笑就完事了😂</s>
            <br />
            <strong>切记, 一定要远离 疯子主义 联盟</strong>
        </n-card>
        <n-card title="原理" hoverable>
            <n-space>
                <P5C :sketch="sketch" />
                <span>
                    如图 F1,F2做
                    <code>sin</code>
                    缩放运动, 其表达式为
                    <br />
                    <n-blockquote>
                        <n-code
                            language="typescript"
                            trim
                            word-wrap
                            :code="`setup: \n  diameter = height - 10 \n  angle = 0 \nupdate: \n  F1.width, F1.height = (10 + (sin(angle) * diameter) / 4 + diameter / 4) \n  F2.width, F2.height = (10 + (sin(angle + π / 2) * diameter) / 4 + diameter / 4) \n  angle += 0.02
                            `"
                        />
                    </n-blockquote>
                    可见, diameter为波高, angle自0恒递增0.02; F1取angle的
                    <code>sin</code>
                    值, F2取angle与二分之一π之和的
                    <code>sin</code>
                    值
                    <br />
                    <n-blockquote>
                        <code>sin</code>
                        (x + π / 2) =
                        <code>cos</code>
                        (x)
                    </n-blockquote>
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
                <P5C :sketch="sketch2" />
                <span>
                    如图2, 蓝色为F2部分函数, 绿色为F1部分函数
                    <n-divider />
                    F3为
                    <strong>一维柏林噪声</strong>
                    运动
                    <br />
                    <n-blockquote>
                        <n-code
                            language="typescript"
                            trim
                            word-wrap
                            :code="`setup: \n  xoff = 0.0 \n  xinc = 0.01 \nupdate: \n  F3.x = noise(xoff) * width \n  xoff += xinc
                            `"
                        />
                    </n-blockquote>
                    基于xoff得到一个噪声值, 并根据视图宽度缩放(* width), 且xoff恒增加xinc(0.01)
                </span>
                <P5C :sketch="sketch3" />
                <span>
                    如图, 为
                    <code>noise</code>
                    的函数图像, 缩放15倍
                </span>
                <n-divider />
                <span>综上, 此两条表达式为主要原理</span>
                <P5C :sketch="sketch4" />
            </n-space>
        </n-card>
        <n-card title="FU音盒" hoverable>
            <n-space>
                <img
                    v-for="(sound, index) in sounds"
                    :key="index"
                    :src="NOTE"
                    :title="sound.name"
                    :id="sound.name"
                    class="note-image"
                    @click="fumusic(sound.path, index)"
                />
            </n-space>
            <div id="fumusics">
                <audio v-for="(_, index) in sounds" :key="index" hidden src="">
                    NOT SUPPORTED, NOT SUPPORTED, NOT SUPPORTED
                </audio>
            </div>
        </n-card>
    </n-space>
</template>

<style lang="less" scoped>
.note-image {
    width: 15em;
    height: 100%;
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor;
    z-index: 1;
    max-width: 100%;
    max-height: 100%;
    user-select: none;
    user-zoom: none;

    &:hover {
        filter: contrast(125%);
    }
    &:active {
        transform: scale(1.25);
    }
}
</style>
