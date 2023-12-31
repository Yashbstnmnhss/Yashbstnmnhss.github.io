enum TokenType {
    LeftParen, //(
    RightParen, //)
    LeftBracket, //[
    RightBracket, //]
    LeftBrace, //{
    RightBrace, //}
    Symbol,
    Number,
    String,
    Boolean,
    Null,
}
type Token = {
    type: TokenType
    value: string
}

enum ASTNodeType {
    Program,
    Call,
    List,
    Dict,
    String,
    Number,
    Boolean,
    Symbol,
    Null,
}
abstract class ASTNode {
    abstract type: ASTNodeType
}
class ProgramNode extends ASTNode {
    type = ASTNodeType.Program
    constructor(public body: ASTNode[]) {
        super()
    }
}
class CallNode extends ASTNode {
    type = ASTNodeType.Call
    constructor(public callee: ASTNode, public args: ASTNode[] = []) {
        super()
    }
}
class ListNode extends ASTNode {
    type = ASTNodeType.List
    constructor(public elements: ASTNode[]) {
        super()
    }
}
class DictNode extends ASTNode {
    type = ASTNodeType.Dict
    constructor(public elements: [ASTNode, ASTNode][]) {
        super()
    }
}
class StringNode extends ASTNode {
    type = ASTNodeType.String
    constructor(public value: string) {
        super()
    }
}
class NumberNode extends ASTNode {
    type = ASTNodeType.Number
    constructor(public value: number) {
        super()
    }
}
class BooleanNode extends ASTNode {
    type = ASTNodeType.Boolean
    constructor(public value: boolean) {
        super()
    }
}
class SymbolNode extends ASTNode {
    type = ASTNodeType.Symbol
    constructor(public value: string) {
        super()
    }
}
class NullNode extends ASTNode {
    type = ASTNodeType.Null
    constructor() {
        super()
    }
}

class TokenizeError extends Error {}
class ParseError extends Error {}

