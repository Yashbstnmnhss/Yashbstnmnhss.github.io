import { defineStore } from 'pinia'
import { useLocalStorage } from './pinia'
import { Logger } from '../lib/utils/logger'
import { DEFAULT_THEME, DEFAULT_LANGUAGE } from '../lib/constants'

export const useMain = defineStore('main', {
    state: () => ({
        sidebar: false,
        theme: DEFAULT_THEME,
        language: DEFAULT_LANGUAGE,
        achievements: [] as string[],
    }),
    persist: useLocalStorage('main'),
})

Logger.log('[Store]', 'Defined stores')
