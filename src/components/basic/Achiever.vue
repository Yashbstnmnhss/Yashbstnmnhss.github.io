<script setup lang="ts">
import { provide, h, onMounted } from 'vue'
import { useMain } from '../../store'
import { useNotification } from 'naive-ui'
import { useTexta, Logger, random, getAchievements, ACHIEVER_KEY } from '../../lib'
import type { Achievement, Achievements, AchieverInst } from '../../lib/types'

const store = useMain()
const texta = useTexta()
const toast = useNotification()

var hadAchievementKeys: string[] = []

onMounted(() => {
    getAchievements()
    hadAchievementKeys = store.achievements
})

const methods: AchieverInst = {
    isAchieved: (key: string) => hadAchievementKeys.includes(key),
    isRequirementsMet: (item: Achievement) => {
        if (item.requirements) {
            if (item.requirements.length > 0) {
                if (item.requirements.every(methods.isAchieved)) return true
                Logger.log('[Achiever]', 'Requirements not met', item.title, item.requirements)
                return false
            }
            return true
        }
        return false
    },
    achieve: (
        key: string,
        options = {
            toast: true,
            save: true,
            ignoreProbability: false,
        }
    ) => {
        const achievement = getAchievements()[key]
        if (!achievement) {
            Logger.error('[Achiever]', 'Achievement not found', key)
            return
        }

        if (methods.isAchieved(key)) {
            if (achievement.next) {
                methods.achieve(achievement.next)
                return
            }
            Logger.log('[Achiever]', 'Already achieved', key)
            return
        }

        if (!methods.isRequirementsMet(achievement)) return

        if (!options.ignoreProbability)
            if (random(0, 1) > (achievement.probability ?? 1)) {
                Logger.log('[Achiever]', 'Probability not met', key, achievement.probability)
                return
            }

        Logger.log('[Achiever]', 'Achieved', key)

        if (options.save) {
            hadAchievementKeys.push(key)
            store.achievements = hadAchievementKeys
        }
        if (options.toast) methods.showToast(achievement)
    },
    showToast: (item: Achievement) => {
        toast.create({
            title: texta.get(`achievements.${item.title ? item.title : 'unknownTitle'}`),
            description: texta.get(
                `achievements.${item.description ? item.description : 'unknownDescription'}`
            ),
            meta: item.type === 'fantastic' ? 'wow~ ⊙o⊙' : '',
            duration: item.duration ?? 5000,
            content:
                item.type === 'fantastic'
                    ? () =>
                          h(
                              'span',
                              {
                                  style: {
                                      fontSize: '2em',
                                      color: '#00ff00',
                                  },
                              },
                              '特特特'
                          )
                    : undefined,
        })
    },
}

provide(ACHIEVER_KEY, methods)
</script>

<template>
    <slot />
</template>
