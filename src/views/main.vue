<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSpace } from 'naive-ui'
import type { MenuOption as MO } from 'naive-ui/lib'
import Viewer from '../components/basic/Viewer.vue'
import { useMain } from '../store'
import { watch, onMounted } from 'vue'
import SideMenu from '../components/layout/SideMenu.vue'
import { Icons } from '../lib/utils/icon'
import { useAchiever } from '../lib/models/achievements'
import { choice } from '../lib/utils'

const achiever = useAchiever()
const store = useMain()

const getMenuOptions = () => {
    const mainMOs: MO[] = [
        {
            link: '/main/grammar',
            key: 'grammar',
            iconType: Icons['text'],
        },
    ]

    const headerMOs: MO[] = [
        {
            link: '/jokes',
            key: 'back-jokes',
            iconType: Icons['arrowBack'],
        },
    ]
    const footerMOs: MO[] = [
        {
            link: {
                to: '/update',
                onClick: () => {
                    achiever.achieve('nothing_interesting_here')
                },
            },
            key: 'update',
            iconType: Icons['markdown'],
        },
    ]

    const MOs: MO[] = [
        ...headerMOs,
        { type: 'divider' },
        ...mainMOs,
        { type: 'divider' },
        ...footerMOs,
    ]

    return MOs
}

let collapsed = $ref<boolean>()

const toggle = () => {
    store.sidebar = !collapsed
}
onMounted(() => {
    collapsed = store.sidebar
    const formatted = [
        '<tspan fill="var(--var)">bstn</tspan><tspan fill="var(--normal)">.</tspan><tspan fill="var(--method)">mnhss</tspan><tspan fill="var(--symbol)">()</tspan>',
        '<tspan fill="var(--keyword)">bstn </tspan><tspan fill="var(--type)">Mnhss</tspan><tspan fill="var(--normal)"> = {</tspan>',
        '<tspan fill="var(--string)">"bstnmnhs</tspan><tspan fill="var(--escape)">\\</tspan><tspan fill="var(--string)">s"</tspan>',
        '<tspan fill="var(--flow)">bs </tspan><tspan fill="var(--symbol)">(</tspan><tspan fill="var(--var)">tn</tspan> == <tspan fill="var(--keyword)">mnhss</tspan><tspan fill="var(--symbol)">)</tspan>',
    ]
    title_title_title_title_title_title_title_title_title_title_title_title_这个函数名真的好长啊长啊长长长啊让它再长一点yeaheayhyeah()
    function title_title_title_title_title_title_title_title_title_title_title_title_这个函数名真的好长啊长啊长长长啊让它再长一点yeaheayhyeah() {
        var text = document.querySelector<SVGTextElement>('#svglogo')!
        if (!text) return
        var theme = choice(formatted)
        text.innerHTML = theme ?? 'BSTNMNHSS'
    }
})

watch(
    () => store.sidebar,
    v => (collapsed = v)
)
</script>

<template>
    <n-layout style="height: 100%">
        <n-layout-header style="height: 64px" bordered>
            <n-space>
                <svg style="max-width: 100%" height="64px" viewBox="0 0 500 64">
                    <text
                        id="svglogo"
                        x="15"
                        y="40"
                        style="
                            fill: var(--n-text-color);
                            font-size: 25px;
                            user-select: none;
                            --var: rgb(156, 220, 254);
                            --method: rgb(220, 220, 170);
                            --normal: var(--n-text-color);
                            --symbol: rgb(23, 159, 255);
                            --string: rgb(206, 145, 120);
                            --keyword: rgb(86, 156, 214);
                            --type: rgb(78, 201, 176);
                            --escape: rgb(215, 186, 125);
                            --flow: rgb(197, 134, 192);
                        "
                    >
                        BSTNMNHSS
                    </text>
                </svg>
            </n-space>
        </n-layout-header>
        <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
            <n-layout-sider
                :native-scrollbar="false"
                bordered
                show-trigger
                collapse-mode="width"
                :collapsed-width="5"
                :show-collapsed-content="false"
                :collapsed="collapsed"
                :width="240"
                @collapse="toggle"
                @expand="toggle"
            >
                <SideMenu
                    :layout="'MainLayout'"
                    :collapsed="collapsed"
                    :get-menu-options="getMenuOptions"
                />
            </n-layout-sider>
            <n-layout content-style="padding: 24px;" :native-scrollbar="false">
                <Viewer />
            </n-layout>
        </n-layout>
        <n-layout-footer position="absolute" style="height: 64px; padding: 12px" bordered>
            <!--<Footer />-->
        </n-layout-footer>
    </n-layout>
</template>
