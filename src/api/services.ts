import { request } from './axios'
import * as Models from './models'

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
}

export class UtilService {
    static async qrCode(content: string) {
        return await request('/utils/qrcode', 'get', { content: content })
    }
    static async bannedWords(text: string, replacement?: string) {
        return await request('/utils/bannedWords', 'get', {
            text: text,
            replacement: replacement,
        })
    }
}

export class CommentService {
    static async getAll() {
        return await request('/database/comments/getAll', 'get')
    }
    static async postNew(comment: Models.Comment) {
        return await request('/database/comments/post', 'post', comment)
    }
    static async delete(id: string) {
        return await request('/database/comments/delete', 'post', { id: id })
    }
}
