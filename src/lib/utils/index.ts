import axios from 'axios'
import { Time, TimeScope } from '../types'

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

export function random(...n: number[]) {
    if (n.length == 1) return Math.floor(Math.random() * n[0] + 1)
    else if (n.length == 2) return Math.floor(Math.random() * (n[1] - n[0] + 1)) + n[0]
    return 114514
}

export function randomRepeat(item: string, min = 1, max = 10) {
    var res = ''
    for (var i = 0; i < random(min, max); i++) res += item
    return res
}

export function choice(target: any[]) {
    return target[random(0, target.length)]
}

export class Counter {
    private count: number = 0
    private stopped: boolean = false
    private listener: [number, () => void][] = []

    public constructor() {
        this.reset()
    }

    public get(): number {
        return this.count
    }
    public set(num: number): void {
        this.count = num
    }

    public get isStopped(): boolean {
        return this.stopped
    }

    /**value++ */
    public inc(): void {
        if (!this.stopped) {
            this.count++
            this.listener.forEach(item => {
                if (this.count === item[0]) {
                    item[1]()
                }
            })
        }
    }

    /**value-- */
    public dec(): void {
        if (!this.stopped) {
            this.count--
            this.listener.forEach(item => {
                if (this.count === item[0]) {
                    item[1]()
                }
            })
        }
    }

    public reset(): void {
        this.count = 0
        this.stopped = false
    }

    public when(num: number, callback: () => void): void {
        if (this.count === num) {
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
