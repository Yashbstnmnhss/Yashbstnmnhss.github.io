export function getItem(key: string, defaultVal: any = null): any {
    var val = localStorage.getItem(key) 
    if (!val) return defaultVal
    return typeof val === 'string' ?
        val : JSON.parse(val)
}

export function setItem(key: string, val: any) {
    var val2 = typeof val === 'string' ?
        val : JSON.stringify(val)
    localStorage.setItem(key, val2)
}