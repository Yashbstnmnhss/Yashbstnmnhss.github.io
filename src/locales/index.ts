import { createI18n } from 'vue-i18n'
import { DefaultLanguage, Languages } from '../lib/constants'
import { Logger } from '../lib/utils/logger'

import zhCN from './zh-cn.yaml'

const locale = navigator.language.replace('-', '') || DefaultLanguage
Logger.debug('[Locales]', 'locale', '=', locale)

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: DefaultLanguage.toString(),
    locale: ensureLanguage(locale),

    messages: {
        zhCN: zhCN,
    },
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
