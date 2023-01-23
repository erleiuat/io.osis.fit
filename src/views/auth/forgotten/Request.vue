<template>
    <v-row dense justify="center" align="center">
        <v-col cols="12">
            <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
                <v-row dense justify="center" align="center">
                    <v-col cols="12" md="7">
                        <v-text-field v-model="form.data.identifier" :rules="form.rules.required" :label="$t('form.identifier')" prepend-inner-icon="mdi-account-circle-outline" solo required />
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-btn :loading="form.sending" type="submit" block color="primary">
                            {{ $t('btnRequest') }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
        <v-col cols="auto" class="caption">
            {{ $t('didRemember') }}
            <router-link :to="{name: 'auth'}">
                {{ $t('doLogin') }}
            </router-link><br />
            {{ $t('orNeedto') }}
            <router-link :to="{name: 'auth.register'}">
                {{ $t('createAccount') }}
            </router-link>
        </v-col>
    </v-row>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

  data () {
    return {
      form: {
        valid: false,
        sending: false,
        data: {
          identifier: ''
        },
        rules: {
          required: [
            v => !!v || this.$t('alert.form.required'),
            v => v.length < 255 || this.$t('alert.form.tooLong', { amount: 255 })
          ]
        }
      }
    }
  },

  methods: {
    submit () {
      if (!this.$refs.form.validate()) return false

      this.form.sending = true
      Apios.post('session/password', this.form.data).then(() => {
        this.$router.push({ name: 'auth.forgotten', query: { change: true, ident: this.form.data.identifier } })
      }).catch(err => {
        if (err.code === 'A1021' || err.code === 'A1022') {
          this.$notify({ type: 'error', title: this.$t('accNotFound'), text: err.code + ': ' + err.message })
        } else {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        }
      }).finally(() => {
        this.form.sending = false
      })
    }
  },

  i18n: {
    messages: {
      en: {
        didRemember: 'Did you just remember your Password?',
        doLogin: 'Sign In',
        orNeedto: 'Or do you need an account?',
        about: 'About',
        btnRequest: 'Request Change',
        accNotFound: 'Account not found (are you already registered?)'
      },
      de: {
        didRemember: 'Ist es dir wieder eingefallen?',
        doLogin: 'Anmelden',
        orNeedto: 'Oder brauchst du ein Konto?',
        createAccount: 'Registrieren',
        about: 'Über',
        btnRequest: 'Zurücksetzung anfragen',
        accNotFound: 'Konto wurde nicht gefunden (bist du schon registriert?)'
      }
    }
  }

}
</script>
