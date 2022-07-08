export type Time = [number, number, number]
export type TimeScope = [Time, Time]
export type Timetable = [TimeScope, string][]

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
