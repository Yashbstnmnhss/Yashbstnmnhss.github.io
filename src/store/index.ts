import { defineStore } from 'pinia'
import { useLocalStorage } from './pinia'
import { Logger, getUID } from '../lib'
import { DEFAULT_THEME, DEFAULT_LANGUAGE } from '../lib/constants'
import type { SelectiveSaveData } from '../lib'

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

export const useContent = defineStore('content', {
    state: () => ({
        branches: [] as SelectiveSaveData[],
        branchesVariables: {} as unknown,
        genshinStartCount: 0,
    }),
    persist: useLocalStorage('content'),
})

Logger.log('[Store]', 'Defined stores')
