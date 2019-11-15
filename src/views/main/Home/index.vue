<template>
    <router-view />
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
