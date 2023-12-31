<route lang="yaml">
name: fuze-info
meta:
    menu:
        for: jokes
        key: fuze-info
        label: fuze
        icon: person
        order: -5
        parent:
            key: fuze
            icon: person
</route>

<script setup lang="ts">
import VentiAvatar from '@/assets/images/branches/venti.png'
import KokomiAvatar from '@/assets/images/jokes/nan/shout.png'
import FuzeAvatar from '@/assets/images/jokes/fuze/avatar.jpg'
import FuzeVideo from '@/assets/videos/jokes/fuze.mp4'
import {
    NText,
    NH1,
    NThing,
    NImage,
    NBlockquote,
    NAlert,
    NLi,
    NBadge,
    NButton,
    NCard,
    NDivider,
    NScrollbar,
} from 'naive-ui'
import { useRouter } from 'vue-router/auto'
import Timetable from '../../../components/models/Timetable.vue'
import type { ChatMessage } from '../../portal'
import P5C from '../../../components/models/P5.vue'
import P5 from 'p5'
import ChatHistory from '../../../components/models/ChatHistory.vue'
import { h } from 'vue'

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
    //p.mousePressed = () => {
    //    init()
    //}
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

const fuze = (content: string): ChatMessage => ({
    avatar: [VentiAvatar],
    username: '亻寸氵睾',
    content,
})
const kokomi = (content: string): ChatMessage => ({
    avatar: [KokomiAvatar],
    username: '珊瑚宫心海',
    content,
})
const system = (content: string): ChatMessage => ({
    type: 'system',
    content: h(NText, { code: true }, { default: () => content }) as ReturnType<typeof h>,
})
/**
 * 中国电信10:44
会“81%
<
付泽
1月1ZATT4.Uo
好队友
为了锻炼你随机应变的能力
不惜让自己肚子疼
j
这是我们班主任
?/
离谱吧
这操作挺骚
奶奶的绝了
1月12日下午17:14
有王者多余的号吗
没有
颓废
+

 */
const lastMessages = [
    fuze('好队友'),
    fuze('为了锻炼你随机应变的能力'),
    fuze('不惜让自己肚子疼'),
    kokomi('这是我们班主任'),
    kokomi('😅'),
    fuze('?'),
    kokomi('离谱吧'),
    fuze('这操作挺骚'),
    kokomi('👍'),
    system('2023年 1月12日 下午17:14'),
    fuze('有王者多余的号吗'),
    kokomi('没有'),
    fuze('[颓废]'),
]
</script>

