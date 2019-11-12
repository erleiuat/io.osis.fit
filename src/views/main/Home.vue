<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="auto" class="headline">
                {{ welcome }} {{ $store.state.auth.account.firstname }}!<br/>
                {{ $store.state.auth.account.level }} <br/> <br/>
                {{ $store.state.app.current.year }} / {{ $store.state.app.current.week }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    computed: {

        welcome () {
            var tm = this.$store.state.app.current.date.getHours()
            if (tm < 11) return this.$t('gMorning')
            else if (tm < 17) return this.$t('gDay')
            return this.$t('gEvening')
        }

    },

    i18n: {
        messages: {
            en: {
                gMorning: 'Good Morning',
                gDay: 'Hello',
                gEvening: 'Good Evening'
            },
            de: {
                gMorning: 'Guten Morgen',
                gDay: 'Guten Tag',
                gEvening: 'Guten Abend'
            }
        }
    }

}
</script>
