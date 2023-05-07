<route lang="yaml">
name: fuzeblockisnotagame
meta:
    keepAlive: false
    menu:
        for: jokes
        key: fuzeblockisnotagame
        icon: squareFull
        group: header
</route>

<script setup lang="ts">
import {
    NCard,
    NButton,
    NSpace,
    useMessage,
    NH1,
    NBackTop,
    NStatistic,
    NAvatar,
    NThing,
} from 'naive-ui'
import FuMusicBox from '../../components/models/FuMusicBox.vue'
import { useAchiever } from '../../lib/functions/achievements'
import BirthdayCountdown from '../../components/models/BirthdayCountDown.vue'

const achiever = useAchiever()
const message = useMessage()
const fuzeBirthday = new Date(2007, 6 - 1, 16)
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'fuzeblockisnotagame']) }}</NH1>
    <NSpace
        :justify="'space-around'"
        vertical
        style="padding: 10px"
        @contextmenu="(e: any) => e.preventDefault()"
    >
        <BirthdayCountdown
            target="FUZE"
            :date="fuzeBirthday"
            progress-tooltip="距离下次生日进度"
            title="FU生日"
        >
            <template #onbirthday>
                <NButton
                    type="info"
                    round
                    ghost
                    @click="
                        message.success('亻寸氵睾的生日 伟大的诞辰') &&
                            achiever.achieve('happy_birthday_fuze')
                    "
                >
                    今天是亻寸氵睾的生日!!!
                </NButton>
                <br />
                <strong>这也是温迪和FUZE鸡巴的生日 温迪与FUZE鸡巴也生日快乐!</strong>
                <br />
                <NButton
                    type="primary"
                    ghost
                    @click="
                        message.success('祝~你~生日~呀~快乐~') &&
                            achiever.achieve('happy_birthday_fuze')
                    "
                >
                    亻寸氵睾生日快乐!
                </NButton>
                <br />
                🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
                <br />
                烟花🎇!
                <br />
                <br />
                <div class="fireworks-wrap">
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                    <div class="fireworks"></div>
                </div>
            </template>
            <template #description> 离下次亻寸氵睾的生日,还有 </template>
            <template #bar-extra>
                <NStatistic label="其实这一天也是">
                    <NThing>
                        <template #avatar>
                            <NAvatar
                                round
                                src="https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/10a9e992bf121129710d5d34703ebc7a_3094624363673748747.png"
                            />
                        </template>
                        <template #header>温迪的生日</template>
                        <template #description><small>「浪子的真情。」</small></template>
                    </NThing>
                </NStatistic>
            </template>
        </BirthdayCountdown>

        <NCard title="FU音盒" hoverable>
            <FuMusicBox />
        </NCard>
    </NSpace>
    <NBackTop />
</template>

<style lang="less" scoped>
.fireworks-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.fireworks {
    position: fixed;
    top: 100vh;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: #ffe75e;
    border: 4px dotted currentColor;
    transform: scale(0.1);

    &:before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px dotted currentColor;
        transform: translate(-50%, -50%) rotate(30deg);
    }
    &:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 4px dotted currentColor;
        transform: translate(-50%, -50%) rotate(45deg);
    }
}

@random255: `Math.ceil(Math.random() * 255) `;
@random1-5: `Number((Math.random() * 5 + 1) .toFixed(1)) `;

.loop(@i) when (@i > 0) {
    .fireworks:nth-child(@{i}) {
        left: (@i * 10vw);
        color: rgb(@random255, @random255, @random255);
        animation: light-animation (@random1-5 * 1s + 0.5s) ease-in-out (@random1-5 * 1s - 0.5s)
            infinite;
    }
    .loop((@i - 1));
}

.loop(9);

@keyframes light-animation {
    0% {
        opacity: 1;
        top: 100vh;
        transform: scale(0.1);
    }

    65% {
        opacity: 1;
        transform: scale(0.1);
    }

    95% {
        opacity: 1;
        top: 200px;
        transform: scale(2);
    }

    100% {
        opacity: 0;
        top: 200px;
        transform: scale(2.5);
    }
}
</style>
