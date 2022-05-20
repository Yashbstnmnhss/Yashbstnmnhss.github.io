export const Bstnmnhss = "Bstnmnhss"
export const Version = "3.0.1"

/**语言*/
export enum Languages {
    "zhCN" = "zhCN",
    "enUS" = "enUS",
    "ruRU" = "ruRU",
    "jaJP" = "jaJP",
}

/*
export const LanguageFiles = {
    [Languages.zhCN]: "zh-cn.yaml",
    [Languages.enUS]: "en.yaml",
    [Languages.ruRU]: "ru.yaml",
    [Languages.jaJP]: "ja.yaml",
}*语言对应的文件*/

export const DefaultLanguage = Languages.zhCN

/**主题*/
export enum Themes {
    "dark" = "dark",
    "light" = "light",
}

export const DefaultTheme = Themes.dark