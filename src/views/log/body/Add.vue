<template>
    <v-container fill-height>
        <v-form v-model="form.valid" ref="form" @submit.prevent="$store.commit('form/send')">
            <v-row dense justify="center" align="center">
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.weight" :rules="form.rules.number" :label="$t('weight')" :suffix="$t('unit.kilogram.short')" type="text" />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.fat" :rules="form.rules.number" :label="$t('fat')" :suffix="$t('unit.percentage.short')" type="number" />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.date" :rules="form.rules.date" :label="$t('form.date')" type="date" />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.time" :rules="form.rules.time" :label="$t('form.time')" type="time" />
                </v-col>
            </v-row>
            <v-row dense justify="space-between" align="center">
                <v-col cols="auto">
                    <v-btn @click="$router.back()" depressed :loading="$store.state.form.sending">
                        <v-icon left>mdi-cancel</v-icon>
                        {{ $t('button.cancel') }}
                    </v-btn>
                </v-col>
                <v-col cols="auto">
                    <v-btn type="submit" depressed color="primary" :loading="$store.state.form.sending">
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
                    weight: '',
                    fat: '',
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

    computed: {
        doSend () {
            return this.$store.state.form.send
        }
    },

    watch: {
        doSend (val) {
            if (!this.$refs.form.validate() || !val) return false

            this.$store.commit('form/sending')
            this.$store.dispatch('logBody/create', this.form.data).then(() => {
                this.$router.back()
                this.$notify({ type: 'success', title: this.$t('alert.success.added') })
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.$store.commit('form/sent')
            })
        }
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
                weight: 'Weight',
                fat: 'Body-Fat'
            },
            de: {
                weight: 'Gewicht',
                fat: 'Körperfett'
            }
        }
    }

}
</script>
