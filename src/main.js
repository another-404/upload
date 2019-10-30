import Vue from 'vue'
import { upload, dialog } from 'element-ui'
import App from './App.vue'
import router from './router'

Vue.use(upload).use(dialog)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
