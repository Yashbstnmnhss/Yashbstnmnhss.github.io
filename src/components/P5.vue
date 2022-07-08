<script setup lang="ts">
import P5 from 'p5'
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
    <div ref="container"></div>
</template>
