import { keysOf } from "naive-ui/lib/_utils"
import { createStore, MutationTree, Plugin, StoreOptions } from "vuex"
import { getItem, setItem } from "../utils/storage"
import Logger from '../utils/logger'

export type States<Class, Key extends keyof Class = keyof Class> = {
    [Item in Key]: State<Class, Class[Key]> 
}

export type State<Class, Item> = {
    type: 'default' | 'storage',
    storageKey?: string,
    defaultValue?: Item,
    defaultMutation?: (state: Class, payload: Item) => void,
}

export function toStore<C>(obj : States<C>, options?: Omit<StoreOptions<C>, 'state'>) {
    const keys = keysOf(obj)
    
    var state: C = {} as any
    var mutations: MutationTree<C> = {}
    var plugin: Plugin<C> = store => {
        keys.forEach(key => {
            const item = obj[key]
            switch (item.type) {
                case 'storage':
                    const storageKey = item.storageKey || key.toString()
                    const defaultValue = item.defaultValue
                    store.state[key] = getItem(storageKey, defaultValue)
                    Logger.info('[Store.Plugin.Storage]',
                        '(get)', storageKey, '(' + key + ')', '=', store.state[key])
                    break
                default:
                    break
            }
        })

        store.subscribe((m, s) => {
            var mutation = m.type
            keys.filter(key => key.toString() === mutation).forEach(key => {
                const item = obj[key]
                switch (item.type) {
                    case 'storage':
                        const storageKey = item.storageKey || key.toString()
                        setItem(storageKey, m.payload)
                        Logger.info('[Store.Plugin.Storage]',
                            '(set)', storageKey, '(' + key + ')', '=', m.payload)
                        break
                    default:
                        break
                }
            
            })
        })
    }

    keys.forEach(key => {
        const item = obj[key]
        const mutationKey = key.toString()

        if (item.defaultValue !== undefined)
            state[key] = item.defaultValue

        Logger.log('[Store.Plugin.Storage]',
            '(default)', mutationKey, '['+key+']', '=', state[key])

        switch (item.type) {
            case 'default':
                mutations[mutationKey] = item.defaultMutation ?? ((state, payload) => {
                    state[key] = payload
                })
                break
            case 'storage':
                const storageKey = item.storageKey ?? key.toString()
                mutations[mutationKey] = (state, payload) => {
                    state[key] = payload
                    setItem(storageKey, payload)
                }
                break
        }
    })

    var plugins: Plugin<C>[] = [plugin].concat(options?.plugins ?? [])

    return createStore({
        state: state,
        mutations: {
            ...mutations,
            ...options?.mutations
        },
        plugins: plugins,
        strict: options?.strict,
        devtools: options?.devtools,    
        actions: options?.actions,
        getters: options?.getters,
        modules: options?.modules
    })
}