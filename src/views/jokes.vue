<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NSpace } from 'naive-ui'
import Viewer from '../components/basic/Viewer.vue'
import { getOrMakeMenus as getMenu } from '../route/menu'
import { useMain } from '../store'
import { onMounted, watch } from 'vue'
import SideMenu from '../components/basic/SideMenu.vue'
import Logo from '@/assets/images/logo.svg'

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
                <img
                    @click="$router.push('/')"
                    :src="Logo"
                    style="max-width: 100%; height: 45px; margin-left: 12px; margin-top: 12px"
                />
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
