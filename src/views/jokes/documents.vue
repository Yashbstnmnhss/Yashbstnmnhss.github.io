<route lang="yaml">
name: documents
meta:
    keepAlive: false
    menu:
        for: jokes
        key: documents
        icon: docText
        group: footer
</route>

<script setup lang="ts">
import { h, ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NH1, NDataTable, NTag, NButton, NModal, NInput, NInputGroup, useMessage } from 'naive-ui'
import { getAllSayings } from '../../lib/functions/sayings'
import { useTexta } from '../../lib/functions/texta'
import SayingPanel from '../../components/models/SayingPanel.vue'

const texta = useTexta(),
    message = useMessage()
const showModal = ref(false),
    modalContent = ref<RowData>()

type RowData = {
    title: string
    author: string
    text: string
    tags: string[]
}

const data: RowData[] = Object.values(getAllSayings())
    .map(saying => {
        return Object.values(saying).map(val => {
            return {
                title: val.title ?? '',
                author: val.author ?? '',
                tags: val.tags ?? [],
                text: val.text,
            }
        })
    })
    .flat(1)
const createColumns = (): DataTableColumns<RowData> => [
    {
        title: '标题',
        key: 'title',
        render(row) {
            return h(
                'span',
                {},
                { default: () => texta.get(['sayings', row.author, row.title]) || row.title }
            )
        },
    },
    {
        title: '作者',
        key: 'author',
        render(row) {
            return h(
                'span',
                {},
                { default: () => texta.get(['sayings', row.author, '_author']) || row.author }
            )
        },
        filterOptions: Object.keys(getAllSayings()).map(val => ({
            label: texta.get(['sayings', val, '_author']) || val,
            value: val,
        })),
        filter(option, row) {
            return row.author === option
        },
    },
    {
        title: '标签',
        key: 'tags',
        render(row) {
            const tags = row.tags.map(tagKey => {
                return h(
                    NTag,
                    {
                        style: {
                            marginRight: '6px',
                        },
                        type: 'info',
                        bordered: false,
                    },
                    {
                        default: () => tagKey,
                    }
                )
            })
            return tags
        },
    },
    {
        title() {
            return `共收录: ${data.length}`
        },
        key: 'actions',
        render(row) {
            return [
                h(
                    NButton,
                    {
                        type: 'success',
                        ghost: true,
                        size: 'small',
                        onClick: () => {
                            try {
                                navigator.clipboard.writeText(row.text)
                                message.success('复制成功')
                            } catch {
                                message.error('复制失败')
                            }
                        },

                        style: {
                            marginRight: '6px',
                        },
                    },
                    { default: () => '复制' }
                ),
                h(
                    NButton,
                    {
                        type: 'info',
                        ghost: true,
                        size: 'small',
                        onClick: () => {
                            modalContent.value = row
                            showModal.value = !showModal.value
                        },
                    },
                    { default: () => '查看' }
                ),
            ]
        },
    },
]

const columns = createColumns()
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'documents']) }}</NH1>
    <NDataTable :columns="columns" :data="data"></NDataTable>
    <NModal
        v-model:show="showModal"
        closable
        :mask-closable="false"
        preset="card"
        :segmented="{ content: 'soft', footer: 'soft' }"
        transform-origin="center"
        :title="
            $texta.get(['sayings', modalContent?.author || '', modalContent?.title || '']) ||
            modalContent?.title
        "
    >
        <SayingPanel
            v-if="modalContent"
            :author="modalContent.author || ''"
            :target="modalContent.title || ''"
        />
    </NModal>
</template>
