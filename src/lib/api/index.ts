import axios from 'axios'
import { Logger } from '../utils'

axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.interceptors.request.use(undefined, err => Logger.error('[API]', err))
axios.interceptors.response.use(undefined, err => Logger.error('[API]', err))

export { axios }
export * from './services'
export * as apiTypes from './types'
