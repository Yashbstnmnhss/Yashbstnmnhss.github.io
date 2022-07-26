import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        content: {
            type: Object,
        },
    },
    render() {
        return this.content
    },
})
