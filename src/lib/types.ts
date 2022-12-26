export type Time = [number, number, number]
export type TimeScope = [Time, Time]
export type Timetable = [TimeScope, string][]

export type PropertyPath = _.PropertyPath
export type PropertyTemplateObject = object
export type TextaGetter = {
    (params?: PropertyTemplateObject): string
    (key: PropertyPath): TextaGetter
}

export type TextaInst = {
    get(key: PropertyPath, params?: PropertyTemplateObject): string
    has(key: PropertyPath): boolean
}

export type HeadElement<T extends any[]> = T extends [infer X, ...infer _] ? X : never
export type TailElement<T extends any[]> = T extends [infer _, ...infer X] ? X : never

export type ACSLevel = '1' | '2' | '3' | '4' | '5' | '6'
export type ACSClass = ACSCommonClass | ACSSecondaryClass
export type ACSCommonClass =
    | 'Safe'
    | 'Euclid'
    | 'Keter'
    | 'Neutralized'
    | 'Pending'
    | 'Explained'
    | 'Esoteric'
export type ACSSecondaryClass =
    | 'Apollyon'
    | 'Archon'
    | 'Cernunnos'
    | 'Hiemal'
    | 'Tiamat'
    | 'Ticonderoga'
    | 'Thaumiel'
export type ACSDisruption = 'Dark' | 'Vlam' | 'Keneq' | 'Ekhi' | 'Amida'
export type ACSRisk = 'Notice' | 'Caution' | 'Warning' | 'Danger' | 'Critical'

export type Achievement = Partial<{
    title: string
    description: string
    type: AchievementType
    duration: number
    icon: string
    requirements: string[]
    next: string
    probability: number
}>
export type AchievementType = 'normal' | 'fantastic'
export type Achievements = Record<string, Achievement>
export type AchieveOptions = {
    toast: boolean
    save: boolean
    ignoreProbability: boolean
}
export interface AchieverInst {
    achieve: (key: string, options?: AchieveOptions) => void
    isAchieved: (key: string) => boolean
    isRequirementsMet: (item: Achievement) => boolean
    showToast: (item: Achievement) => void
}
