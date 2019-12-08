import Vue from 'vue'
import App from './App'
import http from '@/components/utils/http.js'
import uniIcons from "@/components/uni/uni-icons/uni-icons.vue"
import VueTimeago from 'vue-timeago'
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})
Vue.component('uniIcons',uniIcons)
Vue.config.productionTip = false
Vue.prototype.$http = http
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
