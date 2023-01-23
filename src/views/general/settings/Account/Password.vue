<template>
    <v-dialog v-model="dialog" :fullscreen="$vuetify.breakpoint.xsOnly" scrollable width="500">

        <template v-slot:activator="{ on }">
            <v-btn block depressed v-on="on">
                {{ $t('changePass') }}
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                {{ $t('changePass') }}
            </v-card-title>

            <v-card-text>
                <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
                    <v-row dense>
                        <v-col cols="12">
                            <v-alert class="warning" v-html="$t('changePassText')">
                            </v-alert>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="form.data.password" :rules="form.rules.pass" :label="$t('currentPW')" type="password" outlined required />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="form.data.new" :rules="form.rules.newPass" :label="$t('newPW')" :type="form.showPW ? 'text' : 'password'" :append-icon="form.showPW ? 'mdi-eye' : 'mdi-eye-off'" @click:append="form.showPW = !form.showPW" outlined required />
                        </v-col>
                        <v-col cols="12">
                            <v-btn :loading="form.sending" type="submit" block color="primary">
                                {{ $t('button.submit') }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                    {{ $t('button.cancel') }}
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

  data () {
    return {
      dialog: false,
      form: {
        valid: false,
        showPW: false,
        sending: false,
        data: {
          password: '',
          new: ''
        },
        rules: {
          pass: [
            v => !!v || this.$t('alert.form.required'),
            v => v.length < 255 || this.$t('alert.form.tooLong', { amount: 255 })
          ],
          newPass: [
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

      Apios.patch('session/password', this.form.data).then(() => {
        this.dialog = false
        this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
        var tmpMail = this.$store.state.auth.account.mail
        this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'auth', query: { mail: tmpMail } })
      }).catch(err => {
        if (err.code === 'O1103') {
          this.$notify({ type: 'error', title: this.$t('passWrong'), text: err.code + ': ' + err.message })
        } else {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        }
      }).finally(() => {
        this.form.sending = false
        this.form.data = {
          password: '',
          new: ''
        }
      })
    }

  },

  i18n: {
    messages: {
      en: {
        changePass: 'Change Password',
        passWrong: 'Incorrect password',
        changePassText: '<b>Caution</b><br/> If you change your password you will be signed out (on all devices). You will have to sign in with your new password afterwards.',
        currentPW: 'Current Password',
        newPW: 'New Passwort',
        strong: 'Not strong enough (8 characters, upper- & lower-case, numbers)'
      },
      de: {
        changePass: 'Passwort ändern',
        passWrong: 'Falsches Passwort',
        changePassText: '<b>Achtung</b><br/> Wenn du dein Passwort änderst wirst du (von allen Geräten) abgemeldet. Du musst dich anschliessend mit deinem neuen Passwort anmelden.',
        currentPW: 'Aktuelles Passwort',
        newPW: 'Neues Passwort',
        strong: 'Nicht stark genug (8 Zeichen, Gross- & Kleinbuchstaben, Nummern)'
      }
    }
  }

}
</script>
