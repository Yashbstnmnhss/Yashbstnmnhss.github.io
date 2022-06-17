<route lang="yaml">
name: fuzeblockisnotagame
meta:
    keepAlive: true
</route>

<script setup lang="ts">
import {
    NCard,
    NButton,
    NSpace,
    useMessage,
    NDynamicInput,
    NInputNumber,
    NTable,
    NInput,
    NH1,
    NBackTop,
    NDivider,
    NImage,
    NSpin,
    NTabPane,
    NTabs,
    NNumberAnimation,
} from 'naive-ui'
import { bsToLetter, letterToBs } from '../../composables/bslang'
import { UtilService, Service } from '../../api/services'
import { ref, onMounted } from 'vue'
import FuzeImage from '../../assets/images/jokes/fuze/fuzeshout.png'
import { useAchiever } from '../../composables/achievements'
import BirthdayCountdown from '../../components/BirthdayCountDown.vue'

const achiever = useAchiever()

const showFuzeShout = ref(true)

const yaucValue = ref([
    {
        num: 0,
    },
])
const yAv = ref('NaN'),
    yMo = ref('NaN'),
    yCe = ref('NaN'),
    yFc = ref('NaN')

const message = useMessage()
const fuzeBirthday = new Date(2007, 6 - 1, 16)

const calculatorYAUC = () => {
    if (yaucValue?.value?.length <= 1) return
    const vs = yaucValue.value.map(v => v.num)
    //算平均数
    const sum = vs.reduce((a, b) => a + b)
    yAv.value = (sum / vs.length).toFixed(2)
    //计算vs的众数 赋值到yMo
    const map = new Map()
    vs.forEach(v => {
        if (map.has(v)) map.set(v, map.get(v) + 1)
        else map.set(v, 1)
    })
    const max = Math.max(...map.values())
    const maxKeys = [...map.entries()].filter(v => v[1] === max).map(v => v[0])
    yMo.value = maxKeys.join(', ')
    //计算vs的中位数 赋值到yCe
    const vs2 = vs.sort((a, b) => a - b)
    const mid = vs2.length / 2
    if (vs2.length % 2 === 0) yCe.value = ((vs2[mid - 1] + vs2[mid]) / 2).toFixed(2)
    else yCe.value = vs2[Math.floor(mid)].toFixed(2)
    //计算vs的方差 赋值到yFc
    const avg = sum / vs.length
    const fc = vs.reduce((a, b) => a + Math.pow(b - avg, 2), 0)
    yFc.value = (fc / vs.length).toFixed(2)

    if (yAv.value === 'NaN' || yMo.value === 'NaN' || yCe.value === 'NaN' || yFc.value === 'NaN')
        achiever.achieve('surely_another_useless')
}

const qrCodeInput = ref(''),
    qrCodeImage = ref(''),
    qrCodeLoading = ref(false)
const generateQRCode = async () => {
    qrCodeLoading.value = true
    UtilService.qrCode(qrCodeInput.value)
        .then(res => {
            message.success('生成成功')
            qrCodeImage.value = res.data
            qrCodeLoading.value = false
        })
        .catch(err => {
            message.error(`生成失败, ${err.message}`)
            qrCodeLoading.value = false
        })
}

const bslangLetterInput = ref(''),
    bslangEmojiUp = ref(''),
    bslangEmojiDown = ref('')
const engToBslang = () => {
    bslangEmojiDown.value = bslangEmojiUp.value
        .split('')
        .map(c => letterToBs(c))
        .join('')
}
const bslangToEng = () => {
    bslangEmojiUp.value = bslangEmojiDown.value
        .split('')
        .map(c => bsToLetter(c))
        .join('')
}

