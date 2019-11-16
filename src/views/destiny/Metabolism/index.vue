<template>
    <v-container fill-height>
        <v-row justify="center" align="center" dense>
            <v-col cols="12" sm="6">
                <CurrentWeight />
            </v-col>
            <v-col cols="12" sm="6">
                <Gender />
            </v-col>
            <v-col cols="12" sm="6">
                <Height />
            </v-col>
            <v-col cols="12" sm="6">
                <Birthdate />
            </v-col>
            <v-col cols="12">
                <PAL />
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
import CurrentWeight from '@/views/destiny/CurrentWeight'
import Gender from '@/views/destiny/Metabolism/Gender'
import Height from '@/views/destiny/Metabolism/Height'
import Birthdate from '@/views/destiny/Metabolism/Birthdate'
import PAL from '@/views/destiny/Metabolism/PAL'
import Facts from '@/views/destiny/Metabolism/Facts'

export default {

    components: {
        CurrentWeight, Gender, Height, Birthdate, PAL, Facts
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
            this.$store.dispatch('destiny/saveMetabolism').then(() => {
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
