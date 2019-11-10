<template>
    <v-app-bar hide-on-scroll app flat class="transparent">
        <v-btn v-if="backToPrev" icon @click="goBack()">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-app-bar-nav-icon v-else @click.stop="$store.dispatch('app/drawer')" />
        <v-spacer />
    </v-app-bar>
</template>

<script>
export default {

    computed: {

        backToPrev () {
            if (this.$route.name !== 'support') return true
            return false
        }

    },

    methods: {

        goBack () {
            if (history.length > 1) this.$router.back()
            else this.$router.push({ name: 'home' })
        }

    }

}
</script>
