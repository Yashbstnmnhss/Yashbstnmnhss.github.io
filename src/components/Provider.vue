<script setup lang="ts">
import { NDateLocale, NConfigProvider, NDialogProvider, NMessageProvider, NLoadingBarProvider, NGlobalStyle } from 'naive-ui';
import { useStore } from '../store';
import { getLocales, getTheme } from '../utils/naive'
import { Languages, Themes } from '../utils/constants';
import { onMounted, ref } from 'vue';
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface';
import highlightjs from 'highlight.js'

highlightjs.registerLanguage('fuze', (hljs) => {
    return {
        name: 'fuze',
        aliases: [ 'fz' ],
        keywords: '',
        contains: [

        ]
    }
})

const store = useStore()

let locale = ref<any>()
let dateLocale = ref<NDateLocale>()
let theme = ref<BuiltInGlobalTheme>()
let hljs = highlightjs

onMounted(() => {
    languageUpdate(store.state.language)
    themeUpdate(store.state.theme)
})

store.watch(s => s.language, (v, _) => {
    languageUpdate(v)
})
store.watch(s => s.theme, (v, _) => {
    themeUpdate(v)
})

const languageUpdate = (v: Languages) => {
    var l = getLocales(v)
    locale.value = l.locale
    dateLocale.value = l.dateLocale
}
const themeUpdate = (v: Themes) => {
    var t = getTheme(v)
    theme.value = t
}
</script>

<template>
    <n-config-provider
        :theme="theme"
        :locale="locale"
        :date-locale="dateLocale"
        :hljs="hljs"
        class="full">
        <n-global-style />
        <n-loading-bar-provider>
            <n-message-provider>
                <n-dialog-provider>
                    <slot />
                </n-dialog-provider>
            </n-message-provider>
        </n-loading-bar-provider>
    </n-config-provider>
</template>