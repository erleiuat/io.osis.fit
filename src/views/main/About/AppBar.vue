<template>
    <v-app-bar app flat dense color="primary" dark>
        <v-btn v-if="noLogin || backToPrev" icon @click="goBack()">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-app-bar-nav-icon v-else-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />
        <v-spacer />
        <v-toolbar-title>
            {{ viewTitle }}
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {

  computed: {

    noLogin () {
      if (!this.$store.state.auth.login) return true
      return false
    },

    backToPrev () {
      if (this.$route.name !== 'about') return true
      return false
    },

    viewTitle () {
      if (this.$route.name) return this.$t('view.' + this.$route.name + '.name')
      else return null
    }

  },

  methods: {

    goBack () {
      if (history.length > 1) this.$router.back()
      else this.$router.push({ name: 'home' })
    }

  }

}
</script>
