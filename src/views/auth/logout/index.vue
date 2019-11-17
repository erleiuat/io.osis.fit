<template>
    <v-container fill-height>
        <v-row justify="center" align="center">
            <v-col cols="11" md="8">
                {{ $t('youSure') }}
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="11" md="4">
                <v-btn block color="primary" @click="submit()">
                    {{ $t('button.logout') }}
                </v-btn>
            </v-col>
            <v-col cols="11" md="4">
                <v-btn block depressed @click="$router.go(-1)">
                    {{ $t('button.cancel') }}
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

    methods: {

        submit () {
            Apios.delete('session').then(() => {
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.$store.dispatch('auth/logout')
                this.$router.push({ name: 'auth' })
            })
        }

    },

    i18n: {
        messages: {
            en: {
                youSure: 'Do you really want to sign out?'
            },
            de: {
                youSure: 'Möchtest du dich wirklich Abmelden?'
            }
        }
    }

}
</script>
