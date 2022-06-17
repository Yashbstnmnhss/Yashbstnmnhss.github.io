import { App, DirectiveBinding, ObjectDirective } from 'vue'

export default (app: App<Element>) => {
    const anchor: ObjectDirective = {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            el.addEventListener('click', () => {
                const selector = binding.value as string
                const anchor = el.ownerDocument.querySelector(selector)
                if (anchor) {
                    anchor.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            })
        },
    }
    app.directive('anchor', anchor)

    const copy: ObjectDirective = {
        mounted(el: HTMLElement, { value }) {
            el.addEventListener('click', () => {
                const text = value as string
                navigator.clipboard.writeText(text)
            })
        },
    }
    app.directive('copy', copy)
}
