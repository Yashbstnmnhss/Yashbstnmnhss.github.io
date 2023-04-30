import { axios } from '.'
import * as types from './types'
import { API, API_KEY } from '../constants'
import { assignUndefined, omitObject } from '../utils'

const deta = axios.create({
    baseURL: API,
    headers: {
        'X-API-Key': API_KEY,
    },
})
deta.interceptors.request.use(config => {
    config.headers!['X-API-Key'] = API_KEY
    return config
})

export class TextsServices {
    private static ensureTextsContent(input: Partial<types.TextsContent>): types.TextsContent {
        const defaultValues: types.TextsContent = {
            key: '',
            title: '',
            text: '',
            author: '114514',
            responsible: [],
            date: new Date(),
            inners: [],
            top: false,
            tags: [],
            banInner: false,
            responsibleIcon: '👍',
        }
        return assignUndefined(input, defaultValues)
    }
    private static ensureTextsInner(input: Partial<types.TextsInner>): types.TextsInner {
        const defaultValues: types.TextsInner = {
            key: 0,
            title: '喔哇 未定义',
            text: `\`undefined\` 是**JavaScript**中的关键字, 直译为***未定义***`,
            author: 'Kaedehara_Kazuha',
            responsible: [],
            date: new Date(),
            top: false,
            tags: ['内部错误'],
            banInner: false,
            responsibleIcon: '👍',
            to: undefined,
        }
        return assignUndefined(input, defaultValues)
    }

    static async get(key: types.DataKey) {
        var result = (await deta.get(`/texts/${key}`)).data as types.TextsContent
        result.inners = result.inners.map(this.ensureTextsInner)
        return this.ensureTextsContent(result)
    }
    static async getMany(page: number = -1, pageSize: number = -1) {
        var result = (
            await deta.get('/texts', {
                params: { page, pageSize },
            })
        ).data as {
            value: types.TextsContent[]
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
        filter?: types.TextsFilter,
        limit?: number,
        page: number = -1,
        pageSize: number = -1
    ) {
        var result = (
            await deta.post('/texts/query', {
                data: { filter, option: { limit }, page, pageSize },
            })
        ).data as {
            value: types.TextsContent[]
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
    static async post(content: Partial<types.TextsContent>) {
        var defaulted = this.ensureTextsContent(content)
        var data: {} = defaulted.key.length <= 0 ? omitObject(defaulted, 'key') : defaulted
        var result = await deta.post('/texts', data)
        return result.data as types.TextsContent
    }
    static async postResponsible(from: types.UID, key: types.DataKey, inner?: number) {
        var url =
            typeof inner === 'number' && inner >= 0
                ? `/texts/${key}/inner/${inner}/responsible/${from}`
                : `/texts/${key}/responsible/${from}`
        var result = await deta.post(url, undefined)
        return result.data as types.UID
    }
    static async postInner(key: types.DataKey, content: Partial<types.TextsInner>) {
        var defaulted = this.ensureTextsInner(content)
        var data: {} = defaulted.key <= 0 ? omitObject(defaulted, 'key') : defaulted
        var result = await deta.post(`/texts/${key}/inner`, data)
        return result.data as types.TextsInner
    }
    static async update(key: types.DataKey, content: Partial<types.TextsContent>) {
        var result = await deta.post(`/texts/${key}`, content)
        return result.data as types.DataKey
    }
    static async delete(key: types.DataKey) {
        var result = await deta.delete(`/texts/${key}`)
        return result.data as types.DataKey[]
    }
    static async deleteResponsible(from: types.UID, key: types.DataKey, inner?: number) {
        var url =
            typeof inner === 'number' && inner >= 0
                ? `/texts/${key}/inner/${inner}/responsible/${from}`
                : `/texts/${key}/responsible/${from}`
        var result = await deta.delete(url)
        return result.data as types.UID
    }
    static async deleteInner(key: types.DataKey, floor: number) {
        var result = await deta.delete(`/texts/${key}/inner/${floor}`)
        return result.data as types.TextsInner
    }
    static async deleteMany(filter?: types.TextsFilter, limit?: number) {
        var result = await deta.delete('/texts', {
            data: { filter, option: { limit } },
        })
        return result.data as types.DataKey[]
    }
}

export class DynamicsServices {
    static async get<T = any>(key: types.DataKey) {
        var result = await deta.get(`/dynamics/${key}`)
        return result.data.value as T
    }
}
