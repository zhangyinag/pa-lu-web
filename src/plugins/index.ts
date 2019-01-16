import Vue from 'vue'
import vua from 'vua'
import 'vua/dist/vua.css'
import SvgIconInstaller from './svg/index'
import authInstaller from '@/plugins/auth'
import httpInstaller from '@/plugins/http'

export default function install (): void {
  Vue.use(vua, {})
  Vue.use(SvgIconInstaller)
  Vue.use(authInstaller)
  Vue.use(httpInstaller)
}

export { auth } from './auth/index'
export { http } from './http/index'
