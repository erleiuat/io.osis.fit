import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({

  locale: 'en',
  fallbackLocale: 'en',
  silentTranslationWarn: true,

  messages: {
    en: {
      main: require('@/plugins/i18n/locales/en/main.json'),
      view: require('@/plugins/i18n/locales/en/view.json'),
      alert: require('@/plugins/i18n/locales/en/alert.json'),
      form: require('@/plugins/i18n/locales/en/form.json'),
      button: require('@/plugins/i18n/locales/en/button.json'),
      unit: require('@/plugins/i18n/locales/en/unit.json')
    },
    de: {
      main: require('@/plugins/i18n/locales/de/main.json'),
      view: require('@/plugins/i18n/locales/de/view.json'),
      alert: require('@/plugins/i18n/locales/de/alert.json'),
      form: require('@/plugins/i18n/locales/de/form.json'),
      button: require('@/plugins/i18n/locales/de/button.json'),
      unit: require('@/plugins/i18n/locales/de/unit.json')
    }
  }

})
