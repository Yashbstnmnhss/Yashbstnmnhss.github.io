<script setup lang="ts">
import {
    NDateLocale,
    NConfigProvider,
    NNotificationProvider,
    NDialogProvider,
    NMessageProvider,
    NLoadingBarProvider,
    NGlobalStyle,
} from 'naive-ui'
import { useMain } from '../../store'
import { getLocales, getTheme } from '../../lib/utils/naive'
import { Languages, Themes } from '../../lib/constants'
import { onMounted, ref, watch } from 'vue'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'
import highlightjs from 'highlight.js'
import Achiever from './Achiever.vue'

const store = useMain()

const locale = ref<any>(),
    dateLocale = ref<NDateLocale>(),
    theme = ref<BuiltInGlobalTheme>(),
    hljs = highlightjs,
    overrides = {
        common: {
            primaryColor: 'rgb(36, 204, 255)',
            primaryColorHover: 'rgb(28, 196, 247)',
            primaryColorPressed: 'rgb(44, 212, 255)',
            primaryColorSuppl: 'rgba(42, 144, 148, 1)',
        },
    }

onMounted(() => {
    languageUpdate(store.language)
    themeUpdate(store.theme)
})

watch(
    () => store.language,
    l => languageUpdate(l)
)
watch(
    () => store.theme,
    t => themeUpdate(t)
)

const languageUpdate = (v: Languages) => {
    var l = getLocales(v)
    locale.value = l.locale
    dateLocale.value = l.dateLocale
}
const themeUpdate = (v: Themes) => (theme.value = getTheme(v))
</script>

<template>
    <n-config-provider
        :theme="theme"
        :locale="locale"
        :date-locale="dateLocale"
        :hljs="hljs"
        :theme-overrides="overrides"
        class="full"
    >
        <n-global-style />
        <n-loading-bar-provider>
            <n-message-provider>
                <n-notification-provider :placement="'bottom-right'">
                    <n-dialog-provider>
                        <Achiever>
                            <slot />
                        </Achiever>
                    </n-dialog-provider>
                </n-notification-provider>
            </n-message-provider>
        </n-loading-bar-provider>
    </n-config-provider>
</template>
