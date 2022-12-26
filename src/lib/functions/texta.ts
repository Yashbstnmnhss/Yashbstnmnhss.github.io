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
import datas from '@/assets/data/texts.yaml'

const key = createInjectionKey<TextaInst>('texta')

export default createTexta(datas)

export function createTexta(datas: object) {
    const instance: TextaInst = {
        get: (key, params) => {
            if (instance.has(key)) {
                var template = valueToString(getPropertyIn(datas, key))
                return strtemplate(template, {
                    interpolate: /{{([\s\S]+?)}}/g,
                })(params)
            }
            Logger.error('[Texta]', 'Unknown key', key)
            return ''
        },
        has: key => hasPropertyIn(datas, key),
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
