import { createI18n } from "vue-i18n"
import { getItem } from "../utils/storage"
import { DefaultLanguage, Languages } from "../utils/constants"
import Logger from '../utils/logger'

import zhCN from './zh-cn.yaml'
import enUS from './en.yaml'
import ruRU from './ru.yaml'
import jaJP from './ja.yaml'

const locale = getItem('language') || navigator.language.replace('-', '') || DefaultLanguage
Logger.debug('[Locales]', 'locale', '=', locale)

const loaded: Languages[] = []

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: DefaultLanguage.toString(),
    locale: ensureLanguage(locale),

    messages: {
        zhCN: zhCN,
        enUS: enUS,
        ruRU: ruRU,
        jaJP: jaJP
    }
})

export default i18n

export function setLanguage(lang: Languages) {
    const id = ensureLanguage(lang.toString())
    i18n.global.locale.value = id
    document.querySelector('html')?.setAttribute('lang', id.toString())
}

export function ensureLanguage(langStr: string) {
    return langStr in Languages ? Languages[langStr as keyof typeof Languages] : DefaultLanguage
}

/*async function asyncLoad(lang: Languages) {
    const id = lang in LanguageFiles ? lang : DefaultLanguage
    if (loaded.includes(lang))
        return id
    const msgs = await import(`../locales/${LanguageFiles[id]}`)
    console.log(msgs)
    i18n.global.setLocaleMessage(id, msgs.default)
    loaded.push(lang)
    return id
}*/