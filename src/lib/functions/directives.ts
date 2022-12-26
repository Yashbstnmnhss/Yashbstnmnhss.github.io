import { App, DirectiveBinding, ObjectDirective } from 'vue'

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
    app.directive('anchor', anchor)
}
