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
import { getLocales, getTheme } from '../../lib/utils'
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
    lang => languageUpdate(lang)
)
watch(
    () => store.theme,
    theme => themeUpdate(theme)
)

const languageUpdate = (val: Languages) => {
    var lang = getLocales(val)
    locale.value = lang.locale
    dateLocale.value = lang.dateLocale
}
const themeUpdate = (val: Themes) => (theme.value = getTheme(val))
</script>

<template>
    <NConfigProvider
        :theme="theme"
        :locale="locale"
        :date-locale="dateLocale"
        :hljs="hljs"
        :theme-overrides="overrides"
        class="full"
    >
        <NGlobalStyle />
        <NLoadingBarProvider>
            <NMessageProvider>
                <NNotificationProvider :placement="'bottom-right'">
                    <NDialogProvider>
                        <Achiever>
                            <slot />
                        </Achiever>
                    </NDialogProvider>
                </NNotificationProvider>
            </NMessageProvider>
        </NLoadingBarProvider>
    </NConfigProvider>
</template>
