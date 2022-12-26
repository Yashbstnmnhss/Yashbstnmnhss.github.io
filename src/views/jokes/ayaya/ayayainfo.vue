<route lang="yaml">
name: ayaya-info
meta:
    menu:
        for: jokes
        key: ayaya-info
        label: ayaya
        icon: person
</route>

<script lang="ts" setup>
import Cat from '@/assets/images/jokes/ayaya/cat.jpg'
import Water from '@/assets/images/jokes/ayaya/water.jpg'
import Night from '@/assets/images/jokes/ayaya/night.jpg'
import Nani from '@/assets/images/jokes/ayaya/nani.jpg'
import Ayaya from '@/assets/videos/jokes/ayaya/ayaya.mp4'
import Scareful from '@/assets/videos/jokes/ayaya/scareful.mp4'
import Turkish from '@/assets/sounds/jokes/ayaya/turkish.mp3'
import { NH1, NBlockquote, NSpace, NCard, NImage, NScrollbar } from 'naive-ui'
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'ayaya']) }}</NH1>
    <NBlockquote>越过长城 走向世界</NBlockquote>
    <NSpace vertical>
        <NCard title="文件一 突然的演讲">
            <video :src="Ayaya" muted loop controls style="max-width: 100%" /> <br />
            that's why I got social anxiety i hate going in crowds alone and i always think people
            are judging me Dealing with social anxiety is veryy hardd like u always feel like people
            are judging u
            <template #footer>
                绫绫
                <spoiler>ayaya</spoiler>
                正在发表振奋人心的演讲
                <spoiler>(迫真)</spoiler>
                ,视频有些崩坏
            </template>
        </NCard>
        <NCard hoverable title="文件二 皮套人">
            <video :src="Scareful" muted loop controls style="max-width: 75%" />
            <template #footer>
                所以说伪人是存在的 <br />
                即使你现在不相信 但当她取代了你的生活之时 <br />
                你就相信了
            </template>
        </NCard>
        <NCard title="文件三一 菲律宾的生活">
            <NScrollbar x-scrollable>
                <NSpace align="stretch">
                    <div>
                        <NImage
                            object-fit="cover"
                            class="jokes-images"
                            :src="Water"
                            :show-toolbar="false"
                            title="glasses of water"
                            alt="glasses of water"
                        />
                    </div>
                    <div>
                        <NImage
                            object-fit="cover"
                            class="jokes-images"
                            :src="Night"
                            :show-toolbar="false"
                            title="菲律宾之夜"
                            alt="菲律宾之夜"
                        />
                    </div> </NSpace
            ></NScrollbar>
            <template #footer>[图一]每天一杯水(1/1) [图二]美丽的夜景</template>
        </NCard>
        <NCard title="文件三二 菲律宾的生活">
            <NScrollbar x-scrollable>
                <NImage
                    object-fit="cover"
                    :src="Cat"
                    :show-toolbar="false"
                    title="the quality you trust, now made e"
                    alt="the quality you trust, now made e"
                />
            </NScrollbar>
            <template #footer>
                日炎
                <spoiler>rhianne</spoiler>
                (凯亚单推人)的小猫, 生日快乐! 小猫!
            </template>
        </NCard>
        <NCard title="文件四 骨骼惊奇的四人">
            几位日炎没见过面的朋友
            <br />
            元旦夜:
            <NBlockquote>
                元旦夜之时 在一起听歌 <br />
                Helicopter <br />
                我们的猎奇 <br />
                "114514是什么" "机车号吗" <br />
                [触手色图] "114514好恐怖" <br />
                第一次的扬声器(--speakerphone) <br />
                "说i did your mom" <br />
                口嗨陌生人连线 <br />
                机器人的单词拼写游戏 <br />
                "plugin!" <br />
                餐厅吃饭等半小时都没上菜 <br />
                表情符号充饥法 🥩 🧠 <br />
                "www 谢谢"
            </NBlockquote>
            网易MC
            <NBlockquote>
                下载网易MC 还给了她个账号 <br />
                和FUZE和她一起进语音 <br />
                找房连接找不到(网易传统艺能) <br />
                尝试连接服务器 加入房间... <br />
                区块加不出来载 漂浮在最底层的虚空上 <br />
                卡死在方块里面 如鱼得水游动在矿道里 <br />
                FUZE和我向下挖掘 试图把她挖出来<br />
                但我们根本碰不到她 <br />
                "你永远无法到达真实" ---FUZE竖告示牌
            </NBlockquote>
            复习 狂@
            <br />
            烤电脑,政治 <br />
            退出服务器! <br />
            总结: 纯纯的废物
        </NCard>
        <NCard title="文件五 大人">
            <strong>lads言lads语</strong>
            <br />
            <mark>"你們so mean😭"</mark>
            <br />
            <NImage
                object-fit="cover"
                :show-toolbar="false"
                width="250"
                :src="Nani"
                title="nani"
                alt="nani"
            />
            <br />
            1.Chinglish 中英混用
            <br />
            2.使用繁体中文
            <br />
            3.喜欢加"吧"或:lmao:或 😭 (尤其是句末)
            <br />
            4.汉语欧化严重(例如形容词滥用) 浓浓的英语语法味道
            <br />
            5.极其奇怪的句意
            <br />
            <br />
            <strong>FEIFEI (陈斐)</strong>
            <br />
            攒原石中 为了抽符合性癖的人 喜欢内鬼舅舅
            <br />
            <mark>"he(神里绫人) is not handsome"</mark> <br />
        </NCard>
        <NCard title="文件六 火鸡">
            Ananı sikeyim = fuck your mother <br />
            Sen değilsin CUKSUZ KURBA BENİM İMDAT <br />
            MINI WORLD!! (母牛世界!!!) <br />
            (果然是个幼稚的小孩乐子) <br />
            <br />
            <NScrollbar x-scrollable>
                <audio :src="Turkish" controls />
            </NScrollbar>
            乐子的火鸡语空谷传响 <br />
            火鸡国人最喜欢吃馍夹肉了
        </NCard>
    </NSpace>
</template>

<style scoped lang="less">
.image {
    max-width: 50vw;
    max-height: 50vh;
}
</style>
