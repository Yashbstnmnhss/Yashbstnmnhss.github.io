<script setup lang="tsx">
import { ref, onMounted } from 'vue'

type PartRoute = JSX.Element
type OptionRoute = (controller: {
    next: () => void
    changeRoutes: (target: Route[]) => void
    renderAfter: (routes: Route[]) => void
    removeRendered: (startIndex?: number, length?: number) => void
    save: (value: unknown) => void
    onLoad: (callback: (value: unknown) => boolean | undefined) => void
}) => JSX.Element
export type Route = PartRoute | OptionRoute

const { routes, saveData } = defineProps<{
    routes: Route[]
    saveData: unknown[]
}>()
const emits = defineEmits(['update:saveData'])

let saveDataIndex = 0,
    renderListIndex = -1,
    renderList: Route[] = []
const rendered = ref<JSX.Element[]>([])

onMounted(() => {
    renderList = routes
    cycling(true)
})

function cycling(loadingMode: boolean = false) {
    function next() {
        cycling(loadingMode ? saveData.length > saveDataIndex : false)
    }
    if (renderListIndex >= renderList.length) return
    renderListIndex++
    let item = renderList[renderListIndex]
    if (typeof item === 'function') {
        let loadingCallback: (value: unknown) => boolean | undefined = () => undefined
        let content = item({
            next,
            changeRoutes(target) {
                renderList = target
                renderListIndex = -1
            },
            renderAfter(routes) {
                renderList.splice(renderListIndex + 1, 0, ...routes)
            },
            removeRendered(start = 0, length = 1) {
                rendered.value.splice(rendered.value.length - length - start, length)
            },
            save(data) {
                saveData[saveDataIndex] = data
                emits('update:saveData', saveData)
            },
            onLoad(callback) {
                loadingCallback = callback
            },
        })
        rendered.value.push(content)
        if (loadingMode && saveDataIndex < saveData.length && loadingCallback) {
            let valid = loadingCallback(saveData[saveDataIndex])
            if (valid) {
                saveDataIndex++
                next()
            }
        } else saveDataIndex++
    } else {
        rendered.value.push(item)
        next()
    }
}

function Renderer(props: { content: JSX.Element }) {
    return props.content
}
</script>

<template>
    <TransitionGroup name="list" tag="div" class="vertical-space">
        <Renderer v-for="item in rendered" :key="item" :content="item" />
    </TransitionGroup>
</template>

<style>
.vertical-space {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-items: center;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}
</style>
