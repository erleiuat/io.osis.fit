<template>
    <v-container fill-height>
        <v-form v-model="form.valid" ref="form" @submit.prevent="$store.commit('form/send')">
            <v-row align="center" justify="center">
                <v-col cols="12" lg="auto">
                    <ImageForm v-model="form.data.image" @delete="deleteImage()" :placeholder="require('@/assets/image/food.jpg')" />
                </v-col>
                <v-col cols="12" lg="" class="text-center">
                    <v-row dense justify="center" align="center">
                        <v-col cols="8">
                            <v-text-field v-model="form.data.title" :rules="form.rules.title" :label="$t('form.title')" type="text" />
                        </v-col>
                        <v-col cols="4">
                            <v-select v-model="unit" :items="units" :label="$t('unit.name')" />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.data.caloriesPer100" :rules="form.rules.number" :label="$t('caloriesPer100')+$t('unit.'+unit+'.short')" :suffix="$t('unit.calories.short')" type="number" />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.data.fatPer100" :rules="form.rules.number" :label="$t('fatPer100')+$t('unit.'+unit+'.short')" :suffix="$t('unit.gram.short')" type="number" />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.data.proteinPer100" :rules="form.rules.number" :label="$t('proteinPer100')+$t('unit.'+unit+'.short')" :suffix="$t('unit.gram.short')" type="number" />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="form.data.portionSize" :rules="form.rules.number" :label="$t('portionSize')+$t('unit.'+unit+'.long')" :suffix="$t('unit.'+unit+'.short')" type="number" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row align="center" justify="space-between">
                <v-col cols="auto">
                    <v-btn @click="$router.back()" depressed :loading="$store.state.form.sending">
                        <v-icon left>mdi-cancel</v-icon>
                        {{ $t('button.cancel') }}
                    </v-btn>
                </v-col>
                <v-col cols="auto" v-if="state === 'add'">
                    <v-btn type="submit" depressed color="primary" :loading="$store.state.form.sending">
                        <v-icon left>mdi-content-save</v-icon>
                        {{ $t('button.add') }}
                    </v-btn>
                </v-col>
                <v-col cols="auto" v-else>
                    <v-btn type="submit" depressed color="primary" :loading="$store.state.form.sending">
                        <v-icon left>mdi-content-save</v-icon>
                        {{ $t('button.save') }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import ImageForm from '@/components/Image/Form'

export default {

  components: {
    ImageForm
  },

  data () {
    return {
      unit: 'gram',
      form: {
        valid: false,
        data: {
          title: '',
          caloriesPer100: '',
          fatPer100: '',
          proteinPer100: '',
          portionSize: '',
          image: ''
        },
        rules: {
          title: [
            v => v ? v.length < 120 || this.$t('alert.form.tooLong', { amount: 120 }) : true
          ],
          number: [
            v => !isNaN(v) || this.$t('alert.form.format.number')
          ]
        }
      }
    }
  },

  methods: {
    deleteImage () {
      this.form.data.image = ''
    }
  },

  computed: {
    doSend () {
      return this.$store.state.form.send
    },
    state () {
      return this.$route.name === 'template.edit' ? 'edit' : 'add'
    },
    units () {
      return [
        { value: 'gram', text: this.$t('unit.gram.long') },
        { value: 'milliliters', text: this.$t('unit.milliliters.long') }
      ]
    }
  },

  mounted () {
    if (this.state === 'edit') {
      var item = this.$store.state.template.items[this.$route.params.id]
      if (!item) {
        this.$store.commit('form/sending')
        this.$store.dispatch('template/readByID', this.$route.params.id).then(res => {
          this.form.data = res
        }).catch(err => {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        }).finally(() => {
          this.$store.commit('form/sent')
        })
      } else {
        this.form.data = item
      }
    }
  },

  watch: {
    doSend (val) {
      if (!this.$refs.form.validate() || !val) return false
      var dispatch = 'template/create'
      if (this.state === 'edit') dispatch = 'template/edit'
      this.$store.commit('form/sending')
      this.$store.dispatch(dispatch, this.form.data).then(() => {
        this.$router.back()
        this.$notify({ type: 'success', title: this.$t('alert.success.added') })
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.$store.commit('form/sent')
      })
    }
  },

  i18n: {
    messages: {
      en: {
        caloriesPer100: 'Calories per 100',
        fatPer100: 'Fat per 100',
        proteinPer100: 'Protein per 100',
        portionSize: 'Serving Size in '
      },
      de: {
        caloriesPer100: 'Kalorien pro 100',
        fatPer100: 'Fett pro 100',
        proteinPer100: 'Protein pro 100',
        portionSize: 'Portionsgrösse in '
      }
    }
  }

}
</script>
