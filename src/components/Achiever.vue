<script setup lang="ts">
import { provide, h, onMounted } from 'vue'
import { useStore, commit } from '../store'
import { useI18n } from 'vue-i18n'
import { useNotification } from 'naive-ui'
import {
    achievements,
    achieverKey,
    Achievement,
    AchieverInst
} from '../composables/achievements'
import Logger from '../utils/logger'
import fantasticAudio from '../assets/sounds/achievement/fantastic.ogg'

const store = useStore()
const { t } = useI18n()
const toast = useNotification()

var hadAchievementKeys: string[] = []

onMounted(() => {
    hadAchievementKeys = store.state.achievements
})

const methods: AchieverInst = {
    isAchieved: (key: string) => {
        return hadAchievementKeys.includes(key)
    },
    isRequirementsMet: (item: Achievement) => {
        if (item.requirements) {
            if (item.requirements.length > 0) {
                if (item.requirements.every(methods.isAchieved)) {
                    return true
                }
                Logger.log('[Achiever]', 'requirements not met', item.title, item.requirements)
                return false
            }
            return true
        }
        return false
    },
    achieve: (key: string, options = { 
        toast: true, 
        save: true, 
        ignoreProbability: false 
    }) => {
        const achievement = achievements[key]
        if (!achievement) {
            Logger.error('[Achiever]', 'achievement not found', key)
            return
        }

        if (methods.isAchieved(key)) {
            if (achievement.next) {
                methods.achieve(achievement.next)
                return
            }
            Logger.log('[Achiever]' ,'already achieved', key)
            return
        } 

        if (!methods.isRequirementsMet(achievement)) {
            return
        }

        if (!options.ignoreProbability) {
            if (Math.random() > (achievement.probability ?? 1)) {
                Logger.log('[Achiever]', 'probability not met', key, achievement.probability)
                return
            }
        }

        Logger.log('[Achiever]' ,'achieve', key)
        
        if (options.save) {
            Logger.debug(typeof hadAchievementKeys)
            hadAchievementKeys.push(key)
            commit('achievements', hadAchievementKeys)
        }
        if (options.toast)
            methods.showToast(achievement)
    },
    showToast: (item: Achievement) => {
        var n = toast.create({
            title: t(item.title ? `achievements.${item.title}` : 'achievements.unknownTitle'),
            description: t(item.description ? `achievements.${item.description}` : 'achievements.unknownDescription'),
            meta: item.type === 'fantastic' ? 'wow~ ⊙o⊙' : '',
            duration: item.duration ?? 5000,
            content: item.type === 'fantastic' ? () => h('audio', {
                src: fantasticAudio,
                autoplay: true,
                muted: true,
                controls: true,
                id: 'fantastic-audio'
            }) : undefined
        })
        n.onAfterEnter = () => {
            var audio = document.getElementById('fantastic-audio') as HTMLAudioElement
            if (audio) {
                audio.addEventListener('ended', () => {
                    n.destroy()
                })
                audio.play()
            }
        }
    }
}

provide(achieverKey, methods)
</script>

<template>
    <slot />
</template>