<template>
    <NBadge value="失联(已解明)" type="info">
        <NH1>{{ $texta.get(['menus', 'jokes', 'fuze']) }}</NH1>
    </NBadge>
    <br />
    <NAlert type="warning" title="此页面不再更新" /><br />
    <NThing>
        <template #avatar>
            <NImage width="100" :src="FuzeAvatar" />
        </template>
        <template #header>
            <mark>Fuze</mark>
            (fuze, fUzE, FUZE, FUze, fuZE, FuzE, fUZe, ...)
        </template>
        <template #description>
            qilu furniture city (齐鲁家具城)
            <spoiler>
                <strong>七一路</strong>
                家具城
            </spoiler>
            , fuzeland (付兰)
            <spoiler>付兰永存!</spoiler>
            <br />
            <u><strong>LONG LIVE FUZELAND!</strong></u>
            <spoiler>*btw</spoiler>
        </template>
        <NAlert type="error" :show-icon="false">
            <s>
                亻寸氵睾他失联了 很久很久 我们不知道他咋了还有他哪儿去了以及他为什么走
                临走前只说了三两句话<small>(见文件1-5)</small>
                <br />
                他刚走的差不多一两周 他的原神和QQ都是一直离线状态 而过了这之后他就突然天天在线了
                QQ也是
                <br />
                我以为他已经回来了 但诡异的是无论我发什么他都不吭一声
                他唯一一次说话是我们给他打了个语音通话 他回复了"?" 此后便无响应了
                <br />
                没准他遇到了啥事 让他彻彻底底地改变了 亦或啥别的客观因素导致
            </s>
            <br />
            <mark>
                已破案 根本无事发生 仅是旧计重施与我们断联 其寒假(2022-2023)仍与乐联保持联系
                并且在原神充值完毕后弃坑 顶着温迪头像向乐联成员珊瑚宫心海索要王者荣耀账号
                其农批本质复发 故情理之中 但平日无音讯 推测是上了烂学校(罪有应得)
            </mark>
        </NAlert>
        <br />
        114514岁, 是带哲学家, 曾在
        <strong>Discord</strong>
        上大肆蛊惑式宣传自己的事迹
        <spoiler>(当 代 希 特 勒)</spoiler>
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
        <spoiler>万 恶 之 源</spoiler>
        (
        <small>define</small>
        )
        <br />
        因头型酷似馒头而得其名, 后又因帝国首领与他磕到嘴并张着大门牙而得名"松鼠",
        其母亲亦称其为"懒猫"
        <br />
        <NLi>"Fuze, 你没尊严!"</NLi>
        <NLi>"Fuze, 我们请你吃苹果🍎!"</NLi>
        <NLi>"Fuze, 你没穿衣服!"</NLi>
        <NLi>
            "Fuze, 你臃肿!"
            <spoiler>实 话 实 说</spoiler>
        </NLi>
        <NLi>"Fuze, 你无能狂怒!"</NLi>
        <NLi>
            "Fuze, 我们是你的
            <strong>好朋友!</strong>
            "
            <spoiler>最 好 的 朋 友</spoiler>
        </NLi>
        <NLi>
            "
            <em>dei!</em>
            Fuze, 说普通话!"
        </NLi>
        <br />
        <NCard title="文件一">
            自我认知: 别看疯子了! (主客颠倒 应该是<small>疯子别看了!</small>)
            <br />
            (回头) "疯子!" (微微回头) "疯子!" (不回头) "疯子! 叫你呢疯子!" [对着空气大喊疯子]
            <br />
            "FUZE 咱们现在说哪段呢?" "额" <small>"1...2...3......"</small> "我女儿都会数数了..."
            <br /><br />
            <i><small>连密码都随便说的 真是愚蠢的FUZE啊</small></i>
            <br />
            <h3>
                ? <br />
                说什么呢 <br />
                什么密码 <br />
                ??? <br />
                人呢 <br />
                我草彳亍 <br />
                下定义是吧 <br />
                没尊严了 <br />
            </h3>
        </NCard>
        <br />
        <NCard title="文件二">
            通宵到第二天五点 开始睡觉 六点起床上学
            <NBlockquote>
                <i
                    >05:{{
                        new Date().getMinutes() < 10
                            ? `0${new Date().getMinutes()}`
                            : new Date().getMinutes()
                    }}</i
                >
                <br />
                哈
                <br />
                哈~~
                <br />
                哈~~~
                <br />
                [图片: 可莉]
            </NBlockquote>
            FUZE肝到了第二天早上五点 终于抽出了他心爱的可莉
            <NBlockquote>
                "你为什么这么喜欢可莉?" <br />
                "<strong>因为可莉很刑啊</strong>" [怪强调略显猥琐]
                <br />
                "... 萝莉控"
            </NBlockquote>
            FUZE给他的可莉装上了四风原典
            <NBlockquote>
                [图片: 角色界面的武器栏 可莉托着四风原典 张着口] <br />
                <br />
                <strong>是因为四风原典没人用 我才抽可莉</strong> <br />
                反正我不觉得原因这么简单
            </NBlockquote>
            "蹦蹦炸弹 (╯‵□′)╯炸弹！•••*～● 火力全开~"
            <NBlockquote>
                <i>数学课上 小伙坐在班级的左前方靠墙 看起来神志不清</i>
                <br />
                <i>老师在黑板上写下了一个分式</i> <br />
                "叫一下人来回答这个问题" "FUZE"
                <br />
                FUZE猛地站起来 一脸迷茫 不知所措
                <br />
                气氛凝结了 王红利拿着书在讲台上看着FUZE FUZE也彷徨地看着她
                <br />
                ...... <br />
                <strong>每天的睡眠一定要保证啊!</strong>
            </NBlockquote>
            又过了不知多久 似乎以月为单位计量
            <NBlockquote>
                "诶呀 废物可莉 <br />
                可莉就是个废物"
            </NBlockquote>
            唉, 喜新厌旧的萝莉控FUZE 可莉被抛弃了 真悲哀啊可莉
        </NCard>
        <br />
        <NCard title="文件三">
            好几个小时的JOJO授课
            <NBlockquote>
                "人终究是要上天堂的!" <br />
                "MADE IN HEAVEN!" <br />
                "大总统...平行世界...湮灭" <br />
                "半人马身上有时钟" <br />
                "出车祸...监狱...替身" <br />
                <i><strong>讲着讲着误开摄像头</strong></i
                ><br />
                ......
            </NBlockquote>
            日常语音
            <NBlockquote>
                "能听到吗?" "喂" "喂" "喂" <br />
                "有.点.笨.电.脑-" <br />
                "除你语音!" [语音通话已结束]
            </NBlockquote>
        </NCard>
        <br />
        <NCard title="文件四">
            父亲
            <NBlockquote>
                谁和FUZE在一起?
                <br />
                告诉FUZE, 他爸爸回来了 <br />
                @全体成员
                <br />
                谁和FUZE在一起? <br />
                告诉FUZE, 他爸爸回来了 <br />
                @全体成员 <br />
                ...... <br />
                FUZE回来了
            </NBlockquote>
            作文解释
            <NBlockquote>
                我的宝贝儿啊，我的天，你 看他的卷子你都没看明白它 写的是什么，他写的是跟妈
                妈生气了，摔门而出，完了 之后妈妈并没有出来追她之 后呢，她在路上看到了一个
                抱着孩子的妇女，那个女人 身上的衣服很单薄，因为他 把衣服给她怀里的孩子穿上
                了，所以。他觉得他其实想 写的就是那个女的，宁可自 己冻着，完了以后饿着他也
                不能让自己的孩子受委屈， 完了以后说那个女的病了， 完了之后说打120并没有说
                到我，完了之后，他看到这 豆儿啊，这个母亲抱着这个 孩子。他讲很受感动，他觉
                得这就是母爱的伟大呀，完 了以后他就决定回家找我， 这是他那个故事，整个笨看
                半天都没看懂。
                <br /><i><small>[转换完成 文件1-4-1]</small></i
                ><br />
                这个主要是怪他那课外班的 语文老师，完了以后有一次 就是说写作文L就跟他说写
                好不写坏就是写你写这个人 好看，你不写这个人丑这句 话能听明白吗?也就是说你
                写跟你妈关系好，你倒不如 写，跟你妈关系不好，得分 更高，所以误导这个孩子
                啦，我的天呐。
                <br /><i><small>[转换完成 文件1-4-2]</small></i
                ><br />
                他写作文儿写和我吵架，证 明我们两个人不吵架，也就 是说他写作文写和我吵架
                儿，我不生气，如果他写作 文写和别人吵架，比如说和 他爸爸吵架，他可能就不敢
                让他爸爸知道，或者他爸爸 看到了可能会跟他生气，明 白了吗?也就是说因为跟我
                关系好，所以他可以随便 说。
                <br /><i><small>[转换完成 文件1-4-3]</small></i>
            </NBlockquote>
            新称号
            <NBlockquote>
                为什么像松鼠呢?我感觉他 像一只猫，尤其是性格非常 像一只猫，懒懒的往那一
                躺，完了之后呢，还馋不爱 吃好吃的，比如说汉堡啊披 萨呀，完了之后小鸡腿儿
                啊。整天吃好吃的，因为猫 有两个特别的喜庆，一个是 懒，一个是X1说就是懒猫或
                者馋猫，没有听说谁说长狗 或者是懒狗，没有吧，基本 上都是懒猫或者是馋猫，所
                以FUZE非常符合这两遍。
                <br /><i><small>[转换完成 文件1-4-4]</small></i>
            </NBlockquote>
        </NCard>
        <br />
        <NCard title="文件五">
            <NBlockquote>
                [:转圈圈:] <br />
                去世了 <br />
                随机一天复活 <br />
                <i><small>[2022/07/16 16:25]</small></i>
            </NBlockquote>
            <s>EOF</s>
            <spoiler>若你是故意走的 那就滚吧 我们不是柯莱卢基托</spoiler>
        </NCard>
        <br />
        <NCard title="文件六">
            <ChatHistory :msgs="lastMessages" />
            <strong>EOF</strong>
        </NCard>
        <br />
        <template #footer>
            <NButton @click="router.push('/jokes/fuzeblockisnotagame')">
                <mark>付块</mark>
                <strong>非</strong>
                <s>游!</s>
            </NButton>
        </template>
    </NThing>
    <NDivider />
    <NCard>
        <video style="max-width: 100%" :src="FuzeVideo" controls muted loop />
    </NCard>
    <NDivider />
    <NCard title="BILIBILI">
        <iframe
            width="100%"
            height="375px"
            src="https://space.bilibili.com/1078829483"
            frameborder="0"
            allowfullscreen="false"
            allowpaymentrequest
            referrerpolicy="origin"
            @error="et => et.preventDefault()"
        ></iframe>
    </NCard>
    <NDivider />
    <NCard title="生命周期">
        <NScrollbar x-scrollable>
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
        /></NScrollbar>
    </NCard>
    <NCard title="FUZE维度">
        <P5C :sketch="sketch" />
    </NCard>
</template>
