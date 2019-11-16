<template>
    <v-container fill-height>
        <v-row justify="center" align="center" dense>
            <v-col cols="12" sm="6" md="">
                <CurrentWeight />
            </v-col>
            <v-col cols="12" sm="6" md="">
                <Weight />
            </v-col>
            <v-col cols="12" md="">
                <Date />
            </v-col>
            <v-col cols="12">
                <v-card flat>
                    <Facts />
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
    }

}
</script>
