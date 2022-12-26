import axios from 'axios'
import _ from 'lodash'
import type { Time, TimeScope } from '../types'

export const groupBy = _.groupBy
export const orderBy = _.orderBy
export const forInObject = _.forIn
export const pairsToObject = _.fromPairs
export const objectToPairs = _.toPairs
export const forEach = _.forEach
export const strtemplate = _.template
export const isArray = _.isArray
export const isArrayLike = _.isArrayLike
export const isUndefined = _.isUndefined
export const funconce = _.once
export const funcwrap = _.wrap
export const getPropertyIn = _.get
export const hasPropertyIn = _.hasIn
export const valueToString = _.toString
export const mapValues = _.mapValues
export const assignUndefined = _.defaults

export function join(array: any[], sep: any) {
    return array
        .map((el, i) => (i < array.length - 1 ? [el, sep] : [el]))
        .reduce((a, b) => a.concat(b))
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
