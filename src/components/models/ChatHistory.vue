<script lang="ts" setup>
import Renderer from '../basic/VNodeRender'
import { NAvatar, NThing, NSpace, NText } from 'naive-ui'
import { isArray } from '../../lib'
import type { ChatMessage } from '../../lib'

const props = defineProps<{
    msgs: ChatMessage[]
}>()
</script>

<template>
    <NSpace vertical>
        <NThing v-for="(msg, index) in props.msgs" :key="index" content-indented>
            <template #avatar v-if="msg.type !== 'system' && msg.avatar">
                <NAvatar
                    class="no-select"
                    object-fit="cover"
                    round
                    v-if="isArray(msg.avatar)"
                    :src="msg.avatar[0]"
                />
                <NAvatar class="no-select" round v-else>
                    <span v-if="typeof msg.avatar === 'string'">{{ msg.avatar }}</span>
                    <Renderer v-else :content="() => msg.avatar" />
                </NAvatar>
            </template>
            <template #header v-if="msg.type !== 'system' && msg.username">
                <small v-if="typeof msg.username === 'string'">
                    <NText class="no-select" depth="3">{{ msg.username }}</NText>
                </small>
                <Renderer v-else :content="() => msg.username" />
            </template>
            <template #description>
                <span v-if="typeof msg.content === 'string'" :innerHTML="msg.content"></span>
                <Renderer v-else :content="() => msg.content" />
            </template>
        </NThing>
    </NSpace>
</template>

<style scoped>
.no-select {
    user-select: none;
    -webkit-user-drag: none;
}
</style>
