import axios, { AxiosInstance, AxiosResponse, Method, AxiosRequestConfig } from 'axios'
import Logger from '../utils/logger'

type InsKeys = 'api' | 'external'
const instances = prepare({
    api: {
        timeout: 6 * 1000,
        baseURL: 'https://bstnmnhss3-api.vercel.app/api',
    },
    external: {
        timeout: 6 * 1000,
    },
})!

function prepare(inss: Record<string, AxiosRequestConfig<any>>) {
    var result: Record<string, AxiosInstance> = {}
    for (var key of Object.keys(inss)) {
        var ins = axios.create(inss[key])
        ins.interceptors.request.use(
            config => {
                Logger.debug(`[API.${key}] ${config.method} ${config.url}`)
                return config
            },
            error => {
                Logger.error(`[API.${key}.Axios`, error)
                return Promise.reject(error)
            }
        )
        ins.interceptors.response.use(
            response => response,
            error => {
                if (error.response) return Promise.reject(error.response)
                Logger.error(`[API.${key}.Axios]`, error)
                return Promise.reject(error)
            }
        )
        result[key] = ins
    }
    return result
}

export function request(
    url: string,
    method: Method,
    obj?: any,
    insKey: InsKeys = 'api',
    options?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data' | 'params'>
) {
    var ins = instances[insKey ?? 'api']
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        ins({
            url: url,
            method: method,
            data: method === 'post' ? obj : null,
            params: method === 'get' ? obj : null,
            ...options,
        })
            .then(res => {
                Logger.debug(`[API.${insKey}.Axios]`, res)
                resolve(res)
            })
            .catch(err => {
                Logger.error(`[API.${insKey}.Axios]`, err)
                reject(err)
            })
    })
}
