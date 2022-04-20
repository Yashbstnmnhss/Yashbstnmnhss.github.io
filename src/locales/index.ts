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

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: DefaultLanguage.toString(),
    locale: locale,

    messages: {
        zhCN: zhCN,
        enUS: enUS,
        ruRU: ruRU,
        jaJP: jaJP
    }
})

export default i18n

export function setLanguage(lang : Languages) {
    i18n.global.locale.value = lang.toString()
    document.querySelector('html')?.setAttribute('lang', lang.toString())
}