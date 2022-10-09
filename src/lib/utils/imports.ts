/**导入资源信息*/
type Import = {
    /**导入资源的名称*/
    name: string
    /**导入资源的路径*/
    path: string
}

/**
 * 将导入资源转换为导入资源信息
 * @param {string} imports import.meta.globEager(pattern)
 */
export function toImportInfo(imports: Record<string, any>): Import[] {
    return Object.keys(imports).map(key => {
        return {
            name: getFileName(key),
            path: imports[key].default
        }
    })
}

/**
 * 获取文件名(不带扩展名)
 * @param path 文件路径
 * @returns 文件名
 */
export function getFileName(path: string) {
    return path.replace(/(.*\/)*([^.]+).*/ig, "$2")
}