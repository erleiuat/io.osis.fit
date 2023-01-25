<template>
  <v-card flat style="height:100%;">
    <v-card-title class="pb-0">
      {{ $t('time') }}
    </v-card-title>
    <v-container>
      <v-row justify="space-around" align="center">
        <v-col v-if="weekly" cols="12" class="text-center display-1 pt-0">
          {{ vals.weeks }} {{ $t('weeks') }}
        </v-col>
        <v-col v-else cols="12" class="text-center display-1 pt-0">
          {{ vals.days }} {{ $t('days') }}, <br/> {{ vals.hours }} {{ $t('hours') }}
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {

  props: {
    weekly: {
      type: Boolean,
      default: false
    }
  },

  computed: {

    vals () {
      let tmp = this.$store.getters['destiny/timeRemaining']

      var now = new Date().getTime()
      var countTo = new Date().setHours(23, 59, 59)
      var distance = countTo - now

      return {
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        days: tmp.days,
        weeks: tmp.weeks
      }
    }

  },

  i18n: {
    messages: {
      en: {
        time: 'Remaining time',
        days: 'Days',
        hours: 'Hours',
        weeks: 'Weeks'
      },
      de: {
        time: 'Verbleibende Zeit',
        days: 'Tage',
        hours: 'Stunden',
        weeks: 'Wochen'
      }
    }
  }

}
</script>
