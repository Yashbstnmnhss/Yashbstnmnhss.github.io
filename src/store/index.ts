import { defineStore } from 'pinia'
import { useLocalStorage } from './pinia'
import { Logger } from '../lib/utils/logger'
import { DEFAULT_THEME, DEFAULT_LANGUAGE } from '../lib/constants'
import { getUID } from '../lib'

export const useMain = defineStore('main', {
    state: () => ({
        sidebar: false,
        theme: DEFAULT_THEME,
        language: DEFAULT_LANGUAGE,
        achievements: [] as string[],
        uid: getUID(),
    }),
    persist: useLocalStorage('main'),
})

Logger.log('[Store]', 'Defined stores')
