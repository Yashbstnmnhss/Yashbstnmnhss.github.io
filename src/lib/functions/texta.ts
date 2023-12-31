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
import datafiles from '../datafiles'

const data = datafiles('texts') ?? {}
const key = createInjectionKey<TextaInst>('texta')

export default createTexta(data)

export function createTexta(sources: object) {
    const instance: TextaInst = {
        get: (key, params) => {
            if (instance.has(key)) {
                var template = valueToString(getPropertyIn(sources, key))
                return template.includes('{{') && template.includes('}}') && params
                    ? strtemplate(template, {
                          interpolate: /{{([\s\S]+?)}}/g,
                      })(params)
                    : template
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
