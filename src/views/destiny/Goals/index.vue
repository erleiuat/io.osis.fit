<template>
    <v-container fill-height>
        <v-row justify="center" align="center" dense>
            <v-col cols="12">
                <v-card flat>
                    <Facts />
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="" align-self="stretch">
                <CurrentWeight />
            </v-col>
            <v-col cols="12" sm="6" md="" align-self="stretch">
                <Weight :state="state" />
            </v-col>
            <v-col cols="12" md="" align-self="stretch">
                <Date :state="state" />
            </v-col>
            <v-col cols="12">
                <v-card flat :color="state">
                    <v-card-text class="text-center">
                        {{ state ? $t(state) : $t('null') }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Weight from '@/views/destiny/Goals/Weight'
import Date from '@/views/destiny/Goals/Date'
import Facts from '@/views/destiny/Goals/Facts'
import CurrentWeight from '@/views/destiny/CurrentWeight'

export default {

    components: {
        Weight, Date, Facts, CurrentWeight
    },

    computed: {
        state () {
            let cals = this.$store.getters['destiny/possibleCals'].daily
            if (!cals) return null
            if (cals < 300) return 'error'
            if (cals >= 300 && cals < 500) return 'warning'
            if (cals >= 500 && cals < 800) return 'primary'
            if (cals >= 800) return 'success'
            return null
        },
        doSend () {
            return this.$store.state.form.send
        }
    },

    watch: {
        doSend (val) {
            if (!val) return
            this.$store.commit('form/sending')
            this.$store.dispatch('destiny/saveGoals').then(() => {
                this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.$store.commit('form/sent')
            })
        }
    },

    i18n: {
        messages: {
            en: {
                null: ''
            },
            de: {
                null: 'Lege fest was deine Ziele sind',
                error: 'Dein Ziel ist sehr kritisch. So schnell so viel abzunehmen kann auch ungesund sein.',
                warning: 'Es kann sehr anstrengend sein, dieses Zeil zu erreichen. Vielleicht solltest du dir etwas mehr Zeit nehmen.',
                primary: 'Dieses Ziel sollte mit etwas Aufwand erreichbar sein.',
                success: 'Gutes Ziel! Du solltest es mit wenig Aufwand erreichen können.'
            }
        }
    }

}
</script>
