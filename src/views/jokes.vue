<script setup lang="ts">
import {
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutFooter,
    NMenu,
    NSpace,
    NPopover,
    NButton,
    NIcon
} from 'naive-ui'
import Viewer from '../components/Viewer.vue'
import ConfigSelector from '../components/ConfigSelector.vue'
import OtherLinks from '../components/OtherLinks.vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useStore } from '../store'
import { ref, watchEffect, onMounted } from 'vue'
import { renderIcon, renderLink } from '../utils/render'
import {
    PersonOutline as PersonIcon,
    BookOutline as BookIcon,
    BookmarkOutline as BookmarkIcon,
    VolumeHighOutline as VolumeIcon,
    ImageOutline as ImageIcon,
    HomeOutline as HomeIcon,
    TextOutline as TextIcon,
    VideocamOutline as VideoIcon,
    LogoMarkdown as MarkdownIcon,
    LinkOutline as LinkIcon,
    LanguageOutline as LanguageIcon
} from '@vicons/ionicons5'

const i18n = useI18n()
const route = useRoute()
const store = useStore()

const getMenuOptions = () => {
    const $t = i18n.t

    const fuzeMenuOptions = [
        {
            label: renderLink(
                {
                    to: {
                        path: "/jokes/fuzeinfo",
                    },
                },
                $t("layouts.JokesLayout.fuze")
            ),
            key: "fuze",
            icon: renderIcon(PersonIcon),
        },
        {
            label: $t("layouts.JokesLayout.fuze-sayings"),
            key: "fuze-sayings",
            icon: renderIcon(BookIcon),
            children: [
                {
                    label: renderLink(
                        {
                            to: {
                                path: "/jokes/fuze/sayings/original",
                            },
                        },
                        $t("layouts.JokesLayout.fuze-sayings-original")
                    ),
                    key: "fuze-sayings-original",
                    icon: renderIcon(BookmarkIcon),
                },
                {
                    label: renderLink(
                        {
                            to: {
                                path: "/jokes/fuze/sayings/translated",
                            },
                        },
                        $t("layouts.JokesLayout.fuze-sayings-translated")
                    ),
                    key: "fuze-sayings-translated",
                    icon: renderIcon(BookmarkIcon),
                },
            ],
        },
        {
            label: renderLink(
                {
                    to: {
                        path: "/jokes/fuze/sounds",
                    },
                },
                $t("layouts.JokesLayout.fuze-sounds")
            ),
            key: "fuze-sounds",
            icon: renderIcon(VolumeIcon),
        },
        {
            label: renderLink(
                {
                    to: {
                        path: "/jokes/fuze/images",
                    },
                },
                $t("layouts.JokesLayout.fuze-images")
            ),
            key: "fuze-images",
            icon: renderIcon(ImageIcon),
        },
        {
            label: renderLink(
                {
                    to: {
                        path: "/jokes/fuze/videos",
                    },
                },
                $t("layouts.JokesLayout.fuze-videos")
            ),
            key: "fuze-videos",
            icon: renderIcon(VideoIcon),
        },
    ]

    const jokeMenuOptions = [
        {
            label: $t('layouts.JokesLayout.fuze'),
            key: 'fuze',
            icon: renderIcon(PersonIcon),
            children: fuzeMenuOptions
        },
    ]

    const footerMenuOptions = [
        {
            label: renderLink(
                {
                    to: {
                        path: "/update",
                    },
                },
                $t("layouts.JokesLayout.update")
            ),
            key: "update",
            icon: renderIcon(MarkdownIcon),
        },
    ]

    const menuOptions = [
        {
            label: renderLink(
                {
                    to: {
                        path: "/jokes",
                    },
                },
                $t("layouts.JokesLayout.joke-home")
            ),
            key: "joke-home",
            icon: renderIcon(HomeIcon),
        },
        {
            label: renderLink(
                {
                    to: {
                        path: "/sayings",
                    },
                },
                $t("layouts.JokesLayout.sayings")
            ),
            key: "sayings",
            icon: renderIcon(TextIcon),
        },
        { type: "divider" },
        {
            type: "group",
            label: "J O K E S",
            key: "joke-group",
            children: [...jokeMenuOptions],
        },
        { type: "divider" },
        ...footerMenuOptions
    ]

    return menuOptions
}

const collapsed = ref(store.state.sidebar)
const current = ref('')
const menuOptions = ref(getMenuOptions())

const toggle = () => {
    store.commit('sidebar', !collapsed.value)
}

onMounted(() => {
    collapsed.value = store.state.sidebar
})

watchEffect(() => {
    if (route.name !== current.value)
        current.value = route.name?.toString() ?? ''
})

store.watch(state => state.language, (val, old) => {
    if (val !== old)
        menuOptions.value = getMenuOptions()
})
store.watch(state => state.sidebar, (val, old) => {
    collapsed.value = val
})
</script>

<template>
    <n-layout style="height: 100%">
        <n-layout-header style="height: 64px; padding: 24px" bordered>
            <n-space>
                Jokes-Bstnmnhss
            </n-space>
        </n-layout-header>
        <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
            <n-layout-sider :native-scrollbar="false" bordered show-trigger collapse-mode="width" :collapsed-width="5"
                :show-collapsed-content="false" :collapsed="collapsed" :width="240" @collapse="toggle" @expand="toggle">
                <n-menu :value="current" :options="menuOptions" :collapsed="collapsed" accordion @update:value="
                    (k) => {
                        current = k;
                    }
                " />
            </n-layout-sider>
            <n-layout content-style="padding: 24px;" :native-scrollbar="false">
                <Viewer />
            </n-layout>
        </n-layout>
        <n-layout-footer position="absolute" style="height: 64px; padding: 12px" bordered>
            <n-space justify="center">
                <n-popover trigger="hover">
                    <template #trigger>
                        <n-button>
                            <template #icon>
                                <n-icon>
                                    <LinkIcon />
                                </n-icon>
                            </template>
                            {{ $t('basic.links') }} 
                        </n-button>
                    </template>
                    <OtherLinks />
                </n-popover>
                <n-popover trigger="hover">
                    <template #trigger>
                        <n-button>
                            <template #icon>
                                <n-icon>
                                    <LanguageIcon />
                                </n-icon>
                            </template>
                            {{ $t('basic.langAndTheme') }}
                        </n-button>
                    </template>
                    <ConfigSelector />
                </n-popover>
            </n-space>
        </n-layout-footer>
    </n-layout>
</template>

<!--<style scoped>
.config-selector {
    margin-left: auto;
}
@media screen and (max-width: 425px) {
    .config-selector {
        width: 0%;
        content: '';
        visibility: collapse;
    }
}
</style>-->