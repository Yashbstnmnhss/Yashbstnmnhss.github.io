import { UtilService } from '../api/services'

export async function getFlags(c: string) {
    var r = await UtilService.lp(c)
    var a = r.data as any[]
    if (!a || a.length == 0) return null
    return a.map(p => p.flag as string)
}

const AlmostNouns = ['n', 't', 's', 'f', 'r', 'nr', 'ns', 'nt', 'nx', 'nz'],
    AlmostVerbs = ['v', 'vx', 'vn', 'vd'],
    AlmostAdjectives = ['b', 'a', 'z', 'd', 'ad', 'an'],
    Others = ['i']

export function dedede(a: string, b: string): string {
    if (a == 'r' || b in AlmostNouns || b.startsWith('n')) return '的'
    if (b in AlmostVerbs || b.startsWith('v')) return '地'
    if (a in AlmostVerbs && b in Others) return '的(偏指内容) / 得(偏指动作)'
    if (b in AlmostAdjectives || b.startsWith('a')) {
        if (a in AlmostVerbs || a.startsWith('v')) return '的(偏指内容) / 得(偏指动作)'
        return '得'
    }
    return '的*'
}
