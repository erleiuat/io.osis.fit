<template>
    <router-view />
</template>

<script>
export default {

    mounted () {
        this.$store.dispatch('destiny/load')
        this.$store.dispatch('logBody/load')
        this.$store.dispatch('logFood/load')
        this.$store.dispatch('logActivity/load')
    }

}
</script>
