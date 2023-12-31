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
import { DataTableColumns, NBackTop } from 'naive-ui'
import { NH1, NDataTable, NTag, NButton, NModal } from 'naive-ui'
import { getAllSayings } from '../../lib/functions/sayings'
import { useTexta } from '../../lib/functions/texta'
import SayingPanel from '../../components/models/SayingPanel.vue'

const texta = useTexta()
const showModal = ref(false),
    modalContent = ref<RowData>()
const showDialog = (data: RowData) => {
    modalContent.value = data
    showModal.value = true
}

type RowData = {
    title: string
    author: string
    text: string
    tags: string[]
}
const sayings = getAllSayings()

const data: RowData[] = Object.values(sayings).flatMap(saying => {
    return Object.values(saying).map(val => {
        return {
            title: val.title ?? '',
            author: val.author ?? '',
            tags: val.tags ?? [],
            text: val.text,
        }
    })
})
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
        resizable: true,
        minWidth: 50,
    },

    {
        title: '',
        key: 'actions',
        render(row) {
            return [
                h(
                    NButton,
                    {
                        type: 'info',
                        ghost: true,
                        size: 'small',
                        onClick: () => showDialog(row),
                    },
                    { default: () => '查看' }
                ),
            ]
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
        resizable: true,
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
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title: '字数',
        key: 'words',
        align: 'right',
        render(row) {
            return row.text.length
        },
        sorter(a, b) {
            return a.text.length - b.text.length
        },
    },
]

const columns = createColumns()
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'documents']) }}</NH1>

    <NDataTable size="small" :columns="columns" :data="data" />
    <NModal
        v-model:show="showModal"
        closable
        :mask-closable="false"
        preset="card"
        :segmented="{ content: 'soft', footer: 'soft' }"
        transform-origin="mouse"
        :title="
            $texta.get(['sayings', modalContent?.author || '', modalContent?.title || '']) ||
            modalContent?.title
        "
    >
        <SayingPanel
            style="max-width: 100%"
            v-if="modalContent"
            :author="modalContent.author || ''"
            :target="modalContent.title || ''"
        />
    </NModal>
    <NBackTop />
</template>
