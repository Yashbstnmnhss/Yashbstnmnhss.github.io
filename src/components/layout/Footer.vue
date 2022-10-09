<script setup lang="ts">
import {
    NSpace,
    NPopover,
    NButton,
    NIcon
} from 'naive-ui'
import {
    LinkOutline as LinkIcon,
    LanguageOutline as LanguageIcon
} from '@vicons/ionicons5'
import ConfigSelector from './ConfigSelector.vue'
import OtherLinks from './OtherLinks.vue'
</script>

<template>
    <n-space justify="center">
        <n-popover trigger="hover">
            <template #trigger>
                <n-button>
                    <template #icon>
                        <n-icon>
                            <LinkIcon />
                        </n-icon>
                    </template>
                    {{ $t('basic.links') }}
                </n-button>
            </template>
            <OtherLinks />
        </n-popover>
        <n-popover trigger="hover">
            <template #trigger>
                <n-button>
                    <template #icon>
                        <n-icon>
                            <LanguageIcon />
                        </n-icon>
                    </template>
                    {{ $t('basic.langAndTheme') }}
                </n-button>
            </template>
            <ConfigSelector />
        </n-popover>
    </n-space>
</template>