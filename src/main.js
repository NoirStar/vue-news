import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index'
import { store } from './store/index'


Vue.config.productionTip = false

// 앱의 구조를 한번에 볼 수 있는 청사진 같은게 되어야 한다. main

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
