<script setup lang="ts">
import {
    NSpace,
    NButton,
    NList,
    NListItem,
    NThing,
    NSpin,
    NEllipsis,
    NText,
    NPagination,
    NEmpty,
    NTag,
    NIcon,
    NTooltip,
    NModal,
    NForm,
    NFormItem,
    NGrid,
    NFormItemGi,
    NInput,
    NSwitch,
    NDynamicTags,
    NBackTop,
    FormInst,
    useMessage,
    NPopconfirm,
} from 'naive-ui'
import { useMain } from '../../store'
import {
    AddOutline as AddIcon,
    AttachOutline as AttachIcon,
    ChatboxEllipsesOutline as ChatboxIcon,
    TrashBinOutline as DeleteIcon,
    CreateOutline as EditIcon,
} from '@vicons/ionicons5'
import { ref, onMounted } from 'vue'
import {
    throttle,
    orderBy,
    isInArray,
    assignUndefined,
    uniqueArray,
    renderMarkdown,
} from '../../lib'
import type { ForumContent, ForumInner, ForumInnerKey, DataKey, UID } from '../../lib'

type EditableTextsContent = Pick<
    ForumContent,
    'text' | 'title' | 'tags' | 'disableInner' | 'responseIcon'
>

const props = withDefaults(
    defineProps<{
        sources: {
            forum: {
                getPages: (
                    page: number,
                    pageSize: number
                ) => Promise<{ value: ForumContent[]; total: number }>
                update: (key: DataKey, content: Partial<ForumContent>) => Promise<void>
                post: (content: Partial<ForumContent>) => Promise<void>
                delete: (key: DataKey) => Promise<void>
            }
            response?: {
                post: (from: UID, key: DataKey, inner?: number) => Promise<void>
                delete: (from: UID, key: DataKey, inner?: number) => Promise<void>
            }
            inner?: {
                delete: (key: DataKey, floor: number) => Promise<void>
                post: (key: DataKey, content: Partial<ForumInner>) => Promise<ForumInner>
            }
        }
        enableRespond: boolean
        enableInner: boolean
        enablePost: boolean
    }>(),
    {
        enableRespond: true,
        enableInner: true,
        enablePost: true,
    }
)

const store = useMain(),
    message = useMessage(),
    selfUID = store.uid
const commentRefDefault: { text: string } = { text: '' },
    postNewRefDefault: EditableTextsContent = {
        title: '',
        text: '',
        responseIcon: '👍',
        tags: [],
        disableInner: false,
    },
    postEditRefDefault: Partial<EditableTextsContent> = {}
const texts = ref<ForumContent[]>([]),
    loadingPosts = ref(false),
    loadingResponsible = ref(false),
    loadingPosting = ref(false),
    loadingCommenting = ref(false),
    loadingCommentDeleting = ref(false),
    loadingPostEditing = ref(false),
    loadingPostDeleting = ref(false),
    postDetailShowing = ref(false),
    newPostShowing = ref(false),
    editPostShowing = ref(false),
    newCommentShowing = ref(false),
    postDetailContent = ref<ForumContent>(),
    postEditContent = ref<ForumContent>(),
    commentContent = ref<ForumContent>(),
    commentToContent = ref<ForumInnerKey>(),
    commentRef = ref(commentRefDefault),
    postNewRef = ref(postNewRefDefault),
    postEditRef = ref(postEditRefDefault),
    commentForm = ref<FormInst | null>(null),
    postNewForm = ref<FormInst | null>(null),
    postEditForm = ref<FormInst | null>(null),
    pageCount = ref(0),
    pageCurrent = ref(1),
    pageSize = 10

onMounted(() => loadPosts())

const mapNumber = (input: number) => (input <= 0 ? '' : input.toString())

const loadPosts = () => {
    loadingPosts.value = true
    props.sources.forum
        .getPages(pageCurrent.value, pageSize)
        .then(val => {
            loadingPosts.value = false
            texts.value = orderBy(val.value, ['top', 'date'], ['desc', 'desc'])
            pageCount.value = Math.ceil(val.total / pageSize)
        })
        .catch(_ => {
            loadingPosts.value = false
            message.error('冷吟变热嘘 闲醉变闹醒')
        })
}

