// Dependencies
import Vue from 'vue'
import router from '@/router'

// Components
import AccorApp from '@/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#accordion',
  template: '<accor-app/>',
  components: { AccorApp }
})
