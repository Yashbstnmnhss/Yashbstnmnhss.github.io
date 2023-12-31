export const BSTNMNHSS = 'Bstnmnhss'
export const VERSION = '3.9.999999'

/** @deprecated API was deprecated */
export const API = 'https://database.deta.sh/v1/c0z4r6ur_zR5ZH9Kuatmr7q4XqJn9kSGdx35Eo8s3/'

/** @deprecated Using Texta instead of I18n, Languages enum were deprecated */
export enum Languages {
    'zhHans' = 'zhHans',
}

export const DEFAULT_LANGUAGE = Languages.zhHans

export enum Themes {
    'dark' = 'dark',
    'light' = 'light',
}

export const DEFAULT_THEME = Themes.dark

/*
function a(s) {
const obj =
{
    "a": "亼",
    "b": "日",
    "c": "匚",
    "d": "刀",
    "e": "巨",
    "f": "彳",
    "g": "巳",
    "h": "廾",
    "i": "丨",
    "j": "丿",
    "k": "片",
    "l": "厶",
    "m": "从",
    "n": "冂",
    "o": "口",
    "p": "尸",
    "q": "曱",
    "r": "尺",
    "s": "丂",
    "t": "丅",
    "u": "凵",
    "v": "匕",
    "w": "山",
    "x": "乂",
    "y": "丫",
    "z": "乙"
}
const res = []
for (var i of s)
    res.push(i in obj ? obj[i] : i)
return res.join('')
}
*/