const loadComments = (post: ForumContent) =>
    orderBy(post.inners, ['top', 'date'], ['desc', 'asc']).filter(val => typeof val !== 'undefined')

const isResponsibled = (response: ForumContent['response']) => isInArray(response, selfUID)

const isCommented = (inners: ForumContent['inners']) =>
    isInArray(
        inners.filter(val => typeof val !== 'undefined').map(val => val.author),
        selfUID
    )

const isCommentReplied = (under: ForumContent, to: ForumInnerKey) =>
    isInArray(
        under.inners.filter(val => typeof val !== 'undefined').map(val => val.to),
        to
    )

const showPostDetailModal = (post: ForumContent) => {
    postDetailContent.value = post
    if (!postDetailContent.value) {
        postDetailShowing.value = false
        return
    }
    postDetailShowing.value = true
}

const showNewPostModal = () => (newPostShowing.value = true)

const showCommentModal = (target: ForumContent, to?: ForumInnerKey) => {
    commentContent.value = target
    commentToContent.value = to
    newCommentShowing.value = true
}

const showEditPostModal = (target: ForumContent) => {
    if (loadingPostEditing.value || editPostShowing.value) return
    postEditRef.value = postEditContent.value = target
    editPostShowing.value = true
}

const ensurePostData = <T extends EditableTextsContent | Partial<EditableTextsContent>>(
    data: T
): T => {
    data.tags = uniqueArray(data.tags)
    data.title = data.title?.trim()
    data.text = data.text?.trim()
    return data
}

const editPost = throttle((data: typeof postEditRef.value) => {
    if (!postEditRef.value || !postEditForm.value || !postEditContent.value) return
    postEditForm.value.validate(errs => {
        if (errs || !data.text) return
        var content: Partial<ForumContent> = {
            ...ensurePostData(data),
            author: selfUID,
        }
        content = assignUndefined(content, postEditContent.value)
        loadingPostEditing.value = true
        props.sources.forum
            .update(postEditContent.value!.key, content)
            .then(_ => {
                editPostShowing.value = false
                postEditRef.value = postEditRefDefault
                loadPosts()
                message.success('冷吟审视')
            })
            .catch(_ => message.error('审视失败'))
            .finally(() => (loadingPostEditing.value = false))
    })
}, 1450)

const newPost = throttle((data: typeof postNewRef.value) => {
    if (loadingPosting.value || !postNewForm.value) return
    postNewForm.value.validate(errs => {
        if (errs) return
        var content: Partial<ForumContent> = {
            ...ensurePostData(data),
            author: selfUID,
        }
        loadingPosting.value = true
        props.sources.forum
            .post(content)
            .then(_ => {
                newPostShowing.value = false
                postNewRef.value = postNewRefDefault
                loadPosts()
                message.success('冷吟发布')
            })
            .catch(_ => message.error('冷吟失败'))
            .finally(() => (loadingPosting.value = false))
    })
}, 1450)

const deletePost = throttle((key: DataKey) => {
    loadingPostDeleting.value = true
    props.sources.forum
        .delete(key)
        .then(_ => {
            loadPosts()
            message.success('冷吟放逐')
        })
        .catch(_ => message.success('它还想多待会儿'))
        .finally(() => (loadingPostDeleting.value = false))
}, 1450)

const respond = throttle((target: ForumContent, inner?: ForumInner) => {
    if (!props.enableRespond) return
    const innerIndex = inner?.response.findIndex(val => val === selfUID)
    const targetIndex = target.response.findIndex(val => val === selfUID)
    function update() {
        if (inner) {
            if (typeof innerIndex === 'number' && innerIndex >= 0)
                inner.response.splice(innerIndex, 1)
            else inner.response = inner.response.concat(selfUID)
        } else {
            if (targetIndex >= 0) target.response.splice(targetIndex, 1)
            else target.response = target.response.concat(selfUID)
        }
    }
    update()
    const request = () =>
        inner
            ? typeof innerIndex === 'number' && innerIndex >= 0
                ? props.sources.response?.delete(selfUID, target.key, inner.key)
                : props.sources.response?.post(selfUID, target.key, inner.key)
            : targetIndex >= 0
            ? props.sources.response?.delete(selfUID, target.key)
            : props.sources.response?.post(selfUID, target.key)
    request()?.catch(_ => message.error('反应失败'))
}, 1000)

