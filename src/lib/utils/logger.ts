import { BSTNMNHSS, VERSION } from '../constants'

export class Logger {
    public static enable = true

    public static log(...args: any[]) {
        if (!Logger.enable) return
        console.log(...this.format(args))
    }

    public static debug(...args: any[]) {
        if (!Logger.enable) return
        console.debug(...this.format(args))
    }

    public static info(...args: any[]) {
        if (!Logger.enable) return
        console.info(...this.format(args))
    }

    public static warn(...args: any[]) {
        if (!Logger.enable) return
        console.warn(...this.format(args))
    }

    public static error(...args: any[]) {
        if (!Logger.enable) return
        console.error(...this.format(args))
    }

    public static trace(...args: any[]) {
        if (!Logger.enable) return
        console.trace(...this.format(args))
    }

    private static format(str: any[]): any[] {
        const bstnmnhss = [
            `%c[${BSTNMNHSS} Logger]`,
            'background: rgba(0, 0, 255, .5); color: rgba(255, 255, 255, .85);',
        ]
        return [...bstnmnhss, ...str]
    }

    static readonly LOGO = [
        `%c${BSTNMNHSS} %c${VERSION}`,
        `
            font-size: 12.5vw;
            color: rgba(36, 204, 255, 0.75);
        `,
        `
            font-size: 4vw;
        `,
    ]
    public static logo() {
        console.info(...this.LOGO)
    }
}

Logger.logo()
