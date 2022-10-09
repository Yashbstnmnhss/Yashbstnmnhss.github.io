<route lang="yaml">
name: fuze
</route>

<script setup lang="ts">
import FuzeAvatar from '@/assets/images/jokes/fuze/avatar.jpg'
import FuzeVideo from '@/assets/videos/jokes/fuze.mp4'
import { NH1, NThing, NImage, NLi, NButton, NCard, NDivider } from 'naive-ui'
import { useRouter } from 'vue-router'
import Spoiler from '../../../components/models/Spoiler.vue'
import Timetable from '../../../components/models/Timetable.vue'

import P5C from '../../../components/models/P5.vue'
import P5 from 'p5'

const router = useRouter()

const sketch = (p: P5) => {
    var w = 20,
        year = 0,
        cols: number,
        rows: number,
        board: number[][],
        next: number[][]
    p.setup = () => {
        p.createCanvas(720, 400)
        p.frameRate(1)
        cols = p.floor(p.width / w)
        rows = p.floor(p.height / w)
        board = new Array(cols)
        next = new Array(cols)

        for (var i = 0; i < cols; i++) {
            board[i] = new Array(rows)
            next[i] = new Array(rows)
        }

        init()
    }
    p.mousePressed = () => {
        init()
    }
    function init() {
        year = 0
        for (var i = 0; i < cols; i++)
            for (var j = 0; j < rows; j++) {
                board[i][j] =
                    i == 0 || j == 0 || i == cols - 1 || j == rows - 1 ? 0 : p.floor(p.random(2))
                next[i][j] = 0
            }
    }
    function generate() {
        year++
        for (var x = 1; x < cols - 1; x++)
            for (var y = 1; y < rows - 1; y++) {
                var neighbors = 0
                for (var i = -1; i <= 1; i++)
                    for (var j = -1; j <= 1; j++) neighbors += board[x + i][y + j]

                neighbors -= board[x][y]
                next[x][y] =
                    board[x][y] == 1 && neighbors < 2
                        ? 0 //孤独而亡
                        : board[x][y] == 1 && neighbors > 3
                        ? 0 //拥挤而亡
                        : board[x][y] == 0 && neighbors == 3
                        ? 1 //诞生新代
                        : board[x][y] //保持不变
            }

        var temp = board
        board = next
        next = temp
    }
    p.draw = () => {
        p.background(255)
        generate()
        for (var i = 0; i < cols; i++)
            for (var j = 0; j < rows; j++) {
                p.fill(board[i][j] == 1 ? 0 : 255)
                p.stroke(0)
                p.rect(i * w, j * w, w - 1, w - 1)
            }
        p.fill(0, 255, 255)
        p.noStroke()
        p.textStyle('bold')
        p.textSize(26)
        p.text(`FUZE${year}年`, 15, 45)
    }
}
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuze') }}</n-h1>
    <n-thing>
        <template #avatar>
            <n-image width="100" :src="FuzeAvatar" />
        </template>
        <template #header>
            <mark>Fuze</mark>
            (fuze, fUzE, FUZE, FUze, fuZE, FuzE, fUZe, ...)
        </template>
        <template #description>
            qilu furniture city (齐鲁家具城)
            <Spoiler>
                <strong>七一路</strong>
                家具城
            </Spoiler>
            , fuzeland (付兰)
            <Spoiler>付兰永存!</Spoiler>
            <br />
            <u><strong>LONG LIVE FUZELAND!</strong></u>
            <Spoiler>*btw</Spoiler>
        </template>
        114514岁, 是带哲学家, 曾在
        <strong>Discord</strong>
        上大肆蛊惑式宣传自己的事迹
        <Spoiler>(当 代 希 特 勒)</Spoiler>
        , 最常见的一句话为
        <em>"u r a weird guy who kept saying the word "fuze"!"(你是个大聪明)</em>
        <span class="spoiler">(震声)</span>
        ,
        <small>(经常在宣传的后面)</small>
        用来
        <strong>强下定义</strong>
        , 打别人个措手不及, 营造一种莫名其妙但好像真的是
        <s>那个大聪明一样</s>
        这种手段被称为——————
        <strong>下 定 义</strong>
        <Spoiler>万 恶 之 源</Spoiler>
        (
        <small>define</small>
        )
        <br />
        <n-li>"Fuze, 你没尊严!"</n-li>
        <n-li>"Fuze, 我们请你吃苹果🍎!"</n-li>
        <n-li>"Fuze, 你没穿衣服!"</n-li>
        <n-li>
            "Fuze, 你臃肿!"
            <Spoiler>实 话 实 说</Spoiler>
        </n-li>
        <n-li>"Fuze, 你无能狂怒!"</n-li>
        <n-li>
            "Fuze, 我们是你的
            <strong>好朋友!</strong>
            "
            <Spoiler>最 好 の 朋 友</Spoiler>
        </n-li>
        <n-li>
            "
            <em>dei!</em>
            Fuze, 说普通话!"
        </n-li>
        <template #footer>
            <n-button @click="router.push('/jokes/fuzeblockisnotagame')">
                <mark>FUZE block</mark>
                <strong>is not</strong>
                <s>a game!</s>
            </n-button>
        </template>
    </n-thing>
    <n-divider />
    <n-card>
        <video style="max-width: 100%" :src="FuzeVideo" controls muted loop />
    </n-card>
    <n-divider />
    <n-card title="BILIBILI">
        <iframe
            width="100%"
            height="375px"
            src="https://space.bilibili.com/1078829483"
            frameborder="0"
            allowfullscreen="false"
            allowpaymentrequest
            referrerpolicy="origin"
            @error="e => e.preventDefault()"
        ></iframe>
    </n-card>
    <n-divider />
    <n-card title="生命周期">
        <Timetable
            :content="[
                [
                    [
                        [6, 0, 0],
                        [7, 30, 0],
                    ],
                    '晨练',
                ],
                [
                    [
                        [7, 30, 0],
                        [8, 0, 0],
                    ],
                    '吃早饭',
                ],
                [
                    [
                        [8, 0, 0],
                        [10, 0, 0],
                    ],
                    '完成部分作业',
                ],
                [
                    [
                        [10, 0, 0],
                        [10, 30, 0],
                    ],
                    '自由活动',
                ],
                [
                    [
                        [10, 30, 0],
                        [11, 0, 0],
                    ],
                    '预习物理八上',
                ],
                [
                    [
                        [11, 0, 0],
                        [12, 0, 0],
                    ],
                    '完成部分作业',
                ],
                [
                    [
                        [12, 0, 0],
                        [14, 0, 0],
                    ],
                    '吃饭、午休',
                ],
                [
                    [
                        [14, 0, 0],
                        [16, 0, 0],
                    ],
                    '完成部分作业',
                ],
                [
                    [
                        [16, 0, 0],
                        [17, 0, 0],
                    ],
                    '英语听力',
                ],
                [
                    [
                        [17, 0, 0],
                        [18, 0, 0],
                    ],
                    '预习数学',
                ],
                [
                    [
                        [18, 0, 0],
                        [19, 0, 0],
                    ],
                    '吃饭',
                ],
                [
                    [
                        [19, 0, 0],
                        [19, 30, 0],
                    ],
                    '观看新闻、《话说长江》',
                ],
                [
                    [
                        [19, 30, 0],
                        [21, 30, 0],
                    ],
                    '预习八上生物、历史、地理、政治',
                ],
                [
                    [
                        [21, 30, 0],
                        [22, 30, 0],
                    ],
                    '语文阅读',
                ],
                [
                    [
                        [22, 30, 0],
                        [6, 0, 0],
                    ],
                    '睡觉',
                ],
            ]"
        />
    </n-card>
    <n-card title="FUZE维度">
        <P5C :sketch="sketch" />
    </n-card>
</template>
