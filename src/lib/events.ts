import type {
    Trigger,
    Triggers,
    LogicObject,
    LogicEnvironment,
    LogicFunction,
    LogicOperator,
    Callback,
} from './types'
import {
    isUndefined,
    isObject,
    isArray,
    isString,
    getPropertyIn,
    objectToPairs,
    hasPropertyIn,
} from './utils'

export class EventEmitter<Events extends Record<keyof any, Record<string, unknown> | void>> {
    #map: Map<keyof Events, Set<Callback>> = new Map()

    on<Name extends keyof Events>(name: Name, callback: Callback<Events[Name]>) {
        var callbacks = this.#map.get(name)
        if (!callbacks) this.#map.set(name, (callbacks = new Set()))
        callbacks.add(callback)
    }
    emit<Name extends keyof Events, Params extends Events[Name]>(name: Name, param: Params) {
        var callbacks = this.#map.get(name)
        if (!callbacks) return
        callbacks.forEach(val => val(param))
    }
    once<Name extends keyof Events>(name: Name, callback: Callback<Events[Name]>) {
        var one: Callback<Events[Name]> = val => {
            callback(val)
            this.off(name, one)
        }
        this.on(name, one)
    }
    off<Name extends keyof Events>(name?: Name, callback?: Callback<Events[Name]>) {
        if (!name) {
            this.#map.clear()
            return
        }
        if (!callback) {
            this.#map.delete(name)
            return
        }
        var callbacks = this.#map.get(name)
        if (callbacks) callbacks.delete(callback)
    }
}

export const achievementEvents = new EventEmitter<{
    changeTheme: { count: number }
    clickLink: { link: string }
    fuzeBirthday: void
    pushRoute: { to: string }
    clickImage: { image: string }
    clickVideo: { video: string }
}>()

export function parseLogicObject(logic: LogicObject): LogicFunction {
    const operators: Record<string, LogicOperator> = {
        and: val => env => isArray(val) && val.every(val => parseLogicObject(val)(env)),
        any: val => env => isArray(val) && val.some(val => parseLogicObject(val)(env)),
        not: val => env => isArray(val) && !val.every(val => parseLogicObject(val)(env)),
        '=': val => env =>
            isArray(val) && val.length >= 2 && parseValue(val[0], env) == parseValue(val[1], env),
        '==': val => env =>
            isArray(val) && val.length >= 2 && parseValue(val[0], env) === parseValue(val[1], env),
        '>': val => env =>
            isArray(val) && val.length >= 2 && parseValue(val[0], env) > parseValue(val[1], env),
        '<': val => env =>
            isArray(val) && val.length >= 2 && parseValue(val[0], env) < parseValue(val[1], env),
        '>=': val => env =>
            isArray(val) && val.length >= 2 && parseValue(val[0], env) >= parseValue(val[1], env),
        '<=': val => env =>
            isArray(val) && val.length >= 2 && parseValue(val[0], env) <= parseValue(val[1], env),
        '!=': val => operators.not([operators['='](val)]),
        in: val => env => {
            if (isArray(val) && val.length >= 2) {
                var a = parseValue(val[0], env),
                    b = parseValue(val[1], env)
                if (isString(b)) return b.includes(a)
                if (isArray(b)) return b.includes(a)
                if (isObject(b)) return a in b
            }
            return false
        },
        notin: val => operators.not([operators.in(val)]),
        range: val => env => {
            if (isArray(val) && val.length >= 2) {
                var a = parseValue(val[0], env),
                    b = parseValue(val[1], env)
                if (isArray<number>(b) && val.length >= 2) {
                    var min = Math.min(...b),
                        max = Math.max(...b)
                    return max > a && min > a
                }
            }
            return false
        },
        outrange: val => operators.not([operators.range(val)]),
    }

    function parseValue(val: any, env: LogicEnvironment) {
        return isObject(val) && '$' in val && typeof val.$ === 'string'
            ? hasPropertyIn(env, val.$)
                ? getPropertyIn(env, val.$)
                : val
            : val
    }

    return (env: LogicEnvironment) => {
        var entries = objectToPairs(logic)
        return isUndefined(logic) || entries.length <= 0
            ? false
            : entries
                  .map(([key, val]) => (key in operators ? operators[key](val) : () => false))
                  .every(val => val(env))
    }
}

type InferEvents<T> = T extends EventEmitter<infer E> ? E : never
export function registerEventTrigger<T extends Record<string, any>>(
    emitter: EventEmitter<T>,
    criteria: Triggers,
    succeed?: (arg: unknown) => void,
    failed?: (arg: unknown) => void
): void {
    const triggers = isArray(criteria) ? criteria : [criteria]
    triggers.forEach(trigger => {
        const logic = parseLogicObject(trigger.conditions ?? {})
        emitter.on(trigger.trigger as keyof InferEvents<typeof emitter>, val => {
            if (isUndefined(trigger.conditions)) succeed?.(val)
            else if (logic(val)) succeed?.(val)
            else failed?.(val)
        })
    })
}
