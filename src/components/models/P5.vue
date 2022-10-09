<script setup lang="ts">
import P5 from 'p5'
import { NScrollbar } from 'naive-ui'
import { onMounted, ref } from 'vue'

const container = ref<HTMLElement>()

const props = defineProps<{
    sketch: (p5: P5) => void
}>()
const emits = defineEmits<{
    (e: 'created', p5: P5): void
}>()

onMounted(() => {
    var ins = new P5(props.sketch, container.value)
    emits('created', ins)
})
</script>

<template>
    <NScrollbar x-scrollable>
        <div style="max-width: 100%" ref="container"></div>
    </NScrollbar>
</template>
