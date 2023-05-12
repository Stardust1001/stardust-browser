import { areaList } from '@vant/area-data'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './index.scss'

const { h } = Vue

const resolveComponent = (vm, name) => vm.$.appContext.components[name]

const modules = import.meta.globEager('./components/*/*.vue')

const makePlatformComp = (name) => {
  return {
    props: {
      platform: {
        type: String,
        default: window.isMobile ? 'mobile' : 'pc'
      }
    },
    data () {
      return { name: '' }
    },
    created () {
      this.name = this.platform.toLowerCase() + '-' + name
    },
    render () {
      return h(resolveComponent(this, this.name), {
        platform: this.platform,
        ...this.$attrs
      }, this.$slots)
    }
  }
}

const components = {}
// 准备 pc 开头的和 mobile 开头的组件
for (let key in modules) {
  const comp = modules[key].default
  if (/(pc|mobile)-/.test(comp.name)) {
    components[comp.name] = comp
  }
}
const names = Object.values(modules).map(m => m.default.name)
const union = [...new Set(names.map(n => n.replace(/(pc|mobile)-/, '')))]
// 把 pc 和 mobile 都共有的组件也准备，这些组件同时有PC端和移动端两个版本
for (let name of union) {
  // 含有 - 的组件名称才是要注册的，其他的是内部组件，不是对外提供的
  if (!name.includes('-')) continue
  components[name] = makePlatformComp(name)
}

const install = (app, options) => {
  // 把 element-plus 的 icons-vue 也注册了
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  for (let key in components) {
    app.component(key, components[key])
  }
}

const StardustUI = {
  ...components,
  install,
  areaList
}

export default StardustUI
