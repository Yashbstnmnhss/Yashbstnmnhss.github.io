<script setup lang="ts">
import { NSpace } from 'naive-ui'
import {
    Level2Color,
    Class2Color,
    Disruption2Color,
    Risk2Color,
    Level2Extra,
    Class2Text,
    Disruption2Text,
    Risk2Text,
    Class2Icon,
    Disruption2Icon,
    Risk2Icon,
    Disruption2Extra,
    Risk2Extra,
} from '../../lib/models/acs'
import { ACSLevel, ACSClass, ACSSecondaryClass, ACSDisruption, ACSRisk } from '../../lib/types'
import { onMounted, computed, watch } from 'vue'

const updateSvg = () => {
    /* Class & Secondary Class */
    var firstClass = document.getElementById('classIcon'),
        secondClass = document.getElementById('secondIcon')
    firstClass?.setAttribute('xlink:href', Class2Icon[props.category])
    if (props.secondaryCategory)
        secondClass?.setAttribute('xlink:href', Class2Icon[props.secondaryCategory])
    /* Disruption */
    var disText = document.getElementById('disruptText')
    var disrupt = document.getElementById('disruptIcon')
    disText!.innerHTML = Disruption2Extra[props.disruption]
    disrupt?.setAttribute('xlink:href', Disruption2Icon[props.disruption])
    /* Risk */
    var risText = document.getElementById('riskText')
    var risk = document.getElementById('riskIcon')
    risText!.innerHTML = Risk2Extra[props.risk]
    risk?.setAttribute('xlink:href', Risk2Icon[props.risk])
    /* Diamond */
    var cls = document.getElementById('diamondClassIcon'),
        dis = document.getElementById('diamondDisruptIcon'),
        ris = document.getElementById('diamondRiskIcon'),
        sec = document.getElementById('diamondSecondaryIcon')
    cls?.setAttribute('xlink:href', Class2Icon[props.category])
    dis?.setAttribute('xlink:href', Disruption2Icon[props.disruption])
    ris?.setAttribute('xlink:href', Risk2Icon[props.risk])
    if (props.secondaryCategory)
        sec?.setAttribute('xlink:href', Class2Icon[props.secondaryCategory])
}
onMounted(() => {
    updateSvg()
})
const props = defineProps<{
    level: ACSLevel
    category: ACSClass
    secondaryCategory?: ACSSecondaryClass
    disruption: ACSDisruption
    risk: ACSRisk
}>()
watch([props.category, props.disruption, props.risk, props.secondaryCategory], () => {
    updateSvg()
})

const levelColor = computed(() => Level2Color[props.level]),
    classColor = computed(() => Class2Color[props.category]),
    secondaryColor = computed(() => Class2Color[props.secondaryCategory!] ?? '属性值无效'),
    disruptColor = computed(() => Disruption2Color[props.disruption]),
    riskColor = computed(() => Risk2Color[props.risk]),
    secondaryVisible = computed(() => (props.secondaryCategory ? 'visible' : 'hidden'))
</script>

