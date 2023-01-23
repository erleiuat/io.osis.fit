<template>
    <v-card flat>
        <v-card-title>
            {{ $t('height') }}
            <v-spacer />
            <v-btn icon v-if="!edit" @click="edit = true">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon v-else @click="saveChange()" :loading="$store.state.form.sending">
                <v-icon>mdi-content-save</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text v-if="!edit" class="text-center headline">
            {{ $store.state.destiny.metabolism.height || '-' }} {{ $t('unit.centimeter.short') }}
        </v-card-text>
        <v-card-text v-else>
            <v-form v-model="form.valid" ref="form" @submit.prevent="saveChange()">
                <span class="caption">{{ $t('howHeight') }}</span>
                <v-text-field v-model="$store.state.destiny.metabolism.height" :rules="form.rules.number" :label="$t('height')" :suffix="$t('unit.centimeter.short')" type="number" />
                <v-btn type="submit" depressed color="primary" block :loading="$store.state.form.sending">
                    <v-icon left>mdi-content-save</v-icon>
                    {{ $t('button.save') }}
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {

  data () {
    return {
      edit: false,
      form: {
        valid: false,
        rules: {
          number: [
            v => !!v || this.$t('alert.form.required'),
            v => !isNaN(v) || this.$t('alert.form.format.number')
          ]
        }
      }
    }
  },

  methods: {
    saveChange () {
      if (!this.$refs.form.validate()) return false
      this.$store.commit('form/send')
      this.edit = false
    }
  },

  i18n: {
    messages: {
      en: {
        height: 'Height',
        howHeight: 'How tall are you?'
      },
      de: {
        height: 'Körpergrösse',
        howHeight: 'Wie gross bist du?'
      }
    }
  }

}
</script>
