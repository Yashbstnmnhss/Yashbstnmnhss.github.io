import { zhCN, dateZhCN, darkTheme, lightTheme } from 'naive-ui'
import { Languages, Themes } from '../constants'

export const locales = {
    [Languages.zhCN]: zhCN,
}
export const dateLocales = {
    [Languages.zhCN]: dateZhCN,
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
import { InjectionKey } from 'vue'

export function createInjectionKey<T>(key: string): InjectionKey<T> {
    return key as any
}
type Import = {
    name: string
    path: string
}

export function toImportInfo(imports: Record<string, any>): Import[] {
    return Object.keys(imports).map(key => {
        return {
            name: getFileName(key),
            path: imports[key].default,
        }
    })
}

export function getFileName(path: string) {
    return path.replace(/(.*\/)*([^.]+).*/gi, '$2')
}
