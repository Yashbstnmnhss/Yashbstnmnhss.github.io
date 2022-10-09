<route lang="yaml">
meta:
    keepAlive: false
</route>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMain } from '../store'
import {
    NButton,
    NSpace,
    NButtonGroup,
    NDropdown,
    NIcon,
    MenuOption as MO,
    NTooltip,
} from 'naive-ui'
import {
    SunnyOutline,
    MoonOutline,
    MenuOutline,
    CloudOutline,
    CloudOfflineOutline,
    EllipsisHorizontal,
} from '@vicons/ionicons5'
import { Themes } from '../lib/constants'
import { onMounted } from 'vue'
import { jokeMOs } from '../route/menus/jokes'
import { checkWebsite } from '../lib/utils'
import { API } from '../lib/constants'

const store = useMain(),
    router = useRouter(),
    locale = useI18n()

const check = async (link: string) => await checkWebsite(link)
const websites: [string, string][] = [
    ['主站', 'https://yashbstnmnhss.github.io'],
    ['Netlify站', 'https://bstnmnhss.netlify.app'],
    ['Vercel站', 'https://yashbstnmnhss.vercel.app'],
    ['API', API],
]

let title = $ref('Bstnmnhss'),
    theme = $ref<typeof store.theme>(),
    dropdown = $ref<MO[]>(
        jokeMOs.map(
            v =>
                ({
                    label: locale.t(`layouts.JokesLayout.${v.key}`),
                    key: v.link || v.children?.find(v => v.key === v.key)?.link || v.key,
                } as MO)
        )
    ),
    websitesAlive = $ref<[string, string, boolean | null][]>(websites.map(v => [v[0], v[1], null]))

const getWebsitesAlive = async (): Promise<[string, string, boolean | null][]> => {
    var links = websites.map(v => check(v[1]))
    var ables = await Promise.all(links)
    return websites.map((v, i) => [v[0], v[1], ables[i]])
}

onMounted(() => {
    theme = store.theme
    getWebsitesAlive().then(v => (websitesAlive = v))
})

const updateTheme = () => (store.theme = theme = theme === Themes.dark ? Themes.light : Themes.dark)
const start = () => router.push('/jokes')
const select = (key: string) => router.push(`${key}`)
const open = (url: string) => (window.location.href = url)
</script>

<template>
    <div class="full wrapper">
        <div class="layer background-layer blocks">
            <div class="block bv1 block-vertical animate-vertical" style="left: 2vmin" />
            <div class="block bh1 block-horizontal animate-horizontal" style="top: 2vmin" />
            <div
                class="block bv2 block-vertical animate-vertical animate-reverse"
                style="right: 2vmin"
            />
            <div
                class="block bh2 block-horizontal animate-horizontal animate-reverse"
                style="bottom: 2vmin"
            />
        </div>
        <div class="layer content-layer" style="height: 100%">
            <NSpace :size="15" class="full" vertical justify="center" align="center">
                <NSpace :size="50" vertical justify="center" align="center">
                    <span
                        class="title zoomin"
                        @mouseover="title = 'Bstпмпhss'"
                        @mouseleave="title = 'Bstnmnhss'"
                    >
                        {{ title }}
                    </span>
                    <NSpace :size="25" justify="center" align="center">
                        <NButton
                            type="primary"
                            size="large"
                            class="start-button zoomin-small delay1"
                            @click="start()"
                        >
                            乐子 楽子 樂子
                        </NButton>
                        <NButtonGroup class="zoomin-small delay2">
                            <NDropdown @select="key => select(key)" scrollable :options="dropdown">
                                <NButton ghost type="default" size="medium">
                                    <NIcon size="20">
                                        <MenuOutline />
                                    </NIcon>
                                </NButton>
                            </NDropdown>
                            <NButton ghost type="default" size="medium" @click="updateTheme()">
                                <NIcon size="20">
                                    <span v-if="theme === Themes.light">
                                        <SunnyOutline />
                                    </span>
                                    <span v-else>
                                        <MoonOutline />
                                    </span>
                                </NIcon>
                            </NButton>
                        </NButtonGroup>
                    </NSpace>
                </NSpace>
                <NSpace :size="2" justify="center" align="center" class="zoomin-small delay3">
                    <NTooltip placement="bottom" v-for="w in websitesAlive">
                        <template #trigger>
                            <NButton
                                dashed
                                :type="w[2] === false ? 'error' : 'success'"
                                @click="open(w[1])"
                            >
                                <template #icon>
                                    <NIcon>
                                        <EllipsisHorizontal v-if="w[2] === null" />
                                        <CloudOutline v-else-if="w[2] === true" />
                                        <CloudOfflineOutline v-else />
                                    </NIcon>
                                </template>
                                {{ w[0] }}
                            </NButton>
                        </template>
                        {{ w[1] }}
                        <b>
                            {{
                                w[2] === null ? ' - 加载中' : w[2] === true ? ' - 正常' : ' - 异常'
                            }}
                        </b>
                    </NTooltip>
                </NSpace>
            </NSpace>
        </div>
    </div>
