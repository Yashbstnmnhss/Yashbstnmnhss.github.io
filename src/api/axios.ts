import axios, { AxiosResponse, Method } from 'axios'
import Logger from '../utils/logger'

const api = axios.create({
    timeout: 6 * 1000,
    baseURL: 'https://bstnmnhss3-api.vercel.app/api',
})

api.interceptors.request.use(
    config => {
        Logger.info(`[API] ${config.method} ${config.url}`)
        return config
    },
    error => {
        Logger.error('[API.Axios]', error)
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            return Promise.reject(error.response)
        }
        Logger.error('[API.Axios]', error)
        return Promise.reject(error)
    }
)

export function request(url: string, method: Method, obj?: any) {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        api({
            url: url,
            method: method,
            data: method === 'post' ? obj : null,
            params: method === 'get' ? obj : null,
        })
            .then(res => {
                Logger.debug('[API.Axios]', res)
                resolve(res)
            })
            .catch(err => {
                Logger.error('[API.Axios]', err)
                reject(err)
            })
    })
}
