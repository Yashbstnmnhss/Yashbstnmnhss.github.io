<!--<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '../store'
import * as monaco from 'monaco-editor'
import initFuze from '../composables/fuzelanguage'

const store = useStore()

const props = defineProps<{
    modelValue: string
    options?: monaco.editor.IEditorOptions
}>()
const emit = defineEmits(['update:value'])

const dom = ref<HTMLElement>()
let instance: monaco.editor.IStandaloneCodeEditor

defineExpose({
    getValue: function() {
        return instance.getValue()
    },
})

onMounted(() => {
    initFuze()

    instance = monaco.editor.create(dom.value!, {
        value: props.modelValue,
        theme: store.state.theme === 'dark' ? 'vs-dark' : 'vs',
        mouseWheelZoom: true,
        language: 'fuze',
        tabSize: 4,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        ...props.options
    })
    instance.onDidChangeModelContent(() => {
        emit('update:value', instance.getValue())
    })
})
</script>

<template>
    <div class="editor" ref="dom" />
</template>

<style scoped>
.editor {
    height: 100%;
}
</style>-->