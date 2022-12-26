<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NSpace } from 'naive-ui'
import Viewer from '../components/basic/Viewer.vue'
import { getOrMakeMenus as getMenu } from '../route/menu'
import { useMain } from '../store'
import { onMounted, watch } from 'vue'
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
    <NLayout style="height: 100%">
        <NLayoutHeader style="height: 64px" bordered>
            <NSpace>
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
                        日丂丅冂从冂廾丂丂三
                    </text>
                </svg>
            </NSpace>
        </NLayoutHeader>
        <NLayout position="absolute" style="top: 64px" has-sider>
            <NLayoutSider
                :native-scrollbar="false"
                bordered
                show-trigger="bar"
                collapse-mode="width"
                :collapsed-width="0"
                :show-collapsed-content="false"
                :collapsed="collapsed"
                :width="240"
                @collapse="toggle"
                @expand="toggle"
            >
                <SideMenu
                    :layout="'jokes'"
                    :collapsed="collapsed"
                    :get-menu-options="() => getMenu('jokes') ?? []"
                />
            </NLayoutSider>
            <NLayout content-style="padding: 24px;" :native-scrollbar="false">
                <Viewer />
            </NLayout>
        </NLayout>
    </NLayout>
</template>
