import { datafiles } from '../assets'
import { Logger, assignUndefined, mapValues, isUndefined } from '..'
import type { SayingsAuthors, Saying } from '../types'

const data: SayingsAuthors = datafiles.dataSayings
var sayingsAuthors: SayingsAuthors

export function getSaying(author: string, saying: string) {
    ensureSayings()
    if (author in sayingsAuthors) {
        if (saying in sayingsAuthors[author]) return sayingsAuthors[author][saying]
        Logger.error('[Sayings]', 'Unknown saying', saying, 'in', author)
    } else Logger.error('[Sayings]', 'Unknown author', author)
    return
}

export function getAllSayings() {
    ensureSayings()
    return sayingsAuthors
}

function ensureSayings() {
    if (!sayingsAuthors || Object.keys(sayingsAuthors).length <= 0) sayingsAuthors = loadSayings()
}

function loadSayings(): SayingsAuthors {
    const defaultSaying = (key: string, author: string): Saying =>
        <Saying>{
            title: key,
            text: '',
            translation: '',
            tags: [],
            author: author,
        }
    var results: SayingsAuthors = mapValues(data, (val, author) =>
        mapValues(val, (saying, name) => assignUndefined(saying || {}, defaultSaying(name, author)))
    )
    Logger.log('[Sayings]', 'Loaded', 'total authors', Object.keys(results).length)
    return results
}
