<template>
  <v-form v-model="form.valid" ref="form" @submit.prevent="$store.commit('form/send')">
    <v-container>
      <v-row dense justify="center" align="center">

        <v-col cols="6" md="8">
          <TemplateSelect @select="useItem" />
        </v-col>
        <v-col cols="3" md="2">
          <Barcode @select="useItem" />
        </v-col>
        <v-col cols="3" md="2">
          <CalorieTable @select="useItem" />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field v-model="form.data.title" :rules="form.rules.title" :label="$t('form.title')" type="text" filled hide-details />
        </v-col>
        <v-col cols="8" md="4">
          <v-text-field v-model="form.data.portionSize" :rules="form.rules.number" :label="$t('portionSize')" :suffix="$t('unit.'+unit+'.short')" type="number" filled hide-details />
        </v-col>
        <v-col cols="4" md="2">
          <v-select v-model="unit" :items="units" :label="$t('unit.name')" filled hide-details />
        </v-col>

        <v-col cols="12">
          <v-tabs v-model="tab" grow show-arrows>
            <v-tab>
              {{ tCalories || '' }} {{ $t('unit.calories.long') }}
            </v-tab>
            <v-tab>
              {{ tFat ? tFat + $t('unit.gram.short') : '' }} {{ $t('fat') }}
            </v-tab>
            <v-tab>
              {{ tProtein ? tProtein + $t('unit.gram.short') : '' }} {{ $t('protein') }}
            </v-tab>
            <v-tab>
              {{ tCarbs ? tCarbs + $t('unit.gram.short') : '' }} {{ $t('carbs') }}
            </v-tab>
            <v-tab>
              {{ $t('form.time') }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <v-card-text class="pa-2">
                  <v-text-field v-model="per100.calories" :rules="form.rules.number" :label="$t('caloriesPer100')+$t('unit.'+unit+'.short')" :suffix="$t('unit.calories.short')" type="number" filled hide-details />
                  <v-text-field v-model="tCalories" :rules="form.rules.number" :label="$t('totalCalories')" :suffix="$t('unit.calories.short')" type="number" filled hide-details />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text class="pa-2">
                  <v-text-field v-model="per100.fat" :rules="form.rules.number" :label="$t('fatPer100')+$t('unit.'+unit+'.short')" :suffix="$t('unit.gram.short')" type="number" filled hide-details />
                  <v-text-field v-model="tFat" :rules="form.rules.number" :label="$t('totalFat')" :suffix="$t('unit.gram.short')" type="number" filled hide-details />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text class="pa-2">
                  <v-text-field v-model="per100.protein" :rules="form.rules.number" :label="$t('proteinPer100')+$t('unit.'+unit+'.short')" :suffix="$t('unit.gram.short')" type="number" filled hide-details />
                  <v-text-field v-model="tProtein" :rules="form.rules.number" :label="$t('totalProtein')" :suffix="$t('unit.gram.short')" type="number" filled hide-details />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text class="pa-2">
                  <v-text-field v-model="per100.carbs" :rules="form.rules.number" :label="$t('carbsPer100')+$t('unit.'+unit+'.short')" :suffix="$t('unit.gram.short')" type="number" filled hide-details />
                  <v-text-field v-model="tCarbs" :rules="form.rules.number" :label="$t('totalCarbs')" :suffix="$t('unit.gram.short')" type="number" filled hide-details />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text class="pa-2">
                  <v-text-field v-model="form.data.date" :rules="form.rules.date" :label="$t('form.date')" type="date" filled hide-details />
                  <v-text-field v-model="form.data.time" :rules="form.rules.time" :label="$t('form.time')" type="time" filled hide-details />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>

      </v-row>
      <v-row justify="space-between" align="center">
        <v-col cols="auto">
          <v-btn @click="$router.back()" depressed :loading="$store.state.form.sending">
            <v-icon left>mdi-cancel</v-icon>
            {{ $t('button.cancel') }}
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn type="submit" depressed color="primary" :loading="$store.state.form.sending">
            <v-icon left>mdi-content-save</v-icon>
            {{ $t('button.add') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Barcode from '@/components/Barcode'
import TemplateSelect from '@/components/Template/Select'
import CalorieTable from '@/components/CalorieTable'

export default {

  components: {
    TemplateSelect, Barcode, CalorieTable
  },

  data () {
    return {
      tab: null,
      tabItems: [
        this.$t('totalCalories'), this.$t('totalFat'), this.$t('totalProtein'), this.$t('totalCarbs'), this.$t('form.time')
      ],
      per100: {
        calories: null,
        fat: null,
        protein: null,
        carbs: null
      },
      unit: 'gram',
      form: {
        valid: false,
        data: {
          title: '',
          totalCalories: '',
          totalFat: '',
          totalProtein: '',
          totalCarbs: '',
          portionSize: '',
          date: '',
          time: ''
        },
        rules: {
          title: [
            v => v.length < 120 || this.$t('alert.form.tooLong', { amount: 120 })
          ],
          number: [
            v => (v ? !isNaN(v) : true) || this.$t('alert.form.format.number')
          ],
          date: [
            v => !!v || this.$t('alert.form.required'),
            v => !isNaN(Date.parse(v)) || this.$t('alert.form.format.date')
          ],
          time: [
            v => !!v || this.$t('alert.form.required'),
            v => !isNaN(Date.parse('01-01-2000 ' + v)) || this.$t('alert.form.format.date')
          ]
        }
      }
    }
  },

  computed: {

    tCalories: {
      get () {
        if (this.form.data.portionSize && this.per100.calories) return Math.round(((this.per100.calories / 100) * this.form.data.portionSize) * 100) / 100
        else if (this.form.data.totalCalories) return Math.round(this.form.data.totalCalories * 100) / 100
        return null
      },
      set (val) {
        this.form.data.totalCalories = val
      }
    },

    tFat: {
      get () {
        if (this.form.data.portionSize && this.per100.fat) return Math.round(((this.per100.fat / 100) * this.form.data.portionSize) * 100) / 100
        else if (this.form.data.totalFat) return Math.round(this.form.data.totalFat * 100) / 100
        return null
      },
      set (val) {
        this.form.data.totalFat = val
      }
    },

    tProtein: {
      get () {
        if (this.form.data.portionSize && this.per100.protein) return Math.round(((this.per100.protein / 100) * this.form.data.portionSize) * 100) / 100
        else if (this.form.data.totalProtein) return Math.round(this.form.data.totalProtein * 100) / 100
        return null
      },
      set (val) {
        this.form.data.totalProtein = val
      }
    },

    tCarbs: {
      get () {
        if (this.form.data.portionSize && this.per100.carbs) return Math.round(((this.per100.carbs / 100) * this.form.data.portionSize) * 100) / 100
        else if (this.form.data.totalCarbs) return Math.round(this.form.data.totalCarbs * 100) / 100
        return null
      },
      set (val) {
        this.form.data.totalCarbs = val
      }
    },

    doSend () {
      return this.$store.state.form.send
    },

    units () {
      return [
        { value: 'gram', text: this.$t('unit.gram.long') },
        { value: 'milliliters', text: this.$t('unit.milliliters.long') }
      ]
    }

  },

  methods: {
    useItem (item) {
      this.form.data.title = item.title
      this.form.data.portionSize = item.portionSize
      this.per100.calories = item.caloriesPer100
      this.per100.fat = item.fatPer100
      this.per100.protein = item.proteinPer100
      this.per100.carbs = item.carbsPer100
    }
  },

  watch: {
    doSend (val) {
      if (!this.$refs.form.validate() || !val) {
        this.$store.commit('form/sent')
        return false
      }

      this.form.data.totalCalories = this.tCalories
      this.form.data.totalFat = this.tFat
      this.form.data.totalProtein = this.tProtein
      this.form.data.totalCarbs = this.tCarbs

      this.$store.commit('form/sending')
      this.$store.dispatch('logFood/create', this.form.data).then(() => {
        this.$router.back()
        this.$notify({ type: 'success', title: this.$t('alert.success.added') })
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.$store.commit('form/sent')
      })
    }
  },

  mounted () {
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()
    var hh = today.getHours()
    var min = today.getMinutes()

    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm
    if (hh < 10) hh = '0' + hh
    if (min < 10) min = '0' + min

    this.form.data.date = yyyy + '-' + mm + '-' + dd
    this.form.data.time = hh + ':' + min
  },

  i18n: {
    messages: {
      en: {
        fat: 'Fat',
        protein: 'Protein',
        carbs: 'Carbs',
        totalCalories: 'Total Calories',
        totalFat: 'Total Fat',
        totalProtein: 'Total Protein',
        totalCarbs: 'Total Carbs',
        portionSize: 'Serving size',
        caloriesPer100: 'Calories per 100',
        fatPer100: 'Fat per 100',
        proteinPer100: 'Protein per 100',
        carbsPer100: 'Carbs per 100'
      },
      de: {
        fat: 'Fett',
        protein: 'Protein',
        carbs: 'Kohlenhydrate',
        totalCalories: 'Total Kalorien',
        totalFat: 'Total Fett',
        totalProtein: 'Total Protein',
        totalCarbs: 'Total Kohlenhydrate',
        portionSize: 'Portionsgrösse',
        caloriesPer100: 'Kalorien pro 100',
        fatPer100: 'Fett pro 100',
        proteinPer100: 'Protein pro 100',
        carbsPer100: 'Kohlenhydrate pro 100'
      }
    }
  }

}
</script>
