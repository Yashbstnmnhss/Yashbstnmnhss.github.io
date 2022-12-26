import { ACSLevel, ACSClass, ACSDisruption, ACSRisk } from '../types'

/**
 * http://scp-wiki-cn.wikidot.com/anomaly-classification-system-guide
 */

export const Class2Icon: Record<ACSClass, string> = {
    Safe: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/safe-icon.svg',
    Euclid: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/euclid-icon.svg',
    Keter: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/keter-icon.svg',
    Neutralized:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/neutralized-icon.svg',
    Thaumiel:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/thaumiel-icon.svg',
    Apollyon:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/apollyon-icon.svg',
    Archon: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/archon-icon.svg',
    Tiamat: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/tiamat-icon.svg',
    Cernunnos:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/cernunnos-icon.svg',
    Pending:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/pending-icon.svg',
    Explained:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/explained-icon.svg',
    Esoteric:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/esoteric-icon.svg',
    Hiemal: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/hiemal-icon.svg',
    Ticonderoga:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/ticonderoga-icon.svg',
}

export const Disruption2Icon: Record<ACSDisruption, string> = {
    Dark: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/dark-icon.svg',
    Vlam: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/vlam-icon.svg',
    Keneq: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/keneq-icon.svg',
    Ekhi: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/ekhi-icon.svg',
    Amida: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/amida-icon.svg',
}

export const Risk2Icon: Record<ACSRisk, string> = {
    Notice: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/notice-icon.svg',
    Caution:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/caution-icon.svg',
    Warning:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/warning-icon.svg',
    Danger: 'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/danger-icon.svg',
    Critical:
        'https://scp-wiki.wdfiles.com/local--files/component%3Aanomaly-class-bar/critical-icon.svg',
}

export const Level2Color: Record<ACSLevel, string> = {
    1: '0, 159, 107',
    2: '0, 135, 189',
    3: '255, 211, 0',
    4: '255, 109, 0',
    5: '196, 2, 51',
    6: '12, 12, 12',
}

export const Class2Color: Record<ACSClass, string> = {
    Safe: '0, 159, 107',
    Euclid: '255, 211, 0',
    Keter: '196, 2, 51',
    Neutralized: '224, 224, 225',
    Thaumiel: '252, 252, 252',
    Apollyon: '252, 252, 252',
    Archon: '252, 252, 252',
    Tiamat: '252, 252, 252',
    Cernunnos: '252, 252, 252',
    Pending: '12, 12, 12',
    Explained: '252, 252, 252',
    Esoteric: '252, 252, 252',
    Hiemal: '252, 252, 252',
    Ticonderoga: '252, 252, 252',
}

export const Disruption2Color: Record<ACSDisruption, string> = {
    Dark: '0, 159, 107',
    Vlam: '0, 135, 189',
    Keneq: '255, 211, 0',
    Ekhi: '255, 109, 0',
    Amida: '196, 2, 51',
}

export const Risk2Color: Record<ACSRisk, string> = {
    Notice: '0, 159, 107',
    Caution: '0, 135, 189',
    Warning: '255, 211, 0',
    Danger: '255, 109, 0',
    Critical: '196, 2, 51',
}

export const Level2Extra: Record<ACSLevel, string> = {
    1: '凵冂尺巨丂丅尺丨匚丅巨刀', //'UR',
    2: '尺巨丂丅尺丨匚丅巨刀', //'RS',
    3: '匚口冂彳丨刀巨冂丅丨亼厶', //'CF',
    4: '丂巨匚尺巨丅', //'Secret',
    5: '丅口尸 丂巨匚尺巨丅', //'Top Secret',
    6: '匚口丂从丨匚 丅口尸 丂巨匚尺巨丅', //'Cosmic Top Secret',
}

export const Class2Text: Record<ACSClass, string> = {
    Safe: '丂亼彳巨',
    Euclid: '巨凵匚厶丨刀',
    Keter: '片巨丅巨尺',
    Neutralized: '冂巨凵丅尺亼厶丨乙巨刀',
    Thaumiel: '丅廾亼凵从丨巨厶',
    Apollyon: 'Apollyon',
    Archon: 'Archon',
    Tiamat: 'Tiamat',
    Cernunnos: 'Cernunnos',
    Pending: 'Pending',
    Explained: 'Explained',
    Esoteric: 'Esoteric',
    Hiemal: 'Hiemal',
    Ticonderoga: 'Ticonderoga',
}

export const Disruption2Text: Record<ACSDisruption, string> = {
    Dark: '刀亼尺片',
    Vlam: '匕厶亼从',
    Keneq: '片巨冂巨曱',
    Ekhi: 'Ekhi',
    Amida: 'Amida',
}
export const Disruption2Extra: Record<ACSDisruption, string> = {
    Dark: '1',
    Vlam: '2',
    Keneq: '3',
    Ekhi: '4',
    Amida: '5',
}

export const Risk2Text: Record<ACSRisk, string> = {
    Notice: '冂口丅丨匚巨',
    Caution: '匚亼凵丅丨口冂',
    Warning: '山亼尺冂丨冂巳',
    Danger: '刀亼冂巳巨尺',
    Critical: 'Critical',
}
export const Risk2Extra: Record<ACSRisk, string> = {
    Notice: '1',
    Caution: '2',
    Warning: '3',
    Danger: '4',
    Critical: '5',
}
