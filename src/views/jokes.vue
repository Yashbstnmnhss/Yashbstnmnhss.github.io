<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NSpace } from 'naive-ui'
import Viewer from '../components/basic/Viewer.vue'
import { getOrMakeMenus as getMenu } from '../route/menu'
import { useMain } from '../store'
import { onMounted, onUnmounted, watch, ref } from 'vue'
import SideMenu from '../components/basic/SideMenu.vue'
import Logo from '@/assets/images/logo.svg'
import { storeToRefs } from 'pinia'

const store = storeToRefs(useMain())
let collapsed = store.sidebar,
    showCollapsedContent = ref<boolean>(false),
    showTrigger = ref<'bar'>('bar'),
    collapsedWidth = ref<number>(0),
    siderWidth = ref<number>(240),
    menuIndent = ref<number>(32),
    menuRootIndent = ref<number>(32),
    collapseMode = ref<'transform' | 'width'>('transform')

const toggle = () => (collapsed.value = !collapsed.value)
const match = window.matchMedia('(width < 500px)')
const listener = ({ matches }: { matches: boolean }) => {
    siderWidth.value = matches ? 150 : 240
    menuIndent.value = menuRootIndent.value = matches ? 12 : 32
}

onMounted(() => {
    collapsed.value = store.sidebar.value
    match.addEventListener('change', listener)
})
onUnmounted(() => match.removeEventListener('change', listener))
</script>

<template>
    <NLayout style="height: 100%">
        <NLayoutHeader style="height: 64px" bordered>
            <NSpace>
                <img
                    @click="$router.push('/')"
                    :src="Logo"
                    style="
                        max-width: 100%;
                        height: 45px;
                        margin-left: 12px;
                        margin-top: 12px;
                        cursor: pointer;
                    "
                />
            </NSpace>
        </NLayoutHeader>
        <NLayout position="absolute" style="top: 64px" has-sider>
            <NLayoutSider
                :native-scrollbar="false"
                bordered
                :show-trigger="showTrigger"
                :collapse-mode="collapseMode"
                :collapsed-width="collapsedWidth"
                :show-collapsed-content="showCollapsedContent"
                :collapsed="collapsed"
                :width="siderWidth"
                @collapse="toggle"
                @expand="toggle"
            >
                <SideMenu
                    :indent="menuIndent"
                    :root-indent="menuRootIndent"
                    :layout="'jokes'"
                    :collapsed="collapsed"
                    :get-menu-options="() => getMenu('jokes') ?? []"
                />
            </NLayoutSider>
            <NLayout class="main-content" content-style="padding: 24px;" :native-scrollbar="false">
                <Viewer :transition="true" />
            </NLayout>
        </NLayout>
    </NLayout>
</template>
