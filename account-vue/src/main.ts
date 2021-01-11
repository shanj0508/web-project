import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//等价于
//import router from './router/index.ts'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