<template>
    <div class="acs-container">
        <div class="number">
            <span class="text">
                {{ $t('components.ACSBar.number') }}
            </span>
            <span class="num">
                <slot name="project-number"></slot>
            </span>
        </div>
        <div class="bar">
            <div class="animamted-bar" v-for="i in Number(props.level)" :key="i" />
        </div>
        <div class="level">
            <span class="lvl">
                {{ $t('components.ACSBar.level', [props.level]) }}
            </span>
            <span class="clearance">
                {{ Level2Extra[props.level] }}
            </span>
        </div>
        <div class="divider">
            <div />
        </div>
        <div class="class">
            <div class="container">
                <n-space align="center" justify="space-between" style="width: 100%; height: 100%">
                    <div class="contain-class">
                        <div class="class-category">
                            {{ $t('components.ACSBar.class-category') }}
                        </div>
                        <div class="class-text">
                            <!--{{ $t('components.ACSBar.class-text') }}-->
                            {{ Class2Text[props.category] }}
                        </div>
                        <div v-if="props.secondaryCategory" class="class-secondary-category">
                            {{ $t('components.ACSBar.class-secondary-category') }}
                        </div>
                        <div v-if="props.secondaryCategory" class="class-secondary-text">
                            <!--{{ $t('components.ACSBar.class-text') }}-->
                            {{ Class2Text[props.secondaryCategory] }}
                        </div>
                    </div>
                    <div
                        :class="`class-icon acs-icon icon-image ${
                            props.secondaryCategory ? '' : ''
                        }`"
                        style="max-height: 90%; width: 200px"
                    >
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 160 100"
                            style="enable-background: new 0 0 160 100"
                            xml:space="preserve"
                        >
                            <path
                                style="visibility: var(--secondary-visible)"
                                d="M110.1,100.1h-60c-27.6,0-50-22.4-50-50v0c0-27.6,22.4-50,50-50h60c27.6,0,50,22.4,50,50v0
	C160.1,77.7,137.7,100.1,110.1,100.1z"
                            />
                            <circle
                                style="fill: white; visibility: var(--secondary-visible)"
                                cx="48"
                                cy="50"
                                r="35%"
                            />

                            <image
                                x="1"
                                y="0"
                                width="6rem"
                                height="6rem"
                                id="secondIcon"
                                xlink:href=""
                            />
                            <circle
                                cx="112.5"
                                style="
                                    stroke: black;
                                    stroke-width: 4;
                                    stroke-miterlimit: 10;
                                    fill: rgb(var(--class-color));
                                    visibility: var(--secondary-visible);
                                "
                                cy="50"
                                r="35%"
                            />
                            <circle
                                cx="112"
                                style="fill: rgb(var(--class-color))"
                                cy="50"
                                r="35%"
                            />
                            <image
                                x="65"
                                y="0"
                                width="6rem"
                                height="6rem"
                                id="classIcon"
                                xlink:href=""
                            />
                        </svg>
                    </div>
                </n-space>
            </div>
        </div>
        <div class="disrupt">
            <div class="container">
                <n-space
                    :align="'center'"
                    justify="space-between"
                    style="width: 100%; height: 100%"
                >
                    <div class="contain-disrupt">
                        <span class="disrupt-text">
                            <span class="disrupt-category">
                                {{ $t('components.ACSBar.disrupt-category') }}&ThickSpace;
                            </span>
                            <!--{{ $t('components.ACSBar.disrupt-text') }}-->
                            <span class="disrupt-normal-text">
                                {{ Disruption2Text[props.disruption] }}
                            </span>
                        </span>
                    </div>
                    <div class="disrupt-icon acs-icon acs-small-icon icon-image">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 160 100"
                            style="enable-background: new 0 0 160 100"
                            xml:space="preserve"
                        >
                            <path
                                d="M110.1,100.1h-60c-27.6,0-50-22.4-50-50v0c0-27.6,22.4-50,50-50h60c27.6,0,50,22.4,50,50v0
	C160.1,77.7,137.7,100.1,110.1,100.1z"
                            />
                            <text
                                class="fade-text"
                                id="disruptText"
                                style="font-size: 35px; fill: white"
                                x="20"
                                y="62.5"
                            >
                                2
                            </text>
                            <circle
                                cx="112.5"
                                style="fill: rgb(var(--disrupt-color))"
                                cy="50"
                                r="33%"
                            />
                            <image
                                x="65"
                                y="0"
                                width="6rem"
                                height="6rem"
                                id="disruptIcon"
                                xlink:href=""
                            />
                        </svg>
                    </div>
                </n-space>
            </div>
        </div>
        <div class="risk">
            <div class="container">
                <n-space
                    :align="'center'"
                    justify="space-between"
                    style="width: 100%; height: 100%"
                >
                    <div class="contain-risk">
                        <span class="risk-text">
                            <span class="risk-category">
                                {{ $t('components.ACSBar.risk-category') }}&ThickSpace;
                            </span>
                            <!--{{ $t('components.ACSBar.risk-text') }}-->
                            <span class="risk-normal-text">{{ Risk2Text[props.risk] }}</span>
                        </span>
                    </div>
                    <div class="risk-icon acs-icon acs-small-icon icon-image">
                        <!--<span class="extra-text">{{ Risk2Extra[props.risk] }}</span>-->
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 160 100"
                            style="enable-background: new 0 0 160 100"
                            xml:space="preserve"
                        >
                            <path
                                d="M110.1,100.1h-60c-27.6,0-50-22.4-50-50v0c0-27.6,22.4-50,50-50h60c27.6,0,50,22.4,50,50v0
	C160.1,77.7,137.7,100.1,110.1,100.1z"
                            />
                            <text
                                class="fade-text"
                                id="riskText"
                                style="font-size: 35px; fill: white"
                                x="20"
                                y="62.5"
                            >
                                2
                            </text>
                            <circle
                                cx="112.5"
                                style="fill: rgb(var(--risk-color))"
                                cy="50"
                                r="33%"
                            />
                            <image
                                x="65"
                                y="0"
                                width="6rem"
                                height="6rem"
                                id="riskIcon"
                                xlink:href=""
                            />
                        </svg>
                    </div>
                </n-space>
            </div>
        </div>
        <div class="diamond">
            <div
                onclick="window.open(`http://scp-wiki-cn.wikidot.com/anomaly-classification-system-guide`)"
                class="container"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.2"
                    baseProfile="tiny"
                    id="diamondSvg"
                    x="0px"
                    y="0px"
                    class="slide-rotate-diamond"
                    viewBox="0 0 160 160"
                    xml:space="preserve"
                >
                    <path
                        fill="#010101"
                        style="fill: var(--n-title-text-color)"
                        d="M136.1,133.3l23.9-23.9V51.2l-24-24l19.1-19.1l4.9,4.9l0-12.9l-12.9,0l4.9,4.9L133,24.2l-24-24H51l-24,24 L8,5.2l4.9-4.9L0,0.2l0,12.9l4.9-4.9L24,27.3l-24,24v58.2l23.9,23.9l-19,19L0,147.3l0,12.9l12.9,0L8,155.3l19-19l23.9,23.9h58.4 l23.9-23.9l19,19l-4.9,4.9l12.9,0l0-12.9l-4.9,4.9L136.1,133.3z M155.7,53v54.6l-22.6,22.6l-50-50L133,30.3L155.7,53z M52.8,4.5 h54.4l22.7,22.7L80,77.2L30.1,27.3L52.8,4.5z M4.3,107.6V53L27,30.3L77,80.2l-50,50L4.3,107.6z M107.4,155.9H52.6L30,133.3l50-50 l50,50L107.4,155.9z"
                    />
                    <polygon
                        class="fade-background-color"
                        style="fill: rgba(var(--bar-color), 0.35)"
                        points="80,77.2 30.1,27.3 52.8,4.5 107.2,4.5 129.9,27.2 "
                    />
                    <polygon
                        class="fade-background-color"
                        style="fill: rgb(var(--disrupt-color), 0.35)"
                        points="77,80.2 27.1,130.1 4.3,107.4 4.3,53 27,30.4 "
                    />
                    <polygon
                        class="fade-background-color"
                        style="fill: rgb(var(--risk-color), 0.35)"
                        points="83,80.2 132.9,30.4 155.8,53 155.8,107.4 133,130.1 "
                    />
                    <polygon
                        class="fade-background-color"
                        style="fill: rgb(var(--secondary-color), 0.35)"
                        points="80,83.2 129.9,133.1 107.2,155.9 52.8,155.9 30.1,133.2 "
                    />
                    <circle
                        style="
                            stroke: #000000;
                            stroke-width: 4;
                            stroke-miterlimit: 10;
                            fill: rgba(var(--class-color), 1);
                        "
                        cx="80"
                        cy="35"
                        r="15%"
                    />
                    <image
                        id="diamondClassIcon"
                        class="fade-icon"
                        style="overflow: visible"
                        width="33%"
                        height="33%"
                        x="53.5"
                        y="8"
                        xlink:href=""
                    ></image>
                    <circle
                        style="
                            stroke: #000000;
                            stroke-width: 4;
                            stroke-miterlimit: 10;
                            fill: rgba(var(--disrupt-color), 1);
                        "
                        cx="35"
                        cy="80"
                        r="15%"
                    />
                    <image
                        id="diamondDisruptIcon"
                        style="overflow: visible"
                        class="fade-icon"
                        width="33%"
                        height="33%"
                        x="9"
                        y="53"
                        xlink:href=""
                    ></image>
                    <circle
                        style="
                            stroke: #000000;
                            stroke-width: 4;
                            stroke-miterlimit: 10;
                            fill: rgba(var(--risk-color), 1);
                        "
                        cx="125"
                        cy="80"
                        r="15%"
                    />
                    <image
                        id="diamondRiskIcon"
                        class="fade-icon"
                        style="overflow: visible"
                        width="33%"
                        height="33%"
                        x="98.5"
                        y="53"
                        xlink:href=""
                    ></image>
                    <circle
                        style="
                            visibility: var(--secondary-visible);
                            stroke: #000000;
                            stroke-width: 4;
                            stroke-miterlimit: 10;
                            fill: rgba(var(--secondary-color), 1);
                        "
                        cx="80"
                        cy="125"
                        r="15%"
                    />
                    <image
                        id="diamondSecondaryIcon"
                        class="fade-icon"
                        style="overflow: visible"
                        width="33%"
                        height="33%"
                        x="53.5"
                        y="98"
                        xlink:href=""
                    ></image>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    --bar-color: v-bind(levelColor);
    --class-color: v-bind(classColor);
    --secondary-color: v-bind(secondaryColor);
    --disrupt-color: v-bind(disruptColor);
    --risk-color: v-bind(riskColor);
    --secondary-visible: v-bind(secondaryVisible);
}
</style>
<style lang="less" src="../../assets/styles/acs.less" scoped></style>
