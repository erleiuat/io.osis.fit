<template>
    <v-container>
        <v-row>
            <v-col class="title">
                {{ $t('addFood') }}
            </v-col>
        </v-row>
        <v-form v-model="form.valid" ref="form" @submit.prevent="$store.dispatch('form/submit')">
            <v-row dense justify="center" align="center">
                <v-col cols="12" md="8">
                    <v-text-field v-model="form.data.title" :rules="form.rules.title" :label="$t('form.title')" type="text" solo required />
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="form.data.portionSize" :rules="form.rules.number" :label="$t('form.portionSize')" type="number" solo required />
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="form.data.totalCalories" :rules="form.rules.number" :label="$t('form.totalCalories')" type="number" solo required />
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="form.data.totalFat" :rules="form.rules.number" :label="$t('form.totalFat')" type="number" solo required />
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="form.data.totalProtein" :rules="form.rules.number" :label="$t('form.totalProtein')" type="number" solo required />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.date" :rules="form.rules.date" :label="$t('form.date')" type="date" solo required />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.time" :rules="form.rules.time" :label="$t('form.time')" type="time" solo required />
                </v-col>
            </v-row>
            <v-row dense justify="space-between" align="center">
                <v-col cols="auto">
                    <v-btn @click="$router.back()" block outlined :loading="$store.state.form.sending">
                        {{ $t('button.cancel') }}
                        <v-icon right>mdi-cancel</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="auto">
                    <v-btn type="submit" block depressed color="primary" :loading="$store.state.form.sending">
                        <v-icon left>mdi-content-save</v-icon>
                        {{ $t('button.add') }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {

    data () {
        return {
            form: {
                valid: false,
                data: {
                    title: '',
                    totalCalories: '',
                    totalFat: '',
                    totalProtein: '',
                    portionSize: '',
                    date: '',
                    time: ''
                },
                rules: {
                    title: [
                        v => v.length < 120 || this.$t('alert.form.tooLong', { amount: 120 })
                    ],
                    number: [
                        v => !isNaN(v) || this.$t('alert.form.format.number')
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

    methods: {

        submit () {
            if (!this.$refs.form.validate()) return false

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

    created () {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'form/submit') this.submit()
        })
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
            },
            de: {
            }
        }
    }

}
</script>
