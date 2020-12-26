import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * Based on https://virtualsky.lco.global/embed/custom.html
 */

new Vue({
  render: h => h(App),
}).$mount('#app')