const newComment = throttle((text: string, target: ForumContent, inner?: ForumInnerKey) => {
    if (!props.enableInner) return
    if (!commentForm.value) return
    commentForm.value.validate(errs => {
        if (errs) return
        if (!target || !text || text.length <= 0) return
        loadingCommenting.value = true
        props.sources.inner
            ?.post(target.key, {
                text,
                to: inner,
                author: selfUID,
                response: [],
                disableInner: false,
            })
            .then(inner => {
                newCommentShowing.value = false
                commentRef.value = commentRefDefault
                message.success('闲醉成功')
                target.inners[inner.key] = inner
            })
            .catch(_ => message.error('闲醉..拒绝了你'))
            .finally(() => (loadingCommenting.value = false))
    })
}, 1450)

const deleteComment = throttle((inner: ForumInnerKey, key: DataKey) => {
    var target = texts.value.find(val => val.key === key)
    if (!target) {
        loadPosts()
        return
    }
    var index = target.inners
        .filter(val => typeof val !== 'undefined')
        .findIndex(val => val.key === inner)
    target.inners.splice(index, 1)
    loadingCommentDeleting.value = true
    props.sources.inner
        ?.delete(key, index)
        .then(_ => message.success('闲醉放逐咯'))
        .catch(_ => message.error('未能成功放逐..'))
        .finally(() => (loadingCommentDeleting.value = false))
}, 1450)
</script>

