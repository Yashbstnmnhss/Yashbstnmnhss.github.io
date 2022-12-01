<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSpace } from 'naive-ui'
import Viewer from '../components/basic/Viewer.vue'
import { useMain } from '../store'
import { onMounted, watch } from 'vue'
import getMenuOptions from '../route/menus/jokes'
import SideMenu from '../components/basic/SideMenu.vue'

const store = useMain()
let collapsed = $ref<boolean>()

const toggle = () => (store.sidebar = !collapsed)

onMounted(() => (collapsed = store.sidebar))

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
                    <circle
                        id="iconWrap"
                        cx="30"
                        cy="30"
                        r="15"
                        style="stroke: var(--n-text-color); stroke-width: 3px; fill: transparent"
                    />
                    <text
                        id="iconText"
                        x="20"
                        y="36"
                        style="
                            font-size: 20px;
                            fill: rgb(36, 204, 255);
                            user-select: none;
                            cursor: pointer;
                        "
                        onclick="window.location.href='/'"
                    >
                        樂
                    </text>
                    <text
                        x="55"
                        y="40"
                        style="
                            font-size: 25px;
                            fill: var(--n-text-color);
                            user-select: none;
                            cursor: pointer;
                        "
                        onclick="window.location.href='/'"
                    >
                        Bstnmnhss 3
                    </text>
                </svg>
            </n-space>
        </n-layout-header>
        <n-layout position="absolute" style="top: 64px" has-sider>
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
                    :layout="'JokesLayout'"
                    :collapsed="collapsed"
                    :get-menu-options="getMenuOptions"
                />
            </n-layout-sider>
            <n-layout content-style="padding: 24px;" :native-scrollbar="false">
                <Viewer />
            </n-layout>
        </n-layout>
    </n-layout>
</template>
