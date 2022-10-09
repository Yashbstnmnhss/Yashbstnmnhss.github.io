import { zhCN, dateZhCN, darkTheme, lightTheme } from 'naive-ui'
import { Languages, Themes } from '../constants'

export const locales = {
    [Languages.zhCN]: zhCN,
    //[Languages.enUS]: enUS,
    //[Languages.ruRU]: ruRU,
    //[Languages.jaJP]: jaJP,
}
export const dateLocales = {
    [Languages.zhCN]: dateZhCN,
    //[Languages.enUS]: dateEnUS,
    //[Languages.ruRU]: dateRuRU,
    //[Languages.jaJP]: dateJaJP,
}

export function getLocales(lang: Languages) {
    return {
        locale: locales[lang],
        dateLocale: dateLocales[lang],
    }
}

export function getTheme(theme: Themes) {
    switch (theme) {
        case Themes.dark:
            return darkTheme
        case Themes.light:
            return lightTheme
        default:
            return darkTheme
    }
}
