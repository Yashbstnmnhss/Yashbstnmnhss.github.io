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
    private listener: [number,(() => void)][] = []

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