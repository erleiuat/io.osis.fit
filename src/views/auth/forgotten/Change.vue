<template>
    <v-row dense justify="center" align="center">
        <v-col cols="12" md="7">
            <v-alert class="info">
                {{ $t('checkMails') }}
            </v-alert>
        </v-col>
        <v-col cols="12">
            <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
                <v-row dense justify="center" align="center">
                    <v-col cols="12" md="7">
                        <v-text-field v-model="form.data.identifier" :rules="form.rules.required" :label="$t('form.identifier')" prepend-inner-icon="mdi-account-circle-outline" solo required />
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-text-field v-model="form.data.code" :rules="form.rules.required" :label="$t('fCode')" solo required />
                    </v-col>
                    <v-col cols="11" md="7">
                        <v-text-field v-model="form.data.password" :rules="form.rules.password" :label="$t('form.password')" :type="form.showPW ? 'text' : 'password'" :append-icon="form.showPW ? 'mdi-eye' : 'mdi-eye-off'" @click:append="form.showPW = !form.showPW" prepend-inner-icon="mdi-textbox-password" solo required />
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-btn :loading="form.sending" type="submit" block color="primary">
                            {{ $t('btnReset') }}
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
                    identifier: '',
                    code: '',
                    password: ''
                },
                rules: {
                    required: [
                        v => !!v || this.$t('alert.form.required'),
                        v => v.length < 255 || this.$t('alert.form.tooLong', { amount: 255 })
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
            Apios.put('session/password', this.form.data).then(() => {
                this.$router.push({ name: 'auth', query: { mail: this.form.data.identifier } })
                this.$notify({ type: 'success', title: this.$t('passChanged') })
            }).catch(err => {
                if (err.code === 'O1144') {
                    this.form.data.code = ''
                    this.$notify({ type: 'error', title: this.$t('codeWrong'), text: err })
                } else {
                    this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
                }
            }).finally(() => {
                this.form.sending = false
            })
        }
    },

    mounted () {
        if (this.$route.query.ident) this.form.data.identifier = this.$route.query.ident
    },

    i18n: {
        messages: {
            en: {
                fCode: 'Code',
                passChanged: 'Your password has been changed. You can now sign in.',
                didRemember: 'Did you just remember your Password?',
                doLogin: 'Sign In',
                codeWrong: 'The Code has expired or is wrong',
                orNeedto: 'Or do you need an account?',
                about: 'About',
                btnReset: 'Change password',
                strong: 'Not strong enough (8 characters, upper- & lower-case, numbers)',
                checkMails: `
                    If there is an account with your details, a reset code has been 
                    sent to you by email. Check your emails and use the code in the form 
                    below to set a new password.
                `
            },
            de: {
                fCode: 'Code',
                passChanged: 'Dein Passwort wurde geändert. Du kannst dich nun anmelden.',
                didRemember: 'Ist es dir wieder eingefallen?',
                doLogin: 'Anmelden',
                codeWrong: 'Der Code ist abgelaufen oder falsch',
                orNeedto: 'Oder brauchst du ein Konto?',
                createAccount: 'Registrieren',
                about: 'Über',
                btnReset: 'Passwort ändern',
                strong: 'Nicht stark genug (8 Zeichen, Gross- & Kleinbuchstaben, Nummern)',
                checkMails: `
                    Falls ein Konto unter deinen Angaben existiert, wurde dir ein Code zum 
                    Zurücksetzen per Mail zugestellt. Überprüfe deine Mails und nutze den Code
                    im unteren Formular, um ein neues Passwort zu setzen.
                `
            }
        }
    }

}
</script>
