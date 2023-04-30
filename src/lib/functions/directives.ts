import type { App, DirectiveBinding, ObjectDirective } from 'vue'

export default (app: App<Element>) => {
    const anchor: ObjectDirective = {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            el.addEventListener('click', () => {
                const selector = binding.value as string
                const anchor = el.ownerDocument.querySelector(selector)
                if (anchor)
                    anchor.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
            })
        },
    }
    const copy: ObjectDirective = {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            el.addEventListener('click', () => {
                const data = binding.value as {
                    succeed?: (val: string) => void
                    fallback?: (val: string) => void
                    content?: string
                }
                var content = data.content ?? el.innerText
                try {
                    navigator.clipboard
                        .writeText(content)
                        .then(_ => data.succeed?.(content))
                        .catch(_ => data.fallback?.(content))
                } catch (__) {
                    data.fallback?.(content)
                }
            })
        },
    }
    app.directive('anchor', anchor).directive('copy', copy)
}
