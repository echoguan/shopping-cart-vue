// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {

  },
  filter:{

  },
  method: function () {

  },
  router,
  template: '<App/>',
  components: { App, first-component },
  template:'<div>My first Vue Component!</div>'
})

// Vue.component('first-component', {
//   template:'<div>My first Vue Component!</div>'
// })
