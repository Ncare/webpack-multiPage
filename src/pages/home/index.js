import Vue from 'vue'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'
import Index from './index.vue'

Vue.use(Iview)

new Vue({
  el: '#app',
  render: h => h(Index)
})

