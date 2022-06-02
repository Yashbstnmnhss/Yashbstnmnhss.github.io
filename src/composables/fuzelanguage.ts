/*import * as monaco from 'monaco-editor'

const id = 'fuze'
const keywords = [ 'fuze', 'ezuf', 'Fuze', 'Ezuf', 'man', 'tou' ]

export default function register() {
    monaco.languages.register({
        id: id,
        extensions: ['.fuze'],
        aliases: ['fuzelish', 'fuzese', 'fuzefuck']
    })

    monaco.languages.setMonarchTokensProvider(id, {
        keywords: keywords.filter(k => k != 'man' && k != 'tou'),
        functions: [
            'man',
            'tou'
        ],
        tokenizer: {
            root: [
                [/@?[a-zA-Z_][\w$]*/ /*, {
                    cases: {
                        '@keywords': 'keyword',
                        '@functions': 'type',
                        '@default': 'identifier'
                    }
                }],
                [/[\{\}]/, '@brackets']
            ]
        },
        ignoreCase: false
    })

    monaco.languages.setLanguageConfiguration(id, {
        brackets: [
            ['{', '}']
        ],
        autoClosingPairs: [
            {
                open: '{',
                close: '}'
            }
        ]
    })

    monaco.languages.registerCompletionItemProvider(id, {
        provideCompletionItems: (m, p, c, t) => {
            var suggestions: monaco.languages.CompletionItem[] = [
                ...keywords.filter(k => {
                    var t = m.getWordAtPosition(p)!.word
                    return k.startsWith(t)
                }).map(function(k): monaco.languages.CompletionItem {
                    return { 
                        label: k,
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: k,
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.KeepWhitespace,
                        detail: 'Keyword: ' + k,
                        range: {
                            startLineNumber: p.lineNumber,
                            startColumn: p.column - 1,
                            endLineNumber: p.lineNumber,
                            endColumn: p.column + k.length
                        }
                    }
                }),
                {
                    label: 'loop',
                    detail: 'Loop: {}',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '{}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    range: {
                        startLineNumber: p.lineNumber,
                        startColumn: p.column - 1,
                        endLineNumber: p.lineNumber,
                        endColumn: p.column + 2
                    }
                }
            ]

            return {
                suggestions: suggestions
            }
        },
        triggerCharacters: [ 'f', 'F', 'e', 'E', 'm', 't', '{' ]
    })

    monaco.languages.registerHoverProvider(id, {
        provideHover: (d, p, t) => {
            if (d.getWordAtPosition(p)) {
                const word = d.getWordAtPosition(p)?.word
                
                var content = ''
                switch (word) {
                    case 'fuze':
                        content = '**Pointer++**'
                        break
                    case 'ezuf':
                        content = '**Pointer--**'
                        break
                    case 'Fuze':
                        content = '**Value++**'
                        break
                    case 'Ezuf':
                        content = '**Value--**'
                        break
                    case 'man':
                        content = '**Output**'
                        break
                    case 'tou':
                        content = '**Input**'
                        break
                }

                return {
                    contents: [
                        {
                            value: content
                        }
                    ]
                }
            }
        }
    })
}*/

