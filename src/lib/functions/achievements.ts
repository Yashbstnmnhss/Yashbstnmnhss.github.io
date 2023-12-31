import datafiles from '../datafiles'
import {
    Logger,
    assignUndefined,
    mapValues,
    createInjectionKey,
    registerEventTrigger,
    achievementEvents,
    isUndefined,
} from '..'
import { inject } from 'vue'
import type { AchieverInst, Achievement, Achievements } from '../types'

const data: Achievements = datafiles('achievements') ?? {}
var achievements: Achievements

export function getAchievements() {
    ensureAchievements()
    return achievements
}

function ensureAchievements() {
    if (!achievements || Object.keys(achievements).length <= 0) achievements = loadAchievements()
}

function loadAchievements(): Achievements {
    const defaults = (key: string): Achievement =>
        <Achievement>{
            key,
            title: `${key}.title`,
            description: `${key}.description`,
            type: 'normal',
            duration: 5500,
            icon: 'medal',
            requirements: [],
            next: '',
            probability: 1,
        }
    var results: Achievements = mapValues(data, (val, key) => {
        var result = assignUndefined((val || {}) as Achievement, defaults(key))
        registerAchievementTrigger(result)
        return result
    })
    Logger.log('[Achievement]', 'Loaded', 'total', Object.keys(results).length)
    return results
}

function registerAchievementTrigger(achievement: Achievement) {
    if (isUndefined(achievement.criteria)) return
    registerEventTrigger(
        achievementEvents,
        achievement.criteria,
        _ => useAchiever().achieve(achievement.key ?? ''),
        _ =>
            Logger.warn('[Achievement]', 'Trigger failed', {
                key: achievement.key,
                arg: _,
                trigger: achievement.criteria,
            })
    )
}

export function getAchievement(key: string): Achievement | undefined {
    ensureAchievements()
    return key in achievements ? achievements[key] : undefined
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
