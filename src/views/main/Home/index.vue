<template>
    <router-view />
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

    mounted () {
        let cur = this.$store.state.app.current
        let url = 'main/' + this.$store.state.auth.account.id + '?year=' + cur.year + '&week=' + cur.week
        Apios.get(url).then(res => {
            this.$store.dispatch('destiny/set', res.data.destiny)
            this.$store.dispatch('logBody/set', res.data.body)
            this.$store.dispatch('logFood/set', res.data.food)
            this.$store.dispatch('logActivity/set', res.data.activity)
        }).catch(err => {
            this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        })
    }

}
</script>
