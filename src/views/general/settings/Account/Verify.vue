<template>
    <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
        <v-row v-if="!show" dense justify="center" align="center">
            <v-col cols="12">
                <v-btn @click="makeCode()" block depressed :loading="doingCode">
                    {{ $t('verifyMail') }}
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-else justify="center" align="center">
            <v-col cols="12">
                {{ $t('enterCode') }}
            </v-col>
            <v-col cols="10">
                <v-text-field v-model="form.data.code" :rules="form.rules.code" :label="$t('verifyCode')" required outlined hide-details @keydown="form.changes++" />
            </v-col>
            <v-col cols="2">
                <v-btn :loading="form.sending" :disabled="!form.changes" type="submit" block color="primary">
                    {{ $t('button.submit') }}
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-divider />
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

    data () {
        return {
            show: false,
            doingCode: false,
            form: {
                valid: false,
                sending: false,
                changes: false,
                data: {
                    code: ''
                },
                rules: {
                    code: [
                        v => !!v || this.$t('alert.form.required'),
                        v => v.length < 10 || this.$t('alert.form.tooLong', { amount: 10 })
                    ]
                }
            }
        }
    },

    methods: {

        makeCode () {
            this.doingCode = true

            Apios.post('account/verify').then(() => {
                this.show = true
                this.$store.dispatch('auth/refresh', true)
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.doingCode = false
            })
        },

        submit () {
            if (!this.$refs.form.validate()) return false
            this.form.sending = true

            let url = 'account/verify?code=' + this.form.data.code
            Apios.put(url).then(() => {
                this.form.changes = false
                this.$store.dispatch('auth/refresh', true)
                this.$notify({ type: 'success', title: this.$t('alert.success.added') })
                this.show = false
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.form.sending = false
            })
        }

    },

    mounted () {
        if (this.$route.query.code) {
            this.form.data.code = this.$route.query.code
            this.$router.replace({ query: null })
            this.submit()
        }
    },

    i18n: {
        messages: {
            en: {
                verifyMail: 'Verify account'
            },
            de: {
                verifyMail: 'Konto verifizieren',
                verifyCode: 'Verifizierungs-Code',
                enterCode: 'Wir haben dir per Mail einen Code zum verifizieren deines Kontos gesendet. Nutze den Link in der Mail oder füge den Code hier ein, um dein Konto zu bestätigen.'
            }
        }
    }

}
</script>
