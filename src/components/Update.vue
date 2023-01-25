<template>
  <v-banner :single-line="loading" :value="show">

    <span v-if="loading" class="caption">{{ $t('loadingUp') }}</span>
    <span v-if="available">{{ $t('upAvailable') }}</span>

    <template v-slot:actions>
      <v-progress-circular v-if="loading" indeterminate />
      <v-btn v-if="available" @click="doRefresh()" depressed color="secondary">
        {{ $t('refresh') }}
      </v-btn>
    </template>

  </v-banner>
</template>

<script>
export default {

  computed: {

    show () {
      if (this.$store.state.app.update) return true
      return false
    },

    loading () {
      if (this.$store.state.app.update === 'loading') return true
      return false
    },

    available () {
      if (this.$store.state.app.update === 'available') return true
      return false
    }

  },

  methods: {
    doRefresh () {
      this.$store.dispatch('app/update', null)
      window.location.reload(true)
    }
  },

  i18n: {
    messages: {
      en: {
        loadingUp: 'Loading update',
        upAvailable: 'Updates available. Please refresh.',
        refresh: 'Refresh'
      },
      de: {
        loadingUp: 'Updates werden geladen',
        upAvailable: 'Updates verfügbar. Bitte aktualisieren.',
        refresh: 'Aktualisieren'
      }
    }
  }

}
</script>
