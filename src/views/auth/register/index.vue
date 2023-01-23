<template>
    <v-container fill-height>

        <v-row dense justify="center" align="center">
            <v-col cols="12" class="display-1 text-center">
                {{ $t('signUp') }}
            </v-col>
            <v-col cols="12" class="caption text-center">
                {{ $t('createYourAcc') }}
            </v-col>
        </v-row>

        <v-row dense justify="center" align="center">
            <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
                <v-row dense justify="center" align="center">
                    <v-col cols="11" md="5">
                        <v-text-field v-model="form.data.username" :rules="form.rules.username" :label="$t('form.username')" @keyup="exists('username')" :error-messages="form.existing.username" type="text" autocomplete="off" prepend-inner-icon="mdi-account-circle-outline" solo required />
                    </v-col>
                    <v-col cols="11" md="5">
                        <v-text-field v-model="form.data.mail" :rules="form.rules.mail" :label="$t('form.mail')" @keyup="exists('mail')" :error-messages="form.existing.mail" type="email" autocomplete="email" prepend-inner-icon="mdi-email-outline" solo required />
                    </v-col>
                    <v-col cols="11" md="5">
                        <v-text-field v-model="form.data.firstname" :rules="form.rules.name" :label="$t('form.firstname')" autocomplete="given-name" solo required />
                    </v-col>
                    <v-col cols="11" md="5">
                        <v-text-field v-model="form.data.lastname" :rules="form.rules.name" :label="$t('form.lastname')" autocomplete="family-name" solo required />
                    </v-col>
                    <v-col cols="11" md="10">
                        <v-text-field v-model="form.data.password" :rules="form.rules.password" :label="$t('form.password')" :type="form.showPW ? 'text' : 'password'" :append-icon="form.showPW ? 'mdi-eye' : 'mdi-eye-off'" @click:append="form.showPW = !form.showPW" prepend-inner-icon="mdi-textbox-password" solo required />
                    </v-col>
                </v-row>
                <v-row dense justify="center" align="center">
                    <v-col cols="auto">
                        <v-checkbox v-model="acceptAgb" :rules="form.rules.accept" :label="$t('acceptStuff')" required />
                    </v-col>
                    <v-col cols="7" sm="auto" class="pb-3">
                        <router-link target="_blank" :to="{name: 'about.terms'}">
                            {{ $t('termsLink') }}
                        </router-link>
                    </v-col>
                </v-row>
                <v-row dense justify="center" align="center">
                    <v-col cols="11" md="6">
                        <v-btn :loading="form.sending" type="submit" block color="primary">
                            {{ $t('button.submit') }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-row>

        <v-row dense justify="center" align="center">
            <v-col cols="12">
                <v-divider />
            </v-col>
            <v-col cols="auto" class="caption">
                {{ $t('orAlready') }}
                <router-link :to="{name: 'auth'}">
                    {{ $t('haveAccount') }}
                </router-link>
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
import Apios from '@/plugins/apios/'

export default {

  data () {
    return {
      checkTimeout: null,
      acceptAgb: false,
      form: {
        valid: false,
        sending: false,
        showPW: false,
        existing: {
          mail: null,
          username: null
        },
        data: {
          mail: '',
          username: '',
          password: '',
          firstname: '',
          lastname: '',
          birthdate: '',
          locale: ''
        },
        rules: {
          accept: [
            v => !!v || this.$t('alert.form.required')
          ],
          name: [
            v => !!v || this.$t('alert.form.required'),
            v => v.length < 150 || this.$t('alert.form.tooLong', { amount: 150 })
          ],
          username: [
            v => !!v || this.$t('alert.form.require', { name: this.$t('form.username') }),
            v => !/\s/.test(v) || this.$t('alert.form.whitespace'),
            v => v.length < 250 || this.$t('alert.form.tooLong', { amount: 250 }),
            v => v.length > 5 || this.$t('alert.form.tooShort', { amount: 5 })
          ],
          mail: [
            v => !!v || this.$t('alert.form.require', { name: this.$t('form.mail') }),
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.$t('alert.form.invalid'),
            v => v.length < 90 || this.$t('alert.form.tooLong', { amount: 90 })
          ],
          password: [
            v => !!v || this.$t('alert.form.require', { name: this.$t('form.password') }),
            v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v) || this.$t('strong'),
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

      Apios.post('account', this.form.data).then(() => {
        this.$notify({ type: 'success', title: this.$t('accCreated') })
        this.$router.push({ name: 'auth', query: { mail: this.form.data.mail } })
      }).catch(err => {
        if (err.code === 'A1005') {
          this.form.existing.mail = this.$t('alert.form.existing.mail')
          this.$notify({ type: 'error', title: this.$t('alert.form.existing.mail'), text: err.code + ': ' + err.message })
        } else if (err.code === 'A1006') {
          this.form.existing.username = this.$t('alert.form.existing.username')
          this.$notify({ type: 'error', title: this.$t('alert.form.existing.username'), text: err.code + ': ' + err.message })
        } else {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        }
      }).finally(() => {
        this.form.sending = false
      })
    },

    exists (enty) {
      clearTimeout(this.checkTimeout)
      this.checkTimeout = setTimeout(() => {
        if (this.form.data[enty].length < 5) return
        let url = 'account/check?identifier=' + this.form.data[enty]
        Apios.get(url).then(res => {
          if (res.data.found === true) this.form.existing[enty] = this.$t('alert.form.existing.' + enty)
          else this.form.existing[enty] = null
        }).catch(err => {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        })
      }, 1000)
    }

  },

  beforeCreate () {
    var authState = this.$store.getters['auth/status']
    if (authState === 'authorized') this.$router.push({ name: 'home' })
  },

  i18n: {
    messages: {
      en: {
        createYourAcc: 'Create your account to use the app',
        acceptStuff: 'Accept our Terms and Conditions',
        termsLink: 'Terms and Conditions',
        signUp: 'Sign Up',
        orAlready: 'Do you already have an account?',
        haveAccount: 'Sign In now',
        about: 'About',
        accCreated: 'The account has been created. You can now sign in.',
        strong: 'Not strong enough (8 characters, upper- & lower-case, numbers)'
      },
      de: {
        createYourAcc: 'Erstelle dein Konto um die App zu nutzen',
        acceptStuff: 'Ich akzeptiere die',
        termsLink: 'Allgemeinen Geschäftsbedingungen',
        signUp: 'Registrieren',
        orAlready: 'Hast du bereits ein Konto?',
        haveAccount: 'Jetzt anmelden',
        about: 'Über',
        accCreated: 'Das Konto wurde erstellt. Du kannst dich nun anmelden.',
        strong: 'Nicht stark genug (8 Zeichen, Gross- & Kleinbuchstaben, Nummern)'
      }
    }
  }

}
</script>
