<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="auto" md="2">
        <v-switch v-model="mode" :label="$t('darkmode')" />
      </v-col>
      <v-col cols="12" md="8">
        <v-select :items="langItems" v-model="lang" :label="$t('language')" />
      </v-col>
      <v-col cols="12">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <span class="headline">{{ $t('notifications') }}</span>
      </v-col>
      <v-col cols="12">
        <i>{{ $t('comingSoon') }}</i>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {

  data () {
    return {
      langItems: [
        { value: 'de', text: 'Deutsch' },
        { value: 'en', text: 'English' }
      ]
    }
  },

  computed: {

    mode: {
      get () {
        return this.$store.state.app.dark
      },
      set (val) {
        this.$store.dispatch('app/dark', val)
      }
    },

    lang: {
      get () {
        return this.$store.state.app.locale
      },
      set (val) {
        this.$store.dispatch('app/locale', val)
      }
    }

  },

  i18n: {
    messages: {
      en: {
        darkmode: 'Darkmode',
        language: 'Language',
        notifications: 'Notifications',
        comingSoon: 'Coming soon...'
      },
      de: {
        darkmode: 'Dunkelmodus',
        language: 'Sprache',
        notifications: 'Benachrichtigungen',
        comingSoon: 'Demnächst verfügbar...'
      }
    }
  }

}
</script>
