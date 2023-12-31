import router from './'
import {
    assignUndefined,
    Icons,
    isUndefined,
    join,
    Logger,
    pairsToObject,
    objectToPairs,
    groupBy,
    orderBy,
} from '../lib'
import type { MenuOption as MO } from 'naive-ui/lib'
import type { RouteRecordNormalized as RouteInfo } from 'vue-router/auto'
import type { Menu } from './meta'

const groups: Record<string, string[]> = {
    jokes: ['header', 'default', 'expand', 'footer', 'props'],
}
const template: Record<string, Record<string, MO | false>> = {
    jokes: {
        header: false,
        footer: false,
        props: false,
        default: {
            label: '口 日 厂 巨 匚 丁',
        },
        expand: {
            label: '巨 乂 尸 亼 冂 刀',
        },
    },
}

const caches: Record<string, MO[]> = {}
const groupKey = (key: string) => `group_${key}`
const DEFAULT_GROUP = 'default'

export function getOrMakeMenus(key: string) {
    if (key in caches) return caches[key]
    makeMenusCache(router.getRoutes().filter(({ meta: { menu } }) => menu?.for === key))
    if (key in caches) return caches[key]
    Logger.error('[Route]', '[Menu]', 'Unknown menu', { key })
    return undefined
}
export function getGroupInMenu(key: string, group: string) {
    var menu = getOrMakeMenus(key)
    if (!menu) return undefined
    var result = menu.find(v => v.type === 'group' && v.key === groupKey(group))
    if (result) return result
    Logger.error('[Route]', '[Menu]', 'Unknown group', { menu: key, group })
    return undefined
}

function makeMenusCache(routes: RouteInfo[] = router.getRoutes()) {
    const result = makeMenus(routes)
    for (var key in result) caches[key] = result[key]
}

function filtering({ components, meta: { menu, enable } }: RouteInfo) {
    return !isUndefined(components) && !isUndefined(menu) && enable !== false && menu.for
}

function makeMenus(target: RouteInfo[] = router.getRoutes()) {
    const routes = target.filter(filtering)
    const resultGrouped: Record<string, MO[]> = {}
    objectToPairs(groupBy(routes, ({ meta: { menu } }) => menu!.for)).forEach(routes => {
        var [_for, items] = routes
        const dict: Record<string, MO[]> = pairsToObject<MO[]>(
            (_for in groups && groups[_for].length > 0 ? groups[_for] : [DEFAULT_GROUP]).map(
                val => [val, []]
            )
        )
        items = orderBy(items, ({ meta: { menu } }) => menu!.order ?? 0)
        const menus: [MO, Menu][] = []
        for (var i = 0; i < items.length; i++) {
            const item = items[i]
            var info = item.meta.menu!
            var self = makeMenu(info, item.path)
            var findSelf = menus.findIndex(([{ key }, _]) => key === self.key)
            if (findSelf >= 0) {
                menus[findSelf] = {
                    ...menus[findSelf],
                    ...self,
                }
                continue
            }
            menus.push([self, info])
            dealParent(info.parent)
            function dealParent(parentMenu: Menu['parent']) {
                if (parentMenu) {
                    var info = {
                        for: _for,
                        ...parentMenu,
                    }
                    var parent = makeMenu(info, '')
                    var parentIndex = menus.findIndex(([{ key }, _]) => key === parent.key)
                    if (parentIndex < 0) menus.push([parent, info])
                    else menus[parentIndex][0] = assignUndefined(menus[parentIndex][0], parent)

                    if (parentMenu.parent) dealParent(parentMenu.parent)
                }
            }
        }
        objectToPairs(groupBy(menus, ([_, { group }]) => group ?? DEFAULT_GROUP)).forEach(item => {
            var [group, tuples] = item
            const results: MO[] = []
            for (var i = 0; i < tuples.length; i++) {
                var [menu, info] = tuples[i]
                if (info.parent) {
                    function dealParent(self: MO, parentMenu: Menu['parent']) {
                        if (!parentMenu) return
                        var parentIndex = findParent(
                            tuples.map(tuple => tuple[0]),
                            parentMenu.key
                        )
                        var parent = tuples[parentIndex]
                        ;(parent[0].children ?? (parent[0].children = [])).push(self)

                        function findParent(where: MO[], key: string): number {
                            var result = where.findIndex(({ key: wkey }) => wkey === key)
                            return result >= 0
                                ? result
                                : findParent(
                                      where
                                          .filter(({ children }) => children && children.length > 0)
                                          .flatMap(({ children }) => children!),
                                      key
                                  )
                        }
                    }
                    dealParent(menu, info.parent)
                } else {
                    var findMenu = results.findIndex(({ key }) => key === menu.key)
                    if (findMenu < 0) results.push(menu)
                    else
                        results[findMenu] = {
                            ...results[findMenu],
                            ...menu,
                        }
                }
            }
            dict[group in dict ? group : DEFAULT_GROUP].push(
                ...orderBy(results, ({ order }) => order ?? 0)
            )
        })
        resultGrouped[_for] = join(
            objectToPairs(dict).map(item => {
                var [key, inner] = item
                var temp =
                    _for in template && !isUndefined(template[_for]) && key in template[_for]
                        ? template[_for][key]
                        : undefined
                if (temp === false) return inner
                var root: MO = {
                    type: 'group',
                    key: groupKey(key),
                    children: inner,
                }
                if (temp) root = Object.assign(temp, root)
                return root
            }),
            { type: 'divider' }
        ).flat()
    })
    return resultGrouped

    function makeMenu(info: Menu, link: string): MO {
        return {
            key: info.key,
            label: info.label,
            iconType: info.icon ? Icons[info.icon] : undefined,
            link: link,
            order: info.order ?? 0,
        }
    }
}
