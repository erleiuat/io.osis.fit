<template>
  <v-card flat :color="vals.color">
    <v-card-title>
      {{ $t('leftCals') }}
    </v-card-title>
    <v-container>
      <v-row justify="space-around" no-gutters align="center">
        <v-col cols="6" class="text-center">
          <v-progress-circular :rotate="-90" :size="100" :width="15" :value="vals.percentage">
            {{ vals.percentage || '0' }} %
          </v-progress-circular>
        </v-col>
        <v-col cols="6" class="text-center">
          <span class="display-1">
            {{ Math.round(vals.remaining) || '0' }}<br />
          </span>
        </v-col>
      </v-row>
    </v-container>
    <v-card-text class="text-center">
      <b>{{ Math.round(vals.consumed) || '0' }}</b> {{ $t('of') }} {{ Math.round(vals.total) || '-' }} {{ $t('unit.calories.short') }} {{ $t('used') }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {

  props: {
    daily: {
      type: Boolean,
      default: true
    },
    weekly: {
      type: Boolean,
      default: false
    }
  },

  computed: {

    daysToSunday () {
      var today = new Date()
      today = today.getDay()
      if (today === 0) return 0 // So
      else if (today === 1) return 6 // Mo
      else if (today === 2) return 5 // Di
      else if (today === 3) return 4 // Mi
      else if (today === 4) return 3 // Do
      else if (today === 5) return 2 // Fr
      else if (today === 6) return 1 // Sa
      return null
    },

    vals () {
      return this.$store.getters['cals'](this.weekly)
    }

  },

  i18n: {
    messages: {
      en: {
        leftCals: 'Remaining Calories',
        of: 'of',
        used: 'used',
        totalPerWeek: 'this week in total',
        daysLeft: 'days',
        dayLeft: 'day'
      },
      de: {
        leftCals: 'Verbleibende Kalorien',
        of: 'von',
        used: 'verbraucht',
        totalPerWeek: 'insg. diese Woche',
        daysLeft: 'Tage',
        dayLeft: 'Tag'
      }
    }
  }

}
</script>
