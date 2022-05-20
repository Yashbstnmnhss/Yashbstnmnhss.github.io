export type SayingFrom = string | string[]
export interface Comment {
    content: string
    ip?: string
    time?: Date
    filter?: boolean
}
