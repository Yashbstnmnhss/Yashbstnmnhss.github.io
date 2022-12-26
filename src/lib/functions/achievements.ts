import data from '@/assets/data/achievements.yaml'
import { Logger } from '../utils/logger'
import { assignUndefined, mapValues, createInjectionKey, valueToString } from '../utils'
import { inject } from 'vue'
import { AchieverInst, Achievement, Achievements } from '../types'

export const achievements = getAchievements()
export function getAchievements(): Achievements {
    var achievements: Achievements = {}
    const defaults = (key: string): Achievement =>
        <Achievement>{
            title: `${key}.title`,
            description: `${key}.description`,
            type: 'normal',
            duration: 5500,
            icon: 'medal',
            requirements: [],
            next: '',
            probability: 1,
        }
    console.log(data)
    achievements = mapValues(data, (val, key) =>
        assignUndefined((val || {}) as Achievement, defaults(key))
    )
    console.log(achievements)
    Logger.log('[Achievement]', 'Loaded', 'total', Object.keys(achievements).length)
    return achievements
}
export function getAchievement(key: string): Achievement {
    return achievements[key]
}

export function useAchiever(): AchieverInst {
    const achiever = inject<AchieverInst>(ACHIEVER_KEY)
    if (!achiever) {
        Logger.error('[Achievement]', 'Achiever', 'not found')
        throw new Error('[Achievement] achiever not found')
    }
    return achiever
}
export const ACHIEVER_KEY = createInjectionKey<AchieverInst>('achiever')
