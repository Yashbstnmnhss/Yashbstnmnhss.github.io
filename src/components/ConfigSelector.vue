<script setup lang="ts">
import {
    NSpace,
    NPopselect,
    NButton,
    NIcon
} from 'naive-ui'
import {
    LanguageOutline,
    ColorFillOutline
} from "@vicons/ionicons5"
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore, commit } from '../store'
import { setLanguage } from '../locales/'
import { 
    DefaultLanguage, 
    DefaultTheme, 
    Languages, 
    Themes 
} from '../utils/constants'
import Logger from '../utils/logger'

const i18n = useI18n()
const store = useStore()

const $t = i18n.t

const getLangOptions = () => {
    return Object.keys(Languages).map(id => {
        return {
            label: $t('basic.langID.' + id),
            value: id
        }
    })
}
const getThemeOptions = () => {
    return Object.keys(Themes).map(th => {
        return {
            label: $t('basic.themes.' + th),
            value: th
        }
    })
}

const langOptions = ref(getLangOptions())
const themeOptions = ref(getThemeOptions())

const getLangStr = () => $t('basic.langID.' + i18n.locale.value)
const getThemeStr = () => $t('basic.themes.' + store.state.theme)

let langStr = ref(getLangStr())
let themeStr = ref(getThemeStr())

const langUpdate = (val: string, _: any) => {
    if (val != i18n.locale.value) {
        var id: Languages = Languages[val as keyof typeof Languages] || DefaultLanguage
        setLanguage(id)
        commit('language', id)
        Logger.log('[ConfigSelector]', 'langUpdate', '=', val)
        langStr.value = getLangStr()
        langOptions.value = getLangOptions()
    }
}
const themeUpdate = (val: string, _: any) => {
    if (val != store.state.theme) {
        var th: Themes = Themes[val as keyof typeof Themes] || DefaultTheme
        commit('theme', th)
        Logger.log('[ConfigSelector]', 'themeUpdate', '=', val)
        themeStr.value = getThemeStr()
        themeOptions.value = getThemeOptions()
    }   
}
</script>

<template>
    <n-space>
        <n-popselect
            @update:value="langUpdate"
            :options="langOptions"    
        >
            <n-button>
                <template #icon>
                    <n-icon>
                        <language-outline />
                    </n-icon>
                </template>
                {{ $t('components.ConfigSelector.lang') }}:
                {{ langStr }}
            </n-button>
        </n-popselect>
        <n-popselect
            @update:value="themeUpdate"
            :options="themeOptions"
        >
            <n-button>
                <template #icon>
                    <n-icon>
                        <color-fill-outline />
                    </n-icon>
                </template>
                {{ $t('components.ConfigSelector.theme') }}:
                {{ themeStr }}
            </n-button>
        </n-popselect>
    </n-space>
</template>