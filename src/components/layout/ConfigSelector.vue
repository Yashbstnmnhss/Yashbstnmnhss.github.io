<script setup lang="ts">
import { NSpace, NPopselect, NButton, NIcon } from 'naive-ui'
import { LanguageOutline, ColorFillOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMain } from '../../store'
import { setLanguage, ensureLanguage } from '../../locales/'
import { DefaultTheme, Languages, Themes } from '../../lib/constants'
import Logger from '../../lib/utils/logger'
import { Counter, random } from '../../lib/utils'
import { useAchiever } from '../../lib/models/achievements'

const achiever = useAchiever()
const i18n = useI18n()
const store = useMain()

const $t = i18n.t

const getLangOptions = () => {
    return Object.keys(Languages).map(id => {
        return {
            label: $t(`basic.langID.${id}`),
            value: id,
        }
    })
}
const getThemeOptions = () => {
    return Object.keys(Themes).map(th => {
        return {
            label: $t(`basic.themes.${th}`),
            value: th,
        }
    })
}

const langOptions = ref(getLangOptions())
const themeOptions = ref(getThemeOptions())

const getLangStr = () => $t(`basic.langID.${i18n.locale.value}`)
const getThemeStr = () => $t(`basic.themes.${store.theme}`)

let langStr = ref(getLangStr())
let themeStr = ref(getThemeStr())

var languageCounter = new Counter()
languageCounter.when(random(3, 8), () => {
    achiever.achieve('you_know_so_many_languages')
})
const languageUpdate = (val: string, _: any) => {
    if (val != i18n.locale.value) {
        var id: Languages = ensureLanguage(val)
        setLanguage(id)
        store.language = id
        Logger.log('[ConfigSelector]', 'langUpdate', '=', val)
        langStr.value = getLangStr()
        langOptions.value = getLangOptions()
        languageCounter.inc()
    }
}

var themeCounter = new Counter()
themeCounter.when(random(3, 8), () => {
    achiever.achieve('WOW_EYES_DIED')
})
const themeUpdate = (val: string, _: any) => {
    if (val != store.theme) {
        var th: Themes = Themes[val as keyof typeof Themes] || DefaultTheme
        store.theme = th
        Logger.log('[ConfigSelector]', 'themeUpdate', '=', val)
        themeStr.value = getThemeStr()
        themeOptions.value = getThemeOptions()
        themeCounter.inc()
    }
}
</script>

<template>
    <n-space>
        <n-popselect @update:value="languageUpdate" :options="langOptions">
            <n-button>
                <template #icon>
                    <n-icon>
                        <LanguageOutline />
                    </n-icon>
                </template>
                {{ $t('components.ConfigSelector.lang') }}:
                {{ langStr }}
            </n-button>
        </n-popselect>
        <n-popselect @update:value="themeUpdate" :options="themeOptions">
            <n-button>
                <template #icon>
                    <n-icon>
                        <ColorFillOutline />
                    </n-icon>
                </template>
                {{ $t('components.ConfigSelector.theme') }}:
                {{ themeStr }}
            </n-button>
        </n-popselect>
    </n-space>
</template>