onMounted(() => {
    Service.getRandomSaying()
        .then(res => {
            qrCodeInput.value = res.data.text
        })
        .catch(err => {
            qrCodeInput.value = err.message || err
        })
})
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuzeblockisnotagame') }}</n-h1>
    <n-space :justify="'space-around'" vertical style="padding: 10px">
        <birthday-countdown
            :date="fuzeBirthday"
            target="FUZE"
            :title="$t('views.fuzeblockisnotagame.fuzesbd')"
        >
            <template #onbirthday>
                <n-button
                    type="info"
                    round
                    ghost
                    @click="
                        () => {
                            message.success($t('views.fuzeblockisnotagame.itsfuzesbd'))
                            achiever.achieve('happy_birthday_fuze')
                        }
                    "
                >
                    {{ $t('views.fuzeblockisnotagame.itsfuzesbd') }}!!!
                </n-button>
                <br />
                <strong>{{ $t('views.fuzeblockisnotagame.wentiJbBirthday') }}</strong>
                <br />
                <n-button
                    type="primary"
                    ghost
                    @click="
                        () => {
                            message.success($t('views.fuzeblockisnotagame.hbdfuze'))
                            achiever.achieve('happy_birthday_fuze')
                        }
                    "
                >
                    {{ $t('views.fuzeblockisnotagame.hbdfuze') }}
                </n-button>
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
            <template #description>
                {{ $t('views.fuzeblockisnotagame.fuzebdformat') }}
            </template>
        </birthday-countdown>

        <n-card
            :title="$t('views.fuzeblockisnotagame.question.title')"
            hoverable
            closable
            v-show="showFuzeShout"
            @close="showFuzeShout = false"
        >
            <template #cover>
                <n-image :src="FuzeImage" />
            </template>
            {{ $t('views.fuzeblockisnotagame.question.content') }}
            <template #action>
                <n-button
                    @click="message.warning($t('views.fuzeblockisnotagame.question.options.aa'))"
                >
                    {{ $t('views.fuzeblockisnotagame.question.options.a') }}
                </n-button>
                <n-button
                    @click="message.success($t('views.fuzeblockisnotagame.question.options.ba'))"
                >
                    {{ $t('views.fuzeblockisnotagame.question.options.b') }}
                </n-button>
                <n-button
                    @click="message.error($t('views.fuzeblockisnotagame.question.options.ca'))"
                >
                    <strong>{{ $t('views.fuzeblockisnotagame.question.options.c') }}</strong>
                </n-button>
                <n-button
                    @click="
                        () => {
                            message.loading('THE NEW ORDER ， LAST DAYS OF EUROPE')
                            achiever.achieve('last_days_of_europe')
                        }
                    "
                >
                    <s>{{ $t('views.fuzeblockisnotagame.question.options.d') }}</s>
                </n-button>
            </template>
        </n-card>

        <n-card title="Yet Another Useless 'Calculator'">
            <template #header-extra>
                <mark>YAUC</mark>
            </template>
            <n-dynamic-input
                v-model:value="yaucValue"
                :on-create="
                    _ => {
                        return { num: 0 }
                    }
                "
            >
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

        <n-spin :show="qrCodeLoading">
            <n-card title="QRCode">
                <n-space vertical>
                    <n-input
                        placeholder="???"
                        v-model:value="qrCodeInput"
                        type="textarea"
                        autosize
                    />
                    <img id="qrcode" :src="qrCodeImage" />
                </n-space>
                <template #action>
                    <n-button @click="generateQRCode()">&lt;(￣︶￣)↗[GO!]</n-button>
                </template>
            </n-card>
        </n-spin>

        <n-card title="BSLANG">
            <n-tabs type="line" animated>
                <n-tab-pane name="emoji" tab="normal">
                    <n-input
                        v-model:value="bslangEmojiUp"
                        @update:value="engToBslang()"
                        placeholder="???"
                        type="textarea"
                        autosize
                    />
                    <n-divider>↑English ↓BSLANG</n-divider>
                    <div class="bslang-emoji" style="font-size: 38px">
                        <n-input
                            v-model:value="bslangEmojiDown"
                            @update:value="bslangToEng()"
                            placeholder="???"
                            type="textarea"
                            autosize
                        />
                    </div>
                </n-tab-pane>
                <n-tab-pane name="letter" tab="replacement">
                    <n-input
                        v-model:value="bslangLetterInput"
                        placeholder="???"
                        type="textarea"
                        autosize
                    />
                    <n-divider />
                    <div class="bslang-letter" style="font-size: 38px">
                        {{ bslangLetterInput }}
                    </div>
                </n-tab-pane>
            </n-tabs>
        </n-card>
    </n-space>
    <n-back-top />
</template>

<style scoped>
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
    color: #ffe75e;
    animation: light-animation 3s ease 2.5s infinite;
}

.fireworks:nth-child(2) {
    left: 20vw;
    color: #f4eec7;
    animation: light-animation 3s ease 3.5s infinite;
}

.fireworks:nth-child(3) {
    left: 30vw;
    color: #a7e9af;
    animation: light-animation 3s ease infinite;
}

.fireworks:nth-child(4) {
    left: 40vw;
    color: #fd5e53;
    animation: light-animation 3s ease 1s infinite;
}

.fireworks:nth-child(5) {
    left: 50vw;
    color: #fe9801;
    animation: light-animation 3s ease 3s infinite;
}

.fireworks:nth-child(6) {
    left: 60vw;
    color: #bac7a7;
    animation: light-animation 3s ease 1.5s infinite;
}

.fireworks:nth-child(7) {
    left: 70vw;
    color: #ccda46;
    animation: light-animation 3s ease 0.5s infinite;
}

.fireworks:nth-child(8) {
    left: 80vw;
    color: #f4eec7;
    animation: light-animation 3s ease 4s infinite;
}

.fireworks:nth-child(9) {
    left: 90vw;
    color: slateblue;
    animation: light-animation 3s ease 2s infinite;
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
