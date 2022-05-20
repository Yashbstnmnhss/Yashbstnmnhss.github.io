<route lang="yaml">
meta:
  keepAlive: true
</route>

<script setup lang="ts">
import {
    NCard,
    NButton,
    NSpace,
    useMessage,
    NCountdown,
    CountdownProps,
    NTime,
    NDynamicInput,
    NInputNumber,
    NTable,
    NInput,
    NH1,
    NBackTop,
    NDrawer,
    NDrawerContent
} from 'naive-ui'
import { UtilService, Service } from '../api/services'
import { computed, ref, h, onMounted } from 'vue'
import FuzeImage from '../assets/images/jokes/fuze/fuzeshout.png'
import { useAchiever } from '../composables/achievements'

const achiever = useAchiever()

const yaucValue = ref([{
    num: 0
}])
const yAv = ref('NaN'), yMo = ref('NaN'), yCe = ref('NaN'), yFc = ref('NaN')

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

if (diffTime.value == 0) {
    achiever.achieve('happy_birthday_fuze')
} else if (diffTime.value < 0) {
    achiever.achieve('number_from_4D')
} else if (curDate.valueOf() - birthday.valueOf() < 7 * 24 * 60 * 60 * 1000) {
    achiever.achieve('already_late_for_fuze_birthday')
}

const renderBirthday: CountdownProps['render'] = ({
    hours, minutes, seconds
}) => {
    const days = Math.floor(hours / 24)
    const hours2 = hours % 24
    return h(NH1, {
        prefix: 'bar',
        type: diffTime.value < 0 ? 'error' : diffTime.value === 0 ? 'success' : 'warning'
    }, {
        default: () =>
            '🎉 ' +
            days + 'd ' +
            hours2 + 'h ' +
            minutes + 'm ' +
            seconds + 's '
    })
}

const calculatorYAUC = () => {
    if (yaucValue?.value?.length <= 1)
        return
    const vs = yaucValue.value.map(v => v.num)
    //算平均数
    const sum = vs.reduce((a, b) => a + b)
    yAv.value = (sum / vs.length).toFixed(2)
    //计算vs的众数 赋值到yMo
    const map = new Map()
    vs.forEach(v => {
        if (map.has(v))
            map.set(v, map.get(v) + 1)
        else
            map.set(v, 1)
    })
    const max = Math.max(...map.values())
    const maxKeys = [...map.entries()].filter(v => v[1] === max).map(v => v[0])
    yMo.value = maxKeys.join(', ')
    //计算vs的中位数 赋值到yCe
    const vs2 = vs.sort((a, b) => a - b)
    const mid = vs2.length / 2
    if (vs2.length % 2 === 0)
        yCe.value = ((vs2[mid - 1] + vs2[mid]) / 2).toFixed(2)
    else
        yCe.value = (vs2[Math.floor(mid)]).toFixed(2)
    //计算vs的方差 赋值到yFc
    const avg = sum / vs.length
    const fc = vs.reduce((a, b) => a + Math.pow(b - avg, 2), 0)
    yFc.value = (fc / vs.length).toFixed(2)

    if (yAv.value === 'NaN' || yMo.value === 'NaN' || yCe.value === 'NaN' || yFc.value === 'NaN')
        achiever.achieve('surely_another_useless')
}

const qrCodeInput = ref('')
const qrCodeImage = ref('')
const generateQRCode = async () => {
    UtilService.qrCode(qrCodeInput.value)
        .then(res => {
            message.success('生成成功')
            qrCodeImage.value = res.data
        })
        .catch(err => {
            message.error(`生成失败, ${err.message}`)
        })
}

onMounted(() => {
    Service.getRandomSaying().then(res => {
        qrCodeInput.value = res.data.text
    })
})
</script>

<template>
    <n-space :justify="'space-around'" vertical style="padding: 10px;">
        <n-card :title="$t('views.fuzeblockisnotagame.question.title')" hoverable closable @close="">
            <template #cover>
                <img :src="FuzeImage" />
            </template>
            {{ $t('views.fuzeblockisnotagame.question.content') }} <template #action>
                <n-button @click="message.warning($t('views.fuzeblockisnotagame.question.options.aa'))">{{
                        $t('views.fuzeblockisnotagame.question.options.a')
                }}</n-button>
                <n-button @click="message.success($t('views.fuzeblockisnotagame.question.options.ba'))">{{
                        $t('views.fuzeblockisnotagame.question.options.b')
                }}</n-button>
                <n-button @click="message.error($t('views.fuzeblockisnotagame.question.options.ca'))"><strong>{{
                        $t('views.fuzeblockisnotagame.question.options.c')
                }}</strong></n-button>
                <n-button @click="() => {
                    message.loading('THE NEW ORDER ， LAST DAYS OF EUROPE')
                    achiever.achieve('last_days_of_europe')
                }"><s>{{ $t('views.fuzeblockisnotagame.question.options.d') }}</s></n-button>
            </template>
        </n-card>

        <n-card :title="$t('views.fuzeblockisnotagame.fuzesbd')">
            <template #header-extra>
                <n-time :time="birthday" type="date" />
            </template>

            <div v-if="diffTime == 0">
                <n-button @click="() => {
                    message.success($t('views.fuzeblockisnotagame.itsfuzesbd'))
                }">{{ $t('views.fuzeblockisnotagame.itsfuzesbd') }}!!!</n-button>
                <br /> {{ $t('views.fuzeblockisnotagame.hbdfuze') }} <n-button
                    @click="message.success($t('views.fuzeblockisnotagame.hbdfuze'))">{{
                            $t('views.fuzeblockisnotagame.hbdfuze')
                    }}</n-button>
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

            {{ $t('views.fuzeblockisnotagame.fuzebdformat', [nextBirthday.toLocaleDateString()]) }} <br />
            <n-countdown :render="renderBirthday" :duration="diffTime" active />
        </n-card>

        <n-card title="Yet Another Useless 'Calculator'">
            <template #header-extra>
                <mark>YAUC</mark>
            </template>
            <n-dynamic-input v-model:value="yaucValue" :on-create="i => { return { num: 0 } }">
                <template #default="{ value }">
                    <n-input-number v-model:value="value.num" />
                </template>
            </n-dynamic-input>
            <template #action>
                <n-button @click="calculatorYAUC()"><mark>YAUC</mark></n-button>
            </template>
            <template #footer>
                <n-table bordered>
                    <thead>
                        <tr>
                            <th>平</th>
                            <th>众</th>
                            <th>中</th>
                            <th>方</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ yAv }}</td>
                            <td>{{ yMo }}</td>
                            <td>{{ yCe }}</td>
                            <td>{{ yFc }}</td>
                        </tr>
                    </tbody>
                </n-table>
            </template>
        </n-card>

        <n-card title="QRCode">
            <n-space vertical>
                <n-input placeholder="???" v-model:value="qrCodeInput" type="textarea" autosize />
                <img id="qrcode" :src="qrCodeImage" />
            </n-space>
            <template #action>
                <n-button @click="generateQRCode()">
                    &lt;(￣︶￣)↗[GO!]
                </n-button>
            </template>
        </n-card>
    </n-space>
    <n-back-top />
    <n-drawer placement="left">
        <n-drawer-content>
            1232132132
        </n-drawer-content>
    </n-drawer>
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