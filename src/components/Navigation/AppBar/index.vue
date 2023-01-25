<template>
  <v-app-bar app flat dense color="primary" dark>

    <v-app-bar-nav-icon v-if="login && !$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />

    <v-spacer />

    <v-toolbar-items v-if="!login">
      <v-btn text :to="{name: 'auth'}">
        {{ $t('view.auth.name') }}
      </v-btn>
      <v-btn text :to="{name: 'auth.register'}">
        {{ $t('view.auth.register.name') }}
      </v-btn>
      <v-btn text :to="{name: 'about'}">
        {{ $t('view.about.name') }}
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-title v-if="login">
      {{ viewTitle }}
    </v-toolbar-title>

  </v-app-bar>
</template>

<script>
export default {

  computed: {
    viewTitle () {
      if (this.$route.name) return this.$t('view.' + this.$route.name + '.name')
      else return null
    },
    login () {
      if (this.$store.state.auth.login) return true
      return false
    }
  }

}
</script>