</template>

<style scoped lang="less">
.title {
    font-size: 8vh;
    font-family: Metropolis, sans-serif;
    line-height: 1;
    user-select: none;
    -webkit-user-drag: none;
}

@Random: `Math.floor(Math.random() * 10.25) + 2.8 `;
@RandomDelay: `Math.floor(Math.random() * 6) `;

@TimingFunctions: ~'ease', ~'linear', ~'ease-in', ~'ease-out', ~'ease-in-out', ~'cubic-bezier(0.47, 0, 0.75, 0.72)';
@TFLength: length(@TimingFunctions);
@RandIndex: `Math.floor(Math.random() * @{TFLength}) `;

* {
    --n-color: rgba(37, 204, 255, 90%);
    --color: var(--n-color, rgba(white, 90%));
    --color2: darken(rgba(37, 204, 255, 90%), 20%);
    --full-size: 100%;
    --other-size: 3.5vmax;
}

.start-button {
    border-radius: 5px;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;
    &:hover {
        border-radius: 12px;
    }
}

.zoomin {
    display: block;
    animation: 1s forwards;
    animation-name: zoom-in;
}
.zoomin-small {
    display: block;
    animation: 1s both;
    animation-name: zoom-in-small;
}
@seconds: 1, 2, 3;
each(@seconds, {
    .delay@{value} {
        animation-delay: calc(@value * 1s);
    }
})
@keyframes zoom-in {
    0% {
        transform: scale(3);
        opacity: 0;
    }
}
@keyframes zoom-in-small {
    0% {
        opacity: 0;
    }
}

.wrapper {
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
}
.layer {
    position: relative;
}
.content-layer {
    z-index: 1;
}
.background-layer {
    z-index: -1;
}

@bs: bv1, bv2, bh1, bh2;
each(@bs, {
    .@{value} {
        animation-duration: calc(2s * @Random) !important;
        animation-delay: calc(@RandomDelay * 1s) !important;
        animation-timing-function: extract(@TimingFunctions, @RandIndex) !important;
    }
});


.block {
    position: fixed;
    background-color: var(--color);
    background: linear-gradient(to bottom, var(--color), var(--color2));
    backdrop-filter: blur(18px);
    filter: drop-shadow(
        1px 2px 8px hsl(220deg 60% 50%)
    );
    border-radius: 0.5vw;
    border: none;
}
.block-vertical {
    height: var(--full-size);
    width: var(--other-size);
}
.block-horizontal {
    height: var(--other-size);
    width: var(--full-size);
}

.animate-vertical,
.animate-horizontal {
    animation-duration: 10s;
    animation-timing-function: cubic-bezier(0.47, 0, 0.75, 0.72);
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-fill-mode: backwards;
}
.animate-vertical {
    animation-name: vertical-move;
}
.animate-horizontal {
    animation-name: horizontal-move;
}
.animate-reverse {
    animation-direction: reverse;
}

@keyframes vertical-move {
    from {
        top: calc(-1 * var(--full-size));
    }
    to {
        top: calc(2 * var(--full-size));
    }
}

@keyframes horizontal-move {
    from {
        left: calc(-1 * var(--full-size));
    }
    to {
        left: calc(2 * var(--full-size));
    }
}
</style>
