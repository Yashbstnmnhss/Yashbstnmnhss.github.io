import { defineStore } from 'pinia'
import { useLocalStorage } from './pinia'
import Logger from '../lib/utils/logger'
import { DefaultTheme, DefaultLanguage } from '../lib/constants'

export const useMain = defineStore('main', {
    state: () => ({
        sidebar: false,
        theme: DefaultTheme,
        language: DefaultLanguage,
        achievements: [] as string[],
    }),
    persist: useLocalStorage('main'),
})

Logger.log('[Store]', 'defined stores')
