import { isUndefined } from './utils'

export type Functions<T extends Function> = [function: T, once: boolean][]

type EventsAction<TEvents extends Record<keyof TEvents, Function>> = {
    on<TKey extends keyof TEvents, TFunction extends TEvents[TKey]>(
        event: TKey,
        func: TFunction,
        once?: boolean
    ): void
    emit<
        TKey extends keyof TEvents,
        TFunction extends TEvents[TKey],
        TParams extends Parameters<TFunction extends (...args: any[]) => any ? TFunction : never>
    >(
        event: TKey,
        ...params: TParams
    ): void
}

export type Events<
    TEvents extends Record<keyof TEvents, Function>,
    TKeys extends keyof TEvents = keyof TEvents
> = Record<TKeys, Functions<TEvents[TKeys]>> & EventsAction<TEvents>

export function Functions<T extends Function>(): Functions<T> {
    return []
}

export function Events<T extends Record<keyof T, Function>>(): Events<T> {
    return <Events<T>>{
        on(event, func, once = false) {
            if (!this[event]) this[event] = Functions<T[typeof event]>() as any
            this[event].push([func, once])
        },
        emit(event, params) {
            if (isUndefined(this) || isUndefined(this[event]) || this[event].length == 0) return
            this[event].forEach(item => {
                var [func, once] = item
                func(params)
                if (once) {
                    var index = this[event].indexOf([func, once])
                    if (index < 0) return
                    this[event].splice(index, 1)
                }
            })
        },
    }
}
