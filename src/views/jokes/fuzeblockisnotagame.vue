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
    NStatistic,
    NAvatar,
    NThing,
    NInputGroup,
} from 'naive-ui'
import { bsToLetter, letterToBs } from '../../composables/bslang'
import { Service, UtilService } from '../../api/services'
import { ChineseCharacter } from '../../api/models'
import { ref, onMounted } from 'vue'
import FuzeImage from '../../assets/images/jokes/fuze/fuzeshout.png'
import { useAchiever } from '../../composables/achievements'
import BirthdayCountdown from '../../components/BirthdayCountDown.vue'
import { getFlags, dedede } from '../../composables/chinese'

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

const deReA = ref(''),
    deReB = ref(''),
    deReRe = ref(''),
    deReRe2 = ref(''),
    deLoading = ref(false)
const deRe = () => {
    if (!deReA.value || !deReB.value) {
        deReRe.value = '...'
        deReRe2.value = ''
        return
    }

    deLoading.value = true
    getFlags(deReA.value).then(a => {
        getFlags(deReB.value).then(b => {
            deLoading.value = false
            if (!a || !b) {
                deReRe.value = '的地得'
                deReRe2.value = '怎么会是null啊呀啊'
                return
            }
            var ax = a[a.length - 1]
            var bx = b[0]
            var de = dedede(ax, bx)

            deReRe.value = de
            deReRe2.value = `${deReA.value}${de}${deReB.value}`
        })
    })
}

const chineseCharacter = ref<ChineseCharacter>(),
    charLoading = ref(false)

onMounted(() => {
    Service.getRandomSaying()
        .then(res => {
            qrCodeInput.value = res.data.text
        })
        .catch(err => {
            qrCodeInput.value = err.message || err
        })
    charLoading.value = true
    Service.chineseChar()
        .then(res => {
            charLoading.value = false
            chineseCharacter.value = JSON.parse(
                new TextDecoder('gbk').decode(new Uint8Array(res.data))
            )
        })
        .catch(err => {
            chineseCharacter.value = {
                word: err.message || err,
                oldword: err.message || err,
                strokes: '114514',
                pinyin: 'āáǎà',
                radicals: '八勹匕冫卜厂刀刂儿二匚阝丷卩冂力冖凵人亻入十厶亠匸讠廴又',
                explanation: 'ERROR',
                more: 'ΑαΝνÀàÌì',
            }
        })
})
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.fuzeblockisnotagame') }}</n-h1>
    <n-space
        :justify="'space-around'"
        vertical
        style="padding: 10px"
        @contextmenu="(e: any) => e.preventDefault()"
    >
        <birthday-countdown
            target="FUZE"
            :date="fuzeBirthday"
            progress-tooltip="距离下次生日进度"
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
            <template #bar-extra>
                <n-statistic label="其实这一天也是">
                    <n-thing>
                        <template #avatar>
                            <n-avatar
                                round
                                src="https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/10a9e992bf121129710d5d34703ebc7a_3094624363673748747.png"
                            />
                        </template>
                        <template #header>温蒂的生日</template>
                        <template #description><small>「浪子的真情。」</small></template>
                    </n-thing>
                </n-statistic>
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
        <n-card title="中文">
            <template #header-extra>
                并
                <strong>不</strong>
                准确
            </template>
            <n-tabs type="segment" animated>
                <n-tab-pane name="char" tab="宀子">
                    <n-spin :show="charLoading">
                        <n-thing>
                            <template #avatar>
                                <n-avatar>
                                    {{ chineseCharacter?.oldword }}
                                </n-avatar>
                            </template>
                            <template #header>
                                {{ chineseCharacter?.word }}
                            </template>
                            <template #header-extra>
                                {{ chineseCharacter?.pinyin }}
                            </template>
                            <template #description>
                                画:
                                <strong>{{ chineseCharacter?.strokes }}</strong>
                                , 部:
                                <strong>{{ chineseCharacter?.radicals || '~' }}</strong>
                            </template>
                            {{ chineseCharacter?.explanation }}
                            <template #footer>
                                {{ chineseCharacter?.more }}
                            </template>
                        </n-thing>
                    </n-spin>
                </n-tab-pane>
                <n-tab-pane name="return" tab="A(的/地/得)B">
                    <n-spin :show="deLoading">
                        <n-input-group>
                            <n-input placeholder="A" v-model:value="deReA" />
                            <n-input placeholder="B" v-model:value="deReB" />
                            <n-button @click="deRe()">的/地/得</n-button>
                        </n-input-group>
                        <n-h1 prefix="bar">{{ deReRe }}</n-h1>
                        {{ deReRe2 }}
                    </n-spin>
                </n-tab-pane>
            </n-tabs>
        </n-card>
    </n-space>
    <n-back-top />
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
