<route lang="yaml">
meta:
    keepAlive: false
</route>

<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
import MusicBox from '../components/models/FuMusicBox.vue'
import { useMain } from '../store'
import { toImportInfo } from '../lib'
import { NFlex, NCard, MenuOption as MO, useThemeVars, useDialog } from 'naive-ui'
import Logo from '@/assets/images/logo.svg'
import { onMounted, ref } from 'vue'
import { getGroupInMenu } from '../route/menu'
import { checkWebsite, useAchiever, useTexta, Themes, valueToString, VERSION } from './portal'

const store = useMain(),
    router = useRouter(),
    texta = useTexta(),
    styles = useThemeVars(),
    dialog = useDialog(),
    achiever = useAchiever()

const check = async (link: string) => await checkWebsite(link)
const websites: [string, string][] = [
    ['Github站', 'https://yashbstnmnhss.github.io'],
    ['Netlify站', 'https://bstnmnhss3.netlify.app'],
    ['Vercel站', 'https://bstnmnhss.vercel.app'],
    ['Cloudflare站', 'https://yashbstnmnhss-github-io.pages.dev'],
]

var theme = ref<typeof store.theme>(),
    dropdown = ref<MO[]>(
        (getGroupInMenu('jokes', 'default')!.children ?? []).map(
            (val: MO) =>
                ({
                    label:
                        val.label && texta.has(['menus', 'jokes', valueToString(val.label)])
                            ? texta.get(['menus', 'jokes', valueToString(val.label)])
                            : texta.get(['menus', 'jokes', valueToString(val.key)]),
                    key: val.link || (val.children ?? [])[0]?.link || val.key,
                } as MO)
        )
    ),
    websitesAlive = ref<[string, string, boolean | null][]>(websites.map(v => [v[0], v[1], null]))

const getWebsitesAlive = async (): Promise<[string, string, boolean | null][]> => {
    var links = websites.map(v => check(v[1]))
    var ables = await Promise.all(links)
    return websites.map((v, i) => [v[0], v[1], ables[i]])
}

onMounted(() => {
    theme.value = store.theme
    getWebsitesAlive().then(val => (websitesAlive.value = val))
})

const clickInfo = () => {
    const d = dialog.create({
        title: '凹冈!',
        closable: false,
        maskClosable: false,
        closeOnEsc: false,
        content: `这个图书馆是个僻静的地方,平时几乎无人造访,但依旧会坚持维护她录入新内容,毕竟她的价值与意义绝不是用访客流量来维持的。"All gone So long"这句话可能已应验了,亦或不需说"可能",至少这里会记住一部分的,也妨到"Completely gone"时只能来句"So long"。`,
        showIcon: false,
        positiveText: '嗖浪..',
        negativeText: '力挽狂澜',
        onNegativeClick() {
            d.negativeText = undefined
            d.positiveText = '嗖浪吧'
            d.content = '无聊! 无用! 无能!'
            achiever.achieve('useless_bored')
            return false
        },
    })
}
const updateTheme = () =>
    (store.theme = theme.value = theme.value === Themes.dark ? Themes.light : Themes.dark)

const select = (key: string) => router.push(`${key}`)
const open = (url: string) => (window.location.href = url)

const sources = toImportInfo(import.meta.glob('@/assets/sounds/fuze/**/*.mp3', { eager: true }))
</script>

<template>
    <NFlex size="large" style="padding: 1rem 1rem" vertical justify="space-around" align="stretch">
        <NFlex align="baseline" justify="space-between">
            <img style="width: 15rem" :src="Logo" />
            {{ new Date().toLocaleDateString() }}
        </NFlex>

        <NCard title="音盒">
            <MusicBox :sources="sources.map(val => [val.name, val.path])" />
        </NCard>
    </NFlex>
</template>

<style scoped lang="less">
.blinker {
    text-decoration: underline;
    animation: Blinker 1.5s infinite steps(1, start);
}
@keyframes Blinker {
    0% {
        text-decoration-color: var(--body-color);
    }
    50% {
        text-decoration-color: var(--text-color-2);
    }
    100% {
        text-decoration-color: var(--body-color);
    }
}

.title {
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
    --n-boxshadow: v-bind(styles.boxShadow2);
    --n-color3: v-bind(styles.textColor3);
    --n-color: v-bind(styles.primaryColor);
    --n-color2: v-bind(styles.infoColor);
    --color: var(--n-color, rgb(36, 204, 255));
    --color2: var(--n-color2, rgb(56, 150, 178));
    --color3: var(--n-color3, white);
    --shadow: var(--n-boxshadow);
    --full-size: 100%;
    --other-size: 3.5vmax;
}

.start-button {
    border-radius: 5px;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;
    &:hover {
        border-radius: 8px;
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
        animation-delay: calc(@value * 0.5s);
    }
})

@keyframes zoom-in {
    0% {
        opacity: 0;
        transform: translateY(10px)
    }
}
@keyframes zoom-in-small {
    0% {
        opacity: 0;
    }
}

.wrapper {
    padding: 5vh;
    box-sizing: border-box;
    height: 100%;
    max-height: 100%;
}

@bs: bv1, bv2, bh1, bh2;
each(@bs, {
    .@{value} {
        animation-duration: calc(1.5s * @Random) !important;
        animation-delay: calc(@RandomDelay * 1s) !important;
        animation-timing-function: extract(@TimingFunctions, @RandIndex) !important;
    }
});


.block {
    position: fixed;
    opacity: .875;
    background-color: var(--color);
    background: linear-gradient(to bottom, var(--color), var(--color2));
    backdrop-filter: blur(18px);
    filter: drop-shadow(
        1px 2px 8px var(--color3)
    );
    box-shadow: var(--shadow);
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

.genshin {
    overflow: hidden;
    text-overflow: clip;
    word-break: keep-all;
    font-weight: bolder;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -15;
    opacity: .65;
    animation-name: blur-text;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
}

@keyframes blur-text {
    0% {
        filter: blur(8px);
    }
}
</style>
