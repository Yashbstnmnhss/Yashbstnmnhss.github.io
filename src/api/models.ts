export type SayingFrom = string | string[]

export interface CommentRequest {
    content: string
    ip?: string
    time?: Date
    filter?: boolean
}

export interface CommentResponse {
    _id: string
    content: string
    time: Date
    ip: string
}
