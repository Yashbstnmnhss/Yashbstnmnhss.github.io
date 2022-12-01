import data from '@/assets/data/achievements.yaml'
import { Logger } from '../utils/logger'
import { createInjectionKey } from '../utils'
import { inject } from 'vue'
import { AchieverInst, Achievement, Achievements } from '../types'

export const achievements = getAchievements()
export function getAchievements(): Achievements {
    const achievements: Achievements = {}
    Object.keys(data).forEach(key => {
        var item = (data[key] || {}) as Achievement
        item.title = item.title || `${key}.title`
        item.description = item.description || `${key}.description`
        item.type = item.type || 'normal'
        item.duration = item.duration || 6000
        item.icon = item.icon || `${key}_icon`
        item.requirements = item.requirements || []
        item.next = item.next || ''
        item.probability = item.probability || 1
        achievements[key] = item
    })
    Logger.log('[Achievement]', achievements)
    return achievements
}
export function getAchievement(key: string): Achievement {
    return achievements[key]
}

export function useAchiever(): AchieverInst {
    const achiever = inject<AchieverInst>(achieverKey)
    if (!achiever) {
        Logger.error('[Achievement]', 'achiever', 'not found')
        throw new Error('[Achievement] achiever not found')
    }
    return achiever
}
export const achieverKey = createInjectionKey<AchieverInst>('achiever')