const BRACKETS = /[\(\)\[\]\{\}]/,
    BRACKETS_MAP: Record<string, TokenType> = {
        '(': TokenType.LeftParen,
        ')': TokenType.RightParen,
        '[': TokenType.LeftBracket,
        ']': TokenType.RightBracket,
        '{': TokenType.LeftBrace,
        '}': TokenType.RightBrace,
    },
    WHITESPACE = /\s/,
    NUMBER_BEGIN = /[+\-.0-9]/,
    NUMBER = /[0-9a-fox+\-.]/i,
    STRING_BEGIN = /["']/,
    STRING_ESCAPED = /\\/,
    COMMENT = /#/,
    NEWLINE = /\n/

export function tokenize(input: string) {
    let current = 0,
        char = '',
        tokens: Token[] = []

    function nextChar() {
        current++
        if (current >= input.length) throw new TokenizeError('Unexpected end of input')
        return (char = input[current])
    }

    while (current < input.length) {
        char = input[current]

        if (BRACKETS.test(char)) {
            tokens.push({
                type: BRACKETS_MAP[char],
                value: char,
            })
            current++
            continue
        }

        if (WHITESPACE.test(char)) {
            current++
            continue
        }

        if (COMMENT.test(char)) {
            while (!NEWLINE.test(char)) nextChar()
            continue
        }

        if (NUMBER_BEGIN.test(char)) {
            let value = ''
            while (NUMBER.test(char)) {
                value += char
                nextChar()
            }
            const NORMAL_NUMBER = /^([+-]?[0-9]+(\.[0-9]+)?|\.[0-9]+)$/,
                SCIENTIFIC_NUMBER = /^[+-]?[0-9]+(\.[0-9]+)?e[+-]?[0-9]+$/,
                HEX_NUMBER = /^[+-]?0[xX][0-9a-fA-F]+$/,
                OCTAL_NUMBER = /^[+-]?0[oO][0-7]+$/,
                BINARY_NUMBER = /^[+-]?0[bB][01]+$/
            if (
                NORMAL_NUMBER.test(value) ||
                SCIENTIFIC_NUMBER.test(value) ||
                HEX_NUMBER.test(value) ||
                OCTAL_NUMBER.test(value) ||
                BINARY_NUMBER.test(value)
            )
                tokens.push({
                    type: TokenType.Number,
                    value,
                })
            else
                tokens.push({
                    type: TokenType.Symbol,
                    value,
                })

            continue
        }

        if (STRING_BEGIN.test(char)) {
            let value = '',
                escaped = false,
                quote = char
            nextChar() //跳过起始引号
            while (!(char === quote && !escaped)) {
                if (escaped) escaped = false
                if (STRING_ESCAPED.test(char)) escaped = true
                value += char
                nextChar()
            }
            nextChar() //跳过终止引号
            tokens.push({
                type: TokenType.String,
                value,
            })
            continue
        }

        function isSymbolChar(char: string) {
            return (
                !WHITESPACE.test(char) &&
                !BRACKETS.test(char) &&
                !COMMENT.test(char) &&
                !STRING_BEGIN.test(char)
            )
        }
        if (isSymbolChar(char)) {
            let value = ''
            while (isSymbolChar(char)) {
                value += char
                nextChar()
            }
            const TRUE_FALSE = /^(true|false)$/,
                NULL = /^null$/

            tokens.push({
                type: TRUE_FALSE.test(value)
                    ? TokenType.Boolean
                    : NULL.test(value)
                    ? TokenType.Null
                    : TokenType.Symbol,
                value,
            })
            continue
        }
        throw new TokenizeError(`Unexpected character: ${char}`)
    }

    return tokens
}

export function parse(tokens: Token[]): ProgramNode {
    let current = 0,
        token: Token

    function nextToken() {
        current++
        if (current >= tokens.length) throw new ParseError('Unexpected end of input')
        return tokens[current]
    }
    function parseToken(token: Token): ASTNode {
        if (token.type === TokenType.Number) {
            let number = Number(token.value)
            if (isNaN(number)) return new SymbolNode(token.value)
            else return new NumberNode(number)
        }
        if (token.type === TokenType.String) return new StringNode(token.value)

        if (token.type === TokenType.Boolean) return new BooleanNode(token.value === 'true')

        if (token.type === TokenType.Null) return new NullNode()

        if (token.type === TokenType.Symbol) return new SymbolNode(token.value)

        if (token.type === TokenType.LeftParen) {
            let callee = parseToken(nextToken())
            let args: ASTNode[] = []
            let token = nextToken()
            while (token.type !== TokenType.RightParen) {
                args.push(parseToken(token))
                token = nextToken()
            }
            return new CallNode(callee, args)
        }
        if (token.type === TokenType.LeftBracket) {
            let elements: ASTNode[] = []
            let token = nextToken()
            while (token.type !== TokenType.RightBracket) {
                elements.push(parseToken(token))
                token = nextToken()
            }
            return new ListNode(elements)
        }
        if (token.type === TokenType.LeftBrace) {
            let elements: ASTNode[] = []
            let token = nextToken()
            while (token.type !== TokenType.RightBrace) {
                elements.push(parseToken(token))
                token = nextToken()
            }
            if (elements.length % 2 !== 0) elements.push(new NullNode())
            let dict: [ASTNode, ASTNode][] = []
            for (let index = 0; index < elements.length; index += 2)
                dict.push([elements[index], elements[index + 1]])
            return new DictNode(dict)
        }

        throw new ParseError(`Unexpected token: ${token.value}`)
    }

    let body: ASTNode[] = []
    while (current < tokens.length) {
        token = tokens[current]
        body.push(parseToken(token))
        current++
    }
    return new ProgramNode(body)
}

abstract class Signal {}
class ContinueSignal extends Signal {
    constructor(public label?: string) {
        super()
    }
}
class BreakSignal extends Signal {
    constructor(public label?: string) {
        super()
    }
}
class ReturnSignal extends Signal {
    constructor(public value: any) {
        super()
    }
}

type DefinedFunctionWithArgs<T = any> = (
    visit: (node: ASTNode, scope?: Scope) => any,
    scope: Scope,
    self: CallNode,
    args: any[]
) => T
type DefinedFunction<T = any> = (
    visit: (node: ASTNode, scope?: Scope) => any,
    scope: Scope,
    self: CallNode
) => T

class Scope {
    variables: Record<string, any> = {}
    constructor(public parent?: Scope) {}
    get(name: string): any {
        if (name in this.variables) return this.variables[name]
        if (this.parent) return this.parent.get(name)
        return undefined
    }
    set(name: string, value: any) {
        this.variables[name] = value
    }
}
export function evaluate(program: ProgramNode): any {
    const globalScope = new Scope()

    const lambda: DefinedFunction = (visit, scope, self): DefinedFunction | undefined => {
        let args = self.args
        if (args.length === 0) return () => undefined
        else if (args.length === 1) return (_0, scope2, _2) => visit(args[0], new Scope(scope2))
        else if (args[0] instanceof ListNode) {
            // 参数与捕获变量
            if (args.length > 2 && args[1] instanceof ListNode) {
                let paramName = visit(args[0], scope) as string[]
                let caughtName = visit(args[1], scope) as string[]
                return processArgs((_0, scope2, _2, params) => {
                    let newScope = new Scope(scope2)
                    paramName.forEach((name, index) =>
                        newScope.set(name, index < params.length ? params[index] : undefined)
                    )
                    // 在定义此函数表达式时捕获的变量
                    caughtName.forEach(name => newScope.set(name, scope.get(name) ?? undefined))
                    for (let index = 1; index < args.length; index++) visit(args[index], newScope)
                })
            }
            // 仅参数
            let paramName = visit(args[0], scope) as string[]
            return processArgs((_0, scope2, _2, params) => {
                let newScope = new Scope(scope2)
                paramName.forEach((name, index) =>
                    newScope.set(name, index < params.length ? params[index] : undefined)
                )
                for (let index = 1; index < args.length; index++) visit(args[index], newScope)
            })
        } else
            return processArgs((_0, scope2, _2, _3) => {
                let newScope = new Scope(scope2)
                args.forEach(val => visit(val, newScope))
            })
    }
    const builtinFunctions: Record<string, DefinedFunction> = {
        ':': lambda,
        lambda,
        '+': manyOperants(
            (a, b) => a + b,
            c => +c
        ),
        '-': manyOperants(
            (a, b) => a - b,
            c => -c
        ),
        '*': manyOperants((a, b) => a * b),
        '/': manyOperants((a, b) => a / b),
        '%': manyOperants((a, b) => a % b),
        '=': processArgs((_0, _1, _2, args) => {
            if (args.length === 1) return true
            return args[0] === args[1]
        }),
        '!=': processArgs((_0, _1, _2, args) => {
            if (args.length === 1) return true

            return args[0] !== args[1]
        }),
        '>': processArgs((_0, _1, _2, args) => {
            if (args.length === 1) return true

            return args[0] > args[1]
        }),
        '<': processArgs((_0, _1, _2, args) => {
            if (args.length === 1) return true

            return args[0] < args[1]
        }),
        '<=': processArgs((_0, _1, _2, args) => {
            if (args.length === 1) return true

            return args[0] <= args[1]
        }),
        '>=': processArgs((_0, _1, _2, args) => {
            if (args.length === 1) return true

            return args[0] >= args[1]
        }),
        not: processArgs((_0, _1, _2, args) => {
            return !args[0]
        }),
        and: manyOperants((a, b) => a && b),
        or: manyOperants((a, b) => a || b),
        xor: manyOperants((a, b) => a ^ b),
        '^': manyOperants((a, b) => a ^ b),
        '&': manyOperants((a, b) => a & b),
        '|': manyOperants((a, b) => a | b),
        '~': processArgs((_0, _1, _2, args) => {
            return ~args[0]
        }),
        print: processArgs((_0, _1, _2, args) => console.log(...args)),
        get: processArgs((_0, scope, _2, args) => {
            let varname = args[0]
            if (typeof varname !== 'string') return varname
            return dealDot(varname, scope)
        }),
        set: processArgs((_0, scope, _2, args) => {
            let varname = args[0],
                value = args[1]
            if (typeof varname !== 'string') return varname
            let parts = varname.split('.')
            if (parts.length === 1) scope.set(varname, value)
            else {
                let root = scope.get(parts[0]),
                    obj = root
                for (let index = 1; index < parts.length; index++) {
                    if (index === parts.length - 1) obj[parts[index]] = value
                    else obj = obj[parts[index]]
                }
                root[parts[0]] = obj
            }

            return value
        }),
        define: processArgs((_0, scope, _2, args) => {
            if (args.length === 0 || typeof args[0] !== 'string') return undefined
            if (args[0].startsWith('$')) throw new Error('Cannot define variable starts with $')
            scope.set(args[0], args[1] ?? undefined)
            return args[1]
        }),

        return: processArgs((_0, _1, _2, args) => {
            throw new ReturnSignal(String(args[0]) ?? undefined)
        }),

        break: processArgs((_0, _1, _2, args) => {
            throw new BreakSignal(String(args[0]) ?? undefined)
        }),

        continue: processArgs((_0, _1, _2, args) => {
            throw new ContinueSignal(String(args[0]) ?? undefined)
        }),

        if: processArgs((visit, scope, self, args) => {
            if (args.length < 2) return undefined
            let scope2 = new Scope(scope)
            let condition = Boolean(doLambda(args[0], visit, scope2, self))
            let iftrue = args[1]
            if (condition) return doLambda(iftrue, visit, scope2, self)
            else if (args.length > 2) return doLambda(args[2], visit, scope2, self)
            return undefined
        }),
        for: processArgs((visit, scope, self, args) => {
            if (args.length < 2) return undefined
            let scope2 = new Scope(scope)
            let iterator = args[0]
            let body = args[1]
            let label = args[2] ?? undefined
            let index = 0
            for (let value in iterator) {
                scope2.set('value', value)
                scope2.set('index', index)
                try {
                    doLambda(body, visit, scope, self)
                } catch (signal) {
                    if (signal instanceof BreakSignal && signal.label === label) break
                    else if (signal instanceof ContinueSignal && signal.label === label) continue
                }
                index++
            }
            return iterator
        }),
    }

    function processArgs(func: DefinedFunctionWithArgs): DefinedFunction {
        return (visit, scope, self) => {
            if (!visit || !scope || !self) return
            let args = (self.args ?? []).map(arg => {
                if (arg instanceof SymbolNode) return mustStartWithDollar(arg.value, scope)
                return evaluateNode(arg, scope)
            })
            func(visit, scope, self, args)
        }
    }
    function manyOperants(
        operator: (a: any, b: any) => any,
        one?: (val: any) => any
    ): DefinedFunction {
        return processArgs((_0, _1, _2, args) => {
            if (args.length === 1) return one ? one(args[0]) : args[0]
            let result = args[0]
            for (let index = 1; index < args.length; index++) result = operator(result, args[index])
            return result
        })
    }
    function doLambda(
        val: any,
        visit: (node: ASTNode, scope?: Scope) => any,
        scope: Scope,
        self: CallNode
    ) {
        return typeof val === 'function' ? val(visit, scope, self) : val
    }

    const builtinVariables: Record<string, any> = {}

    for (let key in builtinFunctions) globalScope.set(key, builtinFunctions[key])
    for (let key in builtinVariables) globalScope.set(key, builtinVariables[key])

    function evaluateNode(node: ASTNode, scope = new Scope(globalScope)): any {
        try {
            if (node instanceof ProgramNode)
                for (let index = 0; index < node.body.length; index++) {
                    let child = node.body[index]
                    let result = evaluateNode(child, scope)
                    if (index === node.body.length - 1) return result
                }
            else if (node instanceof ListNode)
                return node.elements.map(element => evaluateNode(element, scope))
            else if (node instanceof DictNode)
                return Object.fromEntries(
                    node.elements.map(val => val.map(item => evaluateNode(item, scope)))
                )
            else if (
                node instanceof StringNode ||
                node instanceof NumberNode ||
                node instanceof BooleanNode ||
                node instanceof SymbolNode
            )
                return node.value
            else if (node instanceof NullNode) return undefined
            else if (node instanceof CallNode) {
                let func: DefinedFunction
                if (node.callee instanceof SymbolNode) {
                    let name = node.callee.value
                    if (name.startsWith('$')) name = name.slice(1)
                    let val = dealDot(name, scope)
                    if (!val || typeof val !== 'function') return val

                    func = val as DefinedFunction
                } else if (typeof node.callee === 'function') {
                    func = node.callee
                } else {
                    let callee = evaluateNode(node.callee, scope)
                    if (typeof callee !== 'function') return callee
                    func = callee
                }
                return func(evaluateNode, scope, node)
            }
            return undefined
        } catch (signal) {
            if (signal instanceof ReturnSignal) return signal.value
            else throw signal
        }
    }

    function mustStartWithDollar(name: string, scope: Scope) {
        return name.startsWith('$') ? dealDot(name.slice(1), scope) : name
    }
    function dealDot(name: string, scope: Scope) {
        let parts = name.split('.')
        if (parts.length === 1) return scope.get(parts[0])
        parts.map(val => (val.startsWith('$') ? scope.get(val.slice(1)) ?? val : val))
        let obj = scope.get(parts[0])
        for (let index = 1; index < parts.length; index++) {
            if (typeof obj !== 'object') return undefined
            obj = obj[parts[index]]
        }
        return obj
    }

    return evaluateNode(program, globalScope)
}
