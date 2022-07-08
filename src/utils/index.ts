import { Time, TimeScope } from './types'

export function isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}

export function randomSeq(item: string, min = 1, max = 10) {
    var res = ''
    for (var i = 0; i < Math.floor(Math.random() * (max - min + 1)) + min; i++) {
        res += item
    }
    return res
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

/* 判断小时,分钟,秒是否在范围内 */
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