/*
enum Token {
    Incrememnt = 'fuze',
    Decrease = 'ezuf',
    MoveNext = 'Fuze',
    MovePrevious = 'Ezuf',
    Input = 'man',
    Output = 'tou',
    LoopOpen = '{',
    LoopClose = '}'
}

class Reader {
    constructor(public content: string, private index = 0) {}
    
    get endOfFile() {
        return this.index >= this.content.length
    }

    get currentCharNumber() {
        return this.index + 1
    }
    get currentLineNumber() {
        return this.content.substring(0, this.index).split('\n').length
    }

    peek(offset = 0) {
        return this.content[this.index + offset]
    }

    consumeChar(c: string) {
        const cur = this.peek()
        if (cur === c) {
            this.index++
        } else {
            throw new Error(`Expected ${c}, got ${cur}`)
        }
        return cur
    }

    consumeSpace() {
        this.consumeWhile(/\s/)
    }

    consumeWhile(regex: RegExp) {
        const result: string[] = []
        do {
            const cur = this.peek()
            if (regex.test(cur)) {
                result.push(cur)
                this.index++
            } else {
                break
            }
        } while (!this.endOfFile)
        return result.join('')
    }
}

export class SyntaxError extends Error {
    constructor(public message: string, public source: string, public charNumber: number, public lineNumber: number) {
        super(message)
    }
}

export function tokenier(str: string) {
    const tokens: Token[] = []
    const brackets: string[] = []
    const reader = new Reader(str)
    reader.consumeSpace()
    do {
        switch (reader.peek()) {
            case 'f':
                var s = reader.consumeWhile(/[uze]/)
                if (s === 'fuze')
                    tokens.push(Token.Incrememnt)
                else
                    throw error('Expected fuze', s)
                break
            case 'e':
                var s = reader.consumeWhile(/[zuf]/)
                if (s === 'ezuf')
                    tokens.push(Token.Decrease)
                else
                    throw error('Expected ezuf', s)
                break
            case 'F':
                var s = reader.consumeWhile(/[uze]/)
                if (s === 'Fuze')
                    tokens.push(Token.MoveNext)
                else
                    throw error('Expected Fuze', s)
                break
            case 'E':
                var s = reader.consumeWhile(/[zuf]/)
                if (s === 'Ezuf')
                    tokens.push(Token.MovePrevious)
                else
                    throw error('Expected Ezuf', s)
                break
            case 'm':
                var s = reader.consumeWhile(/[an]/)
                if (s === 'man')
                    tokens.push(Token.Input)
                else    
                    throw error('Expected man', s)
                break
            case 't':
                var s = reader.consumeWhile(/[ou]/)
                if (s === 'tou')
                    tokens.push(Token.Output)
                else
                    error('Expected tou', s)
                break
            case '{':
                tokens.push(Token.LoopOpen)
                brackets.push('{')
                break
            case '}':
                tokens.push(Token.LoopClose)
                if (brackets.length == 0) {
                    error('Unexpected }', '}')
                    break
                }
                var s = brackets.pop()!
                if (s !== '{') {
                    error('Unexpected {', s)
                }
                break
        }
        reader.consumeSpace()
        continue
    } while (!reader.endOfFile)

    function error(message: string, source: string) {
        throw new SyntaxError(message, source, reader.currentCharNumber, reader.currentLineNumber)
    }
    
    if (brackets.length > 0) {
        error('Unmatched opening bracket', brackets.pop()!)
    }

    return tokens
}

export type Environment = {
    read: () => string,
    write: (str: string) => void
}

export function parse(tokens: Token[], env: Environment) {
    var s = [0]
    var p = 0
    tokens.forEach(t => {
        switch (t) {
            case Token.Incrememnt:
                s[p]++
                break
            case Token.Decrease:
                s[p]--
                break
            case Token.MoveNext:
                p++
                break
            case Token.MovePrevious:
                p--
                break
            case Token.Input:
                s[p] = env.read().charCodeAt(0)
                break
            case Token.Output:
                env.write(String.fromCharCode(s[p]))
                break
            case Token.LoopOpen:
                if (s[p] == 0) {
                    for (var p2 = p; p2 < tokens.length; p2++) {
                        if (tokens[p2] == Token.LoopClose) {
                            p = p2
                            break
                        }
                    }
                    break
                }
                break
            case Token.LoopClose:
                if (s[p] != 0) {
                    for (var p2 = p; p2 >= 0; p2--) {
                        if (tokens[p2] == Token.LoopOpen) {
                            p = p2
                            break
                        }
                    }
                    break
                }
                break
            default:
                break
        }
    })
}*/
