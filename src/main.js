import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/custom.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUniversity, faQuestionCircle, faBusinessTime, faExclamationTriangle, faKey, faCheck, faTimes, faUser, faSync, faSignature } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faHome,
  faUniversity,
  faQuestionCircle,
  faBusinessTime,
  faExclamationTriangle,
  faKey,
  faCheck,
  faTimes,
  faUser,
  faSync,
  faSignature
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
