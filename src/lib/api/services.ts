import { request } from './axios'
import * as Models from './types'

export class ExternalService {
    static async getIp() {
        return request('http://whois.pconline.com.cn/ipJson.jsp?json=true', 'get', null, 'external')
    }
}

export class Service {
    static async getSayings(from?: Models.SayingFrom) {
        return await request('/sayings', 'get', {
            from: from,
        })
    }
    static async getRandomSaying(from?: Models.SayingFrom) {
        return await request('/sayings', 'get', {
            all: false,
            from: from,
        })
    }
    static async hentai() {
        return await request('/hentai', 'post')
    }
    static async chineseChar() {
        return await request('/chineseChar', 'get', null, undefined, {
            responseType: 'arraybuffer',
        })
    }
}

export class UtilService {
    static async qrCode(content: string) {
        return await request('/utils/qrcode', 'post', { content: content })
    }
    static async bannedWords(text: string, replacement?: string) {
        return await request('/utils/bannedWords', 'get', {
            text: text,
            replacement: replacement,
        })
    }
    static async getIp() {
        return await request('/utils/getIp', 'get')
    }
    static async lp(content: string) {
        return await request('/utils/lp', 'post', `"${content}"`)
    }
}

export class CommentService {
    static async getAll() {
        return await request('/database/comments/getAll', 'get')
    }
    static async postNew(comment: Models.CommentRequest) {
        return await request('/database/comments/post', 'post', comment)
    }
    static async delete(id: string) {
        return await request('/database/comments/delete', 'post', { id: id })
    }
}
