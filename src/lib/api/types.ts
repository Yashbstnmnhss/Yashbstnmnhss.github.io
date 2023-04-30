export type UID = string
export type DataKey = string
export type TextsInnerKey = number
export type TextsInner = Omit<TextsContent, 'key' | 'inners'> & {
    key: TextsInnerKey
    to?: TextsInnerKey
}
export type TextsContent = {
    key: DataKey
    title: string
    text: string
    responsible: UID[]
    responsibleIcon: string
    date: Date
    author: UID
    top: boolean
    tags: string[]
    inners: TextsInner[]
    banInner: boolean
}
export type TextsFilter = TextsFilter[] | Record<string, any>
export type TimelineItem = {
    title: string
    text: string
    type: string
    time: string
    dashed: boolean
}
