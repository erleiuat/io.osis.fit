<template>
    <v-container fill-height>

        <v-row dense justify="center" align="center">
            <v-col cols="12" class="display-1 text-center">
                {{ $t('contact') }}
            </v-col>
            <v-col cols="12" class="caption text-center">
                {{ $t('contactText') }}
            </v-col>
        </v-row>

        <v-row dense justify="center" align="center" v-if="!sent">
            <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
                <v-row dense justify="center" align="center">
                    <v-col cols="11" md="10">
                        <v-text-field v-model="form.data.mail" :rules="form.rules.mail" :label="$t('form.mail')" prepend-inner-icon="mdi-email-outline" solo required />
                    </v-col>
                    <v-col cols="11" md="5">
                        <v-text-field v-model="form.data.firstname" :rules="form.rules.required" :label="$t('form.firstname')" solo required />
                    </v-col>
                    <v-col cols="11" md="5">
                        <v-text-field v-model="form.data.lastname" :rules="form.rules.required" :label="$t('form.lastname')" solo required />
                    </v-col>
                    <v-col cols="11" md="10">
                        <v-text-field v-model="form.data.subject" :rules="form.rules.required" :label="$t('fSubject')" solo required />
                    </v-col>
                    <v-col cols="11" md="10">
                        <v-textarea v-model="form.data.message" :rules="form.rules.required" :label="$t('fMessage')" solo>

                        </v-textarea>
                    </v-col>
                    <v-col cols="11" md="6">
                        <v-btn :loading="form.sending" type="submit" block color="primary">
                            {{ $t('button.submit') }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-row>

    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

    data () {
        return {
            sent: false,
            form: {
                valid: false,
                sending: false,
                data: {
                    mail: this.$store.state.auth.account.mail || '',
                    firstname: this.$store.state.auth.account.firstname || '',
                    lastname: this.$store.state.auth.account.lastname || '',
                    subject: '',
                    message: ''
                },
                rules: {
                    mail: [
                        v => !!v || this.$t('alert.form.require', { name: this.$t('form.mail') }),
                        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.$t('alert.form.invalid'),
                        v => v.length < 90 || this.$t('alert.form.tooLong', { amount: 90 })
                    ],
                    required: [
                        v => !!v || this.$t('alert.form.required'),
                        v => v.length < 255 || this.$t('alert.form.tooLong', { amount: 150 })
                    ]
                }
            }
        }
    },

    methods: {

        submit () {
            if (!this.$refs.form.validate()) return false
            this.form.sending = true

            Apios.post('contact', this.form.data).then(() => {
                this.sent = true
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.form.sending = false
            })
        }

    },

    i18n: {
        messages: {
            en: {
                contact: 'Contact',
                contactText: 'Do you have questions or a problem with the app? Or do you have an improvement suggestion/criticism for us?',
                fSubject: 'Subject',
                fMessage: 'Message'
            },
            de: {
                contact: 'Kontakt',
                contactText: 'Hast du Fragen oder ein Problem mit der App? Oder hast du einen Verbesserungsvorschlag/Kritik für uns?',
                fSubject: 'Betreff',
                fMessage: 'Nachricht'
            }
        }
    }

}
</script>
