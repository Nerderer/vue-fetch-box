import Vue from 'vue'
import App from './App.vue'
import FetchBox from '@/lib/FetchBox'

Vue.component('FetchBox', FetchBox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
