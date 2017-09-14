import Vue from 'vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import Index from './index.vue'

Vue.use(iview)

new Vue({
  el: '#app',
  render: h => h(Index)
})

