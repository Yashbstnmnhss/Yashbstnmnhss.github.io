export function getItem(key: string, defaultVal: any = null): any {
    var val = localStorage.getItem(key) 
    if (!val) return defaultVal
    return JSON.parse(val)
}

export function setItem(key: string, val: any) {
    var json = JSON.stringify(val)
    localStorage.setItem(key, json)
}