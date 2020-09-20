// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'

Vue.config.productionTip = false
Vue.component(MyHeader.name,MyHeader)
Vue.component(MyList.name,MyList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
