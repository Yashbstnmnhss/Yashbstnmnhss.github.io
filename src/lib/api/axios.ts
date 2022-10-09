import axios, { AxiosInstance, AxiosResponse, Method, AxiosRequestConfig } from 'axios'
import { API } from '../constants'
import Logger from '../utils/logger'

type RequestType = 'api' | 'external'
const instances = ((inss: Record<string, AxiosRequestConfig<any>>) => {
    var result: Record<string, AxiosInstance> = {}
    for (var key of Object.keys(inss)) {
        var ins = create(inss[key])
        result[key] = ins
    }
    return result
})({
    api: {
        timeout: 6 * 1000,
        baseURL: API,
    },
    external: {
        timeout: 6 * 1000,
    },
})!

function create(config: AxiosRequestConfig<any>, logErr = false) {
    var ins = axios.create(config)
    if (!logErr) return ins
    ins.interceptors.request.use(
        config => {
            Logger.debug(`[API] ${config.method} ${config.url}`)
            return config
        },
        error => {
            Logger.error(`[API.Axios`, error)
            return Promise.reject(error)
        }
    )
    ins.interceptors.response.use(
        response => response,
        error => {
            if (error.response) return Promise.reject(error.response)
            Logger.error(`[API.Axios]`, error)
            return Promise.reject(error)
        }
    )
    return ins
}

export function request(
    url: string,
    method: Method,
    object?: any,
    requestType: RequestType = 'api',
    options?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data' | 'params'>
) {
    var ins = instances[requestType ?? 'api']
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        ins({
            url: url,
            method: method,
            data: method === 'post' ? object : null,
            params: method === 'get' ? object : null,
            ...options,
        })
            .then(res => {
                Logger.debug(`[API.${requestType}.Axios]`, res)
                resolve(res)
            })
            .catch(err => {
                Logger.error(`[API.${requestType}.Axios]`, err)
                reject(err)
            })
    })
}
