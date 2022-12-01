<route lang="yaml">
name: gcl
</route>

<script setup lang="ts">
import { NH1, NTable, NScrollbar, NCard, NSpace } from 'naive-ui'
</script>

<template>
    <NH1>Gladys Chandra & Clea Lukito</NH1>
    Gladys(格莱迪斯,格拉迪斯) Chandra(钱德拉) 与 Clea(柯莱) Lukito(卢基托) [也叫vallen]
    <NSpace vertical>
        <NScrollbar x-scrollable>
            <NTable>
                <thead>
                    <tr>
                        <th>人</th>
                        <th>臃肿</th>
                        <th>抑郁</th>
                        <th>印尼语</th>
                        <th>有病</th>
                        <th>单纯</th>
                        <th>魈厨</th>
                        <th>正常女生</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Clea Lukito</td>
                        <td>微</td>
                        <td>是</td>
                        <td>是</td>
                        <td>极是</td>
                        <td>否</td>
                        <td>极是</td>
                        <td>极否</td>
                    </tr>
                    <tr>
                        <td>Gladys Chandra</td>
                        <td>是</td>
                        <td>微</td>
                        <td>是</td>
                        <td>否</td>
                        <td>是</td>
                        <td>否</td>
                        <td>是</td>
                    </tr>
                </tbody>
            </NTable>
        </NScrollbar>
        <NCard title="文件一 印尼">
            <strong class="indonesia">印度尼西亚</strong>
            <svg
                version="1.1"
                id="indonesia_flag"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 75 50"
                style="enable-background: new 0 0 80 50"
                xml:space="preserve"
            >
                <rect x="0" y="0" width="100%" height="50%" style="fill: red" />
                <rect x="0" y="50%" width="100%" height="50%" style="fill: white" />
            </svg>
            其实我一直不太能理解 为啥波兰球要上下颠倒画成印尼国旗 这俩旗帜长得确实挺像的
            但更像的还得是摩洛哥与印尼的(就只有尺寸和比例上的区别)
        </NCard>
        <NCard title="文件二 MOMO">
            "im sorry gladys chandra and clea lukito even momo" <br />
            momo是vallen养的一只狗 有时vallen也会把它当作一个卖惨素材
            例如momo丢了,momo比我受欢迎,甚至是momo死了这样的卖惨话 <br />
            在一次与gladys的出游中 gladys在车上抚摸着momo并摄出了乐子照 <br />
            vallen迷惑性地打开摄像头并对准着趴在床上的momo momo看似很困惑 尝试离开镜头之下
            但粗暴的主人vallen又把它强制性地抱了回去 <br />
            momo是只白色的狗 我看不出是什么品种的 体型较小 毛发似乎很丝滑 长得还行
        </NCard>
        <NCard title="文件三 卖惨"> 她的传统艺能 <br /> </NCard>
        <NCard title="文件四 演戏,撤退">在她们的服务器成立后不久 一场大戏开始了 </NCard>
        <NCard title="文件五 往返自然">
            中考结束后的暑假 忘了是哪会儿了 gladys突然在推特私信了个discord服务器链接 <br />
            又过了一段时间 实在是无所事事 无聊地想起了并登上原神亚服 玩我的垃圾二十级账号
        </NCard>
        <NCard title="文件六 现在,未来"> </NCard>
    </NSpace>
</template>

<style scoped lang="less">
.indonesia {
    font-size: 100px;
    word-wrap: break-word;
    background: linear-gradient(to bottom, red 50%, white 50%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    user-select: none;

    &:focus {
        user-select: text;
    }
}
</style>
