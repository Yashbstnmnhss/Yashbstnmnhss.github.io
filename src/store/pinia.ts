import { createPinia } from 'pinia'
import persist, { PersistOptions } from 'pinia-plugin-persist'

export const pinia = createPinia().use(persist)
export const useLocalStorage = (key: string): PersistOptions => ({
    enabled: true,
    strategies: [
        {
            key,
            storage: localStorage,
        },
    ],
})
