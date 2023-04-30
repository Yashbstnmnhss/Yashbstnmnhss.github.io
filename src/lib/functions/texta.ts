import { App, inject } from 'vue'
import {
    createInjectionKey,
    Logger,
    valueToString,
    strtemplate,
    getPropertyIn,
    hasPropertyIn,
} from '../utils'
import type { TextaInst } from '../types'
import { datafiles } from '../assets'

const data = datafiles.dataTexta
const key = createInjectionKey<TextaInst>('texta')

export default createTexta(data)

export function createTexta(sources: object) {
    const instance: TextaInst = {
        get: (key, params) => {
            if (instance.has(key)) {
                var template = valueToString(getPropertyIn(sources, key))
                return strtemplate(template, {
                    interpolate: /{{([\s\S]+?)}}/g,
                })(params)
            }
            Logger.error('[Texta]', 'Unknown key', key)
            return ''
        },
        has: key => hasPropertyIn(sources, key),
    }

    return (app: App<Element>) => {
        app.provide(key, instance)
        app.config.globalProperties.$texta = instance
    }
}

export function useTexta() {
    return <TextaInst>inject(key)
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $texta: TextaInst
    }
}
