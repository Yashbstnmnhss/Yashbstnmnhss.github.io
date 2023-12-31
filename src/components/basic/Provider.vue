<script setup lang="ts">
import {
    NDateLocale,
    NConfigProvider,
    NNotificationProvider,
    NDialogProvider,
    NMessageProvider,
    NLoadingBarProvider,
    NGlobalStyle,
    zhCN,
    dateZhCN,
} from 'naive-ui'
import { useMain } from '../../store'
import { getLocales, getTheme } from '../../lib/utils'
import { Languages, Themes } from '../../lib/constants'
import { onMounted, ref, watch } from 'vue'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'
import highlightjs from 'highlight.js'
import Achiever from './Achiever.vue'
import datafiles from '../../lib/datafiles'

const store = useMain()

const { styleOverrides } = defineProps<{
    styleOverrides?: object
}>()

const locale = ref<any>(),
    dateLocale = ref<NDateLocale>(),
    theme = ref<BuiltInGlobalTheme>(),
    hljs = highlightjs

hljs.registerLanguage('kuo', hljs => {
    const SYMBOL = {
        scope: 'symbol',
        begin: '[^"#\\(\\{\\[\\]\\}\\)\\d\\s][^"#\\s\\(\\)\\[\\]\\{\\}]*',
        relevance: 0,
    }
    return {
        name: 'kuo',
        contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.C_NUMBER_MODE,
            {
                scope: 'string',
                begin: "'",
                end: "'",
                contains: [{ begin: '\\\\.' }],
            },
            {
                scope: 'variable',
                begin: '\\$[^\\s\\(\\)\\[\\]\\{\\}]+',
                contains: [SYMBOL],
            },
            {
                scope: 'keyword',
                begin: '(define|if|while|for|set|get|break|return|continue|lambda|[+\\-*/%=<>]|<=|>=|!=|:|and|or|xor|not)',
            },
            {
                scope: 'literal',
                begin: '(true|false|null)',
            },
            SYMBOL,
        ],
    }
})

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
        :locale="zhCN"
        :date-locale="dateZhCN"
        :hljs="hljs"
        :theme-overrides="styleOverrides || datafiles('theme')"
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
