import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import routes from './router.js'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueRouter)  

const router = new VueRouter({
  mode: 'history',  //이거 빠지면 url에 #가 추가된다.
  routes 
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
