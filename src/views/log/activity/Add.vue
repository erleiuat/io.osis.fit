<template>
    <v-form v-model="form.valid" ref="form" @submit.prevent="$store.commit('form/send')">
        <v-container>
            <v-row dense justify="center" align="center">
                <v-col cols="12" md="4">
                    <v-text-field v-model="form.data.title" :rules="form.rules.title" :label="$t('form.title')" type="text" filled />
                </v-col>
                <v-col cols="8" md="4">
                    <v-text-field v-model="form.data.burnedCalories" :rules="form.rules.reqNumber" :label="$t('burnedCalories')" :suffix="$t('unit.calories.short')" type="number" filled />
                </v-col>
                <v-col cols="4" md="4">
                    <v-select v-model="form.data.type" :items="typeItems" :label="$t('type')" filled />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.date" :rules="form.rules.date" :label="$t('form.date')" type="date" filled />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="form.data.time" :rules="form.rules.time" :label="$t('form.time')" type="time" filled />
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
        </v-container>
    </v-form>
</template>

<script>
export default {

    data () {
        return {
            form: {
                valid: false,
                data: {
                    title: '',
                    burnedCalories: '',
                    type: '',
                    date: '',
                    time: ''
                },
                rules: {
                    title: [
                        v => v.length < 120 || this.$t('alert.form.tooLong', { amount: 120 })
                    ],
                    reqNumber: [
                        v => !!v || this.$t('alert.form.required'),
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

        typeItems () {
            return [
                { value: 'strength', text: this.$t('main.activityTypes.strength') },
                { value: 'stamina', text: this.$t('main.activityTypes.stamina') },
                { value: 'fitness', text: this.$t('main.activityTypes.fitness') },
                { value: 'flexibility', text: this.$t('main.activityTypes.flexibility') },
                { value: 'coordination', text: this.$t('main.activityTypes.coordination') },
                { value: 'other', text: this.$t('main.activityTypes.other') }
            ]
        },

        doSend () {
            return this.$store.state.form.send
        }

    },

    watch: {
        doSend (val) {
            if (!this.$refs.form.validate() || !val) {
                this.$store.commit('form/sent')
                return false
            }

            this.$store.commit('form/sending')
            this.$store.dispatch('logActivity/create', this.form.data).then(() => {
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
                burnedCalories: 'Burned Calories',
                type: 'Type'
            },
            de: {
                burnedCalories: 'Verbrannte Kalorien',
                type: 'Typ'
            }
        }
    }

}
</script>
