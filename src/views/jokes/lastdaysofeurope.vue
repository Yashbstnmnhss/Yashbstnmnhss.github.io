<route lang="yaml">
name: lastdaysofeurope
</route>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { CommentResponse } from '../../api/models'
import { CommentService } from '../../api/services'
import Logger from '../../utils/logger'

const comments = ref<CommentResponse[]>([])

onMounted(() => {
    CommentService.getAll()
        .then(v => {
            var data = v.data as CommentResponse[]
            comments.value = data
        })
        .catch(e => Logger.error('[lastdaysofeurope]', e))
})
</script>

<template>
    <div v-if="comments && comments.length > 0">
        <div v-for="comment in comments" :key="comment._id">
            {{ comment.content }}
            <p>{{ comment.time }}</p>
            <p>{{ comment.ip }}</p>
        </div>
    </div>
</template>
