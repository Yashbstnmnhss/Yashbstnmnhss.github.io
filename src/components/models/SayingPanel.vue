<script setup lang="ts">
import { NBlockquote, NEmpty, NCollapse, NCollapseItem } from 'naive-ui'
import { getSaying } from '../../lib/functions/sayings'
import { ref, watch } from 'vue'

const props = defineProps<{
    author: string
    target: string
}>()
const saying = ref(getSaying(props.author, props.target))
const updateSaying = () => (saying.value = getSaying(props.author, props.target))

watch(
    () => props.author,
    () => updateSaying()
)
watch(
    () => props.target,
    () => updateSaying()
)
</script>

<template>
    <NBlockquote v-if="saying && saying.text">
        <NCollapse v-if="saying.translation" default-expanded-names="1">
            <NCollapseItem
                class="keep-space"
                :title="$texta.get(['views', 'jokes', 'saying-panel', 'original-text'])"
                name="1"
            >
                {{ saying.text }}
            </NCollapseItem>
            <NCollapseItem
                class="keep-space"
                :title="$texta.get(['views', 'jokes', 'saying-panel', 'translated-text'])"
            >
                {{ saying.translation }}
            </NCollapseItem>
        </NCollapse>
        <div class="keep-space" v-else>
            {{ saying.text }}
        </div>
    </NBlockquote>
    <NEmpty v-else />
</template>

<style lang="less" scoped>
.keep-space {
    white-space: pre-wrap;
}
</style>
