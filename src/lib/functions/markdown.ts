import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const markdownit = new MarkdownIt({
    html: false,
    xhtmlOut: false,
    breaks: true,
    linkify: true,
    typographer: true,
    highlight: (str: string, lang: string, _: string): string => {
        try {
            if (lang && hljs.getLanguage(lang)) return hljs.highlight(lang, str, true).value
            return str
        } catch (__) {
            return str
        }
    },
})

markdownit.use(md => {
    const UNESCAPERE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g
    md.inline.ruler.after('emphasis', 'sub', single('~', 'sub'))
    md.inline.ruler.after('emphasis', 'sup', single('^', 'sup'))

    double('=', 'mark')(md)
    double('%', 'spoiler')(md)

    function single(char: string, replace: string): Parameters<typeof md.inline.ruler.after>[2] {
        return (state, silent) => {
            var found: boolean | undefined,
                content: string,
                token: ReturnType<typeof state.push>,
                max = state.posMax,
                start = state.pos

            if (state.src.charCodeAt(start) !== char.charCodeAt(0)) return false

            if (silent) return false
            if (start + 2 >= max) return false

            state.pos = start + 1

            while (state.pos < max) {
                if (state.src.charCodeAt(state.pos) === char.charCodeAt(0)) {
                    found = true
                    break
                }
                state.md.inline.skipToken(state)
            }

            if (!found || start + 1 === state.pos) {
                state.pos = start
                return false
            }

            content = state.src.slice(start + 1, state.pos)

            if (content.match(/(^|[^\\])(\\\\)*\s/)) {
                state.pos = start
                return false
            }
            state.posMax = state.pos
            state.pos = start + 1
            token = state.push(`${replace}_open`, replace, 1)
            token.markup = char

            token = state.push('text', '', 0)
            token.content = content.replace(UNESCAPERE, '$1')

            token = state.push(`${replace}_close`, replace, -1)
            token.markup = char

            state.pos = state.posMax + 1
            state.posMax = max
            return true
        }
    }
    function double(char: string, replace: string): (ins: typeof md) => void {
        /* @ts-ignore */
        function tokenize(state, silent) {
            var i,
                scanned,
                token,
                len,
                ch,
                start = state.pos,
                marker = state.src.charCodeAt(start)

            if (silent) return false

            if (marker !== char.charCodeAt(0) /* = */) return false

            scanned = state.scanDelims(state.pos, true)
            len = scanned.length
            ch = String.fromCharCode(marker)

            if (len < 2) return false

            if (len % 2) {
                token = state.push('text', '', 0)
                token.content = ch
                len--
            }

            for (i = 0; i < len; i += 2) {
                token = state.push('text', '', 0)
                token.content = ch + ch

                if (!scanned.can_open && !scanned.can_close) continue

                state.delimiters.push({
                    marker: marker,
                    length: 0, // disable "rule of 3" length checks meant for emphasis
                    jump: i / 2, // 1 delimiter = 2 characters
                    token: state.tokens.length - 1,
                    end: -1,
                    open: scanned.can_open,
                    close: scanned.can_close,
                })
            }

            state.pos += scanned.length

            return true
        }
        /* @ts-ignore */
        function postProcess(state, delimiters) {
            var i,
                j,
                startDelim,
                endDelim,
                token,
                loneMarkers = [],
                max = delimiters.length

            for (i = 0; i < max; i++) {
                startDelim = delimiters[i]

                if (startDelim.marker !== char.charCodeAt(0)) continue

                if (startDelim.end === -1) continue

                endDelim = delimiters[startDelim.end]

                token = state.tokens[startDelim.token]
                token.type = `${replace}_open`
                token.tag = replace
                token.nesting = 1
                token.markup = `${char}${char}`
                token.content = ''

                token = state.tokens[endDelim.token]
                token.type = `${replace}_close`
                token.tag = replace
                token.nesting = -1
                token.markup = `${char}${char}`
                token.content = ''

                if (
                    state.tokens[endDelim.token - 1].type === 'text' &&
                    state.tokens[endDelim.token - 1].content === char
                )
                    loneMarkers.push(endDelim.token - 1)
            }
            while (loneMarkers.length) {
                i = loneMarkers.pop()
                /* @ts-ignore */
                j = i + 1

                while (j < state.tokens.length && state.tokens[j].type === `${replace}_close`) j++

                j--

                if (i !== j) {
                    token = state.tokens[j]
                    /* @ts-ignore */
                    state.tokens[j] = state.tokens[i]
                    /* @ts-ignore */
                    state.tokens[i] = token
                }
            }
        }
        return ins => {
            ins.inline.ruler.before('emphasis', replace, tokenize) /* @ts-ignore */
            ins.inline.ruler2.before('emphasis', replace, state => {
                var curr,
                    tokens_meta = state.tokens_meta,
                    max = (state.tokens_meta || []).length

                postProcess(state, state.delimiters)

                for (curr = 0; curr < max; curr++ /* @ts-ignore */)
                    if (tokens_meta[curr] && /* @ts-ignore */ tokens_meta[curr].delimiters)
                        postProcess(state, tokens_meta[curr].delimiters)
            })
        }
    }
})

export function renderMarkdown(markdown: string) {
    return markdownit.render(markdown, {})
}
