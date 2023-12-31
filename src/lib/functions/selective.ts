import { Fragment, Transition, h, inject, render } from 'vue'
import { createInjectionKey, isUndefined } from '..'
import type {
    SelectiveManagerInst,
    SelectiveSaveData,
    SelectiveRoute,
    SelectiveRoutes,
    SelectionButton,
    Slot,
    SelectiveController,
    SelectiveLoaderAndSaver,
} from '..'

export const SELECTIVE_MANAGER_KEY = createInjectionKey<SelectiveManagerInst>('selective_manager')

export function useSelectiveManager() {
    const manager = inject<SelectiveManagerInst>(SELECTIVE_MANAGER_KEY)
    return manager
}

export function createController(config: {
    routes: SelectiveRoutes
    optionSlots: Record<string, Slot>
    partSlots: Record<string, Slot>
    getContainer: () => HTMLElement
    loaderAndSaver: SelectiveLoaderAndSaver
}): SelectiveController {
    var container: HTMLElement,
        routeLabel = '&',
        routeIndex = 0,
        nowRoute: SelectiveRoute

    const vnodeMap = new Map<[string, number], ReturnType<Slot>>()

    function switchOption(key: string, buttons: SelectionButton[]) {
        if (!(key in config.optionSlots)) return
        var option = config.optionSlots[key]
        addVNodes(option(buttons))
        renderVNodes()
    }
    function switchPart(key: string) {
        console.log(key, config.partSlots)
        if (!(key in config.partSlots)) return
        var part = config.partSlots[key]
        addVNodes(part())
        renderVNodes()
    }
    function addVNodes(nodes: ReturnType<Slot>) {
        vnodeMap.set([routeLabel, routeIndex], nodes)
    }
    function removeVNodes(key: [string, number]) {
        vnodeMap.delete(key)
    }
    function renderVNodes() {
        container = container ?? config.getContainer()
        var nodes = Array.from(vnodeMap.values()).map(value => h('div', value))
        render(h(Fragment, nodes), container)
    }
    function gotoLabel(label: keyof SelectiveRoutes = '&', startFrom: number = 0) {
        if (!(label in config.routes)) return
        routeLabel = label
        routeIndex = startFrom
    }
    function load(): boolean {
        var data = config.loaderAndSaver.all()
        if (!data || !Array.isArray(data)) {
            config.loaderAndSaver.reset()
            return false
        }
        for (var [label, index] of data) {
            if (!(label in config.routes) || index >= config.routes[label].length) {
                config.loaderAndSaver.suspend()
                return false
            }
            gotoLabel(label, index)
            readNext(false)
        }
        readNext()
        return true
    }
    function save(label: string, index: number) {
        config.loaderAndSaver.push([label, index])
    }
    function readMany(enableSave: boolean = true, awaitOption: boolean = true) {
        while (readNext(enableSave)) {
            if (awaitOption && is('option', nowRoute)) break
            else if (is('goto', nowRoute)) gotoLabel(nowRoute.target)
        }
    }
    function readNext(enableSave: boolean = true): boolean {
        if (!(routeLabel in config.routes)) return false
        var target = config.routes[routeLabel]
        if (routeIndex >= target.length) return false
        var route = (nowRoute = target[routeIndex])
        if (!isUndefined(route.condition) && route.condition?.() === false) return true
        if (enableSave && !is('option', route)) save(routeLabel, routeIndex)
        renderRoute(route)
        route.action?.()
        routeIndex++
        return true
    }
    function is(type: SelectiveRoute['type'], target: SelectiveRoute) {
        if (!target) return false
        switch (type) {
            case 'goto':
                return target.type === 'goto'
            case 'part':
                return isUndefined(target.type) || target.type === 'part'
            case 'option':
                return !isUndefined(target.buttons) || target.type === 'option'
            default:
                return target.type === type
        }
    }
    function renderRoute(route: SelectiveRoute) {
        if (is('option', route)) switchOption(route.target, route.buttons ?? [])
        else if (is('part', route)) switchPart(route.target)
    }

    return {
        renderer: {
            switchOption,
            switchPart,
        },
        loaderAndSaver: {
            load,
            save,
        },
        readNext,
        readMany,
        move: gotoLabel,
    }
}

export function createInstance(config: {
    onRegisterOption: (key: string, template: Slot) => void
    onRegisterPart: (key: string, template: Slot) => void
}): SelectiveManagerInst {
    return {
        registerOption(key, template) {
            config.onRegisterOption(key, template)
        },
        registerPart(key, template) {
            config.onRegisterPart(key, template)
        },
    }
}

export function createLoaderAndSaver(config: {
    saveData: SelectiveSaveData[]
    onUpdate: (val: SelectiveSaveData[]) => void
}): SelectiveLoaderAndSaver {
    var index = 0
    return {
        any() {
            return config.saveData.length > 0 && index < config.saveData.length
        },
        all() {
            return config.saveData
        },
        shift() {
            if (index > config.saveData.length) {
                index = config.saveData.length
                return undefined
            }
            return config.saveData[index++]
        },
        push(data) {
            config.saveData.push(data)
            config.onUpdate(config.saveData)
        },
        suspend() {
            if (index >= config.saveData.length) return
            config.saveData.splice(index)
            config.onUpdate(config.saveData)
        },
        reset() {
            config.saveData = []
            config.onUpdate(config.saveData)
        },
    }
}
