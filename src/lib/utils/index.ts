import axios from 'axios'
import _ from 'lodash'
import type { Time, TimeScope } from '../types'

export {
    merge as mergeValues,
    words as strwords,
    uniqWith as uniqueArrayWith,
    uniq as uniqueArray,
    includes as isInArray,
    throttle,
    omit as omitObject,
    groupBy,
    orderBy,
    forIn as forInObject,
    fromPairs as pairsToObject,
    toPairs as objectToPairs,
    forEach,
    template as strtemplate,
    isObject,
    isArray,
    isString,
    isNumber,
    isUndefined,
    once as funconce,
    wrap as funcwarp,
    get as getPropertyIn,
    hasIn as hasPropertyIn,
    toString as valueToString,
    mapValues,
    defaults as assignUndefined,
} from 'lodash'

export function join(array: any[], sep: any) {
    return array
        .map((el, i) => (i < array.length - 1 ? [el, sep] : [el]))
        .reduce((a, b) => a.concat(b))
}

export function getUID(length: number = 9, radix = 10) {
    const chars = Array.from('0123456789QWERTYUIOPLKJHGFDSAMZNXBCVqazwsxmlpokijnbhucdevgfyrt魈付泽')
    const uid = []
    radix ||= chars.length
    for (var i = 0; i < length; i++) uid[i] = chars[0 | (Math.random() * radix)]
    return uid.join('')
}

/** @todo */
export function parseLogicRelevant(expression: string) {
    class StreamReader<T extends ArrayLike<I>, I = T[number]> {
        private index = 0
        private readonly stream: T
        constructor(expression: T) {
            this.stream = expression
        }
        read() {
            return this.stream[this.index++]
        }
        peek() {
            return this.stream[this.index]
        }
        hasNext() {
            return this.index < this.stream.length
        }
        readUtil(item: I) {
            var result = ''
            while (this.hasNext() && this.peek() !== item) result += this.read()
            return result
        }
        skip(item: I) {
            while (this.hasNext() && this.peek() === item) this.read()
        }
        peekBackUntil(item: I) {
            var result = ''
            var index = this.index - 1
            while (this.hasBack() && this.stream[index] !== item) result += this.stream[index--]
            return result
        }
        hasBack() {
            return this.index > 0
        }
    }

    const reader = new StreamReader(expression.trim())
    const WHITESPACE = ' '

    type TokenType = 'NOT' | 'AND' | 'XOR' | 'TEXT' | 'BS' | 'BE'
    const tokens: [TokenType, string][] = []
    const operators: Record<string, TokenType> = {
        '+': 'AND',
        '^': 'XOR',
        '-': 'NOT',
        '(': 'BS',
        ')': 'BE',
    }

    while (reader.hasNext()) {
        const char = reader.peek()
        if (char in operators) {
            tokens.push([operators[char], char])
            reader.read()
        } else if (char === WHITESPACE) {
            reader.read()
        } else {
            const text = reader.readUtil(char)
            tokens.push(['TEXT', text])
        }
    }

    type AstNode = {
        operator: 'and' | 'or' | 'xor' | 'not'
        operands: (string | AstNode)[]
    }
    const tokenReader = new StreamReader(tokens)
    const asts: AstNode[] = []
    while (tokenReader.hasNext()) {
        tokenReader.read()
    }
    return asts
}

export function showNotification(title: string, options?: NotificationOptions) {
    if (Notification.permission !== 'granted')
        Notification.requestPermission(status => {
            if (status === 'granted') show()
            else alert(title)
        })
    else show()
    function show() {
        new Notification(title, options)
    }
}

export function tryMany(functions: (() => void)[], final?: () => void) {
    if (functions === undefined || functions.length <= 0) return
    for (const func of functions) {
        if (func === undefined) continue
        try {
            func()
            return
        } catch {
            continue
        }
    }
    final?.()
}

export function isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}

export async function checkWebsite(link: string) {
    try {
        var url = link + (/\?/.test(link) ? '&' : '?') + new Date().getTime()
        var res = await axios.get(url, { timeout: 5000 })
        return !(res.status >= 400)
    } catch {
        return false
    }
}

export function random(...nums: number[]) {
    return nums.length === 2 ? _.random(nums[0], nums[1]) : _.random(nums[0])
}

export function randomRepeat(item: string, min = 1, max = 10) {
    return _.repeat(item, random(min, max))
}

export function choice<T>(target: T[]) {
    return _.sample(target)!
}

export class Counter {
    value: number = 0
    private stopped: boolean = false
    private listener: [number, () => void][] = []

    public constructor() {
        this.reset()
    }

    public get isStopped(): boolean {
        return this.stopped
    }

    public inc(): void {
        if (!this.stopped) {
            this.value++
            this.listener.forEach(item => {
                if (this.value === item[0]) {
                    item[1]()
                }
            })
        }
    }

    public dec(): void {
        if (!this.stopped) {
            this.value--
            this.listener.forEach(item => {
                if (this.value === item[0]) {
                    item[1]()
                }
            })
        }
    }

    public reset(): void {
        this.value = 0
        this.stopped = false
    }

    public when(num: number, callback: () => void): void {
        if (this.value === num) {
            callback()
        } else {
            this.listener.push([num, callback])
        }
    }
}

export function isTimeInRange(time: Time, scope: TimeScope): boolean {
    var [hour, minute, second] = time
    var [startHour, startMinute, startSecond] = scope[0]
    var [endHour, endMinute, endSecond] = scope[1]

    var nowTime = new Date()
    nowTime.setHours(hour, minute, second)
    var startTime = new Date()
    startTime.setHours(startHour, startMinute, startSecond)
    var endTime = new Date()
    endTime.setHours(endHour, endMinute, endSecond)
    if (startHour > endHour) endTime.setDate(endTime.getDate() + 1)

    return nowTime.getTime() >= startTime.getTime() && nowTime.getTime() <= endTime.getTime()
}

export * from './lib'
export * from './render'
export * from './logger'
