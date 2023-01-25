<template>
  <v-app>

    <transition name="fade-transition">
      <router-view name="toolbar" />
    </transition>

    <Drawer />

    <v-main>
      <Update />
      <transition name="fade-transition" mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <Notification />

  </v-app>
</template>

<script>
import Drawer from '@/components/Navigation/Drawer/'
import Notification from '@/components/Notification'
import Update from '@/components/Update'

export default {
  name: 'App',

  components: {
    Drawer, Notification, Update
  },

  computed: {
    premium () {
      if (this.$store.state.auth.account.level === 'user') return false
      else return true
    }
  },

  methods: {
    setTheme (dark) {
      this.$vuetify.theme.dark = dark
      if (dark) require('@/assets/css/scrollDark.css')
      else require('@/assets/css/scrollLight.css')
    }
  },

  beforeMount () {
    this.$store.dispatch('calorietable/init')
    if (!this.$store.state.app.locale) this.$store.dispatch('app/locale', navigator.language || navigator.userLanguage)
  },

  mounted () {
    this.$i18n.locale = this.$store.state.app.locale
    this.setTheme(this.$store.state.app.dark)

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'app/setDark') this.setTheme(this.$store.state.app.dark)
      else if (mutation.type === 'app/setLocale') this.$i18n.locale = mutation.payload
    })
  }

}
</script>
