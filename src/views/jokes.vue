<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSpace } from 'naive-ui'
import type { MenuOption } from 'naive-ui/lib'
import Viewer from '../components/Viewer.vue'
import Footer from '../components/Footer.vue'
import { useStore } from '../store'
import { ref, onMounted } from 'vue'
import SideMenu from '../components/SideMenu.vue'
import { Icons } from '../utils/icon'
import { useAchiever } from '../composables/achievements'

const store = useStore()
const achiever = useAchiever()

const getMenuOptions = () => {
    const fuzeMenuOptions: MenuOption[] = [
        {
            link: '/jokes/fuzeinfo',
            key: 'fuze',
            iconType: Icons['person'],
        },
        {
            key: 'fuze-sayings',
            iconType: Icons['book'],
            children: [
                {
                    link: '/jokes/fuze/sayings/original',
                    key: 'fuze-sayings-original',
                    iconType: Icons['bookmark'],
                },
                {
                    link: '/jokes/fuze/sayings/translated',
                    key: 'fuze-sayings-translated',
                    iconType: Icons['bookmark'],
                },
            ],
        },
        {
            link: '/jokes/fuze/sounds',
            key: 'fuze-sounds',
            iconType: Icons['volume'],
        },
        {
            link: '/jokes/fuze/images',
            key: 'fuze-images',
            iconType: Icons['image'],
        },
        {
            link: '/jokes/fuze/videos',
            key: 'fuze-videos',
            iconType: Icons['video'],
        },
    ]
    const gclMenuOptions: MenuOption[] = [
        {
            link: '/jokes/gclinfo',
            key: 'gcl',
            iconType: Icons['person'],
        },
        {
            key: 'gcl-books',
            iconType: Icons['book'],
            children: [
                {
                    link: '/jokes/gcl/books/depression',
                    key: 'gcl-books-depression',
                    iconType: Icons['bookmark'],
                },
                {
                    link: '/jokes/gcl/books/indonesian',
                    key: 'gcl-books-indonesian',
                    iconType: Icons['bookmark'],
                },
                {
                    link: '/jokes/gcl/books/yandere',
                    key: 'gcl-books-yandere',
                    iconType: Icons['bookmark'],
                },
                {
                    link: '/jokes/gcl/books/bangsat',
                    key: 'gcl-books-bangsat',
                    iconType: Icons['bookmark'],
                },
            ],
        },
        {
            link: '/jokes/gcl/images',
            key: 'gcl-images',
            iconType: Icons['image'],
        },
    ]

    const jokeMenuOptions: MenuOption[] = [
        {
            key: 'fuze',
            iconType: Icons['person'],
            children: fuzeMenuOptions,
        },
        {
            key: 'gcl',
            iconType: Icons['person'],
            children: gclMenuOptions,
        },
    ]

    const headerMenuOptions: MenuOption[] = [
        {
            link: '/jokes',
            key: 'joke-home',
            iconType: Icons['home'],
        },
        {
            link: '/sayings',
            key: 'sayings',
            iconType: Icons['text'],
        },
    ]
    const footerMenuOptions: MenuOption[] = [
        {
            link: {
                to: '/lastdaysofeurope',
            },
            key: 'lastdaysofeurope',
            iconType: Icons['chatbox'],
        },
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

    const menuOptions: MenuOption[] = [
        ...headerMenuOptions,
        { type: 'divider' },
        {
            type: 'group',
            label: 'J O K E S',
            key: 'joke-group',
            children: [...jokeMenuOptions],
        },
        { type: 'divider' },
        ...footerMenuOptions,
    ]

    return menuOptions
}

const collapsed = ref<boolean>()

const toggle = () => {
    store.commit('sidebar', !collapsed.value)
}

onMounted(() => {
    collapsed.value = store.state.sidebar
})

store.watch(
    state => state.sidebar,
    (val, old) => {
        collapsed.value = val
    }
)
</script>

<template>
    <n-layout style="height: 100%">
        <n-layout-header style="height: 64px; padding: 24px" bordered>
            <n-space>Jokes-Bstnmnhss</n-space>
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
                    :layout="'JokesLayout'"
                    :collapsed="collapsed"
                    :get-menu-options="getMenuOptions"
                />
            </n-layout-sider>
            <n-layout content-style="padding: 24px;" :native-scrollbar="false">
                <Viewer />
            </n-layout>
        </n-layout>
        <n-layout-footer position="absolute" style="height: 64px; padding: 12px" bordered>
            <Footer />
        </n-layout-footer>
    </n-layout>
</template>
