import { toStore } from './auto'
import { useStore as baseUseStore,Store } from "vuex"
import { DefaultLanguage, DefaultTheme, Languages, Themes } from "../utils/constants"
import { InjectionKey } from "vue"
import Logger from '../utils/logger'

export interface StateClass {
    sidebar: boolean,
    theme: Themes,
    language: Languages,
}

export const store = toStore<StateClass>({
    sidebar: {
        type: 'storage',
        defaultValue: false
    },
    theme: {
        type: 'storage',
        //storageKey: 'THEME',
        defaultValue: DefaultTheme
    },
    language: {
        type: 'storage',
        //storageKey: 'LANGUAGE',
        defaultValue: DefaultLanguage
    }
})

Logger.log('[Store]', 'store', '=', store)

export const key : InjectionKey<Store<StateClass>> = Symbol()

export function useStore() {
    return baseUseStore(key)
}

export function commit<K extends keyof StateClass, V extends StateClass[K]>(type: K, payload?: V) {
    store.commit(type, payload)
}