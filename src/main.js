import Vue from 'vue'
import App from '@/App.vue'
import store from '@/plugins/vuex/'
import router from '@/plugins/router/'

import '@/plugins/pwa/'
import i18n from '@/plugins/i18n/'
import vuetify from '@/plugins/vuetify/'
import Notifications from 'vue-notification'

import '@/assets/css/main.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(Notifications)

Vue.prototype.$dateFormat = (date) => {
  if (!date) return null
  const [year, month, day] = date.split('-')
  return `${day}.${month}.${year}`
}

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
