<script setup lang="ts">
import {
    NButton,
    NButtonGroup,
    NSpace,
    NIcon
} from 'naive-ui'
import {  
    LinkOutline,
    LogoGithub,
    LogoDiscord
} from "@vicons/ionicons5"
</script>

<template>
    <n-space justify="center">
        <n-button-group>
            <n-button tag="a" type="primary" href="https://yashbstnmnhss.github.io">
                <template #icon>
                    <n-icon>
                        <link-outline />
                    </n-icon>
                </template>
                <span>{{ $t('components.OtherLinks.mainSite') }}</span>
            </n-button>
            <n-button tag="a" type="primary" href="https://yashbstnmnhss.vercel.app">
                <template #icon>
                    <n-icon>
                        <link-outline />
                    </n-icon>
                </template>
                <span>{{ $t('components.OtherLinks.fasterSite') }}</span>
            </n-button>
            <n-button tag="a" type="info" href="https://github.com/Yashbstnmnhss/yashbstnmnhss.github.io">
                <template #icon>
                    <n-icon>
                        <logo-github />
                    </n-icon>
                </template>
                <span>Github</span>
            </n-button>
            <n-button tag="a" type="info" href="https://discord.gg/RFMEfAB7nD">
                <template #icon>
                    <n-icon>
                        <logo-discord />
                    </n-icon>
                </template>
                <span>Discord</span>
            </n-button>
        </n-button-group>
    </n-space>
</template>