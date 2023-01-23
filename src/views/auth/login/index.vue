<template>
    <v-container fill-height>

        <v-row dense justify="center" align="center">
            <v-col cols="12" class="display-1 text-center">
                {{ $t('signIn') }}
            </v-col>
            <v-col cols="12" class="caption text-center">
                {{ $t('niceToSeeYou') }}
            </v-col>
        </v-row>

        <v-row dense justify="center" align="center">
            <v-col cols="12">
                <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
                    <v-row dense justify="center" align="center">
                        <v-col cols="12" md="10">
                            <v-text-field v-model="form.data.identifier" :rules="form.rules.required" :label="$t('form.identifier')" prepend-inner-icon="mdi-account-circle-outline" solo required />
                        </v-col>
                        <v-col cols="12" md="10">
                            <v-text-field v-model="form.data.password" :rules="form.rules.required" :label="$t('form.password')" type="password" prepend-inner-icon="mdi-textbox-password" solo required />
                        </v-col>
                        <v-col cols="auto" md="4">
                            <v-checkbox v-model="form.data.keep" class="mx-2" :label="$t('keepSession')" />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-btn :loading="form.sending" type="submit" block color="primary">
                                {{ $t('button.login') }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            <v-col cols="auto" class="caption">
                {{ $t('haveyou') }}
                <router-link :to="{name: 'auth.forgotten'}">
                    {{ $t('forgottenPass') }}
                </router-link><br/>
                {{ $t('orNeedto') }}
                <router-link :to="{name: 'auth.register'}">
                    {{ $t('createAccount') }}
                </router-link>
            </v-col>
        </v-row>

        <v-row dense justify="center" align="center">
            <v-col cols="12">
                <v-divider />
            </v-col>
            <v-spacer />
            <v-col cols="auto" class="caption">
                <router-link :to="{name: 'about'}">
                    {{ $t('about') }}
                </router-link>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {

  data () {
    return {
      form: {
        valid: false,
        sending: false,
        data: {
          identifier: '',
          password: '',
          keep: false
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
      this.$store.dispatch('auth/login', this.form.data).then(() => {
        this.$router.push({ name: this.$route.query.target ? this.$route.query.target : 'home' })
      }).catch(err => {
        if (err.code === 'A1021' || err.code === 'A1022') {
          this.$notify({ type: 'error', title: this.$t('accNotFound'), text: err.code + ': ' + err.message })
        } else if (err.code === 'O1103') {
          this.$notify({ type: 'error', title: this.$t('passWrong'), text: err.code + ': ' + err.message })
        } else if (err.code === 'O1104') {
          this.$notify({ type: 'error', title: this.$t('accLocked'), text: err.code + ': ' + err.message })
        } else {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        }
      }).finally(() => {
        this.form.sending = false
      })
    }
  },

  beforeCreate () {
    var authState = this.$store.getters['auth/status']
    if (authState === 'authorized') this.$router.push({ name: 'home' })
  },

  mounted () {
    if (this.$route.query.mail) this.form.data.identifier = this.$route.query.mail
  },

  i18n: {
    messages: {
      en: {
        haveyou: 'Did you',
        forgottenPass: 'forget your password?',
        niceToSeeYou: 'Nice to see you again!',
        signIn: 'Welcome back',
        orNeedto: 'Or do you need an account?',
        createAccount: 'Register',
        about: 'About',
        keepSession: 'Stay signed in',
        accNotFound: 'Account not found (are you already registered?)',
        passWrong: 'Incorrect password',
        accLocked: 'This account is locked'
      },
      de: {
        haveyou: 'Hast du dein',
        forgottenPass: 'Passwort vergessen?',
        niceToSeeYou: 'Schön dich wieder zu sehen!',
        signIn: 'Willkommen zurück',
        orNeedto: 'Oder brauchst du ein Konto?',
        createAccount: 'Registrieren',
        about: 'Über',
        keepSession: 'Angemeldet bleiben',
        accNotFound: 'Konto wurde nicht gefunden (bist du schon registriert?)',
        passWrong: 'Falsches Passwort',
        accLocked: 'Dieses Konto ist gesperrt'
      }
    }
  }

}
</script>
