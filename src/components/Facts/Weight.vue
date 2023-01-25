<template>
  <v-card flat style="height:100%;">
    <v-card-title class="pb-0">
      {{ $t('weight') }}
    </v-card-title>
    <v-container>
      <v-row justify="space-around" align="center">
        <v-col cols="12" class="text-center display-1 pt-0">
          {{ vals.current || '-' }} {{ $t('unit.kilogram.short') }}
        </v-col>
      </v-row>
      <v-spacer />
      <v-row justify="space-between" dense align="baseline">
        <v-col cols="12">
          <v-progress-linear :value="vals.percentage" height="25">
            <strong>{{ vals.percentage }} %</strong>
          </v-progress-linear>
        </v-col>
        <v-col cols="auto" class="text-left">
          {{ $t('start') }}: {{ vals.first || '-' }} {{ $t('unit.kilogram.short') }}
        </v-col>
        <v-col cols="auto" class="text-center">
          {{ Math.round((vals.current - vals.first) * 10) / 10 }} {{ $t('unit.kilogram.short') }}
        </v-col>
        <v-col cols="auto" class="text-right">
          {{ $t('goal') }}: {{ vals.goal || '-' }} {{ $t('unit.kilogram.short') }}
        </v-col>
      </v-row>
      <!--
            <v-row>
                <v-col cols="12">
                    <v-sparkline :labels="line.labels" :value="line.vals" :gradient="line.gradient" smooth="5" padding="10" line-width="3" stroke-linecap="round" gradient-direction="top" type="trend" auto-draw>
                        <template v-slot:label="item">
                            {{ item.value }} {{ $t('unit.kilogram.short') }}
                        </template>
                    </v-sparkline>
                </v-col>
            </v-row>
            -->
    </v-container>
  </v-card>
</template>

<script>
export default {

  computed: {

    /* TODO?
        line () {
            return {
                gradient: [this.$vuetify.theme.currentTheme.error, this.$vuetify.theme.currentTheme.success],
                vals: [110, 105, 85],
                labels: ['110', '105', '85']
            }
        },
        */

    vals () {
      var toReturn = {
        first: this.$store.getters['logBody/first'].weight || 0,
        current: this.$store.getters['logBody/current'].weight || 0,
        goal: this.$store.state.destiny.goals.weight || 0,
        percentage: null
      }

      let percentage = 100 - (((toReturn.current - toReturn.goal) / (toReturn.first - toReturn.goal)) * 100) || 0
      toReturn.percentage = Math.round(percentage * 10) / 10

      return toReturn
    }

  },

  i18n: {
    messages: {
      en: {
        weight: 'Progress',
        start: 'Start',
        goal: 'Goal'
      },
      de: {
        weight: 'Fortschritt',
        start: 'Start',
        goal: 'Ziel'
      }
    }
  }

}
</script>
