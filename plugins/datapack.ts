import { Plugin } from 'vite'
import { load } from 'js-yaml'
import { readdir, readFile, access, constants, type Dirent } from 'fs'
import { resolve } from 'path'

type Config = {
    rootDir?: string
    schema?: Record<string, 'single' | 'object' | 'array'>
}

type Pack = {
    meta: unknown
    files: Record<string, unknown>
}
type Packs = Record<string, Pack>

const moduleId = 'virtual:datapack',
    resolvedModuleId = '\0' + moduleId,
    pluginName = 'vite:datapack'
export default function datapackPlugin(
    config: Config = {
        rootDir: 'src/data',
        schema: {},
    }
): Plugin {
    const rootDir = resolve(config.rootDir)
    const schema = config.schema

    async function isExisted(path: string) {
        return new Promise<boolean>(resolve =>
            access(path, constants.F_OK, err => {
                if (err) resolve(false)
                else resolve(true)
            })
        )
    }

    async function getDirents(path: string) {
        return new Promise<Dirent[]>((resolve, reject) => {
            readdir(path, { withFileTypes: true }, (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    async function getDirectories(path: string) {
        return (await getDirents(path)).filter(val => val.isDirectory()).map(val => val.name)
    }
    async function getFiles(path: string) {
        return (await getDirents(path)).filter(val => val.isFile()).map(val => val.name)
    }
    function getFileName(file: string) {
        let slashIndex = file.lastIndexOf('/')
        file = slashIndex > 0 ? file.substring(slashIndex + 1) : file
        let pointIndex = file.lastIndexOf('.')
        return pointIndex > 0 ? file.substring(0, pointIndex) : file
    }
    async function readYaml(file: string) {
        let text = await readDataFile(file)
        return load(text, {
            filename: file,
            onWarning(e) {
                console.warn(`[${pluginName}]`, e)
            },
        })
    }
    async function readDataFile(file: string) {
        return new Promise<string>((resolve, reject) => {
            readFile(
                file,
                {
                    encoding: 'utf-8',
                },
                (err, data) => {
                    if (err) reject(err)
                    else resolve(data)
                }
            )
        })
    }

    async function generate(rootDir: string): Promise<Packs> {
        async function readMany(path: string) {
            const result: Record<string, unknown> = {}
            for (const file of await getFiles(path)) {
                const filepath = resolve(path, file)
                const data = await readYaml(filepath)
                result[getFileName(file)] = data
            }
            return result
        }
        try {
            const packs: Packs = {}
            let directories = await getDirectories(rootDir)
            for (const packName of directories) {
                const rootPath = resolve(rootDir, packName)
                const dataRootPath = resolve(rootPath, 'data'),
                    metaPath = resolve(rootPath, 'meta.pack')
                if (!(await isExisted(dataRootPath)) || !(await isExisted(metaPath))) continue

                const pack: Pack['files'] = {}
                let meta: Pack['meta'] = await readYaml(metaPath)
                let dirents = await getDirents(dataRootPath)
                for (const dirent of dirents) {
                    const name = dirent.name
                    const key = getFileName(name)
                    const path = resolve(dataRootPath, name)
                    if (name in schema)
                        switch (schema[name]) {
                            case 'array':
                                {
                                    if (!dirent.isDirectory()) break
                                    let data = await readMany(path)
                                    pack[key] = Object.values(data)
                                }
                                continue
                            case 'object':
                                {
                                    if (!dirent.isDirectory()) break
                                    let data = await readMany(path)
                                    pack[key] = data
                                }
                                continue
                            default:
                                break
                        }
                    if (dirent.isFile()) pack[key] = await readYaml(path)
                }
                if (!meta) continue
                packs[packName] = {
                    meta,
                    files: pack,
                }
            }
            return packs
        } catch (err) {
            console.error(`[${pluginName}]`, err)
            return {}
        }
    }

    return {
        name: pluginName,
        enforce: 'pre',
        resolveId(id) {
            if (id === moduleId) return resolvedModuleId
        },

        configureServer(server) {
            function isTarget(path: string) {
                return path.startsWith(rootDir)
            }
            server.watcher.on('add', async path => {
                if (!isTarget(path)) return
                server.ws.send({
                    type: 'full-reload',
                })
            })
            server.watcher.on('change', async path => {
                if (!isTarget(path)) return
                server.ws.send({
                    type: 'full-reload',
                })
            })
            server.watcher.on('unlink', async path => {
                if (!isTarget(path)) return
                server.ws.send({
                    type: 'full-reload',
                })
            })
        },

        async load(id) {
            if (id === resolvedModuleId) {
                let packs = await generate(rootDir)
                let json = JSON.stringify(packs, null, 4)
                return `export default ${json};`
            }
        },
    }
}
