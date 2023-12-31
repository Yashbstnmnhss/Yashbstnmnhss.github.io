import data from 'virtual:datapack'
import { Logger, orderBy, mergeValues } from './utils'
import type { Datapack } from './types'

const globalData: Record<string, any> = {}
const datapacks: Record<string, Datapack> = data as any
const datapackNames: string[] = orderBy(Object.keys(datapacks), 'meta.builtin')
for (let i = 0; i < datapackNames.length; i++) {
    let datapack = datapacks[datapackNames[i]]
    let overrides = datapack.meta.overrides
    for (let [name, data] of Object.entries(datapack.files)) {
        let finalData =
            name in globalData && overrides && name in overrides && overrides[name] === 'merge'
                ? mergeValues(globalData[name], data)
                : data
        globalData[name] = finalData
    }
}
Logger.info('[Datapack]', 'Loaded ' + Object.keys(globalData).length + ' data files')

export function getData(name: string): any | undefined {
    if (name in globalData) return globalData[name]
    Logger.error('[Datapack]', 'Data not found: ' + name)
    return undefined
}

export function getDatapacks() {
    return datapacks
}
export function getDatapack(name: string) {
    return datapacks[name]
}

export default getData