<template>
    <NSpace vertical justify="space-between" align="stretch">
        <NSpace justify="space-between">
            <NSpace>
                <NButton
                    :disabled="!props.enablePost"
                    type="success"
                    @click="showNewPostModal()"
                    size="small"
                    :loading="loadingPosts"
                >
                    <template #icon>
                        <NIcon>
                            <AddIcon />
                        </NIcon>
                    </template>
                    冷吟
                </NButton>
            </NSpace>
            <NPagination
                :disabled="loadingPosts"
                simple
                v-model:page="pageCurrent"
                :page-count="pageCount"
                @update:page="loadPosts()"
            />
        </NSpace>
        <NSpin :show="loadingPosts" style="user-select: none">
            <NList hoverable clickable v-if="texts.length > 0">
                <NListItem
                    v-for="item in texts"
                    :key="item.key"
                    @click="showPostDetailModal(item)"
                    :id="`post-${item.key}`"
                >
                    <NThing>
                        <template #header>
                            <NEllipsis
                                style="word-break: break-all"
                                line-clamp="2"
                                :tooltip="false"
                            >
                                {{ item.title }}
                            </NEllipsis>
                        </template>
                        <template #avatar v-if="item.top">
                            <NIcon size="25" title="已置顶">
                                <AttachIcon />
                            </NIcon>
                        </template>
                        <template #description v-if="item.tags.length > 0">
                            <NSpace>
                                <NTag
                                    :bordered="false"
                                    size="small"
                                    type="info"
                                    v-for="(tag, index) in item.tags"
                                    :key="index"
                                >
                                    {{ tag }}
                                </NTag>
                            </NSpace>
                        </template>
                        <NText depth="2" style="max-width: 100%; word-break: break-all">
                            <NEllipsis line-clamp="2" :tooltip="false">
                                {{ item.text }}
                            </NEllipsis>
                        </NText>
                        <template #header-extra>
                            <NText depth="3">{{ item.key }}</NText>
                        </template>
                        <template #footer>
                            <NSpace :size="2">
                                <span v-if="item.author">
                                    自
                                    <NText depth="3" :underline="selfUID === item.author">
                                        {{ item.author }}
                                    </NText>
                                </span>
                                <span v-if="item.date">
                                    于
                                    <NText depth="3">{{ item.date.toLocaleString() }}</NText>
                                </span>
                            </NSpace>
                        </template>
                        <template #action>
                            <NSpace justify="space-between">
                                <NSpace>
                                    <NTooltip
                                        v-if="props.enableRespond && item.response"
                                        trigger="hover"
                                        :disabled="item.response.length == 0"
                                    >
                                        <NEllipsis :tooltip="false" style="max-width: 10rem">
                                            {{ item.response.join(',') }}
                                        </NEllipsis>
                                        <template #trigger>
                                            <NButton
                                                :loading="loadingResponsible"
                                                :bordered="false"
                                                size="small"
                                                type="info"
                                                :ghost="!isResponsibled(item.response)"
                                                @click.stop="respond(item)"
                                            >
                                                <template #icon>
                                                    {{
                                                        item.responseIcon ||
                                                        postNewRefDefault.responseIcon
                                                    }}
                                                </template>
                                                {{ mapNumber(item.response.length) }}
                                            </NButton>
                                        </template>
                                    </NTooltip>
                                    <NTooltip
                                        trigger="hover"
                                        :disabled="item.inners.length == 0"
                                        v-if="props.enableInner && item.inners"
                                    >
                                        <NEllipsis :tooltip="false" style="max-width: 10rem">
                                            {{ item.inners.map(val => val.author).join(',') }}
                                        </NEllipsis>
                                        <template #trigger>
                                            <NButton
                                                :loading="loadingCommenting"
                                                :bordered="false"
                                                size="small"
                                                type="info"
                                                :ghost="!isCommented(item.inners)"
                                                :disabled="item.disableInner"
                                                @click.stop="showCommentModal(item)"
                                            >
                                                <template #icon>
                                                    <NIcon>
                                                        <ChatboxIcon />
                                                    </NIcon>
                                                </template>
                                                {{ mapNumber(item.inners.length) }}
                                            </NButton>
                                        </template>
                                    </NTooltip>
                                </NSpace>
                                <NSpace v-if="selfUID === item.author">
                                    <NButton
                                        size="small"
                                        type="warning"
                                        @click.stop="showEditPostModal(item)"
                                        :loading="loadingPostEditing"
                                    >
                                        <template #icon>
                                            <NIcon>
                                                <EditIcon />
                                            </NIcon>
                                        </template>
                                    </NButton>
                                    <NButton
                                        size="small"
                                        type="error"
                                        @click.stop="deletePost(item.key)"
                                        :loading="loadingPostDeleting"
                                    >
                                        <template #icon>
                                            <NIcon>
                                                <DeleteIcon />
                                            </NIcon>
                                        </template>
                                    </NButton>
                                </NSpace>
                            </NSpace>
                        </template>
                    </NThing>
                </NListItem>
            </NList>
            <NEmpty v-else> 冷吟且闲醉 </NEmpty>
            <template #description> 闲醉闲醉闲醉闲醉闲醉闲醉... </template>
        </NSpin>
    </NSpace>
    <NModal
        id="postDetailModal"
        v-model:show="postDetailShowing"
        closable
        :mask-closable="false"
        preset="card"
        :segmented="{ content: 'soft', footer: 'soft' }"
        transform-origin="center"
        :title="postDetailContent?.title"
    >
        <template #header-extra>
            <NText depth="3">{{ postDetailContent?.key }}</NText>
        </template>
        <div class="markdown-root" v-html="renderMarkdown(postDetailContent?.text || '')"></div>
        <template #footer>
            <NSpace vertical>
                <NSpace :size="2">
                    <span v-if="postDetailContent?.author">
                        自
                        <NText depth="3" :underline="selfUID === postDetailContent?.author">
                            {{ postDetailContent?.author }}
                        </NText>
                    </span>
                    <span v-if="postDetailContent?.date">
                        于
                        <NText depth="3">{{ postDetailContent?.date.toLocaleString() }}</NText>
                    </span>
                </NSpace>
                <NSpace v-if="postDetailContent && postDetailContent.tags.length > 0">
                    <NTag
                        :bordered="false"
                        size="small"
                        type="info"
                        v-for="(tag, index) in postDetailContent!.tags"
                        :key="index"
                    >
                        {{ tag.trim() }}
                    </NTag>
                </NSpace>
                <NSpace justify="space-between">
                    <NSpace>
                        <NTooltip
                            v-if="
                                props.enableRespond &&
                                postDetailContent &&
                                postDetailContent.response
                            "
                            trigger="hover"
                            :disabled="postDetailContent?.response.length == 0"
                        >
                            <NEllipsis :tooltip="false" style="max-width: 10rem">
                                {{ postDetailContent?.response.join(',') }}
                            </NEllipsis>
                            <template #trigger>
                                <NButton
                                    :loading="loadingResponsible"
                                    :bordered="false"
                                    size="small"
                                    type="info"
                                    :ghost="!isResponsibled(postDetailContent?.response)"
                                    @click="respond(postDetailContent!)"
                                >
                                    <template #icon>
                                        {{
                                            postDetailContent?.responseIcon ||
                                            postNewRefDefault.responseIcon
                                        }}
                                    </template>
                                    {{ mapNumber(postDetailContent?.response.length) }}
                                </NButton>
                            </template>
                        </NTooltip>
                        <NTooltip
                            trigger="hover"
                            :disabled="postDetailContent?.inners.length == 0"
                            v-if="props.enableInner && postDetailContent?.inners"
                        >
                            <NEllipsis :tooltip="false" style="max-width: 10rem">
                                {{ postDetailContent?.inners.map(val => val.author).join(',') }}
                            </NEllipsis>
                            <template #trigger>
                                <NButton
                                    :bordered="false"
                                    size="small"
                                    type="info"
                                    :loading="loadingCommenting"
                                    :ghost="!isCommented(postDetailContent?.inners)"
                                    :disabled="postDetailContent?.disableInner === true"
                                    @click="showCommentModal(postDetailContent!)"
                                >
                                    <template #icon>
                                        <NIcon>
                                            <ChatboxIcon />
                                        </NIcon>
                                    </template>
                                    {{
                                        mapNumber(
                                            postDetailContent?.inners.filter(
                                                val => typeof val !== 'undefined'
                                            ).length
                                        )
                                    }}
                                </NButton>
                            </template>
                        </NTooltip>
                    </NSpace>
                    <NSpace v-if="selfUID === postDetailContent?.author">
                        <NButton
                            size="small"
                            type="warning"
                            @click="showEditPostModal(postDetailContent!)"
                            :loading="loadingPostEditing"
                        >
                            <template #icon>
                                <NIcon>
                                    <EditIcon />
                                </NIcon>
                            </template>
                        </NButton>
                        <NPopconfirm
                            positive-text="对"
                            negative-text="不"
                            @positive-click="deletePost(postDetailContent?.key!)"
                        >
                            <template #trigger>
                                <NButton size="small" type="error" :loading="loadingPostDeleting">
                                    <template #icon>
                                        <NIcon>
                                            <DeleteIcon />
                                        </NIcon>
                                    </template>
                                </NButton>
                            </template>
                            确定?
                        </NPopconfirm>
                    </NSpace>
                </NSpace>
            </NSpace>
        </template>
        <template #action v-if="postDetailContent && postDetailContent.inners.length > 0">
            <NList hoverable>
                <NListItem
                    v-for="inner in loadComments(postDetailContent!)"
                    :key="inner.key"
                    :id="`${postDetailContent!.key}-inner-${inner.key}`"
                    @click=""
                >
                    <NThing>
                        <template #avatar v-if="inner.top">
                            <NIcon size="25">
                                <AttachIcon />
                            </NIcon>
                        </template>
                        <template #header>
                            <NSpace :size="2">
                                <span
                                    v-if="inner.to"
                                    v-anchor="`${postDetailContent!.key}-inner-${inner.key}`"
                                >
                                    向
                                    <NText depth="3">#{{ inner.to }}</NText>
                                </span>
                                <span v-if="inner.author">
                                    自
                                    <NText depth="3" :underline="selfUID === inner.author">
                                        {{ inner.author }}
                                    </NText>
                                </span>
                                <span v-if="inner.date">
                                    于
                                    <NText depth="3">{{ inner.date }}</NText>
                                </span>
                            </NSpace>
                        </template>
                        <template #header-extra>
                            <NText depth="3">#{{ inner.key }}</NText>
                        </template>
                        <div class="markdown-root" v-html="renderMarkdown(inner.text)"></div>
                        <template #action>
                            <NSpace justify="space-between">
                                <NSpace>
                                    <NTooltip
                                        v-if="inner.response"
                                        trigger="hover"
                                        :disabled="inner.response.length == 0"
                                    >
                                        <NEllipsis :tooltip="false" style="max-width: 10rem">
                                            {{ inner.response.join(',') }}
                                        </NEllipsis>
                                        <template #trigger>
                                            <NButton
                                                :loading="loadingResponsible"
                                                :bordered="false"
                                                size="small"
                                                type="info"
                                                :ghost="!isResponsibled(inner.response)"
                                                @click.stop="respond(postDetailContent!, inner)"
                                            >
                                                <template #icon>
                                                    {{
                                                        inner.responseIcon ||
                                                        postNewRefDefault.responseIcon
                                                    }}
                                                </template>
                                                {{ mapNumber(inner.response.length) }}
                                            </NButton>
                                        </template>
                                    </NTooltip>
                                    <NButton
                                        :bordered="false"
                                        size="small"
                                        :loading="loadingCommenting"
                                        type="info"
                                        :ghost="
                                            !isCommentReplied(postDetailContent!, inner.key)
                                        "
                                        :disabled="inner.disableInner === true"
                                        @click.stop="
                                            showCommentModal(postDetailContent!, inner.key)
                                        "
                                    >
                                        <template #icon>
                                            <NIcon>
                                                <ChatboxIcon />
                                            </NIcon>
                                        </template>
                                        {{
                                            mapNumber(
                                                postDetailContent?.inners.filter(
                                                    val =>
                                                        typeof val !== 'undefined' &&
                                                        val.to === inner.key
                                                ).length ?? 0
                                            )
                                        }}
                                    </NButton>
                                </NSpace>
                                <NSpace
                                    v-if="
                                        selfUID === inner.author ||
                                        selfUID === postDetailContent?.author
                                    "
                                >
                                    <NPopconfirm
                                        positive-text="对"
                                        negative-text="不"
                                        @positive-click.stop="
                                            deleteComment(inner.key, postDetailContent?.key!)
                                        "
                                    >
                                        <template #trigger>
                                            <NButton
                                                :loading="loadingCommentDeleting"
                                                size="small"
                                                type="error"
                                                @click.stop
                                            >
                                                <template #icon>
                                                    <NIcon>
                                                        <DeleteIcon />
                                                    </NIcon>
                                                </template>
                                            </NButton>
                                        </template>
                                        确定?
                                    </NPopconfirm>
                                </NSpace>
                            </NSpace>
                        </template>
                    </NThing>
                </NListItem>
            </NList>
        </template>
    </NModal>
    <NModal
        id="newPostModal"
        v-model:show="newPostShowing"
        closable
        :mask-closable="false"
        preset="card"
        title="冷吟"
        transform-origin="center"
    >
        <NSpin :show="loadingPosting">
            <NForm
                ref="postNewForm"
                :model="postNewRef"
                :rules="{
                    title: [{ required: true }],
                    text: [{ required: true }],
                    resicon: [{ required: false }],
                    tags: [{ required: false }],
                    baninner: [{ required: false }],
                }"
            >
                <NGrid cols="2" x-gap="24" responsive="screen" item-responsive>
                    <NFormItemGi span="1" path="title" label="标题">
                        <NInput
                            v-model:value="postNewRef.title"
                            placeholder="冷吟概要"
                            clearable
                            minlength="1"
                            maxlength="25"
                            show-count
                        />
                    </NFormItemGi>
                    <NFormItemGi span="1" path="tags" label="标签">
                        <NDynamicTags v-model:value="postNewRef.tags" :max="5" />
                    </NFormItemGi>
                    <NFormItemGi span="1" path="resicon" label="反应">
                        <NInput
                            v-model:value="postNewRef.responseIcon"
                            :placeholder="postNewRefDefault.responseIcon"
                            :default-value="postNewRefDefault.responseIcon"
                            clearable
                            maxlength="5"
                            :count-graphemes="
                                val =>
                                    /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g.test(val)
                                        ? 1
                                        : val.length
                            "
                        />
                    </NFormItemGi>
                    <NFormItemGi span="1" path="baninner" label="禁评">
                        <NSwitch v-model:value="postNewRef.disableInner" :default-value="false" />
                    </NFormItemGi>
                    <NFormItemGi span="2" path="text" label="内容">
                        <NInput
                            v-model:value="postNewRef.text"
                            type="textarea"
                            placeholder="冷吟闲醉"
                            clearable
                            autofocus
                            :autosize="{ minRows: 3 }"
                            minlength="1"
                            maxlength="4514"
                            show-count
                        />
                    </NFormItemGi>
                </NGrid>
                <NSpace justify="end">
                    <NButton
                        @click="newPost(postNewRef)"
                        type="success"
                        :loading="loadingPosting"
                        ghost
                    >
                        吟出
                    </NButton>
                </NSpace>
            </NForm>
        </NSpin>
    </NModal>
    <NModal
        id="editPostModal"
        v-model:show="editPostShowing"
        closable
        :mask-closable="false"
        preset="card"
        transform-origin="center"
        title="审视"
    >
        <NSpin :show="loadingPostEditing">
            <NForm
                ref="postEditForm"
                :model="postEditRef"
                :rules="{
                    title: [{ required: true }],
                    text: [{ required: true }],
                    resicon: [{ required: false }],
                    tags: [{ required: false }],
                    baninner: [{ required: false }],
                }"
            >
                <NGrid cols="2" x-gap="24" responsive="screen" item-responsive>
                    <NFormItemGi span="1" path="title" label="标题">
                        <NInput
                            v-model:value="postEditRef.title"
                            placeholder="冷吟概要"
                            clearable
                            maxlength="25"
                            show-count
                        />
                    </NFormItemGi>
                    <NFormItemGi span="1" path="tags" label="标签">
                        <NDynamicTags v-model:value="postEditRef.tags" :max="5" />
                    </NFormItemGi>
                    <NFormItemGi span="1" path="resicon" label="反应">
                        <NInput
                            v-model:value="postEditRef.responseIcon"
                            :placeholder="postNewRefDefault.responseIcon"
                            :default-value="postNewRefDefault.responseIcon"
                            clearable
                            maxlength="5"
                            :count-graphemes="
                                val =>
                                    /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g.test(val)
                                        ? 1
                                        : val.length
                            "
                        />
                    </NFormItemGi>
                    <NFormItemGi span="1" path="baninner" label="禁评">
                        <NSwitch v-model:value="postEditRef.disableInner" :default-value="false" />
                    </NFormItemGi>
                    <NFormItemGi span="2" path="text" label="内容">
                        <NInput
                            v-model:value="postEditRef.text"
                            type="textarea"
                            placeholder="冷吟闲醉"
                            clearable
                            autofocus
                            :autosize="{ minRows: 3 }"
                            maxlength="4514"
                            show-count
                        />
                    </NFormItemGi>
                </NGrid>
                <NSpace justify="end">
                    <NButton
                        @click="editPost(postEditRef)"
                        type="success"
                        :loading="loadingPostEditing"
                        ghost
                    >
                        重吟
                    </NButton>
                </NSpace>
            </NForm>
        </NSpin>
    </NModal>
    <NModal
        id="commentModal"
        v-model:show="newCommentShowing"
        closable
        :mask-closable="false"
        preset="card"
        transform-origin="center"
        title="闲醉"
    >
        <template #header-extra>
            <NSpace :size="2">
                <span>
                    为<NText depth="3">{{ commentContent?.key }}</NText>
                </span>
                <span v-if="commentToContent">
                    向<NText depth="3">#{{ commentToContent }}</NText>
                </span>
            </NSpace>
        </template>
        <NForm
            ref="commentForm"
            :model="commentRef"
            :rules="{
                text: [
                    {
                        required: true,
                        message: '我们真的很需要这个框里的内容',
                        trigger: ['focus', 'input'],
                    },
                ],
            }"
        >
            <NFormItem path="text" :label="`自${selfUID}`">
                <NInput
                    v-model:value="commentRef.text"
                    placeholder="闲醉于此"
                    type="textarea"
                    :autosize="{ minRows: 3 }"
                    autofocus
                    clearable
                    show-count
                    minlength="1"
                    maxlength="1145"
                />
            </NFormItem>
            <NSpace justify="end">
                <NButton
                    type="success"
                    ghost
                    @click="newComment(commentRef.text, commentContent!, commentToContent)"
                >
                    闲醉!
                </NButton>
            </NSpace>
        </NForm>
    </NModal>
    <NBackTop />
</template>

<style lang="less">
.markdown-root {
    img {
        overflow: hidden;
        max-width: 100%;
    }
    blockquote {
        opacity: 0.85;
        padding: 0.1em 0.75em;
        margin: 0;
        background-color: var(--n-color-popover);
        border-left: 0.25em solid var(--n-color-target);
        border-radius: 5px;
        transition: opacity 0.25s ease;
        &:hover,
        &:focus {
            opacity: 1;
        }
    }
}
</style>
