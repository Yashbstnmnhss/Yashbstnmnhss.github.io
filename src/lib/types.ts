export type LogicEnvironment = Record<string, any>
export type LogicObject = Record<string, any>
export type LogicFunction = (env: LogicEnvironment) => boolean
export type LogicOperator = (val: any) => LogicFunction
export type Triggers = Trigger | Trigger[]
export type Trigger = {
    trigger: string
    conditions?: LogicObject
}

export type Callback<T = any, R = void> = (param: T) => R

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

export type SayingsAuthors = Record<string, Sayings>
export type Sayings = Record<string, Saying>
export type Saying = {
    title?: string
    text: string
    translation?: string
    tags?: string[]
    author?: string
}

export type Achievement = Partial<{
    key: string
    title: string
    description: string
    type: AchievementType
    duration: number
    icon: string
    requirements: string[]
    next: string
    probability: number
    criteria: Triggers
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
