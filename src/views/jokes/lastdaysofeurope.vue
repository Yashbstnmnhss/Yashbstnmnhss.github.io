<route lang="yaml">
name: lastdaysofeurope
</route>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
    NH1,
    NList,
    NListItem,
    NCollapse,
    NCollapseItem,
    NInput,
    NButton,
    NSpace,
    useMessage,
    NBackTop,
    NSpin,
} from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { CommentResponse } from '../../lib/api/types'
import { CommentService, ExternalService } from '../../lib/api/services'
import Logger from '../../lib/utils/logger'
import { choice as choi } from '../../lib/utils'

const message = useMessage()
const i18n = useI18n()

const loadingComments = ref(false)
const comments = ref<CommentResponse[]>([])

const postContent = ref<string>('')
const postLoading = ref<boolean>(false)
const postStatus = ref<string>()

const commands: Record<string, Function> = {
    delete: (id: string) => {
        Logger.log('deleting comment', id)
        var r = ''
        CommentService.delete(id)
            .then(() => (r = `success ${id}`))
            .catch(e => message.error(e))
        return
    },
    hentai: () => window.open('https://jmcomic.asia/'),
    choice: (i: any[]) => choi(i),
    s: (s: string) => document.querySelector(s),
    ss: (s: string) => document.querySelectorAll(s),
    ask: (c: any) => {
        message.info(c)
        return commands.ask
    },
}

const addComment = () => {
    postStatus.value = undefined

    if (postLoading.value) return
    if (!postContent.value) {
        postStatus.value = 'warning'
        return
    }

    postContent.value = postContent.value.trim()
    postLoading.value = true

    if (
        postContent.value.startsWith('/god') ||
        postContent.value.startsWith('/神明啊') ||
        postContent.value.startsWith('#god')
    ) {
        var c = postContent.value.slice(4).trim()
        if (!c) {
            postStatus.value = 'warning'
            postLoading.value = false
            return
        }
        Logger.log('[LDOE]', 'this is eval()', c)
        postLoading.value = true
        try {
            var r = eval(`
                (function() {
                const $ = commands
                    // 我想抽艹神啊啊啊
                    ${c}
                })()
            `)
            if (r) message.info(r)
            return
        } catch (e) {
            Logger.error('[LDOE]', e, '错错错错错误误误误误!?')
            postStatus.value = 'warning'
            postLoading.value = false
            return
        } finally {
            postLoading.value = false
            postStatus.value = undefined
        }
    }

    var ip: string = 'unknown'
    ExternalService.getIp()
        .then(response => {
            ip = response.data.pro
        })
        .catch(() => {
            ip = 'UNKNOWN'
        })

    CommentService.postNew({
        content: postContent.value,
        time: new Date(),
        ip: ip,
    })
        .then(() => {
            postContent.value = ''
            postLoading.value = false
            message.success(i18n.t('views.jokes.lastdaysofeurope.post-success'))
        })
        .catch(e => {
            postStatus.value = 'error'
            postLoading.value = false
            message.error(`THE END IS NEVER ${e.message}`)
        })
}

onMounted(() => {
    loadingComments.value = true
    CommentService.getAll()
        .then(v => {
            var data = v.data as CommentResponse[]
            comments.value = data
            loadingComments.value = false
        })
        .catch(e => {
            message.error(`The End Is Never`)
            Logger.error('[lastdaysofeurope]', e)
            loadingComments.value = false
        })
})
</script>

<template>
    <n-h1 prefix="bar">Last Days Of Europe</n-h1>
    <n-collapse arrow-placement="right">
        <n-collapse-item :title="$t('views.jokes.lastdaysofeurope.post-title')">
            <n-space vertical class="bslang-emoji">
                <n-input
                    :status="postStatus as any"
                    :disabled="postLoading"
                    v-model:value="postContent"
                    type="textarea"
                    :autosize="{
                        minRows: 3,
                    }"
                    maxlength="200"
                    show-count
                    placeholder="THE NEW ORDER..."
                />
                <n-button type="primary" ghost @click="addComment()" :loading="postLoading">
                    {{ $t('views.jokes.lastdaysofeurope.post-button') }}
                </n-button>
            </n-space>
        </n-collapse-item>
    </n-collapse>
    <n-spin size="large" :show="loadingComments">
        <n-list v-if="comments && comments.length > 0">
            <n-list-item v-for="comment in comments" :key="comment.id">
                <p class="bslang-emoji">
                    {{ comment.content || 'THE NEW ORDER - LAST DAYS OF EUROPE' }}
                </p>
                <small>
                    <span>
                        {{ comment.ip || 'Kaedehara Kazuha' }}
                    </span>
                    -
                    <span>
                        {{ comment.time?.toLocaleString() || 'Hu Tao' }}
                    </span>
                    -
                    <span>
                        {{ comment.id }}
                    </span>
                </small>
            </n-list-item>
        </n-list>
    </n-spin>
    <n-back-top />
</template>
