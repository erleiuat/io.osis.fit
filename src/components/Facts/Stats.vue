<template>
  <v-card flat style="height:100%;">
    <v-container class="fill-height">

      <v-row justify="space-between" dense align="start">
        <v-card-title class="pa-1">
          {{ $t('stats') }}
        </v-card-title>
      </v-row>

      <v-row justify="space-between" dense align="center" class="ma-0">
        <v-col cols="auto" class="text-center py-0">
          {{ $t('proteins') }}
        </v-col>
        <v-col cols="auto" class="text-center title py-0">
          {{ vals.protein || '0' }} {{ $t('unit.gram.short') }} / {{ vals.proteinShould || '0' }} {{ $t('unit.gram.short') }}
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-divider />
        </v-col>
      </v-row>

      <v-row justify="space-between" dense align="center" class="ma-0">
        <v-col cols="auto" class="text-center py-0">
          {{ $t('carbs') }}
        </v-col>
        <v-col cols="auto" class="text-center title py-0">
          {{ vals.carbs || '0' }} {{ $t('unit.gram.short') }}
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-divider />
        </v-col>
      </v-row>

      <v-row justify="space-between" dense align="center" class="ma-0">
        <v-col cols="auto" class="text-center py-0">
          {{ $t('fats') }}
        </v-col>
        <v-col cols="auto" class="text-center title py-0">
          {{ vals.fat || '0' }} {{ $t('unit.gram.short') }}
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-divider />
        </v-col>
      </v-row>

      <v-row justify="space-between" dense align="end">
        <v-col cols="auto" class="text-center">
          {{ $t('activityCals') }}
        </v-col>
        <v-col cols="auto" class="text-center title">
          {{ vals.activity || '0' }} {{ $t('unit.calories.short') }}
        </v-col>
      </v-row>

    </v-container>
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

    vals () {
      let multiplier = this.weekly ? 7 : 1
      let weight = this.$store.getters['logBody/current'].weight * multiplier
      let calsTotal = this.$store.getters['cals']().total * multiplier

      let proteinByCals = Math.round((calsTotal * 0.4) / 4)
      let proteinByWeight = Math.round((weight * 1.1))

      var tmp = null
      var toReturn = {
        activity: null,
        fat: null,
        protein: null,
        carbs: null,
        proteinShould: proteinByCals < proteinByWeight ? proteinByWeight : proteinByCals
      }

      if (this.weekly) {
        tmp = this.$store.getters['logFood/totalWeek']()
        toReturn.activity = Math.round(this.$store.getters['logActivity/totalWeek']() * 10) / 10
      } else {
        tmp = this.$store.getters['logFood/totalDay']
        toReturn.activity = Math.round(this.$store.getters['logActivity/totalDay'] * 10) / 10
      }

      toReturn.fat = Math.round(tmp.fat * 10) / 10
      toReturn.protein = Math.round(tmp.protein * 10) / 10
      toReturn.carbs = Math.round(tmp.carbs * 10) / 10
      return toReturn
    }

  },

  i18n: {
    messages: {
      en: {
        stats: 'Statistics',
        activityCals: 'Calories burned',
        fats: 'Fats',
        proteins: 'Proteins',
        carbs: 'Carbs'
      },
      de: {
        stats: 'Statistik',
        activityCals: 'Kalorien verbrannt',
        fats: 'Fette',
        proteins: 'Proteine',
        carbs: 'Kohlenhydrate'
      }
    }
  }

}
</script>
