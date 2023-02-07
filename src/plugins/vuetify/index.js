import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#28bdbd',
        secondary: '#267373',
        accent: '#044949',
        error: '#f44336',
        success: '#48b082',
        warning: '#c5a04a',
        info: '#23355e'
      },
      dark: {
        primary: '#28bdbd',
        secondary: '#267373',
        accent: '#044949',
        error: '#f44336',
        success: '#48b082',
        warning: '#c5a04a',
        info: '#23355e'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
