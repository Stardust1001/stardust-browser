import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import Vant from 'vant'

import StardustUI from '../index.js'
import '../index.scss'

import App from '@/App.vue'

const app = createApp(App)

app.directive('domid', {
  created (el, binding) { }
})

app.use(ElementPlus)
app.use(Vant)
app.use(StardustUI)

app.mount('#app')

export default app
