import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        content: {
            type: Function,
        },
        params: {
            type: Array,
        },
    },
    render() {
        return this.content?.(...(this.params ?? []))
    },
})
