import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/example.js'

Vue.config.productionTip = false
console.log(Vue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
