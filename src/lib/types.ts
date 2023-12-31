import { h, type Slot as VueSlot } from 'vue'

export type Datapack = {
    meta: DatapackMeta
    files: Record<string, unknown>
}
export type DatapackMeta = {
    name: string
    version?: string
    builtin?: boolean
    overrides?: Record<string, 'merge' | 'replace'>
}

export type ChatMessage = {
    type?: 'user' | 'system'
    avatar?: ReturnType<typeof h> | string | string[]
    username?: ReturnType<typeof h> | string
    content: ReturnType<typeof h> | string
}
export type UID = string
export type DataKey = string
export type ForumInnerKey = number
export type ForumInner = Omit<ForumContent, 'key' | 'inners'> & {
    key: ForumInnerKey
    to?: ForumInnerKey
}
export type ForumContent = {
    key: DataKey
    title: string
    text: string
    response: UID[]
    responseIcon: string
    date: Date
    author: UID
    top: boolean
    tags: string[]
    inners: ForumInner[]
    disableInner: boolean
}
export type ForumFilter = ForumFilter[] | Record<DataKey, any>

export type SelectiveOptionSlotParams = {
    controller: SelectiveController
    buttons: SelectionButton[]
    next: SelectiveController['readNext']
}
export type SelectiveController = {
    renderer: {
        switchOption(key: string, buttons: SelectionButton[]): void
        switchPart(key: string): void
    }
    loaderAndSaver: {
        load(): boolean
        save(label: string, index: number): void
    }
    move(label?: string): void
    readMany(enableSave?: boolean, awaitOption?: boolean): void
    readNext(enableSave?: boolean): boolean
}
export type SelectiveManagerInst = {
    registerOption: (key: string, template: Slot) => void
    registerPart: (key: string, template: Slot) => void
}
export type Slot<T = any> = VueSlot<T>
export type RouteType = 'skip' | 'branch' | 'rollback' | 'forward'
export type SelectionButton = {
    target?: string | [string]
    text?: string
    route?: RouteType
    icon?: string
    type?: string
    clicked?: () => {}
    condition?: () => boolean
}
export type SelectiveRoutes = Record<string, SelectiveRoute[]> & {
    '&': SelectiveRoute[]
}
export type SelectiveRoute = {
    target: string
    type?: 'part' | 'option' | 'goto'
    buttons?: SelectionButton[]
    action?: () => void
    condition?: () => boolean
}
export type SelectiveLoaderAndSaver = {
    all: () => SelectiveSaveData[]
    shift: () => SelectiveSaveData | undefined
    push: (val: SelectiveSaveData) => void
    suspend: () => void
    reset: () => void
    any: () => boolean
}
export type SelectiveSaveData = [label: string, index: number]

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
