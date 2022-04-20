<script setup lang="ts">
import {
    NCard,
    NButton,
    NSpace,
    useMessage,
    NCountdown,
    CountdownProps,
    NTime,
} from 'naive-ui'
import { computed, ref } from 'vue'
import FuzeEditor from '../components/FuzeEditor.vue'
import FuzeImage from '../assets/images/jokes/fuze/fuzeshout.png'

const fuze = ref
(`Fuze Fuze Fuze Fuze Fuze Fuze Fuze Fuze 
{ 
    fuze Fuze Fuze Fuze Fuze 
    { 
        fuze Fuze Fuze fuze Fuze Fuze Fuze fuze Fuze Fuze Fuze fuze Fuze fuze Fuze ezuf ezuf ezuf ezuf ezuf Ezuf 
    } 
    fuze Fuze fuze Fuze fuze Ezuf fuze Fuze 
    { 
        ezuf 
    } 
    ezuf Ezuf 
} 
fuze fuze man 
fuze Ezuf Ezuf Ezuf man 
Fuze Fuze Fuze Fuze Fuze Fuze Fuze man man 
Fuze Fuze Fuze man 
fuze fuze Fuze Fuze Fuze Fuze man 
fuze man ezuf ezuf Ezuf man 
ezuf man 
Fuze Fuze Fuze man 
Ezuf Ezuf Ezuf Ezuf Ezuf Ezuf man 
Ezuf Ezuf Ezuf Ezuf Ezuf Ezuf Ezuf Ezuf man 
fuze fuze fuze Fuze man 
`)
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const message = useMessage()
const birthday = new Date(2007, 6 - 1, 16)
const curDate = new Date()

const getNextBirthday = () => {
    const res = new Date(birthday)
    res.setFullYear(
        curDate.getMonth() > birthday.getMonth() ||
        curDate.getDay() > birthday.getDay() ?
        curDate.getFullYear() + 1 :
        curDate.getFullYear()
    )
    return res
}

const calcBirthday = () => {
    const next = getNextBirthday()
    const diff = next.getTime() - curDate.getTime()
    return diff < 0 ? 0 : diff
}

const diffTime = computed(() => calcBirthday())
const nextBirthday = computed(() => getNextBirthday())

const renderBirthday: CountdownProps['render'] = ({
    hours, minutes, seconds
}) => {
    const days = Math.floor(hours / 24)
    const hours2 = hours % 24
    return '🎉 ' +
        days + 'd ' + 
        hours2 + 'h ' +
        minutes + 'm ' +
        seconds + 's '
}
</script>

<template>
    <n-space justify="center" vertical style="padding: 10px;">
        <n-card :title="$t('views.fuzeblockisnotagame.question.title')" hoverable>
            <template #cover>
                <img :src="FuzeImage" />
            </template>
            {{ $t('views.fuzeblockisnotagame.question.content') }} <template #action>
                <n-button @click="message.warning('只是这样吗?')">{{ $t('views.fuzeblockisnotagame.question.options.a') }}</n-button>
                <n-button @click="message.success('听起来像是馒头の行为')">{{ $t('views.fuzeblockisnotagame.question.options.b') }}</n-button>
                <n-button @click="message.error('哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊')"><strong>{{ $t('views.fuzeblockisnotagame.question.options.c') }}</strong></n-button>
                <n-button @click="message.loading('THE NEW ORDER ， LAST DAYS OF EUROPE')"><s>{{ $t('views.fuzeblockisnotagame.question.options.d') }}</s></n-button>
            </template>
        </n-card>

        <n-card v-if="!isMobile" title="FUZE IS THE BEST LANGUAGE">
            <fuze-editor :value="fuze" style="height: 300px;" />
        </n-card>

        <n-card title="FUZEの生日">
            <template #header-extra>
                <n-time :time="birthday" type="date" />
            </template>

            <div v-if="diffTime == 0">
                <n-button @click="message.success('今天是FUZE的生日')">今天是FUZE的生日!!!</n-button>
                <br /> FUZE 生日快乐! <n-button @click="message.success('FUZE 生日快乐!')">FUZE 生日快乐!</n-button>
                🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
                <br /> 看见拙劣的<code>CSS</code>“超现代艺术"烟花🎇了吗？ <br /><br /><br />
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
            </div>

            距离下一次 <mark>FUZEの生日</mark> 
            <u>({{ nextBirthday.toLocaleDateString() }})</u><br />
            还有
            <strong>
                <n-countdown :render="renderBirthday" :duration="diffTime" active />
            </strong>
        </n-card>
    </n-space>
</template>

<style scoped>
.fireworks-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.fireworks {
  position: fixed;
  top: 100vh;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  color: #FFE75E;
  border: 4px dotted currentColor;
  transform: scale(0.1);
}
.fireworks:before {
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

.fireworks:after {
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

.fireworks:nth-child(1) {
  left: 10vw;
  color: #FFE75E;
  animation: light-animation 3s ease 2.5s infinite
}
.fireworks:nth-child(2) {
  left: 20vw;
  color: #F4EEC7;
  animation: light-animation 3s ease 3.5s infinite
}

.fireworks:nth-child(3) {
  left: 30vw;
  color: #A7E9AF;
  animation: light-animation 3s ease infinite
}

.fireworks:nth-child(4) {
  left: 40vw;
  color: #FD5E53;
  animation: light-animation 3s ease 1s infinite
}
.fireworks:nth-child(5) {
  left: 50vw;
  color: #FE9801;
  animation: light-animation 3s ease 3s infinite
}
.fireworks:nth-child(6) {
  left: 60vw;
  color: #BAC7A7;
  animation: light-animation 3s ease 1.5s infinite
}
.fireworks:nth-child(7) {
  left: 70vw;
  color: #CCDA46;
  animation: light-animation 3s ease 0.5s infinite
}
.fireworks:nth-child(8) {
  left: 80vw;
  color: #F4EEC7;
  animation: light-animation 3s ease 4s infinite
}
.fireworks:nth-child(9) {
  left: 90vw;
  color: slateblue;
  animation: light-animation 3s ease 2s infinite
}

@keyframes light-animation {
  0% {
    top: 100vh;
    transform: scale(0.1);
  }
  70% {
    transform: scale(0.1);
  }
  100% {
    top: 200px;
    transform: scale(2.5);
  }
}
</style>