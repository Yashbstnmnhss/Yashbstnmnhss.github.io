import data from '../assets/data/achievements.yaml'
import Logger from '../utils/logger'
import { createInjectionKey } from '../utils/vue'
import { inject } from 'vue'

export type Achievement = Partial<{
    title: string,
    description: string,
    type: AchievementType,
    duration: number,
    icon: string,
    requirements: string[],
    next: string,
    probability: number
}>
export type AchievementType = 'normal' | 'fantastic'
export type Achievements = Record<string, Achievement>
export type AchieveOptions = {
    toast: boolean,
    save: boolean,
    ignoreProbability: boolean
}

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
export interface AchieverInst {
    achieve: (key: string, options?: AchieveOptions) => void,
    isAchieved: (key: string) => boolean,
    isRequirementsMet: (item: Achievement) => boolean,
    showToast: (item: Achievement) => void
}
/*export function getHadAchievements(): string[] {
    return store.state.achievements
}
store.watch(s => s.achievements, v => {
    hadAchievements = v
})

const achievements = getAchievements()
var hadAchievements = getHadAchievements()

export function getAchievement(key: string): Achievement {
    return achievements[key]
}
export function isAchieved(key: string): boolean {
    Logger.log('[Achievement]', key, hadAchievements)
    return hadAchievements.includes(key)
}
export function achieve(key: string) {
    const achievement = getAchievement(key)
    if (!achievement) {
        Logger.error('[Achievement]', 'achievement not found', key)
        return
    }
    if (isAchieved(key))
        return
    showToast(achievement)
    commit('achievements', [...hadAchievements, key])
    Logger.log('[Achievement]', 'achievement:', key, 'achieved!')
}
function showToast(item: Achievement) {
    return toast.create({
        duration: 5000,
        title: t(`achievements.${item.title}`),
        description: t(`achievements.${item.description}`),
        meta: item.type === 'fantastic' ? 'wow~ ⊙o⊙' : undefined,
        content: item.type === 'fantastic' ? () => h('audio', {
            src: fantasticAudio,
            autoplay: true,
            controls: true
        }) : undefined
    })
}*/