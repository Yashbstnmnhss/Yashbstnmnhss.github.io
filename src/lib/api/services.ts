import { axios } from '.'
import * as types from '../types'
import API_KEY from './API_KEY'
import { API } from '../constants'
import { assignUndefined, omitObject } from '../utils'

const deta = axios.create({
    baseURL: API,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
    },
    withCredentials: false,
})
deta.interceptors.request.use(config => {
    config.headers!['X-API-Key'] = API_KEY
    config.headers!['Access-Control-Allow-Origin'] = '*'
    return config
})

/** @deprecated */
export class TextsServices {
    private static ensureTextsContent(input: Partial<types.ForumContent>): types.ForumContent {
        const defaultValues: types.ForumContent = {
            key: '',
            title: '',
            text: '',
            author: '114514',
            response: [],
            date: new Date(),
            inners: [],
            top: false,
            tags: [],
            disableInner: false,
            responseIcon: '👍',
        }
        return assignUndefined(input, defaultValues)
    }
    private static ensureTextsInner(input: Partial<types.ForumInner>): types.ForumInner {
        const defaultValues: types.ForumInner = {
            key: 0,
            title: '喔哇 未定义',
            text: `\`undefined\` 是**JavaScript**中的关键字, 直译为***未定义***`,
            author: 'Kaedehara_Kazuha',
            response: [],
            date: new Date(),
            top: false,
            tags: ['内部错误'],
            disableInner: false,
            responseIcon: '👍',
            to: undefined,
        }
        return assignUndefined(input, defaultValues)
    }

    static async get(key: types.DataKey) {
        var result = (await deta.get(`/texts/${key}`)).data as types.ForumContent
        result.inners = result.inners.map(this.ensureTextsInner)
        return this.ensureTextsContent(result)
    }
    static async getMany(page: number = -1, pageSize: number = -1) {
        var result = (
            await deta.get('/texts', {
                params: { page, pageSize },
            })
        ).data as {
            value: types.ForumContent[]
            total: number
        }
        return {
            value: result.value.map(val => {
                val.inners = val.inners.map(this.ensureTextsInner)
                return this.ensureTextsContent(val)
            }),
            total: result.total,
        }
    }
    static async getQuery(
        filter?: types.ForumFilter,
        limit?: number,
        page: number = -1,
        pageSize: number = -1
    ) {
        var result = (
            await deta.post('/texts/query', {
                data: { filter, option: { limit }, page, pageSize },
            })
        ).data as {
            value: types.ForumContent[]
            total: number
        }
        return {
            value: result.value.map(val => {
                val.inners = val.inners.map(this.ensureTextsInner)
                return this.ensureTextsContent(val)
            }),
            total: result.total,
        }
    }
    static async post(content: Partial<types.ForumContent>) {
        var defaulted = this.ensureTextsContent(content)
        var data: {} = defaulted.key.length <= 0 ? omitObject(defaulted, 'key') : defaulted
        var result = await deta.post('/texts', data)
        return result.data as types.ForumContent
    }
    static async postResponse(from: types.UID, key: types.DataKey, inner?: number) {
        var url =
            typeof inner === 'number' && inner >= 0
                ? `/texts/${key}/inner/${inner}/responsible/${from}`
                : `/texts/${key}/responsible/${from}`
        var result = await deta.post(url, undefined)
        return result.data as types.UID
    }
    static async postInner(key: types.DataKey, content: Partial<types.ForumInner>) {
        var defaulted = this.ensureTextsInner(content)
        var data: {} = defaulted.key <= 0 ? omitObject(defaulted, 'key') : defaulted
        var result = await deta.post(`/texts/${key}/inner`, data)
        return result.data as types.ForumInner
    }
    static async update(key: types.DataKey, content: Partial<types.ForumContent>) {
        var result = await deta.post(`/texts/${key}`, content)
        return result.data as types.DataKey
    }
    static async delete(key: types.DataKey) {
        var result = await deta.delete(`/texts/${key}`)
        return result.data as types.DataKey[]
    }
    static async deleteResponse(from: types.UID, key: types.DataKey, inner?: number) {
        var url =
            typeof inner === 'number' && inner >= 0
                ? `/texts/${key}/inner/${inner}/responsible/${from}`
                : `/texts/${key}/responsible/${from}`
        var result = await deta.delete(url)
        return result.data as types.UID
    }
    static async deleteInner(key: types.DataKey, floor: number) {
        var result = await deta.delete(`/texts/${key}/inner/${floor}`)
        return result.data as types.ForumInner
    }
    static async deleteMany(filter?: types.ForumFilter, limit?: number) {
        var result = await deta.delete('/texts', {
            data: { filter, option: { limit } },
        })
        return result.data as types.DataKey[]
    }
}

/** @deprecated */
export class DynamicsServices {
    static async get<T = any>(key: types.DataKey) {
        var result = await deta.get(`/dynamics/${key}`)
        return result.data.value as T
    }
}
